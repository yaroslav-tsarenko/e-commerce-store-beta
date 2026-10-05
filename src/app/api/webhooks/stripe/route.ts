import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { applyCheckoutSession, markOrderUnpaid, orderIdFromSession } from "@/lib/orders/payment";

export const maxDuration = 60;

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

  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded":
    case "checkout.session.expired":
      await applyCheckoutSession(event.data.object as Stripe.Checkout.Session);
      break;
    case "checkout.session.async_payment_failed": {
      const orderId = orderIdFromSession(event.data.object as Stripe.Checkout.Session);
      if (orderId) await markOrderUnpaid(orderId);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
