"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Sparkles, ShieldCheck, Truck } from "lucide-react";
import styles from "./ServicePromise.module.css";

export function ServicePromise() {
  const t = useTranslations("homeBlocks.service");
  const bullets = [t("bullet1"), t("bullet2"), t("bullet3"), t("bullet4")];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.layout}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, x: -32 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.eyebrow}>
            <Sparkles size={14} /> {t("eyebrow")}
          </span>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.lead}>{t("lead")}</p>
          <ul className={styles.bullets}>
            {bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
              >
                <CheckCircle2 size={18} />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className={styles.tileBig}>
            <Truck size={42} />
            <div>
              <span className={styles.tileNum}>24h</span>
              <span className={styles.tileLabel}>{t("tileDelivery")}</span>
            </div>
          </div>
          <div className={styles.tileSmall} style={{ background: "linear-gradient(135deg, #FF5A00 0%, #FFB800 100%)" }}>
            <ShieldCheck size={28} />
            <div>
              <span className={styles.tileNumSmall}>2y</span>
              <span className={styles.tileLabelSmall}>{t("tileWarranty")}</span>
            </div>
          </div>
          <div className={styles.tileSmall} style={{ background: "linear-gradient(135deg, #22c55e 0%, #06B6D4 100%)" }}>
            <Sparkles size={28} />
            <div>
              <span className={styles.tileNumSmall}>4.9</span>
              <span className={styles.tileLabelSmall}>{t("tileScore")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
