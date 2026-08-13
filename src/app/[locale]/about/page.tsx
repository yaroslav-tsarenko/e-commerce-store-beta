import { Breadcrumbs } from "@/components/layout/Breadcrumbs/Breadcrumbs";
import { Heart, Truck, Shield, Award } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "./about.module.css";

export default function AboutPage() {
  const t = useTranslations("aboutPage");
  const nav = useTranslations("nav");
  const values = [
    { icon: <Heart size={28} />, title: t("value1Title"), desc: t("value1Desc") },
    { icon: <Truck size={28} />, title: t("value2Title"), desc: t("value2Desc") },
    { icon: <Shield size={28} />, title: t("value3Title"), desc: t("value3Desc") },
    { icon: <Award size={28} />, title: t("value4Title"), desc: t("value4Desc") },
  ];

  return (
    <div className={styles.wrapper}>
      <Breadcrumbs items={[{ label: nav("home"), href: "/" }, { label: t("breadcrumb") }]} />

      <div className={styles.inner}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            {t("titlePrefix")} <span className="gradient-text">MisaElectro</span>
          </h1>
          <p className={styles.lead}>
            {t("lead")}
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.promise}>
          <h2 className={styles.promiseTitle}>{t("promiseTitle")}</h2>
          <p className={styles.promiseText}>
            {t("promiseText")}
          </p>
        </div>
      </div>
    </div>
  );
}
