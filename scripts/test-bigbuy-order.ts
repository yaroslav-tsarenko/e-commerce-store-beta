import "dotenv/config";
import { BigBuyClient, BigBuyHttpError, type BigBuyOrderRequest } from "../src/lib/bigbuy/client";

const args = process.argv.slice(2);
const has = (flag: string) => args.includes(flag);
const val = (flag: string, fallback?: string) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : fallback;
};

const SANDBOX = has("--sandbox");
const CREATE = has("--create");
const sku = val("--sku");
const quantity = Number(val("--qty", "1"));
const country = (val("--country", "RO") ?? "RO").toUpperCase();
const postcode = val("--postcode", "010011") ?? "010011";

async function main() {
  const token = SANDBOX ? process.env.BIGBUY_API_SANDBOX : process.env.BIGBUY_API_PRODUCTION;
  if (!token) throw new Error(`Missing ${SANDBOX ? "BIGBUY_API_SANDBOX" : "BIGBUY_API_PRODUCTION"} in .env`);
  if (!sku) throw new Error("Pass --sku <BigBuy reference>, e.g. --sku V1300148");
  if (CREATE && !SANDBOX) throw new Error("--create is only allowed together with --sandbox");

  const client = new BigBuyClient({
    token,
    env: SANDBOX ? "sandbox" : "production",
    maxRetries: 2,
    maxWaitMs: 30_000,
    log: console.log,
  });
  const products = [{ reference: sku, quantity }];

  console.log(`\n▶ ${SANDBOX ? "sandbox" : "production"} · ${sku} × ${quantity} → ${country} ${postcode}\n`);

  console.log("① Shipping options");
  const options = await client.getShippingOptions({ isoCountry: country, postcode, products });
  console.log(JSON.stringify(options, null, 2));

  const carriers = (process.env.BIGBUY_CARRIERS ?? "").split(",").map((name) => name.trim().toLowerCase()).filter(Boolean);
  const fromOptions = Array.isArray((options as Record<string, unknown>).shippingOptions)
    ? ((options as { shippingOptions: { shippingService?: { name?: string } }[] }).shippingOptions)
        .map((option) => option.shippingService?.name?.toLowerCase())
        .filter((name): name is string => Boolean(name))
    : [];
  const carrierNames = carriers.length ? carriers : [...new Set(fromOptions)];
  console.log(`\n  carriers used: ${carrierNames.join(", ") || "(none)"}\n`);

  const order: BigBuyOrderRequest = {
    internalReference: `test-${Date.now()}`,
    language: process.env.BIGBUY_LANGUAGE || "en",
    paymentMethod: process.env.BIGBUY_PAYMENT_METHOD || "moneybox",
    carriers: carrierNames.map((name) => ({ name })),
    shippingAddress: {
      firstName: "Test",
      lastName: "Order",
      country,
      postcode,
      town: "Bucuresti",
      address: "Strada Test 1",
      phone: "+40700000000",
      email: "test@example.com",
      comment: "",
    },
    products,
  };

  console.log("② Check order");
  console.log(JSON.stringify(await client.checkOrder(order), null, 2));

  if (CREATE) {
    console.log("\n③ Create order (sandbox)");
    const created = await client.createOrder(order);
    console.log(JSON.stringify(created, null, 2));
    const ids = Array.isArray((created as Record<string, unknown>).orders)
      ? (created as { orders: { id: number }[] }).orders.map((entry) => entry.id)
      : [];
    for (const id of ids) {
      console.log(`\n④ Order ${id}`);
      console.log(JSON.stringify(await client.getOrder(id), null, 2));
      console.log(JSON.stringify(await client.getOrderTracking(id).catch((error) => String(error)), null, 2));
    }
  }
}

main().catch((error) => {
  if (error instanceof BigBuyHttpError) {
    console.error(`\n✗ HTTP ${error.status} on ${error.path}\n${error.body}`);
  } else {
    console.error(error);
  }
  process.exitCode = 1;
});
