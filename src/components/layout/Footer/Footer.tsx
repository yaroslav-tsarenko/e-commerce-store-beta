"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { BrenwElectroLogo } from "../BrenwElectroLogo";
import visaLogo from "@/assets/visa-logo.svg";
import mastercardLogo from "@/assets/mastercard-logo.svg";
import pciDssLogo from "@/assets/pci-dss-compliant-logo-vector.svg";
import styles from "./Footer.module.css";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label="BrenwElectro — brenwelectro.com">
              <BrenwElectroLogo size={32} />
              <span className={styles.logoBrand}>
                <span className={styles.logoBrandPrimary}>Brenw</span>
                <span className={styles.logoBrandAccent}>Electro</span>
              </span>
            </Link>
            <p className={styles.brandDesc}>
              {t("brandDesc")}
            </p>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>{t("shop")}</h3>
            <ul className={styles.links}>
              <li><Link href="/catalog" className={styles.link}>{nav("catalog")}</Link></li>
              <li><Link href="/catalog?sort=newest" className={styles.link}>{nav("newArrivals")}</Link></li>
              <li><Link href="/catalog?onSale=true" className={styles.link}>{t("sale")}</Link></li>
              <li><Link href="/catalog?sort=popular" className={styles.link}>{t("bestSellers")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>{nav("account")}</h3>
            <ul className={styles.links}>
              <li><Link href="/auth/login" className={styles.link}>{nav("login")}</Link></li>
              <li><Link href="/account/orders" className={styles.link}>{t("myOrders")}</Link></li>
              <li><Link href="/account/wishlist" className={styles.link}>{nav("wishlist")}</Link></li>
              <li><Link href="/contact" className={styles.link}>{t("contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>{t("info")}</h3>
            <ul className={styles.links}>
              <li><Link href="/policies/terms" className={styles.link}>{t("terms")}</Link></li>
              <li><Link href="/policies/privacy" className={styles.link}>{t("privacy")}</Link></li>
              <li><Link href="/policies/returns" className={styles.link}>{t("returns")}</Link></li>
              <li><Link href="/policies/shipping" className={styles.link}>{t("shippingPolicy")}</Link></li>
              <li><Link href="/policies/warranty" className={styles.link}>{t("warranty")}</Link></li>
              <li><Link href="/policies/payment" className={styles.link}>{t("paymentPolicy")}</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <p className={styles.copyright}>
              {t("copyright", { year: currentYear, storeName: "BrenwElectro" })}
            </p>
            <p className={styles.legalEntity}>
              BRENWICK LIMITED · Company number 17550297 · Suite 34, Cariocca Business Park, 2 Sawley Road, Manchester, England, M40 8BB
            </p>
            <p className={styles.legalEntity}>
              info@brenwelectro.com · b2b@brenwelectro.com
            </p>
          </div>
          <div className={styles.paymentMethods}>
            <span className={styles.paymentBadge}>
              <Image src={visaLogo} alt="Visa" height={100} width={100} className={styles.paymentImg} />
            </span>
            <span className={styles.paymentBadge}>
              <Image src={mastercardLogo} alt="Mastercard" height={100} width={100} className={styles.paymentImg} />
            </span>
            <span className={styles.paymentBadge}>
              <Image src={pciDssLogo} alt="PCI DSS Compliant" height={100} width={100} className={styles.paymentImg} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
