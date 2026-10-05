import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { getSessionUser, isAdminRole } from "@/lib/auth";

const BIGBUY_STATUSES = ["PENDING", "SENT", "FAILED", "SHIPPED", "CANCELLED"];
const PAYMENT_STATUSES = ["PENDING", "PAID", "FAILED", "REFUNDED"];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "20");
    const status = searchParams.get("status") || "";
    const userId = searchParams.get("userId") || "";
    const bigbuyStatus = searchParams.get("bigbuyStatus") || "";
    const paymentStatus = searchParams.get("paymentStatus") || "";

    const sessionUser = await getSessionUser();
    const admin = isAdminRole(sessionUser?.role);
    if (!sessionUser || (!admin && (!userId || userId !== sessionUser.id))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const where: Prisma.OrderWhereInput = {};
    if (status) where.status = status as Prisma.EnumOrderStatusFilter;
    if (userId) where.userId = userId;
    if (admin && BIGBUY_STATUSES.includes(bigbuyStatus)) {
      where.bigbuyStatus = bigbuyStatus as Prisma.EnumBigBuyOrderStatusNullableFilter;
    }
    if (admin && PAYMENT_STATUSES.includes(paymentStatus)) {
      where.paymentStatus = paymentStatus as Prisma.EnumPaymentStatusFilter;
    }

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          items: true,
          user: { select: { name: true, email: true } },
        },
      }),
      prisma.order.count({ where }),
    ]);

    return NextResponse.json({
      data: orders,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}
