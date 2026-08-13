import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { sendOrderConfirmationEmail, sendOrderInvoiceEmail } from "@/lib/email";
import { scheduleEmail } from "@/lib/email-jobs";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");
  const body = await request.text();

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid") {
      await fulfillOrder(session);
    }
  }

  return NextResponse.json({ received: true });
}

async function fulfillOrder(session: Stripe.Checkout.Session) {
  const orderId = session.metadata?.orderId ?? session.client_reference_id;
  if (!orderId) return;

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { items: true },
  });

  if (!order || order.paymentStatus === "PAID") return;

  await prisma.order.update({
    where: { id: order.id },
    data: {
      paymentStatus: "PAID",
      status: "CONFIRMED",
      paymentId:
        typeof session.payment_intent === "string"
          ? session.payment_intent
          : order.paymentId,
    },
  });

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
}
