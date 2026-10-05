/**
 * Minimal BigBuy REST API client.
 *
 * Docs: https://api.bigbuy.eu/rest/doc
 *
 * Notes:
 *  - Catalog endpoints are heavily rate limited (e.g. /products is 10 req/hour,
 *    /taxonomies 24 req/hour). This client honours HTTP 429 + `Retry-After`
 *    and backs off automatically so a long import can run unattended.
 *  - The catalog is cached on BigBuy's side; a fresh key may receive HTTP 409
 *    ("No products found in cache") on the very first call — we treat that as
 *    "retry after a short wait".
 */

export type BigBuyEnv = "production" | "sandbox";

const BASE_URLS: Record<BigBuyEnv, string> = {
  production: "https://api.bigbuy.eu",
  sandbox: "https://api.sandbox.bigbuy.eu",
};

export interface BigBuyClientOptions {
  token: string;
  env?: BigBuyEnv;
  /** Max attempts per request before giving up. Default 6. */
  maxRetries?: number;
  /** Called with human-readable progress/log lines. */
  log?: (msg: string) => void;
  maxWaitMs?: number;
}

export class BigBuyHttpError extends Error {
  readonly status: number;
  readonly path: string;
  readonly body: string;

  constructor(status: number, path: string, body: string) {
    super(`BigBuy: HTTP ${status} on ${path} — ${body.slice(0, 300)}`);
    this.name = "BigBuyHttpError";
    this.status = status;
    this.path = path;
    this.body = body;
  }

  json(): unknown {
    try {
      return JSON.parse(this.body);
    } catch {
      return null;
    }
  }
}

export interface BigBuyOrderProduct {
  reference: string;
  quantity: number;
}

export interface BigBuyShippingAddress {
  firstName: string;
  lastName: string;
  country: string;
  postcode: string;
  town: string;
  address: string;
  phone: string;
  email: string;
  comment?: string;
  companyName?: string;
  vatNumber?: string;
}

export interface BigBuyOrderRequest {
  internalReference: string;
  language: string;
  paymentMethod: string;
  carriers: { name: string }[];
  shippingAddress: BigBuyShippingAddress;
  products: BigBuyOrderProduct[];
}

type RequestParams = Record<string, string | number | undefined>;

interface RequestOptions {
  method?: "GET" | "POST";
  params?: RequestParams;
  body?: unknown;
  shouldRetry: (status: number) => boolean;
}

const retryCatalog = (status: number) => status === 429 || status === 409 || status >= 500;
const retryOrders = (status: number) => status === 429 || status >= 500;

/** A node in BigBuy's taxonomy tree (their "categories"). */
export interface BigBuyTaxonomy {
  id: number;
  parentTaxonomy: number | null;
  name: string;
  url?: string;
  sort?: number;
  isoCode?: string;
  // tolerant: BigBuy occasionally nests children, we flatten on read.
  [k: string]: unknown;
}

/** A product row from /catalog/products. */
export interface BigBuyProduct {
  id: number;
  sku: string;
  wholesalePrice?: number;
  retailPrice?: number;
  ean13?: string;
  manufacturer?: number;
  condition?: string;
  weight?: number;
  width?: number;
  height?: number;
  depth?: number;
  inShopsDisepublished?: boolean;
  [k: string]: unknown;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class BigBuyClient {
  private base: string;
  private token: string;
  private maxRetries: number;
  private log: (msg: string) => void;
  private maxWaitMs: number;

  constructor(opts: BigBuyClientOptions) {
    if (!opts.token) throw new Error("BigBuyClient: missing API token");
    this.token = opts.token;
    this.base = BASE_URLS[opts.env ?? "production"];
    this.maxRetries = opts.maxRetries ?? 6;
    this.log = opts.log ?? (() => {});
    this.maxWaitMs = opts.maxWaitMs ?? Infinity;
  }

  private buildUrl(path: string, params: Record<string, string | number | undefined>): string {
    const qs = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined && v !== null && v !== "") qs.set(k, String(v));
    }
    const sep = path.includes("?") ? "&" : "?";
    const query = qs.toString();
    return `${this.base}${path}${query ? sep + query : ""}`;
  }

  /** Low-level GET returning parsed JSON, with rate-limit aware retries. */
  async get<T = unknown>(
    path: string,
    params: RequestParams = {}
  ): Promise<T> {
    return this.request<T>(path, { params, shouldRetry: retryCatalog });
  }

  async post<T = unknown>(path: string, body: unknown, params: RequestParams = {}): Promise<T> {
    return this.request<T>(path, { method: "POST", params, body, shouldRetry: retryOrders });
  }

  private async request<T>(path: string, options: RequestOptions): Promise<T> {
    const url = this.buildUrl(path, options.params ?? {});
    const method = options.method ?? "GET";

    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      let res: Response;
      try {
        res = await fetch(url, {
          method,
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: options.body === undefined ? undefined : JSON.stringify(options.body),
        });
      } catch (err) {
        const wait = Math.min(60_000, 2 ** attempt * 1000);
        if (wait > this.maxWaitMs) throw err;
        this.log(`  network error (${(err as Error).message}); retry in ${wait / 1000}s`);
        await sleep(wait);
        continue;
      }

      if (res.ok) {
        const text = await res.text();
        if (!text) return [] as unknown as T;
        try {
          return JSON.parse(text) as T;
        } catch {
          throw new Error(`BigBuy: invalid JSON from ${path}: ${text.slice(0, 200)}`);
        }
      }

      if (options.shouldRetry(res.status) && attempt < this.maxRetries) {
        const retryAfter = Number(res.headers.get("retry-after"));
        const wait = Number.isFinite(retryAfter) && retryAfter > 0
          ? retryAfter * 1000
          : Math.min(15 * 60_000, 2 ** attempt * 5000);
        if (wait <= this.maxWaitMs) {
          this.log(
            `  HTTP ${res.status} on ${path}; waiting ${Math.round(wait / 1000)}s ` +
              `(attempt ${attempt}/${this.maxRetries})`
          );
          await sleep(wait);
          continue;
        }
      }

      const body = await res.text().catch(() => "");
      throw new BigBuyHttpError(res.status, path, body);
    }

    throw new Error(`BigBuy: exhausted retries on ${path}`);
  }

  /** Full taxonomy ("category") tree. */
  getTaxonomies(isoCode = "en"): Promise<BigBuyTaxonomy[]> {
    return this.get<BigBuyTaxonomy[]>("/rest/catalog/taxonomies.json", { isoCode });
  }

  /** Products, optionally scoped to a taxonomy sub-tree. pageSize max 10000. */
  getProducts(opts: {
    parentTaxonomy?: number;
    page?: number;
    pageSize?: number;
    isoCode?: string;
  } = {}): Promise<BigBuyProduct[]> {
    return this.get<BigBuyProduct[]>("/rest/catalog/products.json", {
      parentTaxonomy: opts.parentTaxonomy,
      page: opts.page,
      pageSize: opts.pageSize,
      isoCode: opts.isoCode,
    });
  }

  /** Localised product names / descriptions / urls. */
  getProductsInformation(opts: {
    isoCode?: string;
    parentTaxonomy?: number;
    page?: number;
    pageSize?: number;
  } = {}): Promise<Array<Record<string, unknown>>> {
    return this.get("/rest/catalog/productsinformation.json", {
      isoCode: opts.isoCode ?? "en",
      parentTaxonomy: opts.parentTaxonomy,
      page: opts.page,
      pageSize: opts.pageSize,
    });
  }

  /** Product images. */
  getProductsImages(opts: {
    parentTaxonomy?: number;
    page?: number;
    pageSize?: number;
  } = {}): Promise<Array<Record<string, unknown>>> {
    return this.get("/rest/catalog/productsimages.json", {
      parentTaxonomy: opts.parentTaxonomy,
      page: opts.page,
      pageSize: opts.pageSize,
    });
  }

  /** Map of product -> taxonomy/category ids. */
  getProductsCategories(opts: {
    parentTaxonomy?: number;
    page?: number;
    pageSize?: number;
  } = {}): Promise<Array<Record<string, unknown>>> {
    return this.get("/rest/catalog/productscategories.json", {
      parentTaxonomy: opts.parentTaxonomy,
      page: opts.page,
      pageSize: opts.pageSize,
    });
  }

  /** Available stock per product (best-effort; endpoint may vary by account). */
  getProductsStock(opts: {
    parentTaxonomy?: number;
    page?: number;
    pageSize?: number;
  } = {}): Promise<Array<Record<string, unknown>>> {
    return this.get("/rest/catalog/productsstockavailable.json", {
      parentTaxonomy: opts.parentTaxonomy,
      page: opts.page,
      pageSize: opts.pageSize,
    });
  }

  getShippingOptions(input: {
    isoCountry: string;
    postcode: string;
    products: BigBuyOrderProduct[];
  }): Promise<Record<string, unknown>> {
    return this.post("/rest/shipping/orders.json", {
      order: {
        delivery: { isoCountry: input.isoCountry, postcode: input.postcode },
        products: input.products,
      },
    });
  }

  checkOrder(order: BigBuyOrderRequest): Promise<Record<string, unknown>> {
    return this.post("/rest/order/check/multishipping.json", { order });
  }

  createOrder(order: BigBuyOrderRequest): Promise<Record<string, unknown>> {
    return this.post("/rest/order/create/multishipping.json", { order });
  }

  getOrder(id: string | number): Promise<Record<string, unknown>> {
    return this.request(`/rest/order/${encodeURIComponent(String(id))}.json`, { shouldRetry: retryOrders });
  }

  getOrderByReference(reference: string): Promise<Record<string, unknown>> {
    return this.request(`/rest/order/reference/${encodeURIComponent(reference)}.json`, { shouldRetry: retryOrders });
  }

  getOrderTracking(id: string | number): Promise<unknown> {
    return this.request(`/rest/tracking/order/${encodeURIComponent(String(id))}.json`, { shouldRetry: retryOrders });
  }
}

/** Read a value from an object trying several possible key names. */
export function pick<T = unknown>(
  obj: Record<string, unknown> | undefined | null,
  keys: string[]
): T | undefined {
  if (!obj) return undefined;
  for (const k of keys) {
    const v = obj[k];
    if (v !== undefined && v !== null) return v as T;
  }
  return undefined;
}
