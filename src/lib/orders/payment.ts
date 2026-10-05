import { after } from "next/server";
import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { sendOrderConfirmationEmail, sendOrderInvoiceEmail } from "@/lib/email";
import { scheduleEmail } from "@/lib/email-jobs";
import { isBigBuyMetadata } from "@/lib/bigbuy/product";
import { isBigBuyAutoOrderEnabled, submitOrderToBigBuy } from "@/lib/bigbuy/orders";

const FRESH_ORDER_MS = 48 * 60 * 60 * 1000;

export type PaymentSyncOutcome = "PAID" | "FAILED" | "PENDING" | "SKIPPED";

function isFresh(createdAt: Date): boolean {
  return Date.now() - createdAt.getTime() < FRESH_ORDER_MS;
}

export async function markOrderPaid(orderId: string, paymentIntentId: string | null): Promise<boolean> {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { items: { include: { product: { select: { metadata: true } } } } },
  });
  if (!order || order.paymentStatus === "PAID") return false;

  const fresh = isFresh(order.createdAt);
  const hasBigBuyItems = order.items.some((item) => isBigBuyMetadata(item.product?.metadata));

  const claimed = await prisma.order.updateMany({
    where: { id: order.id, paymentStatus: { not: "PAID" } },
    data: {
      paymentStatus: "PAID",
      status: order.status === "PENDING" ? "CONFIRMED" : undefined,
      paymentId: paymentIntentId ?? order.paymentId,
      bigbuyStatus: hasBigBuyItems && fresh ? "PENDING" : null,
    },
  });
  if (claimed.count === 0) return false;

  if (!fresh) return true;

  if (hasBigBuyItems && isBigBuyAutoOrderEnabled()) {
    after(async () => {
      try {
        await submitOrderToBigBuy(order.id);
      } catch (error) {
        console.error(`[BigBuy] order ${order.orderNumber} submission crashed`, error);
      }
    });
  }

  for (const item of order.items) {
    await prisma.product.update({
      where: { id: item.productId },
      data: { quantity: { decrement: item.quantity } },
    });
  }

  const emailPayload = {
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
    shippingAddress: (order.shippingAddress ?? undefined) as
      | Record<string, string>
      | undefined,
    createdAt: order.createdAt,
  };

  scheduleEmail(`order confirmation ${order.orderNumber}`, () =>
    sendOrderConfirmationEmail(emailPayload)
  );
  scheduleEmail(`order invoice ${order.orderNumber}`, () =>
    sendOrderInvoiceEmail(emailPayload)
  );

  return true;
}

export async function markOrderUnpaid(orderId: string): Promise<boolean> {
  const updated = await prisma.order.updateMany({
    where: { id: orderId, paymentStatus: "PENDING" },
    data: { paymentStatus: "FAILED" },
  });
  return updated.count === 1;
}

export function orderIdFromSession(session: Stripe.Checkout.Session): string | null {
  return session.metadata?.orderId ?? session.client_reference_id ?? null;
}

export function paymentIntentIdOf(session: Stripe.Checkout.Session): string | null {
  if (typeof session.payment_intent === "string") return session.payment_intent;
  return session.payment_intent?.id ?? null;
}

export async function applyCheckoutSession(session: Stripe.Checkout.Session): Promise<PaymentSyncOutcome> {
  const orderId = orderIdFromSession(session);
  if (!orderId) return "SKIPPED";

  if (session.payment_status === "paid" || session.payment_status === "no_payment_required") {
    await markOrderPaid(orderId, paymentIntentIdOf(session));
    return "PAID";
  }

  if (session.status === "expired") {
    await markOrderUnpaid(orderId);
    return "FAILED";
  }

  return "PENDING";
}

export async function syncOrderPayment(order: { id: string; paymentId: string | null }): Promise<PaymentSyncOutcome> {
  if (!order.paymentId?.startsWith("cs_")) return "SKIPPED";
  const session = await stripe.checkout.sessions.retrieve(order.paymentId);
  if (orderIdFromSession(session) !== order.id) return "SKIPPED";
  return applyCheckoutSession(session);
}

export async function syncPendingPayments(options: { orderId?: string; limit?: number } = {}): Promise<{
  checked: number;
  paid: number;
  failed: number;
  errors: string[];
}> {
  const orders = await prisma.order.findMany({
    where: {
      id: options.orderId,
      paymentStatus: options.orderId ? { in: ["PENDING", "FAILED"] } : "PENDING",
      paymentId: { startsWith: "cs_" },
    },
    select: { id: true, orderNumber: true, paymentId: true },
    orderBy: { createdAt: "desc" },
    take: options.limit ?? 50,
  });

  const result = { checked: 0, paid: 0, failed: 0, errors: [] as string[] };
  for (const order of orders) {
    try {
      const outcome = await syncOrderPayment(order);
      result.checked++;
      if (outcome === "PAID") result.paid++;
      if (outcome === "FAILED") result.failed++;
    } catch (error) {
      result.errors.push(`${order.orderNumber}: ${(error as Error).message}`);
    }
  }
  return result;
}
