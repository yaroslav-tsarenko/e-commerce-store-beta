"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs/Breadcrumbs";
import { motion, AnimatePresence } from "framer-motion";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--color-border)",
      overflow: "hidden",
      background: open ? "var(--color-bg-secondary)" : "var(--color-bg)",
      transition: "background-color 0.2s",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.125rem 1.25rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "1rem",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--color-text)" }}>{q}</span>
        <ChevronDown
          size={18}
          style={{
            color: "var(--color-text-tertiary)",
            flexShrink: 0,
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "none",
          }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 1.25rem 1.125rem", fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const t = useTranslations("faqPage");
  const nav = useTranslations("nav");
  const faqs = Array.from({ length: 8 }, (_, i) => ({
    q: t(`q${i + 1}`),
    a: t(`a${i + 1}`),
  }));

  return (
    <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 1rem 4rem" }}>
      <Breadcrumbs items={[{ label: nav("home"), href: "/" }, { label: t("breadcrumb") }]} />

      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "clamp(1.5rem, 5.5vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "0.75rem", wordBreak: "break-word" }}>
            {t("heading1")} <span className="gradient-text">{t("heading2")}</span>
          </h1>
          <p style={{ fontSize: "clamp(0.875rem, 2.4vw, 1rem)", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
            {t("subtitle")}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
}
