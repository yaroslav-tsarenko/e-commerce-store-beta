# BigBuy order automation

After Stripe confirms a payment, orders that contain BigBuy products are placed
at BigBuy automatically, paid from the BigBuy **Money Box** (wallet), and the
tracking number is pulled back and emailed to the customer.

## Flow

1. `checkout.session.completed` → order is `PAID`; if it has BigBuy items its
   `bigbuyStatus` becomes `PENDING`.
2. If `BIGBUY_AUTO_ORDERS=true`, the webhook places the order right away
   (shipping options → check → create). Reference = our `orderNumber`.
3. `/api/cron/orders` (hourly) places any order still `PENDING` after
   10 minutes, then checks placed orders for status/tracking. When tracking
   appears the order becomes `SHIPPED` and the shipped email is sent.
4. `/api/cron/bigbuy-stock` (every 6 h) copies BigBuy stock into
   `Product.quantity`. Checkout refuses BigBuy items with insufficient stock.
5. Failures (`FAILED`, `CANCELLED`, partial orders) are emailed to
   `BIGBUY_ALERT_EMAIL` and shown in the admin order page with a retry button.
   Failed orders are never retried automatically, so an order placed by hand
   at BigBuy cannot be duplicated.

Products are recognised as BigBuy items by `metadata.source = "bigbuy"`
(set by `npm run import:bigbuy`). Other items in the same order are marked
"fulfil manually" in the admin.

## Setup

1. `npx prisma db push` — adds the `bigbuy*` columns to `Order`.
2. Top up the BigBuy Money Box.
3. Env vars (Vercel → Settings → Environment Variables):

| var | value |
|-----|-------|
| `BIGBUY_ENV` | `production` (or `sandbox` while testing) |
| `BIGBUY_AUTO_ORDERS` | `true` to place orders automatically; anything else = only the admin button |
| `BIGBUY_PAYMENT_METHOD` | `moneybox` |
| `BIGBUY_LANGUAGE` | `en` |
| `BIGBUY_CARRIERS` | optional, comma list (e.g. `gls,dhl`); empty = all carriers BigBuy offers, cheapest first |
| `BIGBUY_STOCK_TAXONOMY` | optional, Electronics taxonomy id to limit the stock download |
| `BIGBUY_ALERT_EMAIL` | inbox for failure alerts |
| `CRON_SECRET` | random string; Vercel sends it to the cron routes |

Vercel Hobby only allows daily crons — on Hobby change both schedules in
`vercel.json` to once a day.

## Test before going live

```bash
npm run bigbuy:test-order -- --sandbox --sku V1300148 --country RO --postcode 010011
npm run bigbuy:test-order -- --sandbox --sku V1300148 --create
```

The first command prints shipping options and the check-order response
without creating anything. If the check rejects the carrier names, set
`BIGBUY_CARRIERS` to the names BigBuy expects.

## Stripe payment status

`paymentStatus` is the source of truth for the admin "Payment" column:
`PAID`, `PENDING` (awaiting payment), `FAILED` (checkout expired / not paid),
`REFUNDED`.

- Webhook `/api/webhooks/stripe` must be subscribed to
  `checkout.session.completed`, `checkout.session.expired`,
  `checkout.session.async_payment_succeeded`,
  `checkout.session.async_payment_failed`, with `STRIPE_WEBHOOK_SECRET` set.
- As a fallback the admin orders list, the order page and the hourly
  `/api/cron/orders` look up unpaid orders' Checkout Sessions in Stripe and
  fix the status. Orders older than 48 h that turn out to be paid are only
  marked as paid: no emails, no stock change, no automatic BigBuy order
  (use the "Send to BigBuy" button).
- Saving a tracking number in the admin moves New/Paid/Processing orders to
  `SHIPPED` and sends the shipped email.
