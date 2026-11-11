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
        <strong>BRENWICK LIMITED</strong>
        <br />
        {t("registrationNumber")}: 17550297
        <br />
        {t("registeredOffice")}: Suite 34, Cariocca Business Park, 2 Sawley Road, Manchester, England, M40 8BB
        <br />
        {t("generalEmail")}: info@brenwelectro.com
        <br />
        {t("wholesale")}: b2b@brenwelectro.com
      </p>
    </div>
  );
}
