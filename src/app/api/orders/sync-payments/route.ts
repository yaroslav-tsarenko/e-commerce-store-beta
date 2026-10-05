import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getAdminUser } from "@/lib/auth";
import { syncPendingPayments } from "@/lib/orders/payment";

export const maxDuration = 60;

const bodySchema = z.object({ orderId: z.string().min(1).optional() });

export async function POST(request: NextRequest) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = bodySchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    const result = await syncPendingPayments({ orderId: parsed.data.orderId, limit: parsed.data.orderId ? 1 : 30 });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error syncing Stripe payments:", error);
    return NextResponse.json({ error: "Failed to check payments in Stripe" }, { status: 500 });
  }
}
