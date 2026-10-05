"use client";

import { useState } from "react";
import { format } from "date-fns";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { CopyValue } from "@/components/admin/CopyValue/CopyValue";
import { formatPrice } from "@/lib/utils/format-price";
import { isBigBuyMetadata } from "@/lib/bigbuy/product";
import type { BigBuyOrderStatus, OrderDetail } from "@/types/order";

const STATUS_COPY: Record<BigBuyOrderStatus | "NONE", { label: string; color: string }> = {
  NONE: { label: "Not sent", color: "var(--admin-text-secondary)" },
  PENDING: { label: "Waiting to be sent", color: "var(--admin-warning)" },
  SENT: { label: "Placed at BigBuy", color: "var(--admin-accent)" },
  SHIPPED: { label: "Shipped by BigBuy", color: "var(--admin-success)" },
  FAILED: { label: "Not accepted by BigBuy", color: "var(--admin-danger)" },
  CANCELLED: { label: "Cancelled by BigBuy", color: "var(--admin-danger)" },
};

const factLabel = {
  fontSize: "0.6875rem",
  color: "var(--admin-text-muted)",
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em",
  marginBottom: "0.25rem",
};

const factValue = { fontSize: "0.875rem", color: "var(--admin-text)" };

function formatDate(value: string | null | undefined) {
  return value ? format(new Date(value), "MMM d, yyyy HH:mm") : "—";
}

interface BigBuyOrderPanelProps {
  order: OrderDetail;
  onChanged: () => Promise<void>;
}

export function BigBuyOrderPanel({ order, onChanged }: BigBuyOrderPanelProps) {
  const [busy, setBusy] = useState<"send" | "sync" | null>(null);
  const [phone, setPhone] = useState("");

  const bigbuyItems = order.items.filter((item) => isBigBuyMetadata(item.product?.metadata));
  const manualItems = order.items.length - bigbuyItems.length;
  if (!bigbuyItems.length && !order.bigbuyStatus) return null;

  const status = order.bigbuyStatus ?? "NONE";
  const copy = STATUS_COPY[status];
  const orderIds = order.bigbuyOrderIds ?? [];
  const isPaid = order.paymentStatus === "PAID";
  const canSend = isPaid && orderIds.length === 0 && (status === "NONE" || status === "PENDING" || status === "FAILED");
  const canSync = orderIds.length > 0;
  const needsPhone = canSend && !order.customerPhone;
  const supplierCost = order.bigbuyShippingCost != null ? Number(order.bigbuyShippingCost) : null;

  const run = async (action: "send" | "sync") => {
    setBusy(action);
    try {
      const res = await fetch(`/api/orders/${order.id}/bigbuy`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, phone: needsPhone && phone.trim() ? phone.trim() : undefined }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        toast.error(data?.error || "BigBuy request failed");
      } else if (action === "send") {
        toast.success(`Placed at BigBuy: ${data.orderIds.join(", ")}`);
      } else {
        toast.success(data.shipped ? "Tracking received, order marked as shipped" : `BigBuy status: ${data.remoteStatus ?? "unknown"}`);
      }
    } catch {
      toast.error("BigBuy request failed");
    } finally {
      await onChanged().catch(console.error);
      setBusy(null);
    }
  };

  return (
    <section
      className="admin-info-card"
      style={{ marginBottom: "1.5rem", borderLeft: `3px solid ${copy.color}`, borderRadius: 6 }}
      aria-label="BigBuy fulfilment"
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", alignItems: "baseline" }}>
        <div>
          <h3 style={{ marginBottom: "0.25rem" }}>BigBuy fulfilment</h3>
          <div style={{ fontSize: "1rem", fontWeight: 600, color: copy.color }}>{copy.label}</div>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
          {needsPhone && (
            <input
              className="admin-input"
              style={{ width: "13rem" }}
              placeholder="Customer phone, e.g. +40 7…"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-label="Customer phone for BigBuy"
            />
          )}
          {canSend && (
            <Button
              size="sm"
              color="primary"
              onPress={() => run("send")}
              isLoading={busy === "send"}
              isDisabled={busy !== null || (needsPhone && phone.trim().length < 6)}
            >
              {status === "FAILED" ? "Retry sending" : "Send to BigBuy"}
            </Button>
          )}
          {canSync && (
            <Button size="sm" variant="secondary" onPress={() => run("sync")} isLoading={busy === "sync"} isDisabled={busy !== null}>
              Check status
            </Button>
          )}
        </div>
      </div>

      {!isPaid && (
        <p style={{ marginTop: "0.75rem", fontSize: "0.8125rem", color: "var(--admin-text-secondary)" }}>
          The order is not paid, so it will not be sent to BigBuy.
        </p>
      )}

      {order.bigbuyError && (
        <p
          style={{
            marginTop: "0.75rem",
            padding: "0.625rem 0.75rem",
            fontSize: "0.8125rem",
            lineHeight: 1.5,
            color: "var(--admin-danger)",
            background: "rgba(239, 68, 68, 0.08)",
            borderRadius: 4,
            whiteSpace: "pre-wrap",
          }}
        >
          {order.bigbuyError}
        </p>
      )}

      <dl
        style={{
          marginTop: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
          gap: "0.75rem 1.5rem",
        }}
      >
        <div>
          <dt style={factLabel}>BigBuy order</dt>
          <dd style={factValue}>
            {orderIds.length ? orderIds.map((bigbuyId) => <CopyValue key={bigbuyId} value={bigbuyId} label="BigBuy order ID" />) : "—"}
          </dd>
        </div>
        <div>
          <dt style={factLabel}>Carrier</dt>
          <dd style={{ ...factValue, textTransform: "uppercase" }}>{order.bigbuyCarrier || "—"}</dd>
        </div>
        <div>
          <dt style={factLabel}>Shipping: BigBuy / charged</dt>
          <dd style={factValue}>
            <span style={{ color: supplierCost != null && supplierCost > Number(order.shippingCost) ? "var(--admin-danger)" : undefined }}>
              {supplierCost != null ? formatPrice(supplierCost) : "—"}
            </span>
            {" / "}
            {formatPrice(order.shippingCost)}
          </dd>
        </div>
        <div>
          <dt style={factLabel}>BigBuy status</dt>
          <dd style={factValue}>{order.bigbuyRemoteStatus || "—"}</dd>
        </div>
        <div>
          <dt style={factLabel}>Sent</dt>
          <dd style={factValue}>{formatDate(order.bigbuySentAt)}</dd>
        </div>
        <div>
          <dt style={factLabel}>Last check</dt>
          <dd style={factValue}>{formatDate(order.bigbuySyncedAt)}</dd>
        </div>
      </dl>

      {manualItems > 0 && (
        <p style={{ marginTop: "0.75rem", fontSize: "0.8125rem", color: "var(--admin-warning)" }}>
          {manualItems} {manualItems === 1 ? "item is" : "items are"} not from BigBuy and must be shipped manually.
        </p>
      )}
    </section>
  );
}
