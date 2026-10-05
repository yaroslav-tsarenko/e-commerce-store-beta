import { prisma } from "@/lib/prisma";
import { pick } from "@/lib/bigbuy/client";
import { bigBuyIdFromMetadata } from "@/lib/bigbuy/product";
import { createBigBuyClient, bigBuyEnvironment } from "@/lib/bigbuy/orders";

const PAGE_SIZE = 10_000;
const MAX_PAGES = 40;
const MIN_COVERAGE_TO_ZERO = 0.5;

const toNumber = (value: unknown): number | undefined => {
  if (value === undefined || value === null || value === "") return undefined;
  const parsed = typeof value === "number" ? value : parseFloat(String(value).replace(",", "."));
  return Number.isFinite(parsed) ? parsed : undefined;
};

function stockOf(row: Record<string, unknown>): number | undefined {
  const direct = toNumber(pick(row, ["quantity", "stock", "available"]));
  if (direct != null) return direct;
  const stocks = pick<unknown[]>(row, ["stocks"]);
  if (!Array.isArray(stocks)) return undefined;
  return stocks.reduce<number>(
    (sum, entry) => sum + (toNumber(pick(entry as Record<string, unknown>, ["quantity", "stock"])) ?? 0),
    0
  );
}

export interface StockSyncResult {
  tracked: number;
  matched: number;
  updated: number;
  zeroed: number;
  note?: string;
}

export async function syncBigBuyStock(): Promise<StockSyncResult> {
  const client = createBigBuyClient();
  if (!client) throw new Error(`BigBuy API token for ${bigBuyEnvironment()} is not configured.`);

  const products = await prisma.product.findMany({
    where: { metadata: { path: ["source"], equals: "bigbuy" } },
    select: { id: true, quantity: true, metadata: true },
  });

  const byBigBuyId = new Map<number, { id: string; quantity: number }>();
  for (const product of products) {
    const bigbuyId = bigBuyIdFromMetadata(product.metadata);
    if (bigbuyId != null) byBigBuyId.set(bigbuyId, { id: product.id, quantity: product.quantity });
  }

  const taxonomy = toNumber(process.env.BIGBUY_STOCK_TAXONOMY);
  const remote = new Map<number, number>();
  for (let page = 0; page < MAX_PAGES; page++) {
    const rows = await client.getProductsStock({ parentTaxonomy: taxonomy, page, pageSize: PAGE_SIZE });
    if (!Array.isArray(rows)) break;
    for (const row of rows) {
      const id = toNumber(pick(row, ["id", "product", "productId"]));
      const quantity = stockOf(row);
      if (id != null && quantity != null) remote.set(id, Math.max(0, Math.floor(quantity)));
    }
    if (rows.length < PAGE_SIZE) break;
  }

  const matched = [...byBigBuyId.keys()].filter((id) => remote.has(id)).length;
  const coverage = byBigBuyId.size ? matched / byBigBuyId.size : 0;
  const canZero = coverage >= MIN_COVERAGE_TO_ZERO;

  const ids: string[] = [];
  const quantities: number[] = [];
  let zeroed = 0;
  for (const [bigbuyId, product] of byBigBuyId) {
    const quantity = remote.get(bigbuyId) ?? (canZero ? 0 : undefined);
    if (quantity === undefined || quantity === product.quantity) continue;
    if (!remote.has(bigbuyId)) zeroed++;
    ids.push(product.id);
    quantities.push(quantity);
  }

  const BATCH = 1000;
  for (let i = 0; i < ids.length; i += BATCH) {
    await prisma.$executeRaw`
      UPDATE "Product" AS p
      SET "quantity" = v.q, "updatedAt" = NOW()
      FROM unnest(${ids.slice(i, i + BATCH)}::text[], ${quantities.slice(i, i + BATCH)}::int[]) AS v(id, q)
      WHERE p."id" = v.id
    `;
  }

  return {
    tracked: byBigBuyId.size,
    matched,
    updated: ids.length,
    zeroed,
    note: canZero
      ? undefined
      : `Only ${matched} of ${byBigBuyId.size} products were found in the BigBuy stock feed, so missing products were left unchanged.`,
  };
}
