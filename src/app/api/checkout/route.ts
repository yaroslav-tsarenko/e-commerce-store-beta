import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { checkoutSchema } from "@/lib/validators/checkout";
import { getSessionUser } from "@/lib/auth";
import { resolveDiscount, markDiscountUsed } from "@/lib/discounts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function POST(request: NextRequest) {
  try {
    const user = await getSessionUser();

    const body = await request.json();
    const validated = checkoutSchema.parse(body);
    const { items } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    if (!validated.contact.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const productIds = items.map((item: { productId: string }) => item.productId);
    const products = await prisma.product.findMany({
      where: { id: { in: productIds } },
    });

    const productMap = new Map(products.map((p) => [p.id, p]));

    const unavailableProductIds = items
      .map((item: { productId: string }) => item.productId)
      .filter((id: string) => !productMap.has(id));

    if (unavailableProductIds.length > 0) {
      return NextResponse.json(
        {
          error: "Some items in your cart are no longer available",
          unavailableProductIds,
        },
        { status: 409 }
      );
    }

    let subtotal = 0;
    const orderItems = items.map((item: { productId: string; quantity: number; variantName?: string }) => {
      const product = productMap.get(item.productId)!;

      const itemTotal = Number(product.price) * item.quantity;
      subtotal += itemTotal;

      return {
        productId: product.id,
        productName: product.name,
        productSku: product.sku,
        variantName: item.variantName || null,
        quantity: item.quantity,
        price: product.price,
        total: itemTotal,
      };
    });

    const discount = await resolveDiscount({
      userId: user?.id ?? null,
      email: validated.contact.email,
      code: validated.discountCode ?? null,
    });

    const discountAmount = discount ? +(subtotal * (discount.percent / 100)).toFixed(2) : 0;
    const discountedSubtotal = subtotal - discountAmount;

    const taxRate = 21;
    const taxAmount = +(discountedSubtotal * (taxRate / 100)).toFixed(2);
    const shippingCost = discountedSubtotal >= 100 ? 0 : 5.99;
    const total = +(discountedSubtotal + taxAmount + shippingCost).toFixed(2);

    const order = await prisma.order.create({
      data: {
        userId: user?.id || null,
        customerName: `${validated.shipping.firstName} ${validated.shipping.lastName}`,
        customerEmail: validated.contact.email,
        customerPhone: validated.contact.phone,
        shippingAddress: validated.shipping,
        shippingMethod: validated.shippingMethod,
        shippingCost,
        subtotal,
        taxAmount,
        discountAmount,
        discountCode: discount?.code ?? null,
        discountPercent: discount?.percent ?? null,
        total,
        paymentMethod: "stripe",
        items: { create: orderItems },
      },
      include: { items: true },
    });

    if (discount) {
      await markDiscountUsed(discount, user?.id ?? null);
    }

    // Charge in EUR — the store's base currency. Amounts are stored in EUR;
    // the currency switcher is a display-only convenience.
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: order.customerEmail,
      client_reference_id: order.id,
      metadata: { orderId: order.id },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: Math.round(total * 100),
            product_data: {
              name: `MisaElectro — comanda ${order.orderNumber}`,
            },
          },
        },
      ],
      success_url: `${SITE_URL}/order/confirmed?orderId=${order.id}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/checkout`,
    });

    await prisma.order.update({
      where: { id: order.id },
      data: { paymentId: session.id },
    });

    return NextResponse.json({ orderId: order.id, url: session.url }, { status: 201 });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
