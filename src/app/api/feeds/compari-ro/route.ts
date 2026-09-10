import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { translateBatch } from "@/lib/translate";

// Compari.ro product feed. Valid CSV (RFC 4180): first line is the header row,
// one product per line, comma-separated, fields quoted and quotes doubled.
// Columns, in order:
//   Identifier | Manufacturer | Name | Category | ProductUrl | ProductNumber |
//   Price | Currency | DeliveryCost | Description | ImageURL
// Currency is always RON. DeliveryCost is a bare number (e.g. 31.46) for paid
// shipping or the literal "Free" — never "31.46 RON", "0", or "0 RON".
// Regenerated on every request; machine translations are cached in the DB.

export const dynamic = "force-dynamic";
export const maxDuration = 300;

const FEED_LOCALE = "ro";

const COLUMNS = [
  "Identifier",
  "Manufacturer",
  "Name",
  "Category",
  "ProductUrl",
  "ProductNumber",
  "Price",
  "Currency",
  "DeliveryCost",
  "Description",
  "ImageURL",
];
const DEFAULT_TAX_RATE = 21;
const DEFAULT_FREE_SHIPPING_MIN = 100; // EUR (net), matches checkout
const FLAT_SHIPPING_EUR = 5.99;
const DEFAULT_RON_RATE = 4.97;

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

// Normalise a value into a clean cell: strip HTML, decode a few common
// entities, and squash whitespace/newlines. CSV quoting is handled separately.
function clean(value: string | null | undefined): string {
  if (!value) return "";
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// RFC 4180 CSV field: always quote, and double any embedded quotes.
function csvField(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const forceDownload =
      searchParams.has("download") || searchParams.has("csv") || searchParams.get("format") === "csv";
    const wantsHtml =
      !forceDownload && (request.headers.get("accept") || "").includes("text/html");

    const [products, settings, ronRate, allCategories] = await Promise.all([
      prisma.product.findMany({
        where: {
          status: "ACTIVE",
          images: { some: {} }, // only export products with an image
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
    // ordered as a general → specific path.
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

    const rows = products.map((product) => {
      const identifier = product.id;
      const category = [...product.categories]
        .sort((a, b) => depthOf(a.category.id) - depthOf(b.category.id))
        .map((c) => clean(textMap.get(c.category.name) ?? c.category.name))
        .filter(Boolean)
        .join(" > ");
      const manufacturer = clean(product.brand);
      const name = clean(textMap.get(product.name) ?? product.name);
      const productNumber = clean(product.mpn || product.sku);
      const price = (Number(product.price) * vatMultiplier * ronRate).toFixed(2);
      const currency = "RON";
      const netPrice = Number(product.price);
      // A bare number for paid shipping or the literal "Free".
      const deliveryCost = netPrice >= freeShippingMin ? "Free" : flatShippingRon;
      const productUrl = `${siteUrl}/product/${product.slug}`;
      const imageUrl = clean(product.images[0]?.url);

      const descTranslated = product.description
        ? htmlMap.get(product.description) ?? product.description
        : "";
      const specs = specsToText(product.characteristics);
      const description = clean(
        [descTranslated, specs, productNumber ? `Cod producător: ${productNumber}` : ""]
          .filter(Boolean)
          .join(" ")
      );

      return [
        identifier,
        manufacturer,
        name,
        category,
        productUrl,
        productNumber,
        price,
        currency,
        deliveryCost,
        description,
        imageUrl,
      ];
    });

    if (wantsHtml) {
      return new NextResponse(renderHtml(rows), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    const header = COLUMNS.map(csvField).join(",");
    const body =
      "﻿" +
      [header, ...rows.map((r) => r.map(csvField).join(","))].join("\r\n") +
      "\r\n";

    return new NextResponse(body, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": forceDownload
          ? 'attachment; filename="compari-ro-feed.csv"'
          : 'inline; filename="compari-ro-feed.csv"',
      },
    });
  } catch (error) {
    console.error("Error generating Compari.ro feed:", error);
    return NextResponse.json({ error: "Failed to generate feed" }, { status: 500 });
  }
}

function htmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderHtml(rows: string[][]): string {
  const head = COLUMNS.map((c) => `<th>${htmlEscape(c)}</th>`).join("");
  const linkCols = new Set([4, 10]); // ProductUrl, ImageURL

  const body = rows
    .map((cells) => {
      const tds = COLUMNS.map((_, i) => {
        const value = cells[i] ?? "";
        const safe = htmlEscape(value);
        const cls = i === 9 ? "desc" : i === 3 ? "cats" : "";
        if (linkCols.has(i) && value) {
          return `<td class="${cls}" title="${safe}"><a href="${safe}" target="_blank" rel="noreferrer">${safe}</a></td>`;
        }
        return `<td class="${cls}" title="${safe}">${safe}</td>`;
      }).join("");
      return `<tr>${tds}</tr>`;
    })
    .join("");

  return `<!doctype html>
<html lang="ro">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>Feed Compari.ro — ${rows.length} produse</title>
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; background: #0e0f13; color: #e7e9ee; }
  header { position: sticky; top: 0; z-index: 3; display: flex; gap: 1rem; align-items: center; justify-content: space-between; flex-wrap: wrap; padding: 1rem 1.25rem; background: #14161c; border-bottom: 1px solid #262a35; }
  header h1 { font-size: 1.05rem; margin: 0; font-weight: 700; }
  header .meta { color: #9aa1af; font-size: .85rem; }
  .actions { display: flex; gap: .5rem; align-items: center; flex-wrap: wrap; }
  input[type=search] { background: #0e0f13; border: 1px solid #2c313d; color: #e7e9ee; border-radius: 8px; padding: .5rem .7rem; font-size: .85rem; min-width: 220px; }
  a.btn { text-decoration: none; background: #3b82f6; color: #fff; padding: .5rem .8rem; border-radius: 8px; font-size: .85rem; font-weight: 600; }
  a.btn.secondary { background: #262a35; color: #e7e9ee; }
  .wrap { overflow: auto; max-height: calc(100vh - 64px); }
  table { border-collapse: collapse; width: 100%; font-size: .8rem; }
  thead th { position: sticky; top: 0; background: #1b1e26; text-align: left; padding: .55rem .6rem; white-space: nowrap; border-bottom: 1px solid #2c313d; color: #c7ccd6; }
  tbody td { padding: .5rem .6rem; border-bottom: 1px solid #1d2027; max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  tbody td.desc { max-width: 420px; }
  tbody td.cats { max-width: 320px; color: #b7c0d0; }
  tbody tr:nth-child(even) { background: #12141a; }
  tbody tr:hover { background: #1a1d25; }
  td a { color: #7ab0ff; }
</style>
</head>
<body>
<header>
  <div>
    <h1>Feed Compari.ro</h1>
    <div class="meta">${rows.length} produse</div>
  </div>
  <div class="actions">
    <input id="q" type="search" placeholder="Caută în tabel…" />
    <a class="btn" href="?download=1">Export .csv</a>
    <a class="btn secondary" href="?" onclick="location.reload();return false;">Reîncarcă</a>
  </div>
</header>
<div class="wrap">
  <table id="t">
    <thead><tr>${head}</tr></thead>
    <tbody>${body}</tbody>
  </table>
</div>
<script>
  const q = document.getElementById('q');
  const rows = Array.from(document.querySelectorAll('#t tbody tr'));
  q.addEventListener('input', () => {
    const term = q.value.toLowerCase();
    for (const r of rows) r.style.display = r.textContent.toLowerCase().includes(term) ? '' : 'none';
  });
</script>
</body>
</html>`;
}
