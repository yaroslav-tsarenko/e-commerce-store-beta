import "server-only";
import { createHash } from "crypto";
import { prisma } from "./prisma";

// Product content is stored in English (BigBuy import). We machine-translate it
// into the active locale via Google Translate and cache the result in the
// `Translation` table so we only pay for each unique string once.
const SOURCE_LOCALE = "en";
const API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;
const FREE_CONCURRENCY = 8;

function hashKey(text: string): string {
  return createHash("sha256").update(text).digest("hex");
}

function shouldTranslate(locale: string): boolean {
  return Boolean(locale) && locale !== SOURCE_LOCALE;
}

/** Official Google Cloud Translation API v2 — batched, supports HTML format. */
async function translateOfficial(
  texts: string[],
  targetLocale: string,
  format: "text" | "html"
): Promise<string[]> {
  const res = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: texts,
        source: SOURCE_LOCALE,
        target: targetLocale,
        format,
      }),
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error(`Google Translate API ${res.status}`);
  const data = (await res.json()) as {
    data?: { translations?: { translatedText: string }[] };
  };
  const out = data.data?.translations?.map((t) => t.translatedText);
  if (!out || out.length !== texts.length) throw new Error("Unexpected API shape");
  return out;
}

/** Free (unofficial) endpoint — one string per request, no API key needed. */
async function translateFreeOne(text: string, targetLocale: string): Promise<string> {
  const url =
    `https://translate.googleapis.com/translate_a/single?client=gtx` +
    `&sl=${SOURCE_LOCALE}&tl=${encodeURIComponent(targetLocale)}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Google Translate (free) ${res.status}`);
  // Response: [[[translatedChunk, originalChunk, ...], ...], ...]
  const data = (await res.json()) as unknown;
  if (!Array.isArray(data) || !Array.isArray(data[0])) throw new Error("Unexpected free shape");
  return (data[0] as unknown[])
    .map((chunk) => (Array.isArray(chunk) ? String(chunk[0] ?? "") : ""))
    .join("");
}

async function translateFree(texts: string[], targetLocale: string): Promise<string[]> {
  const out: string[] = new Array(texts.length);
  for (let i = 0; i < texts.length; i += FREE_CONCURRENCY) {
    const slice = texts.slice(i, i + FREE_CONCURRENCY);
    const translated = await Promise.all(
      slice.map((t) =>
        translateFreeOne(t, targetLocale).catch(() => t) // fall back to original
      )
    );
    for (let j = 0; j < translated.length; j++) out[i + j] = translated[j];
  }
  return out;
}

async function callProvider(
  texts: string[],
  targetLocale: string,
  format: "text" | "html"
): Promise<string[]> {
  if (API_KEY) {
    try {
      return await translateOfficial(texts, targetLocale, format);
    } catch (e) {
      console.error("Official translate failed, falling back to free endpoint:", e);
    }
  }
  return translateFree(texts, targetLocale);
}

/**
 * Translate many strings into `targetLocale`, using the DB cache and only
 * hitting Google for cache misses. Returns a Map keyed by the ORIGINAL text.
 * Never throws — on failure it returns the original text.
 */
export async function translateBatch(
  input: string[],
  targetLocale: string,
  format: "text" | "html" = "text"
): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  if (!shouldTranslate(targetLocale)) {
    for (const t of input) result.set(t, t);
    return result;
  }

  const unique = [...new Set(input.filter((t) => typeof t === "string" && t.trim().length))];
  if (!unique.length) {
    for (const t of input) result.set(t, t);
    return result;
  }

  const hashes = unique.map(hashKey);

  try {
    const cached = await prisma.translation.findMany({
      where: { locale: targetLocale, sourceHash: { in: hashes } },
      select: { sourceHash: true, text: true },
    });
    const byHash = new Map(cached.map((c) => [c.sourceHash, c.text]));

    const misses: string[] = [];
    unique.forEach((text, i) => {
      const hit = byHash.get(hashes[i]);
      if (hit !== undefined) result.set(text, hit);
      else misses.push(text);
    });

    if (misses.length) {
      const translated = await callProvider(misses, targetLocale, format);
      const rows = misses.map((text, i) => ({
        sourceHash: hashKey(text),
        locale: targetLocale,
        text: translated[i] ?? text,
      }));
      // Persist for next time; ignore races via skipDuplicates.
      await prisma.translation
        .createMany({ data: rows, skipDuplicates: true })
        .catch(() => {});
      misses.forEach((text, i) => result.set(text, translated[i] ?? text));
    }
  } catch (e) {
    console.error("translateBatch failed:", e);
  }

  // Guarantee every input has an entry (fallback: original).
  for (const t of input) if (!result.has(t)) result.set(t, t);
  return result;
}

// ── Product-shaped helpers ───────────────────────────────────────────────

type CardLike = {
  name: string;
  categories?: { category: { name: string; slug: string } }[] | undefined;
};

/**
 * Translate the `name` and category names of a list of product cards in one
 * batched pass. Returns new objects (does not mutate the inputs).
 */
export async function localizeProductCards<T extends CardLike>(
  products: T[],
  locale: string
): Promise<T[]> {
  if (!shouldTranslate(locale) || !products.length) return products;

  const strings: string[] = [];
  for (const p of products) {
    if (p.name) strings.push(p.name);
    for (const c of p.categories ?? []) if (c.category?.name) strings.push(c.category.name);
  }
  const map = await translateBatch(strings, locale);

  return products.map((p) => ({
    ...p,
    name: map.get(p.name) ?? p.name,
    categories: p.categories?.map((c) => ({
      ...c,
      category: { ...c.category, name: map.get(c.category.name) ?? c.category.name },
    })),
  }));
}

type ProductDetailFields = {
  name: string;
  shortDescription?: string | null;
  description?: string | null;
};

/**
 * Translate a single product's name (text), shortDescription (text) and
 * description (HTML). Returns the translated field values.
 */
export async function localizeProductDetail<T extends ProductDetailFields>(
  product: T,
  locale: string
): Promise<T> {
  if (!shouldTranslate(locale)) return product;

  const [textMap, htmlMap] = await Promise.all([
    translateBatch(
      [product.name, product.shortDescription ?? ""].filter(Boolean),
      locale,
      "text"
    ),
    product.description
      ? translateBatch([product.description], locale, "html")
      : Promise.resolve(new Map<string, string>()),
  ]);

  return {
    ...product,
    name: textMap.get(product.name) ?? product.name,
    shortDescription: product.shortDescription
      ? textMap.get(product.shortDescription) ?? product.shortDescription
      : product.shortDescription,
    description: product.description
      ? htmlMap.get(product.description) ?? product.description
      : product.description,
  };
}
