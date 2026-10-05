import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedCron } from "@/lib/cron";
import { syncBigBuyStock } from "@/lib/bigbuy/stock";
import { describeBigBuyError } from "@/lib/bigbuy/orders";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function GET(request: NextRequest) {
  if (!isAuthorizedCron(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await syncBigBuyStock();
    console.log("[BigBuy] stock sync", result);
    return NextResponse.json(result);
  } catch (error) {
    const message = describeBigBuyError(error);
    console.error("[BigBuy] stock sync failed", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
