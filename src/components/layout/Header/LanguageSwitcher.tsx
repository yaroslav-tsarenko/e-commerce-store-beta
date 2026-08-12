"use client";

import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { createPortal } from "react-dom";
import { Globe, Loader2, Check } from "lucide-react";
import { useState, useRef, useEffect, useTransition } from "react";
import { routing, useRouter, usePathname } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  ro: "RO",
  hu: "HU",
  bg: "BG",
  en: "EN",
};

const LOCALE_NAMES: Record<string, string> = {
  ro: "Română",
  hu: "Magyar",
  bg: "Български",
  en: "English",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  // Locale-free href with the active query params preserved (e.g. catalog
  // filters). next-intl adds the target locale prefix; the middleware then
  // syncs the NEXT_LOCALE cookie and redirects back to this clean URL.
  const query = Object.fromEntries(searchParams.entries());
  const href = { pathname, query };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: string) => {
    setOpen(false);
    if (newLocale === locale) return;

    // next-intl's router adds the correct locale prefix and syncs the
    // NEXT_LOCALE cookie itself. A single `replace` to the new locale's path
    // re-renders the server components — no manual cookie or `refresh()` needed
    // (the extra refresh caused a redundant second server render).
    startTransition(() => {
      router.replace(href, { locale: newLocale });
    });
  };

  const overlay =
    pending
      ? createPortal(
          <div
            role="alertdialog"
            aria-busy="true"
            aria-live="assertive"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(15, 23, 42, 0.55)",
              backdropFilter: "blur(3px)",
              WebkitBackdropFilter: "blur(3px)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "2rem 2.5rem",
                background: "var(--color-bg, #fff)",
                color: "var(--color-text, #1F2933)",
                borderRadius: "var(--radius-lg, 12px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                minWidth: "220px",
              }}
            >
              <Loader2
                size={40}
                style={{ animation: "lang-spin 0.8s linear infinite", color: "#0072CE" }}
              />
              <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                {t("changingLanguage")}
              </span>
            </div>
            <style>{`@keyframes lang-spin { to { transform: rotate(360deg); } }`}</style>
          </div>,
          document.body
        )
      : null;

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        aria-label={t("changeLanguage")}
        disabled={pending}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "rgba(255,255,255,0.8)",
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "4px",
          padding: "0.25rem 0.5rem",
          cursor: pending ? "wait" : "pointer",
          transition: "background 0.15s",
        }}
      >
        <Globe size={14} />
        {LOCALE_LABELS[locale] ?? locale.toUpperCase()}
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "0.5rem",
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            boxShadow: "var(--shadow-md)",
            zIndex: 50,
            minWidth: "9rem",
          }}
        >
          {routing.locales.map((key) => (
            <button
              key={key}
              onClick={() => switchLocale(key)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.75rem",
                width: "100%",
                padding: "0.5rem 0.85rem",
                textAlign: "left",
                fontSize: "0.875rem",
                fontWeight: key === locale ? 700 : 400,
                background: key === locale ? "var(--color-bg-tertiary)" : "transparent",
                color: "var(--color-text)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span>{LOCALE_NAMES[key] ?? key.toUpperCase()}</span>
              {key === locale && <Check size={14} color="#0072CE" />}
            </button>
          ))}
        </div>
      )}
      {overlay}
    </div>
  );
}
