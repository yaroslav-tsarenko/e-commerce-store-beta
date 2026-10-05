export const ORDER_STATUSES = ["PENDING", "CONFIRMED", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED", "REFUNDED"] as const;

export const ORDER_STATUS_LABELS: Record<string, string> = {
  PENDING: "New",
  CONFIRMED: "Paid",
  PROCESSING: "Processing",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
  REFUNDED: "Refunded",
};

export const PAYMENT_STATUS_COPY: Record<string, { label: string; color: string }> = {
  PAID: { label: "Paid", color: "var(--admin-success)" },
  PENDING: { label: "Awaiting payment", color: "var(--admin-warning)" },
  FAILED: { label: "Not paid", color: "var(--admin-danger)" },
  REFUNDED: { label: "Refunded", color: "var(--admin-text-secondary)" },
};
