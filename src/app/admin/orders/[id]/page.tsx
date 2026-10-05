"use client";

import { useCallback, useEffect, useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Chip } from "@heroui/react";
import { formatPrice } from "@/lib/utils/format-price";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner/LoadingSpinner";
import { Ean13Barcode } from "@/components/admin/Ean13Barcode/Ean13Barcode";
import { CopyValue } from "@/components/admin/CopyValue/CopyValue";
import { BigBuyOrderPanel } from "@/components/admin/BigBuyOrderPanel/BigBuyOrderPanel";
import { isBigBuyMetadata, bigBuyIdFromMetadata } from "@/lib/bigbuy/product";
import { normalizeEan13 } from "@/lib/utils/ean13";
import { toast } from "sonner";
import { ORDER_STATUSES, ORDER_STATUS_LABELS, PAYMENT_STATUS_COPY } from "@/lib/orders/labels";
import type { OrderDetail } from "@/types/order";

const PRE_SHIPPING = new Set(["PENDING", "CONFIRMED", "PROCESSING"]);

async function fetchOrder(id: string): Promise<OrderDetail | null> {
  const res = await fetch(`/api/orders/${id}`);
  return res.ok ? res.json() : null;
}

const metaLabel = { fontSize: "0.6875rem", color: "var(--admin-text-muted)", textTransform: "uppercase" as const, letterSpacing: "0.06em" };

export default function AdminOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [newStatus, setNewStatus] = useState("");
  const [tracking, setTracking] = useState("");
  const [updating, setUpdating] = useState(false);
  const [checkingPayment, setCheckingPayment] = useState(false);

  useEffect(() => {
    fetchOrder(id)
      .then((data) => {
        if (!data) return;
        setOrder(data);
        setNewStatus(data.status);
        setTracking(data.trackingNumber || "");
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const reloadOrder = useCallback(async () => {
    const data = await fetchOrder(id);
    if (!data) return;
    setOrder(data);
    setNewStatus(data.status);
    setTracking(data.trackingNumber || "");
  }, [id]);

  const checkPayment = useCallback(async (silent: boolean) => {
    setCheckingPayment(true);
    try {
      const res = await fetch("/api/orders/sync-payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: id }),
      });
      if (!res.ok) throw new Error("sync failed");
      const result: { paid: number; failed: number } = await res.json();
      if (result.paid + result.failed > 0) await reloadOrder();
      if (!silent) {
        toast.success(result.paid ? "Stripe: payment received" : result.failed ? "Stripe: checkout expired, not paid" : "Stripe: still not paid");
      }
    } catch {
      if (!silent) toast.error("Could not reach Stripe");
    } finally {
      setCheckingPayment(false);
    }
  }, [id, reloadOrder]);

  const needsPaymentCheck = Boolean(order && order.paymentStatus !== "PAID" && order.paymentStatus !== "REFUNDED");

  useEffect(() => {
    if (!needsPaymentCheck) return;
    const timer = setTimeout(() => checkPayment(true), 0);
    return () => clearTimeout(timer);
  }, [needsPaymentCheck, checkPayment]);

  const handleTrackingChange = (value: string) => {
    setTracking(value);
    if (value.trim() && value.trim() !== (order?.trackingNumber ?? "") && PRE_SHIPPING.has(newStatus)) {
      setNewStatus("SHIPPED");
    }
  };

  const handleUpdateStatus = async () => {
    setUpdating(true);
    try {
      const res = await fetch(`/api/orders/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus, trackingNumber: tracking }),
      });
      if (!res.ok) throw new Error("update failed");
      const updated: { status: string; trackingNumber: string | null; paymentStatus: string } = await res.json();
      toast.success(`Order marked as ${ORDER_STATUS_LABELS[updated.status] ?? updated.status}`);
      setNewStatus(updated.status);
      setTracking(updated.trackingNumber || "");
      setOrder((prev) => prev ? { ...prev, status: updated.status, trackingNumber: updated.trackingNumber, paymentStatus: updated.paymentStatus } : prev);
    } catch {
      toast.error("Failed to update status");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (!order) return <div className="admin-empty">Order not found</div>;

  const payment = PAYMENT_STATUS_COPY[order.paymentStatus] ?? { label: order.paymentStatus, color: "var(--admin-text-secondary)" };
  const trackingWillShip = tracking.trim() !== "" && tracking.trim() !== (order.trackingNumber ?? "");

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="admin-page-header" style={{ marginBottom: "2rem" }}>
        <h1 className="admin-page-title">Order #{order.orderNumber.slice(-8)}</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: 600, color: payment.color }}>{payment.label}</span>
          <Chip size="lg">{ORDER_STATUS_LABELS[order.status] ?? order.status}</Chip>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        <div className="admin-info-card">
          <h3>Customer</h3>
          <p style={{ fontSize: "0.875rem", color: "var(--admin-text)" }}>{order.customerName}</p>
          <p style={{ fontSize: "0.875rem", color: "var(--admin-text-secondary)" }}>{order.customerEmail}</p>
          {order.customerPhone ? (
            <a href={`tel:${order.customerPhone.replace(/[^\d+]/g, "")}`} style={{ display: "inline-block", marginTop: "0.25rem", fontSize: "0.875rem", fontFamily: "var(--font-mono)", color: "var(--admin-text)" }}>
              {order.customerPhone}
            </a>
          ) : (
            <p style={{ marginTop: "0.25rem", fontSize: "0.8125rem", color: "var(--admin-text-muted)" }}>No phone provided</p>
          )}
        </div>
        <div className="admin-info-card">
          <h3>Payment</h3>
          <p style={{ fontSize: "1rem", fontWeight: 600, color: payment.color }}>{payment.label}</p>
          <p style={{ fontSize: "0.8125rem", color: "var(--admin-text-secondary)", marginTop: "0.125rem" }}>
            {order.paymentMethod === "stripe" ? "Stripe" : order.paymentMethod || "—"} · {formatPrice(order.total)}
          </p>
          {order.paymentId && (
            <div style={{ marginTop: "0.5rem" }}>
              <CopyValue value={order.paymentId} label="Stripe ID" />
            </div>
          )}
          {needsPaymentCheck && order.paymentId?.startsWith("cs_") && (
            <Button size="sm" variant="secondary" onPress={() => checkPayment(false)} isLoading={checkingPayment} style={{ marginTop: "0.75rem" }}>
              Check in Stripe
            </Button>
          )}
        </div>
        <div className="admin-info-card">
          <h3>Shipping</h3>
          <p style={{ fontSize: "0.875rem", color: "var(--admin-text)" }}>
            {order.shippingAddress.address1}, {order.shippingAddress.city}<br />
            {order.shippingAddress.postalCode}, {order.shippingAddress.country}
          </p>
        </div>
        <div className="admin-info-card">
          <h3>Update Status</h3>
          <select className="admin-select" style={{ marginBottom: "0.5rem" }} value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
            {ORDER_STATUSES.map((s) => <option key={s} value={s}>{ORDER_STATUS_LABELS[s]}</option>)}
          </select>
          <input className="admin-input" placeholder="Tracking number" style={{ marginBottom: "0.5rem", fontFamily: tracking ? "var(--font-mono)" : undefined }} value={tracking} onChange={(e) => handleTrackingChange(e.target.value)} />
          {trackingWillShip && (
            <p style={{ fontSize: "0.75rem", color: "var(--admin-text-secondary)", marginBottom: "0.5rem" }}>
              Saving a tracking number marks the order as Shipped and emails it to the customer.
            </p>
          )}
          <Button size="sm" color="primary" onPress={handleUpdateStatus} isLoading={updating} fullWidth>Update</Button>
        </div>
      </div>

      <BigBuyOrderPanel order={order} onChanged={reloadOrder} />

      <div className="admin-table-container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Code</th>
              <th>Barcode</th>
              <th style={{ textAlign: "right" }}>Qty</th>
              <th style={{ textAlign: "right" }}>Price</th>
              <th style={{ textAlign: "right" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => {
              const product = item.product;
              const fromBigBuy = isBigBuyMetadata(product?.metadata);
              const bigbuyId = bigBuyIdFromMetadata(product?.metadata);
              const sku = product?.sku || item.productSku;
              const ean = product?.ean || product?.gtin || null;
              const thumb = product?.images[0]?.url;

              return (
                <tr key={item.id}>
                  <td style={{ color: "var(--admin-text)", maxWidth: "22rem" }}>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      {thumb ? (
                        <Image src={thumb} alt="" width={44} height={44} unoptimized style={{ width: 44, height: 44, objectFit: "contain", background: "#fff", borderRadius: 4, flexShrink: 0 }} />
                      ) : (
                        <div style={{ width: 44, height: 44, borderRadius: 4, background: "var(--admin-bg-input)", flexShrink: 0 }} />
                      )}
                      <div>
                        {product ? (
                          <Link href={`/admin/products/${product.id}`} style={{ color: "var(--admin-text)", fontWeight: 500 }}>
                            {item.productName}
                          </Link>
                        ) : item.productName}
                        {item.variantName && <span style={{ color: "var(--admin-text-secondary)" }}> ({item.variantName})</span>}
                        <div style={{ marginTop: "0.25rem", fontSize: "0.75rem", color: fromBigBuy ? "var(--admin-text-muted)" : "var(--admin-warning)" }}>
                          {fromBigBuy ? "BigBuy" : "Not a BigBuy product — fulfil manually"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "grid", gap: "0.375rem" }}>
                      <div>
                        <div style={metaLabel}>SKU</div>
                        <CopyValue value={sku} label="SKU" />
                      </div>
                      {ean && (
                        <div>
                          <div style={metaLabel}>EAN</div>
                          <CopyValue value={ean} label="EAN" />
                        </div>
                      )}
                      {bigbuyId != null && (
                        <div>
                          <div style={metaLabel}>BigBuy ID</div>
                          <CopyValue value={String(bigbuyId)} label="BigBuy ID" />
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    {normalizeEan13(ean) ? (
                      <Ean13Barcode value={ean} />
                    ) : (
                      <span style={{ fontSize: "0.75rem", color: "var(--admin-text-muted)" }}>
                        {ean ? "Not a valid EAN-13" : "No barcode"}
                      </span>
                    )}
                  </td>
                  <td style={{ textAlign: "right", color: "var(--admin-text)", fontWeight: 600 }}>{item.quantity}</td>
                  <td style={{ textAlign: "right" }}>{formatPrice(item.price)}</td>
                  <td style={{ textAlign: "right", fontWeight: 600, color: "var(--admin-text)" }}>{formatPrice(item.total)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{ padding: "1.25rem", textAlign: "right", fontSize: "0.875rem", borderTop: "1px solid var(--admin-border)" }}>
          <div style={{ color: "var(--admin-text-secondary)" }}>Subtotal: {formatPrice(order.subtotal)}</div>
          <div style={{ color: "var(--admin-text-secondary)" }}>Shipping: {formatPrice(order.shippingCost)}</div>
          <div style={{ color: "var(--admin-text-secondary)" }}>Tax: {formatPrice(order.taxAmount)}</div>
          <div style={{ fontWeight: 700, fontSize: "1.125rem", color: "var(--admin-text)", marginTop: "0.5rem" }}>Total: {formatPrice(order.total)}</div>
        </div>
      </div>
    </motion.div>
  );
}
