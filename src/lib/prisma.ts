import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// pg warns that sslmode `prefer`/`require`/`verify-ca` currently alias
// `verify-full` and will adopt weaker libpq semantics in pg v9. We already rely
// on full verification, so pin `verify-full` to keep the same behavior without
// the deprecation warning on every connect.
function normalizeSslMode(url: string): string {
  try {
    const u = new URL(url);
    const mode = u.searchParams.get("sslmode");
    if (mode && ["prefer", "require", "verify-ca"].includes(mode)) {
      u.searchParams.set("sslmode", "verify-full");
    }
    return u.toString();
  } catch {
    return url;
  }
}

const connectionString = normalizeSslMode(
  process.env.DIRECT_URL ||
    "postgres://postgres:postgres@localhost:51214/template1?sslmode=disable"
);

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
