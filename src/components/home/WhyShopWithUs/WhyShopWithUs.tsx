"use client";

import { Shield, Zap, Heart, RefreshCw, Award, Headphones } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import styles from "./WhyShopWithUs.module.css";

export function WhyShopWithUs() {
  const t = useTranslations("homeSections");

  const reasons = [
    { icon: <Shield size={24} />, title: t("why1Title"), desc: t("why1Desc"), gradient: "linear-gradient(135deg, #073B66 0%, #0072CE 100%)" },
    { icon: <Zap size={24} />, title: t("why2Title"), desc: t("why2Desc"), gradient: "linear-gradient(135deg, #0072CE 0%, #073B66 100%)" },
    { icon: <Heart size={24} />, title: t("why3Title"), desc: t("why3Desc"), gradient: "linear-gradient(135deg, #FF5A00 0%, #FFB800 100%)" },
    { icon: <RefreshCw size={24} />, title: t("why4Title"), desc: t("why4Desc"), gradient: "linear-gradient(135deg, #22c55e 0%, #0072CE 100%)" },
    { icon: <Award size={24} />, title: t("why5Title"), desc: t("why5Desc"), gradient: "linear-gradient(135deg, #FFB800 0%, #FF5A00 100%)" },
    { icon: <Headphones size={24} />, title: t("why6Title"), desc: t("why6Desc"), gradient: "linear-gradient(135deg, #0072CE 0%, #FF5A00 100%)" },
  ];

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="section-container">
        <div className={styles.header}>
          <h2 className="section-title">{t("whyTitle")}</h2>
          <p className="section-subtitle" style={{ margin: "0.5rem auto 0" }}>
            {t("whySubtitle")}
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className={styles.iconWrap} style={{ background: reason.gradient }}>
                {reason.icon}
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDesc}>{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
