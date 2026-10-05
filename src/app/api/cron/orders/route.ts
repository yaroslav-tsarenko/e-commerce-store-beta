import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedCron } from "@/lib/cron";
import { runBigBuyOrderSync } from "@/lib/bigbuy/orders";
import { syncPendingPayments } from "@/lib/orders/payment";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function GET(request: NextRequest) {
  if (!isAuthorizedCron(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const payments = await syncPendingPayments({ limit: 100 });
    const bigbuy = await runBigBuyOrderSync();
    console.log("[Cron] orders", { payments, bigbuy });
    return NextResponse.json({ payments, bigbuy });
  } catch (error) {
    console.error("[Cron] orders failed", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
