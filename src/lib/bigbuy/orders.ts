import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { sendOrderShippedEmail, sendSupplierAlertEmail } from "@/lib/email";
import {
  BigBuyClient,
  BigBuyHttpError,
  pick,
  type BigBuyOrderProduct,
  type BigBuyOrderRequest,
} from "@/lib/bigbuy/client";
import { isBigBuyMetadata } from "@/lib/bigbuy/product";

const LOCK_TTL_MS = 5 * 60_000;
const PENDING_GRACE_MS = 10 * 60_000;
const FINAL_ORDER_STATUSES = new Set(["DELIVERED", "CANCELLED", "REFUNDED"]);

const orderWithProducts = {
  items: {
    include: {
      product: { select: { sku: true, metadata: true } },
    },
  },
} satisfies Prisma.OrderInclude;

type OrderWithProducts = Prisma.OrderGetPayload<{ include: typeof orderWithProducts }>;

interface StoredShippingAddress {
  firstName?: string;
  lastName?: string;
  address1?: string;
  address2?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  country?: string;
}

interface ShippingOption {
  carrier: string;
  service: string;
  cost: number;
}

export type BigBuySubmitResult =
  | { ok: true; orderIds: string[] }
  | { ok: false; reason: string };

export function bigBuyEnvironment(): "production" | "sandbox" {
  return process.env.BIGBUY_ENV === "sandbox" ? "sandbox" : "production";
}

export function isBigBuyAutoOrderEnabled(): boolean {
  return process.env.BIGBUY_AUTO_ORDERS === "true";
}

export function createBigBuyClient(): BigBuyClient | null {
  const env = bigBuyEnvironment();
  const token = env === "sandbox" ? process.env.BIGBUY_API_SANDBOX : process.env.BIGBUY_API_PRODUCTION;
  if (!token) return null;
  return new BigBuyClient({
    token,
    env,
    maxRetries: 3,
    maxWaitMs: 15_000,
    log: (msg) => console.log(`[BigBuy]${msg}`),
  });
}

export function bigBuyItemsOf<T extends { product: { metadata: Prisma.JsonValue } | null }>(items: T[]): T[] {
  return items.filter((item) => isBigBuyMetadata(item.product?.metadata));
}

export function bigBuyReference(order: { orderNumber: string }): string {
  return order.orderNumber;
}

function aggregateProducts(order: OrderWithProducts): BigBuyOrderProduct[] {
  const quantities = new Map<string, number>();
  for (const item of bigBuyItemsOf(order.items)) {
    const reference = item.product?.sku || item.productSku;
    quantities.set(reference, (quantities.get(reference) ?? 0) + item.quantity);
  }
  return [...quantities].map(([reference, quantity]) => ({ reference, quantity }));
}

function asRecords(value: unknown): Record<string, unknown>[] {
  if (Array.isArray(value)) {
    return value.filter((entry): entry is Record<string, unknown> => typeof entry === "object" && entry !== null);
  }
  return [];
}

function parseShippingOptions(response: unknown): ShippingOption[] {
  const root = Array.isArray(response)
    ? response
    : pick<unknown>(response as Record<string, unknown>, ["shippingOptions", "options"]);
  return asRecords(root)
    .map((option) => {
      const service = (pick<Record<string, unknown>>(option, ["shippingService", "carrier"]) ?? {}) as Record<string, unknown>;
      const carrier = String(pick(service, ["name"]) ?? pick(option, ["name"]) ?? "").trim().toLowerCase();
      const serviceName = String(pick(service, ["serviceName", "delay"]) ?? "").trim();
      const cost = Number(pick(option, ["cost", "price"]));
      return { carrier, service: serviceName, cost: Number.isFinite(cost) ? cost : Infinity };
    })
    .filter((option) => option.carrier)
    .sort((a, b) => a.cost - b.cost);
}

function configuredCarriers(): string[] {
  return (process.env.BIGBUY_CARRIERS ?? "")
    .split(",")
    .map((name) => name.trim().toLowerCase())
    .filter(Boolean);
}

async function resolveCarriers(
  client: BigBuyClient,
  address: { country: string; postcode: string },
  products: BigBuyOrderProduct[]
): Promise<{ carriers: string[]; cheapest: ShippingOption | null }> {
  const configured = configuredCarriers();
  let options: ShippingOption[] = [];
  try {
    options = parseShippingOptions(
      await client.getShippingOptions({ isoCountry: address.country, postcode: address.postcode, products })
    );
  } catch (error) {
    if (!configured.length) throw error;
  }

  const carriers = configured.length ? configured : [...new Set(options.map((option) => option.carrier))];
  if (!carriers.length) {
    throw new Error(`BigBuy has no carrier that delivers to ${address.country} ${address.postcode}.`);
  }
  const cheapest = options.find((option) => carriers.includes(option.carrier)) ?? null;
  return { carriers, cheapest };
}

function describeErrorEntry(entry: Record<string, unknown>): string {
  const message = String(pick(entry, ["message", "error", "detail"]) ?? "Unknown error");
  const references = pick<unknown[]>(entry, ["productReferences", "references"]);
  const suffix = Array.isArray(references) && references.length ? ` (${references.join(", ")})` : "";
  return `${message}${suffix}`;
}

function extractErrors(response: unknown): string[] {
  if (typeof response !== "object" || response === null) return [];
  const record = response as Record<string, unknown>;
  const errors = asRecords(record.errors).map(describeErrorEntry);
  if (!errors.length && Array.isArray(record.errors)) {
    errors.push(...record.errors.filter((entry): entry is string => typeof entry === "string"));
  }
  return errors;
}

function extractOrderIds(response: unknown): string[] {
  if (typeof response !== "object" || response === null) return [];
  const record = response as Record<string, unknown>;
  const orders = asRecords(record.orders);
  const ids = orders.map((order) => pick(order, ["id", "orderId"])).filter((id) => id != null);
  if (!ids.length && record.id != null) ids.push(record.id);
  return ids.map(String);
}

export function describeBigBuyError(error: unknown): string {
  if (error instanceof BigBuyHttpError) {
    const body = error.json();
    const details = extractErrors(body);
    const message = typeof body === "object" && body !== null ? pick<string>(body as Record<string, unknown>, ["message"]) : undefined;
    if (message && !details.includes(message)) details.unshift(String(message));
    if (details.length) return `BigBuy HTTP ${error.status}: ${details.join("; ")}`;
    return `BigBuy HTTP ${error.status}: ${error.body.slice(0, 500) || "empty response"}`;
  }
  return error instanceof Error ? error.message : String(error);
}

function buildOrderRequest(
  order: OrderWithProducts,
  carriers: string[],
  products: BigBuyOrderProduct[]
): BigBuyOrderRequest {
  const address = (order.shippingAddress ?? {}) as StoredShippingAddress;
  const phone = order.customerPhone?.trim();
  if (!phone) throw new Error("Customer phone is missing. BigBuy requires a phone number for delivery.");

  const missing = (["firstName", "lastName", "address1", "city", "postalCode", "country"] as const)
    .filter((field) => !address[field]?.trim());
  if (missing.length) throw new Error(`Shipping address is incomplete: ${missing.join(", ")}.`);

  return {
    internalReference: bigBuyReference(order),
    language: process.env.BIGBUY_LANGUAGE || "en",
    paymentMethod: process.env.BIGBUY_PAYMENT_METHOD || "moneybox",
    carriers: carriers.map((name) => ({ name })),
    shippingAddress: {
      firstName: address.firstName!.trim(),
      lastName: address.lastName!.trim(),
      country: address.country!.trim().toUpperCase(),
      postcode: address.postalCode!.trim(),
      town: [address.city, address.province].map((part) => part?.trim()).filter(Boolean).join(", "),
      address: [address.address1, address.address2].map((part) => part?.trim()).filter(Boolean).join(", "),
      phone,
      email: order.customerEmail,
      comment: "",
    },
    products,
  };
}

async function createOrRecover(client: BigBuyClient, request: BigBuyOrderRequest): Promise<{ ids: string[]; warnings: string[] }> {
  try {
    const created = await client.createOrder(request);
    return { ids: extractOrderIds(created), warnings: extractErrors(created) };
  } catch (error) {
    if (!(error instanceof BigBuyHttpError) || error.status !== 409) throw error;
    const existing = await client.getOrderByReference(request.internalReference).catch(() => null);
    const ids = extractOrderIds(existing ? { orders: Array.isArray(existing) ? existing : [existing] } : null);
    if (!ids.length) throw error;
    return { ids, warnings: [] };
  }
}

async function claimOrder(orderId: string): Promise<boolean> {
  const claimed = await prisma.order.updateMany({
    where: {
      id: orderId,
      bigbuyOrderIds: { isEmpty: true },
      OR: [{ bigbuyLockedAt: null }, { bigbuyLockedAt: { lt: new Date(Date.now() - LOCK_TTL_MS) } }],
    },
    data: { bigbuyLockedAt: new Date() },
  });
  return claimed.count === 1;
}

export async function submitOrderToBigBuy(
  orderId: string,
  options: { phone?: string } = {}
): Promise<BigBuySubmitResult> {
  const order = await prisma.order.findUnique({ where: { id: orderId }, include: orderWithProducts });
  if (!order) return { ok: false, reason: "Order not found." };
  if (order.paymentStatus !== "PAID") return { ok: false, reason: "Order is not paid yet." };
  if (order.bigbuyOrderIds.length) return { ok: true, orderIds: order.bigbuyOrderIds };

  const products = aggregateProducts(order);
  if (!products.length) {
    await prisma.order.update({ where: { id: order.id }, data: { bigbuyStatus: null } });
    return { ok: false, reason: "Order has no BigBuy products." };
  }

  const phone = options.phone?.trim();
  if (phone) {
    await prisma.order.update({ where: { id: order.id }, data: { customerPhone: phone } });
    order.customerPhone = phone;
  }

  if (!(await claimOrder(order.id))) {
    return { ok: false, reason: "Order is already being sent to BigBuy." };
  }

  const client = createBigBuyClient();

  try {
    if (!client) throw new Error(`BigBuy API token for ${bigBuyEnvironment()} is not configured.`);

    const address = (order.shippingAddress ?? {}) as StoredShippingAddress;
    const { carriers, cheapest } = await resolveCarriers(
      client,
      { country: (address.country ?? "").toUpperCase(), postcode: address.postalCode ?? "" },
      products
    );
    const request = buildOrderRequest(order, carriers, products);

    const checkErrors = extractErrors(await client.checkOrder(request));
    if (checkErrors.length) throw new Error(`BigBuy rejected the order: ${checkErrors.join("; ")}`);

    const { ids, warnings } = await createOrRecover(client, request);
    if (!ids.length) {
      throw new Error(warnings.length ? `BigBuy rejected the order: ${warnings.join("; ")}` : "BigBuy did not return an order id.");
    }

    await prisma.order.update({
      where: { id: order.id },
      data: {
        bigbuyStatus: "SENT",
        bigbuyOrderIds: ids,
        bigbuyCarrier: cheapest?.carrier ?? carriers[0],
        bigbuyShippingCost: cheapest && Number.isFinite(cheapest.cost) ? cheapest.cost : null,
        bigbuyError: warnings.length ? `Partially created: ${warnings.join("; ")}` : null,
        bigbuyAttempts: { increment: 1 },
        bigbuyLockedAt: null,
        bigbuySentAt: new Date(),
        status: order.status === "PENDING" || order.status === "CONFIRMED" ? "PROCESSING" : undefined,
      },
    });

    if (warnings.length) {
      await sendSupplierAlertEmail({
        orderId: order.id,
        orderNumber: order.orderNumber,
        title: "BigBuy created the order only partially",
        message: warnings.join("\n"),
      });
    }

    return { ok: true, orderIds: ids };
  } catch (error) {
    const reason = describeBigBuyError(error);
    console.error(`[BigBuy] order ${order.orderNumber} failed:`, reason);
    await prisma.order.update({
      where: { id: order.id },
      data: {
        bigbuyStatus: "FAILED",
        bigbuyError: reason.slice(0, 2000),
        bigbuyAttempts: { increment: 1 },
        bigbuyLockedAt: null,
      },
    });
    await sendSupplierAlertEmail({
      orderId: order.id,
      orderNumber: order.orderNumber,
      title: "Order was not sent to BigBuy",
      message: reason,
    });
    return { ok: false, reason };
  }
}

function collectTrackings(value: unknown, found: { number: string; carrier: string | null }[] = []) {
  if (Array.isArray(value)) {
    value.forEach((entry) => collectTrackings(entry, found));
    return found;
  }
  if (typeof value !== "object" || value === null) return found;
  const record = value as Record<string, unknown>;
  const number = pick<string | number>(record, ["trackingNumber", "tracking_number", "trackingCode"]);
  if (number != null && String(number).trim()) {
    const carrierValue = pick<unknown>(record, ["carrier", "carrierName", "shippingService"]);
    const carrier = typeof carrierValue === "string"
      ? carrierValue
      : typeof carrierValue === "object" && carrierValue !== null
        ? String(pick((carrierValue as Record<string, unknown>), ["name"]) ?? "") || null
        : null;
    found.push({ number: String(number).trim(), carrier });
  }
  Object.values(record).forEach((child) => {
    if (typeof child === "object" && child !== null) collectTrackings(child, found);
  });
  return found;
}

function remoteStatusOf(info: Record<string, unknown>): string | null {
  const status = pick<unknown>(info, ["status", "statusName", "state"]);
  if (typeof status === "string") return status;
  if (typeof status === "object" && status !== null) {
    const name = pick(status as Record<string, unknown>, ["name", "description"]);
    return name != null ? String(name) : null;
  }
  return status != null ? String(status) : null;
}

export async function syncBigBuyOrder(orderId: string): Promise<{ shipped: boolean; remoteStatus: string | null }> {
  const order = await prisma.order.findUnique({ where: { id: orderId }, include: { items: true } });
  if (!order || !order.bigbuyOrderIds.length) return { shipped: false, remoteStatus: null };

  const client = createBigBuyClient();
  if (!client) throw new Error(`BigBuy API token for ${bigBuyEnvironment()} is not configured.`);

  const statuses: string[] = [];
  const trackings: { number: string; carrier: string | null }[] = [];
  for (const bigbuyId of order.bigbuyOrderIds) {
    const info = await client.getOrder(bigbuyId);
    const status = remoteStatusOf(info);
    if (status) statuses.push(status);
    collectTrackings(info, trackings);
    try {
      collectTrackings(await client.getOrderTracking(bigbuyId), trackings);
    } catch (error) {
      if (!(error instanceof BigBuyHttpError) || error.status !== 404) throw error;
    }
  }

  const remoteStatus = statuses.length ? [...new Set(statuses)].join(", ") : null;
  const trackingNumbers = [...new Set(trackings.map((tracking) => tracking.number))];
  const carrier = trackings.find((tracking) => tracking.carrier)?.carrier ?? null;
  const cancelled = statuses.length > 0 && statuses.every((status) => /cancel|anulad/i.test(status));

  if (cancelled && order.bigbuyStatus !== "CANCELLED") {
    await prisma.order.update({
      where: { id: order.id },
      data: {
        bigbuyStatus: "CANCELLED",
        bigbuyRemoteStatus: remoteStatus,
        bigbuyError: "BigBuy cancelled this order. Refund the customer or place the order again.",
        bigbuySyncedAt: new Date(),
      },
    });
    await sendSupplierAlertEmail({
      orderId: order.id,
      orderNumber: order.orderNumber,
      title: "BigBuy cancelled the order",
      message: `BigBuy status: ${remoteStatus}`,
    });
    return { shipped: false, remoteStatus };
  }

  const shippedNow = trackingNumbers.length > 0 && order.bigbuyStatus !== "SHIPPED";
  const trackingNumber = trackingNumbers.length ? trackingNumbers.join(", ") : order.trackingNumber;
  const nextStatus = shippedNow && !FINAL_ORDER_STATUSES.has(order.status) ? "SHIPPED" : undefined;

  await prisma.order.update({
    where: { id: order.id },
    data: {
      bigbuyRemoteStatus: remoteStatus,
      bigbuySyncedAt: new Date(),
      bigbuyStatus: shippedNow ? "SHIPPED" : undefined,
      bigbuyCarrier: carrier ?? undefined,
      trackingNumber,
      status: nextStatus,
    },
  });

  if (nextStatus === "SHIPPED") {
    await sendOrderShippedEmail({
      orderId: order.id,
      orderNumber: order.orderNumber,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      items: order.items,
      subtotal: order.subtotal,
      taxAmount: order.taxAmount,
      shippingCost: order.shippingCost,
      discountAmount: order.discountAmount,
      total: order.total,
      shippingMethod: order.shippingMethod || "standard",
      shippingAddress: (order.shippingAddress ?? undefined) as Record<string, string> | undefined,
      trackingNumber,
      createdAt: order.createdAt,
    });
  }

  return { shipped: shippedNow, remoteStatus };
}

export async function runBigBuyOrderSync(): Promise<{
  submitted: number;
  failed: number;
  synced: number;
  shipped: number;
  errors: string[];
}> {
  const result = { submitted: 0, failed: 0, synced: 0, shipped: 0, errors: [] as string[] };

  if (isBigBuyAutoOrderEnabled()) {
    const pending = await prisma.order.findMany({
      where: {
        bigbuyStatus: "PENDING",
        paymentStatus: "PAID",
        updatedAt: { lt: new Date(Date.now() - PENDING_GRACE_MS) },
      },
      select: { id: true },
      orderBy: { createdAt: "asc" },
      take: 10,
    });
    for (const { id } of pending) {
      const submitted = await submitOrderToBigBuy(id);
      if (submitted.ok) result.submitted++;
      else result.failed++;
    }
  }

  const sent = await prisma.order.findMany({
    where: { bigbuyStatus: "SENT" },
    select: { id: true, orderNumber: true },
    orderBy: [{ bigbuySyncedAt: { sort: "asc", nulls: "first" } }],
    take: 25,
  });
  for (const order of sent) {
    try {
      const synced = await syncBigBuyOrder(order.id);
      result.synced++;
      if (synced.shipped) result.shipped++;
    } catch (error) {
      result.errors.push(`${order.orderNumber}: ${describeBigBuyError(error)}`);
      if (error instanceof BigBuyHttpError && error.status === 429) break;
    }
  }

  return result;
}
