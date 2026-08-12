"use client";

import { useEffect, useState, use } from "react";
import { useTranslations } from "next-intl";
import { Chip } from "@heroui/react";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner/LoadingSpinner";
import { useCurrency } from "@/providers/CurrencyProvider";
import { formatPrice } from "@/lib/utils/format-price";
import { format } from "date-fns";
import type { OrderDetail } from "@/types/order";
import styles from "../../account.module.css";

const statusColors: Record<string, "default" | "accent" | "success" | "warning" | "danger"> = {
  PENDING: "warning",
  CONFIRMED: "accent",
  PROCESSING: "accent",
  SHIPPED: "default",
  DELIVERED: "success",
  CANCELLED: "danger",
  REFUNDED: "danger",
};

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const t = useTranslations("account");
  const { currency, convert } = useCurrency();
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/orders/${id}`)
      .then((res) => res.json())
      .then(setOrder)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!order) return <div style={{ padding: "2rem", textAlign: "center" }}>{t("orderNotFound")}</div>;

  return (
    <div>
      <div className={styles.detailHeader}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>
            {t("orderNumber", { number: order.orderNumber.slice(-8) })}
          </h1>
          <p style={{ fontSize: "0.875rem", color: "var(--color-text-tertiary)" }}>
            {t("placedOn", { date: format(new Date(order.createdAt), "MMM d, yyyy 'at' HH:mm") })}
          </p>
        </div>
        <Chip size="lg" color={statusColors[order.status] || "default"}>{t(`statuses.${order.status}`)}</Chip>
      </div>

      <div className={styles.detailInfoGrid}>
        <div className={styles.detailInfoBlock}>
          <div className={styles.detailInfoTitle}>{t("shippingAddress")}</div>
          <div className={styles.detailInfoText}>
            {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
            {order.shippingAddress.address1}<br />
            {order.shippingAddress.address2 && <>{order.shippingAddress.address2}<br /></>}
            {order.shippingAddress.city}, {order.shippingAddress.postalCode}<br />
            {order.shippingAddress.country}
          </div>
        </div>
        <div className={styles.detailInfoBlock}>
          <div className={styles.detailInfoTitle}>{t("orderInfo")}</div>
          <div className={styles.detailInfoText}>
            {t("payment")}: <strong>{order.paymentStatus}</strong>
            {order.paymentMethod && <><br />{t("method")}: {order.paymentMethod}</>}
            {order.shippingMethod && <><br />{t("shippingLabel")}: {order.shippingMethod}</>}
            {order.trackingNumber && <><br />{t("tracking")}: <strong>{order.trackingNumber}</strong></>}
          </div>
        </div>
      </div>

      <div className={styles.itemsBlock}>
        <table className={styles.itemsTable}>
          <thead>
            <tr>
              <th>{t("colProduct")}</th>
              <th style={{ textAlign: "right" }}>{t("colQty")}</th>
              <th style={{ textAlign: "right" }}>{t("colPrice")}</th>
              <th style={{ textAlign: "right" }}>{t("colTotal")}</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.id}>
                <td>
                  <div style={{ fontWeight: 600 }}>{item.productName}</div>
                  {item.variantName && <div style={{ fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>{item.variantName}</div>}
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>SKU: {item.productSku}</div>
                </td>
                <td style={{ textAlign: "right" }}>{item.quantity}</td>
                <td style={{ textAlign: "right" }}>{formatPrice(convert(Number(item.price)), currency)}</td>
                <td style={{ textAlign: "right", fontWeight: 600 }}>{formatPrice(convert(Number(item.total)), currency)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.itemsMobile}>
          {order.items.map((item) => (
            <div key={item.id} className={styles.itemRow}>
              <div className={styles.itemRowName}>{item.productName}</div>
              {item.variantName && <div style={{ fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>{item.variantName}</div>}
              <div className={styles.itemRowMeta}>
                <span>{t("colQty")} {item.quantity} × {formatPrice(convert(Number(item.price)), currency)}</span>
                <span className={styles.itemRowTotal}>{formatPrice(convert(Number(item.total)), currency)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.totals}>
          <div className={styles.totalsRow}>
            <span style={{ color: "var(--color-text-secondary)" }}>{t("subtotal")}</span>
            <span>{formatPrice(convert(Number(order.subtotal)), currency)}</span>
          </div>
          <div className={styles.totalsRow}>
            <span style={{ color: "var(--color-text-secondary)" }}>{t("shippingLabel")}</span>
            <span>{Number(order.shippingCost) === 0 ? t("free") : formatPrice(convert(Number(order.shippingCost)), currency)}</span>
          </div>
          <div className={styles.totalsRow}>
            <span style={{ color: "var(--color-text-secondary)" }}>{t("tax")}</span>
            <span>{formatPrice(convert(Number(order.taxAmount)), currency)}</span>
          </div>
          {Number(order.discountAmount) > 0 && (
            <div className={styles.totalsRow}>
              <span style={{ color: "var(--color-success)" }}>{t("discount")}</span>
              <span style={{ color: "var(--color-success)" }}>−{formatPrice(convert(Number(order.discountAmount)), currency)}</span>
            </div>
          )}
          <div className={`${styles.totalsRow} ${styles.totalsTotal}`}>
            <span>{t("colTotal")}</span>
            <span>{formatPrice(convert(Number(order.total)), currency)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
