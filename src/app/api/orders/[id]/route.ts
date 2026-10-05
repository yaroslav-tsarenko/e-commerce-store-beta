import { NextRequest, NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getSessionUser, isAdminRole } from "@/lib/auth";

const userSelect = { select: { name: true, email: true, avatarUrl: true } };

const supplierFieldsOmit = {
  bigbuyStatus: true,
  bigbuyOrderIds: true,
  bigbuyRemoteStatus: true,
  bigbuyCarrier: true,
  bigbuyShippingCost: true,
  bigbuyError: true,
  bigbuyAttempts: true,
  bigbuyLockedAt: true,
  bigbuySentAt: true,
  bigbuySyncedAt: true,
} satisfies Prisma.OrderOmit;

const adminItemsInclude = {
  include: {
    product: {
      select: {
        id: true,
        slug: true,
        sku: true,
        ean: true,
        gtin: true,
        mpn: true,
        metadata: true,
        images: { select: { url: true }, orderBy: { sortOrder: "asc" }, take: 1 },
      },
    },
  },
} satisfies Prisma.Order$itemsArgs;

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const sessionUser = await getSessionUser();

    const order = isAdminRole(sessionUser?.role)
      ? await prisma.order.findUnique({
          where: { id },
          include: { items: adminItemsInclude, user: userSelect },
        })
      : await prisma.order.findUnique({
          where: { id },
          omit: supplierFieldsOmit,
          include: { items: true, user: userSelect },
        });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json({ error: "Failed to fetch order" }, { status: 500 });
  }
}
