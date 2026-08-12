import { Breadcrumbs } from "@/components/layout/Breadcrumbs/Breadcrumbs";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import styles from "./PolicyLayout.module.css";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  const nav = useTranslations("nav");
  const t = useTranslations("policyLayout");
  return (
    <div className={styles.container}>
      <Breadcrumbs
        items={[
          { label: nav("home"), href: "/" },
          { label: t("policies"), href: "/policies" },
          { label: title },
        ]}
      />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <p className={styles.lastUpdated}>{t("lastUpdated")}: {lastUpdated}</p>
        {children}
      </div>
    </div>
  );
}

export function ContactBlock() {
  const t = useTranslations("policyLayout");
  return (
    <div className={styles.contactBlock}>
      <p>
        <strong>MISARELIANA S.R.L.</strong>
        <br />
        {t("registrationNumber")}: 54316682
        <br />
        {t("registeredOffice")}: IAŞI, Mun. Iaşi, Str. Fântânilor 43
        <br />
        {t("generalEmail")}: info@misaelectro.ro
        <br />
        {t("wholesale")}: b2b@misaelectro.ro
      </p>
    </div>
  );
}
