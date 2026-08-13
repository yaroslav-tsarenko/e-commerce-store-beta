"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  const t = useTranslations("homeSections");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const reviews = [
    { name: "Markus W.", role: t("review1Role"), quote: t("review1Quote"), rating: 5, initials: "MW", accent: "#0072CE" },
    { name: "Aurélie R.", role: t("review2Role"), quote: t("review2Quote"), rating: 5, initials: "AR", accent: "#FF5A00" },
    { name: "Tom B.", role: t("review3Role"), quote: t("review3Quote"), rating: 5, initials: "TB", accent: "#22C55E" },
  ];

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{t("testimonialsEyebrow")}</span>
        <h2 className={styles.title}>{t("testimonialsTitle")}</h2>
        <p className={styles.subtitle}>
          {t("testimonialsSubtitle")}
        </p>
      </div>

      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <motion.article
            key={r.name}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <Quote className={styles.quoteIcon} size={28} />
            <div className={styles.stars}>
              {Array.from({ length: r.rating }).map((_, idx) => (
                <Star key={idx} size={14} fill="#FFB800" stroke="#FFB800" />
              ))}
            </div>
            <p className={styles.quote}>“{r.quote}”</p>
            <div className={styles.author}>
              <span className={styles.avatar} style={{ background: r.accent }}>
                {r.initials}
              </span>
              <div className={styles.authorMeta}>
                <span className={styles.name}>{r.name}</span>
                <span className={styles.role}>{r.role}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
