"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import {
  ChevronLeft, ChevronRight, ArrowRight, Truck, ShieldCheck,
  RotateCcw, Zap, Headphones, Watch, BatteryCharging,
  Sparkles,
} from "lucide-react";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";
import styles from "./HeroCarousel.module.css";

interface SlideData {
  id: string;
  title: string;
  subtitle?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  linkUrl?: string | null;
  ctaLabel?: string | null;
  bgColor: string;
  textColor: string;
  badgeText?: string | null;
}

interface DealData {
  id: string;
  title: string;
  oldPrice?: string | null;
  newPrice?: string | null;
  discountText?: string | null;
  linkUrl?: string | null;
  imageUrl?: string | null;
}

interface SlideConfig {
  id: "audio" | "power" | "smart";
  primaryHref: string;
  secondaryHref: string;
  gradient: string;
  accent: string;
  bgImage: StaticImageData;
  thumbIcon: React.ElementType;
}

// Visual/link config only — all copy is pulled from next-intl messages
// (homeBlocks.hero.slides.<id>) so the hero is fully localized.
const slideConfig: SlideConfig[] = [
  {
    id: "audio",
    primaryHref: "/catalog/audio-and-hi-fi-equipment",
    secondaryHref: "/catalog/headphones",
    gradient: "linear-gradient(135deg, #0B2447 0%, #1E3A6F 45%, #2563EB 100%)",
    accent: "#F97316",
    bgImage: banner1,
    thumbIcon: Headphones,
  },
  {
    id: "power",
    primaryHref: "/catalog/batteries-and-chargers",
    secondaryHref: "/catalog/power-strips",
    gradient: "linear-gradient(135deg, #0F172A 0%, #1F2937 50%, #064E3B 100%)",
    accent: "#10B981",
    bgImage: banner2,
    thumbIcon: BatteryCharging,
  },
  {
    id: "smart",
    primaryHref: "/catalog?sort=newest",
    secondaryHref: "/catalog?search=watch",
    gradient: "linear-gradient(135deg, #1E1B4B 0%, #4C1D95 50%, #7C3AED 100%)",
    accent: "#FACC15",
    bgImage: banner3,
    thumbIcon: Watch,
  },
];

const trustConfig = [
  { icon: Truck, key: "shipping" },
  { icon: RotateCcw, key: "returns" },
  { icon: ShieldCheck, key: "warranty" },
  { icon: Zap, key: "dispatch" },
] as const;

interface Props {
  slides: SlideData[];
  deals: DealData[];
}

export function HeroCarousel({ deals }: Props) {
  // We always use MisaElectro-tailored slides for the hero.
  // Admin-configured slides (`slides` prop) are intentionally ignored here —
  // they belong on dedicated marketing landing pages, not the brand hero.
  const t = useTranslations("homeBlocks");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const slide = slideConfig[current];
  const eyebrow = t(`hero.slides.${slide.id}.eyebrow`);

  const go = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(((idx % slideConfig.length) + slideConfig.length) % slideConfig.length);
    },
    [current]
  );

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % slideConfig.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero} aria-label={t("hero.featuredCollections")}>
      <div className={`${styles.heroContainer} ${deals.length > 0 ? styles.withDeals : ""}`}>
        <div className={styles.heroMain}>
          <div className={styles.stage} style={{ background: slide.gradient }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${slide.id}-bg`}
                className={styles.bgImageWrap}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
              >
                <Image
                  src={slide.bgImage}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 1280px"
                  placeholder="blur"
                  className={styles.bgImage}
                  priority
                />
                <span className={styles.bgOverlay} />
                <span className={styles.glow1} style={{ background: slide.accent }} />
                <span className={styles.glow2} />
                <span className={styles.gridDots} />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.id}
                className={styles.slide}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.copy}>
                  <span
                    className={styles.eyebrow}
                    style={{ borderColor: slide.accent + "55", color: slide.accent }}
                  >
                    <Sparkles size={14} />
                    {eyebrow}
                  </span>
                  <h1 className={styles.title}>
                    {t(`hero.slides.${slide.id}.titleLine1`)}
                    <br />
                    <span className="hero-highlight">
                      {t(`hero.slides.${slide.id}.titleHighlight`)}
                    </span>
                  </h1>
                  <p className={styles.subtitle}>{t(`hero.slides.${slide.id}.subtitle`)}</p>

                  <div className={styles.actions}>
                    <Link
                      href={slide.primaryHref}
                      className={styles.ctaPrimary}
                      style={{
                        background: slide.accent,
                        boxShadow: `0 12px 28px -10px ${slide.accent}`,
                      }}
                    >
                      {t(`hero.slides.${slide.id}.primaryCta`)}
                      <ArrowRight size={16} />
                    </Link>
                    <Link href={slide.secondaryHref} className={styles.ctaSecondary}>
                      {t(`hero.slides.${slide.id}.secondaryCta`)}
                    </Link>
                  </div>

                  <ul className={styles.trust}>
                    {trustConfig.map((item) => (
                      <li key={item.key} className={styles.trustItem}>
                        <span className={styles.trustIcon}>
                          <item.icon size={14} />
                        </span>
                        <span className={styles.trustText}>
                          <span className={styles.trustLabel}>
                            {t(`hero.trust.${item.key}Label`)}
                          </span>
                          <span className={styles.trustSub}>
                            {t(`hero.trust.${item.key}Sub`)}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.visual} aria-hidden="true">
                  <motion.div
                    className={styles.priceTag}
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.55, delay: 0.25 }}
                  >
                    <span className={styles.priceTagFrom}>{t("hero.priceFrom")}</span>
                    <span className={styles.priceTagPrice}>€8.29</span>
                    <span className={styles.priceTagSub}>{t("hero.inStock")}</span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.controls}>
              <button
                type="button"
                className={styles.arrow}
                onClick={prev}
                aria-label={t("hero.prevSlide")}
              >
                <ChevronLeft size={18} />
              </button>
              <div className={styles.dots}>
                {slideConfig.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    style={i === current ? { background: slide.accent } : undefined}
                  />
                ))}
              </div>
              <button
                type="button"
                className={styles.arrow}
                onClick={next}
                aria-label={t("hero.nextSlide")}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className={styles.thumbs}>
            {slideConfig.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(i)}
                className={`${styles.thumb} ${i === current ? styles.thumbActive : ""}`}
              >
                <span className={styles.thumbIcon}>
                  <s.thumbIcon size={16} />
                </span>
                <span className={styles.thumbMeta}>
                  <span className={styles.thumbLabel}>{t(`hero.slides.${s.id}.thumbLabel`)}</span>
                  <span className={styles.thumbHint}>
                    {t(`hero.slides.${s.id}.eyebrow`).split("·")[0].trim()}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {deals.length > 0 && (
          <aside className={styles.sideDeals} aria-label={t("hero.hotDeals")}>
            <div className={styles.sideHeading}>
              <span className={styles.sideHeadingText}>{t("hero.hotDeals")}</span>
              <Link href="/catalog?onSale=true" className={styles.sideHeadingLink}>
                {t("hero.seeAll")}
              </Link>
            </div>
            {deals.slice(0, 2).map((deal) => (
              <Link
                key={deal.id}
                href={deal.linkUrl || "/catalog"}
                className={styles.dealCard}
              >
                {deal.discountText && (
                  <span className={styles.dealDiscount}>{deal.discountText}</span>
                )}
                <div className={styles.dealImage}>
                  {deal.imageUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={deal.imageUrl} alt={deal.title} className={styles.dealImg} />
                  ) : (
                    <div className={styles.dealImagePlaceholder} />
                  )}
                </div>
                <h4 className={styles.dealTitle}>{deal.title}</h4>
                <div className={styles.dealPrices}>
                  {deal.oldPrice && <span className={styles.dealOld}>{deal.oldPrice}</span>}
                  {deal.newPrice && <span className={styles.dealNew}>{deal.newPrice}</span>}
                </div>
              </Link>
            ))}
          </aside>
        )}
      </div>
    </section>
  );
}
