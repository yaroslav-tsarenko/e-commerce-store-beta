import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { translateBatch } from "@/lib/translate";

// price.ro product feed. Pipe-delimited ("|"), one product per line, no header
// row. Columns, in order:
//   unique code | categories | producer | model | manufacturer code (SKU) |
//   price (RON, VAT incl.) | stock | shipping | warranty | link | image |
//   description (+ technical specs, incl. manufacturer code)
// The file is fetched by price.ro once a day, so we regenerate on every request
// (machine translations are cached in the Translation table, so this stays fast).

export const dynamic = "force-dynamic";
export const maxDuration = 300;

const FEED_LOCALE = "ro";
const DEFAULT_TAX_RATE = 21;
const DEFAULT_FREE_SHIPPING_MIN = 100; // EUR (net), matches checkout
const FLAT_SHIPPING_EUR = 5.99;
const DEFAULT_RON_RATE = 4.97;
const DEFAULT_WARRANTY = "24 luni";

async function getRonRate(): Promise<number> {
  try {
    const res = await fetch(
      "https://api.frankfurter.dev/v1/latest?base=EUR&symbols=RON",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`frankfurter ${res.status}`);
    const data = await res.json();
    return Number(data?.rates?.RON) || DEFAULT_RON_RATE;
  } catch {
    return DEFAULT_RON_RATE;
  }
}

// Collapse a value into a single feed-safe cell: strip HTML, drop the pipe and
// newline delimiters, decode a few common entities, and squash whitespace.
function cell(value: string | null | undefined): string {
  if (!value) return "";
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/[|\r\n\t]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function specsToText(characteristics: unknown): string {
  if (!characteristics) return "";
  const parts: string[] = [];
  if (Array.isArray(characteristics)) {
    for (const c of characteristics) {
      if (c && typeof c === "object") {
        const name = (c as Record<string, unknown>).name ?? (c as Record<string, unknown>).key;
        const val = (c as Record<string, unknown>).value ?? (c as Record<string, unknown>).val;
        if (name && val) parts.push(`${name}: ${val}`);
      }
    }
  } else if (typeof characteristics === "object") {
    for (const [k, v] of Object.entries(characteristics as Record<string, unknown>)) {
      if (v != null && typeof v !== "object") parts.push(`${k}: ${v}`);
    }
  }
  return parts.join("; ");
}

export async function GET() {
  try {
    const [products, settings, ronRate, allCategories] = await Promise.all([
      prisma.product.findMany({
        where: {
          status: "ACTIVE",
          images: { some: {} }, // price.ro only accepts products with an image
        },
        include: {
          images: { orderBy: { sortOrder: "asc" }, take: 1 },
          categories: {
            include: { category: { select: { id: true, name: true, parentId: true } } },
          },
        },
      }),
      prisma.storeSettings.findUnique({ where: { id: "default" } }),
      getRonRate(),
      prisma.category.findMany({ select: { id: true, parentId: true } }),
    ]);

    // Depth of each category (root = 0), so a product's categories can be
    // ordered as a general → specific path for price.ro.
    const parentOf = new Map(allCategories.map((c) => [c.id, c.parentId]));
    const depthCache = new Map<string, number>();
    const depthOf = (id: string): number => {
      const cached = depthCache.get(id);
      if (cached !== undefined) return cached;
      let depth = 0;
      let current = parentOf.get(id) ?? null;
      const seen = new Set<string>([id]);
      while (current && !seen.has(current)) {
        depth++;
        seen.add(current);
        current = parentOf.get(current) ?? null;
      }
      depthCache.set(id, depth);
      return depth;
    };

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://misaelectro.ro";
    const taxRate = settings?.taxRate != null ? Number(settings.taxRate) : DEFAULT_TAX_RATE;
    const freeShippingMin =
      settings?.freeShippingMin != null
        ? Number(settings.freeShippingMin)
        : DEFAULT_FREE_SHIPPING_MIN;
    const vatMultiplier = 1 + taxRate / 100;
    const flatShippingRon = (FLAT_SHIPPING_EUR * ronRate).toFixed(2);

    // Batch-translate everything into Romanian (cached in the DB after first run).
    const textStrings: string[] = [];
    const htmlStrings: string[] = [];
    for (const p of products) {
      if (p.name) textStrings.push(p.name);
      for (const c of p.categories) if (c.category?.name) textStrings.push(c.category.name);
      if (p.description) htmlStrings.push(p.description);
    }
    const [textMap, htmlMap] = await Promise.all([
      translateBatch(textStrings, FEED_LOCALE, "text"),
      translateBatch(htmlStrings, FEED_LOCALE, "html"),
    ]);

    const lines = products.map((product) => {
      const uniqueCode = product.id;
      const categories = [...product.categories]
        .sort((a, b) => depthOf(a.category.id) - depthOf(b.category.id))
        .map((c) => cell(textMap.get(c.category.name) ?? c.category.name))
        .filter(Boolean)
        .join(" > ");
      const producer = cell(product.brand);
      const model = cell(textMap.get(product.name) ?? product.name);
      const manufacturerCode = cell(product.mpn || product.sku);
      const priceRon = (Number(product.price) * vatMultiplier * ronRate).toFixed(2);
      const stock =
        !product.trackInventory || product.quantity > 0 ? "În stoc" : "Indisponibil";
      const netPrice = Number(product.price);
      const shipping =
        netPrice >= freeShippingMin ? "Transport gratuit" : `${flatShippingRon} RON`;
      const warranty = DEFAULT_WARRANTY;
      const link = `${siteUrl}/product/${product.slug}`;
      const image = cell(product.images[0]?.url);

      const descTranslated = product.description
        ? htmlMap.get(product.description) ?? product.description
        : "";
      const specs = specsToText(product.characteristics);
      const description = cell(
        [descTranslated, specs, `Cod producător: ${manufacturerCode}`]
          .filter(Boolean)
          .join(" ")
      );

      return [
        uniqueCode,
        categories,
        producer,
        model,
        manufacturerCode,
        priceRon,
        stock,
        shipping,
        warranty,
        link,
        image,
        description,
      ].join("|");
    });

    const body = lines.join("\n");

    return new NextResponse(body, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": 'inline; filename="price-ro-feed.txt"',
      },
    });
  } catch (error) {
    console.error("Error generating price.ro feed:", error);
    return NextResponse.json({ error: "Failed to generate feed" }, { status: 500 });
  }
}
