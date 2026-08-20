import { Breadcrumbs } from "@/components/layout/Breadcrumbs/Breadcrumbs";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "policyLayout" });
  return { title: `${t("policies")} — MisaElectro` };
}

const policyLinks = [
  { key: "terms", href: "/policies/terms" },
  { key: "shipping", href: "/policies/shipping" },
  { key: "privacy", href: "/policies/privacy" },
  { key: "cookies", href: "/policies/cookies" },
  { key: "returns", href: "/policies/returns" },
  { key: "payment", href: "/policies/payment" },
  { key: "warranty", href: "/policies/warranty" },
] as const;

export default function PoliciesIndexPage() {
  const t = useTranslations("policiesIndex");
  const nav = useTranslations("nav");
  const policyLayout = useTranslations("policyLayout");
  const policies = policyLinks.map((p) => ({ label: t(p.key), href: p.href }));
  return (
    <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "0 1rem 4rem" }}>
      <Breadcrumbs items={[{ label: nav("home"), href: "/" }, { label: policyLayout("policies") }]} />
      <h1 style={{ fontSize: "clamp(1.375rem, 4.5vw, 1.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem", color: "var(--color-text)" }}>
        {policyLayout("policies")}
      </h1>
      <p style={{ lineHeight: 1.7, color: "var(--color-text-secondary)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
        {t("intro")}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {policies.map((policy) => (
          <li key={policy.href}>
            <Link
              href={policy.href}
              style={{
                display: "block",
                padding: "0.875rem 1rem",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                background: "var(--color-bg)",
                color: "var(--color-text)",
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontWeight: 600,
                transition: "border-color 0.15s, background 0.15s",
              }}
            >
              {policy.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
