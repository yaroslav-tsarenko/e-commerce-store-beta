import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getAdminUser } from "@/lib/auth";
import { describeBigBuyError, submitOrderToBigBuy, syncBigBuyOrder } from "@/lib/bigbuy/orders";

export const maxDuration = 60;

const actionSchema = z.object({
  action: z.enum(["send", "sync"]),
  phone: z.string().trim().min(6).optional(),
});

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const parsed = actionSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    if (parsed.data.action === "send") {
      const result = await submitOrderToBigBuy(id, { phone: parsed.data.phone });
      return result.ok
        ? NextResponse.json({ ok: true, orderIds: result.orderIds })
        : NextResponse.json({ ok: false, error: result.reason }, { status: 422 });
    }

    const result = await syncBigBuyOrder(id);
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    const message = describeBigBuyError(error);
    console.error(`[BigBuy] admin ${parsed.data.action} failed for ${id}:`, message);
    return NextResponse.json({ ok: false, error: message }, { status: 502 });
  }
}
