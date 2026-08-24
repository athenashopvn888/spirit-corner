import Link from "next/link";
import styles from "./GBPLandingPage.module.css";
import { gbpLocation } from "../lib/gbp-location";

const categoryLinks: Record<string, string> = {
  Flower: "/menu",
  "Pre-rolls": "/items/prerolls",
  Edibles: "/items/edibles",
  "THC vapes": "/items/vape-disposables",
  Concentrates: "/items/concentrates",
  Accessories: "/items/add-ons",
};

const helpfulLinks = [
  {
    href: "/24-hour-ottawa-dispensary",
    label: "24 Hour Dispensary Ottawa",
    description: "Store hours, address, late-night visit details, and call-ahead information.",
  },
  {
    href: "/info/weed-store-near-gatineau",
    label: "Cannabis Dispensary Near Gatineau",
    description: "Ottawa store details for adults travelling from Gatineau, Hull, Aylmer, or Chelsea.",
  },
  {
    href: "/cheap-weed-ottawa",
    label: "Budget Flower Ottawa",
    description: "Compare listed Budget flower names, sizes, and prices.",
  },
  {
    href: "/native-cigarettes-ottawa",
    label: "Native Smokes Ottawa",
    description: "Compare listed cigarettes and related adult smoke products.",
  },
  {
    href: "/grabba-leaf-shakers",
    label: "Grabba Leaf & Shakers",
    description: "Compare listed Grabba leaf and shaker choices or call ahead.",
  },
  {
    href: "/cannabis-delivery-ottawa",
    label: "Ottawa Delivery Information",
    description: "Review the store’s published delivery status and update information.",
  },
];

const PAGE_URL = "https://spiritcornercannabis.com/weed-dispensary-ottawa";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=251%20Dalhousie%20St%2C%20Ottawa%2C%20ON%20K1N%201E7";

export function GBPLandingPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: gbpLocation.seoTitle,
    description: gbpLocation.metaDescription,
    about: { "@id": "https://spiritcornercannabis.com" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Spirit Corner Cannabis", item: "https://spiritcornercannabis.com" },
      { "@type": "ListItem", position: 2, name: "Ottawa Dispensary", item: PAGE_URL },
    ],
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className={styles.hero}>
        <h1 className={styles.h1}>Spirit Corner Cannabis — 24 Hour Ottawa Dispensary Near ByWard Market</h1>
        <p className={styles.heroTagline}>251 Dalhousie St · Open 24 Hours · Adults 19+</p>
      </header>

      <div className={styles.btnRow}>
        <Link href="/menu" className={`${styles.btn} ${styles.btnPrimary}`}>
          View Menu
        </Link>
        <a href={`tel:${gbpLocation.phoneIntl}`} className={`${styles.btn} ${styles.btnSecondary}`}>
          Call Store
        </a>
        <a href={DIRECTIONS_URL} className={`${styles.btn} ${styles.btnSecondary}`} target="_blank" rel="noopener noreferrer">
          Directions
        </a>
      </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>Downtown Ottawa Store Information</h2>
        <p className={styles.introText}>
          Spirit Corner Cannabis is at 251 Dalhousie St near ByWard Market and
          Lowertown. The storefront is open 24 hours a day, seven days a week for
          adult in-store shopping.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Compare Listed Product Categories</h2>
        <p className={styles.infoText}>
          Adults can compare five flower tiers plus listed pre-rolls, edibles,
          vape products, concentrates, and accessories. Listings and prices can
          change, so call ahead when a particular product matters.
        </p>
        <div className={styles.productGrid}>
          {gbpLocation.products.map((product) => (
            <Link key={product} href={categoryLinks[product] || "/menu"} className={styles.productCard}>
              {product}
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Helpful Ottawa Store Information</h2>
        <div className={styles.seoLinkGrid}>
          {helpfulLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.seoLinkCard}>
              <span className={styles.seoLinkTitle}>{link.label}</span>
              <span className={styles.seoLinkDescription}>{link.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Visit Spirit Corner Cannabis</h2>
        <div className={styles.napGrid}>
          <div className={styles.napDetails}>
            <div className={styles.napItem}><span className={styles.napLabel}>Store Name</span><strong>{gbpLocation.storeName}</strong></div>
            <div className={styles.napItem}><span className={styles.napLabel}>Address</span><span>{gbpLocation.address}</span></div>
            <div className={styles.napItem}><span className={styles.napLabel}>Phone</span><a href={`tel:${gbpLocation.phoneIntl}`}>{gbpLocation.phone}</a></div>
            <div className={styles.napItem}><span className={styles.napLabel}>Store Hours</span><span>Open 24 Hours</span></div>
          </div>
        </div>
      </section>

      <section id="faq" className={styles.section}>
        <h2 className={styles.h2}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Where is Spirit Corner Cannabis?</h3>
            <p className={styles.faqAnswer}>Spirit Corner Cannabis is at {gbpLocation.address}, near ByWard Market in downtown Ottawa.</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>When is the store open?</h3>
            <p className={styles.faqAnswer}>The Ottawa storefront is open 24 hours a day, seven days a week for adults 19+.</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Can product listings change?</h3>
            <p className={styles.faqAnswer}>Yes. Call {gbpLocation.phone} before travelling when a particular product or listed price matters.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
