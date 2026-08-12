import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["ro", "hu", "bg", "en"],
  defaultLocale: "ro",
  // No locale in the URL. next-intl resolves the active locale per request from
  // the NEXT_LOCALE cookie (the persisted user choice), then the browser's
  // Accept-Language header, then falls back to `ro`. Any legacy prefixed URL
  // like `/en/...` is redirected to its clean, unprefixed form by the middleware.
  localePrefix: "never",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
