import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { verifyTokenEdge } from "@/lib/token-edge";

const intlMiddleware = createMiddleware(routing);

// Next.js 16 renamed `middleware.ts` → `proxy.ts` (same functionality).
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.endsWith("/avontshop.html")) {
    const url = request.nextUrl.clone();
    url.pathname = "/avontshop.html";
    return NextResponse.rewrite(url);
  }

  // `/admin` and `/api` live outside the `[locale]` segment, so they must skip
  // the i18n proxy (which would try to rewrite them under a locale).
  if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
    const token = request.cookies.get("session_token")?.value;
    const payload = token ? await verifyTokenEdge(token) : null;

    if (pathname.startsWith("/admin") && !payload) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
  }

  // With `localePrefix: 'never'`, next-intl resolves the locale from the
  // NEXT_LOCALE cookie → Accept-Language → default, rewrites the clean URL to
  // the internal `/[locale]/...` route, and redirects any legacy prefixed URL
  // (e.g. `/en/foo`, `/hu/en`) back to its unprefixed form.
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|fonts|icons|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
