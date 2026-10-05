export interface OrderListItem {
  id: string;
  orderNumber: string;
  status: string;
  total: number;
  itemCount: number;
  createdAt: string;
}

export interface OrderDetail {
  id: string;
  orderNumber: string;
  status: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string | null;
  shippingAddress: {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    province?: string;
    postalCode: string;
    country: string;
  };
  shippingMethod: string | null;
  shippingCost: number;
  trackingNumber: string | null;
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  total: number;
  paymentStatus: string;
  paymentMethod: string | null;
  paymentId: string | null;
  notes: string | null;
  items: {
    id: string;
    productId: string;
    productName: string;
    productSku: string;
    variantName: string | null;
    quantity: number;
    price: number;
    total: number;
    product?: OrderItemProduct;
  }[];
  bigbuyStatus?: BigBuyOrderStatus | null;
  bigbuyOrderIds?: string[];
  bigbuyRemoteStatus?: string | null;
  bigbuyCarrier?: string | null;
  bigbuyShippingCost?: number | string | null;
  bigbuyError?: string | null;
  bigbuyAttempts?: number;
  bigbuySentAt?: string | null;
  bigbuySyncedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export type BigBuyOrderStatus = "PENDING" | "SENT" | "FAILED" | "SHIPPED" | "CANCELLED";

export interface OrderItemProduct {
  id: string;
  slug: string;
  sku: string;
  ean: string | null;
  gtin: string | null;
  mpn: string | null;
  metadata: { source?: string; bigbuyId?: number } | null;
  images: { url: string }[];
}
