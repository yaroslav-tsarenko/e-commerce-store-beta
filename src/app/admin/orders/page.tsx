"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Chip } from "@heroui/react";
import { formatPrice } from "@/lib/utils/format-price";
import { format } from "date-fns";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner/LoadingSpinner";
import { ORDER_STATUS_LABELS, PAYMENT_STATUS_COPY } from "@/lib/orders/labels";

interface Order {
  id: string;
  orderNumber: string;
  status: string;
  paymentStatus: string;
  total: number;
  createdAt: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string | null;
  user: { name: string | null; email: string } | null;
  items: { id: string }[];
  bigbuyStatus: string | null;
}

const statusColors: Record<string, "default" | "accent" | "success" | "warning" | "danger"> = {
  PENDING: "warning", CONFIRMED: "accent", PROCESSING: "accent",
  SHIPPED: "default", DELIVERED: "success", CANCELLED: "danger", REFUNDED: "danger",
};

const bigbuyLabels: Record<string, { label: string; color: string }> = {
  PENDING: { label: "Waiting", color: "var(--admin-warning)" },
  SENT: { label: "Placed", color: "var(--admin-accent)" },
  SHIPPED: { label: "Shipped", color: "var(--admin-success)" },
  FAILED: { label: "Failed", color: "var(--admin-danger)" },
  CANCELLED: { label: "Cancelled", color: "var(--admin-danger)" },
};

function buildQuery(filter: string) {
  const params = new URLSearchParams();
  const [kind, value] = filter.includes(":") ? filter.split(":") : ["status", filter];
  if (!value) return params;
  if (kind === "bigbuy") params.set("bigbuyStatus", value);
  else if (kind === "payment") params.set("paymentStatus", value);
  else params.set("status", value);
  return params;
}

async function fetchOrders(filter: string): Promise<Order[]> {
  const res = await fetch(`/api/orders?${buildQuery(filter)}`);
  const data = await res.json();
  return data.data || [];
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("");
  const [stripeState, setStripeState] = useState<"checking" | "done" | "error">("checking");
  const [stripeCheckedAt, setStripeCheckedAt] = useState<Date | null>(null);
  const filterRef = useRef(statusFilter);

  useEffect(() => {
    filterRef.current = statusFilter;
    let active = true;
    fetchOrders(statusFilter)
      .then((data) => { if (active) setOrders(data); })
      .catch(console.error)
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [statusFilter]);

  const syncStripe = useCallback(async () => {
    setStripeState("checking");
    try {
      const res = await fetch("/api/orders/sync-payments", { method: "POST" });
      if (!res.ok) throw new Error("sync failed");
      const result: { paid: number; failed: number } = await res.json();
      setStripeState("done");
      setStripeCheckedAt(new Date());
      if (result.paid + result.failed > 0) {
        setOrders(await fetchOrders(filterRef.current));
      }
    } catch {
      setStripeState("error");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(syncStripe, 0);
    return () => clearTimeout(timer);
  }, [syncStripe]);

  const handleFilterChange = (value: string) => {
    setLoading(true);
    setStatusFilter(value);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Orders</h1>
          <button
            type="button"
            onClick={syncStripe}
            disabled={stripeState === "checking"}
            style={{
              marginTop: "0.25rem",
              padding: 0,
              border: 0,
              background: "none",
              fontSize: "0.75rem",
              color: stripeState === "error" ? "var(--admin-danger)" : "var(--admin-text-muted)",
              cursor: stripeState === "checking" ? "default" : "pointer",
              textDecoration: stripeState === "checking" ? "none" : "underline",
              textUnderlineOffset: 3,
            }}
          >
            {stripeState === "checking" && "Checking payments in Stripe…"}
            {stripeState === "done" && `Payments checked in Stripe at ${format(stripeCheckedAt ?? new Date(), "HH:mm")} · check again`}
            {stripeState === "error" && "Could not reach Stripe · retry"}
          </button>
        </div>
        <select
          className="admin-select"
          style={{ maxWidth: "14rem" }}
          onChange={(e) => handleFilterChange(e.target.value)}
          value={statusFilter}
        >
          <option value="">All orders</option>
          <optgroup label="Payment">
            <option value="payment:PAID">Paid</option>
            <option value="payment:PENDING">Awaiting payment</option>
            <option value="payment:FAILED">Not paid</option>
            <option value="payment:REFUNDED">Refunded</option>
          </optgroup>
          <optgroup label="Status">
            <option value="PENDING">New</option>
            <option value="CONFIRMED">Paid</option>
            <option value="PROCESSING">Processing</option>
            <option value="SHIPPED">Shipped</option>
            <option value="DELIVERED">Delivered</option>
            <option value="CANCELLED">Cancelled</option>
          </optgroup>
          <optgroup label="BigBuy">
            <option value="bigbuy:FAILED">BigBuy: failed</option>
            <option value="bigbuy:PENDING">BigBuy: waiting</option>
            <option value="bigbuy:SENT">BigBuy: placed</option>
            <option value="bigbuy:SHIPPED">BigBuy: shipped</option>
            <option value="bigbuy:CANCELLED">BigBuy: cancelled</option>
          </optgroup>
        </select>
      </div>

      {loading ? <LoadingSpinner /> : (
        <div className="admin-table-container">
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Payment</th>
                <th style={{ textAlign: "center" }}>Status</th>
                <th>BigBuy</th>
                <th style={{ textAlign: "right" }}>Total</th>
                <th style={{ textAlign: "right" }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const payment = PAYMENT_STATUS_COPY[order.paymentStatus] ?? { label: order.paymentStatus, color: "var(--admin-text-secondary)" };
                return (
                  <tr key={order.id}>
                    <td>
                      <Link href={`/admin/orders/${order.id}`} style={{ fontWeight: 600, color: "var(--admin-accent)" }}>
                        #{order.orderNumber.slice(-8)}
                      </Link>
                    </td>
                    <td>
                      <div style={{ color: "var(--admin-text)" }}>{order.customerName || order.user?.name || order.customerEmail}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--admin-text-muted)", fontFamily: order.customerPhone ? "var(--font-mono)" : undefined }}>
                        {order.customerPhone || order.customerEmail}
                      </div>
                    </td>
                    <td style={{ fontSize: "0.8125rem", fontWeight: 600, color: payment.color }}>
                      {payment.label}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Chip size="sm" color={statusColors[order.status]}>{ORDER_STATUS_LABELS[order.status] ?? order.status}</Chip>
                    </td>
                    <td style={{ fontSize: "0.8125rem", fontWeight: 500, color: order.bigbuyStatus ? bigbuyLabels[order.bigbuyStatus]?.color : "var(--admin-text-tertiary)" }}>
                      {order.bigbuyStatus ? bigbuyLabels[order.bigbuyStatus]?.label ?? order.bigbuyStatus : "—"}
                    </td>
                    <td style={{ textAlign: "right", fontWeight: 600, color: "var(--admin-text)" }}>{formatPrice(Number(order.total))}</td>
                    <td style={{ textAlign: "right", color: "var(--admin-text-muted)" }}>{format(new Date(order.createdAt), "MMM d, yyyy")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}
