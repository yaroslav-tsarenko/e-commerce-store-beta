"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion, useInView } from "framer-motion";
import { BookOpen, Calculator, FileText, ArrowUpRight } from "lucide-react";
import styles from "./KnowledgeHub.module.css";

export function KnowledgeHub() {
  const t = useTranslations("homeSections");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const articles = [
    { icon: BookOpen, eyebrow: t("kh1Eyebrow"), title: t("kh1Title"), desc: t("kh1Desc"), href: "/about", accent: "#0072CE" },
    { icon: Calculator, eyebrow: t("kh2Eyebrow"), title: t("kh2Title"), desc: t("kh2Desc"), href: "/about", accent: "#FF5A00" },
    { icon: FileText, eyebrow: t("kh3Eyebrow"), title: t("kh3Title"), desc: t("kh3Desc"), href: "/about", accent: "#22C55E" },
  ];

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>{t("khEyebrow")}</span>
          <h2 className={styles.title}>{t("khTitle")}</h2>
          <p className={styles.subtitle}>
            {t("khSubtitle")}
          </p>
        </div>
        <Link href="/about" className={styles.allLink}>
          {t("khBrowseAll")} <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className={styles.grid}>
        {articles.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Link href={a.href} className={styles.card}>
              <div className={styles.iconWrap} style={{ background: `${a.accent}1A`, color: a.accent }}>
                <a.icon size={20} />
              </div>
              <span className={styles.cardEyebrow} style={{ color: a.accent }}>{a.eyebrow}</span>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.cardDesc}>{a.desc}</p>
              <span className={styles.cardCta}>
                {t("khRead")} <ArrowUpRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
