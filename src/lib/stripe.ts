import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  console.warn("STRIPE_SECRET_KEY is not set — Stripe payments will fail.");
}

export const stripe = new Stripe(secretKey ?? "");
