// Auto-generated Google Business Profile Local SEO Landing Page Component
import Link from "next/link";
import styles from "./GBPLandingPage.module.css";
import { gbpLocation } from "../lib/gbp-location";

// Dictionary mapping category names to their respective paths
const categoryLinks: { [key: string]: string } = {
  "Flower": "/",
  "Pre-rolls": "/items/prerolls",
  "Edibles": "/items/edibles",
  "THC vapes": "/items/vape-disposables",
  "Concentrates": "/items/concentrates",
  "Shatter": "/items/concentrates",
  "CBD oils": "/items/concentrates",
  "Accessories": "/items/add-ons"
};

const prioritySeoLinks = [
  {
    href: "/24-hour-ottawa-dispensary",
    label: "24 Hour Dispensary Ottawa",
    description: "Late-night Ottawa cannabis store visit planning near ByWard Market."
  },
  {
    href: "/dispensaire-cannabis-pres-de-gatineau",
    label: "Cannabis Store Near Gatineau & Hull",
    description: "Cross-river visit planning for adults coming from Gatineau, Hull, and Aylmer."
  },
  {
    href: "/cannabis-delivery-ottawa",
    label: "Ottawa Delivery Updates",
    description: "Delivery update sign-up for Ottawa, Gatineau, Barrhaven, Kanata, Orleans, and nearby areas."
  },
  {
    href: "/cheap-weed-ottawa",
    label: "Affordable Cannabis Ottawa",
    description: "Value-focused Ottawa cannabis shopping information for adults 19+."
  },
  {
    href: "/native-cigarettes-ottawa",
    label: "Native Cigarettes Ottawa",
    description: "Native cigarette carton information for adult tobacco shoppers near downtown Ottawa."
  },
  {
    href: "/nicotine-pouches-ottawa",
    label: "Nicotine Pouches Ottawa",
    description: "Nicotine pouch visit-planning page for adult shoppers near ByWard Market."
  }
];

type StoreSchemaMarkup = {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  priceRange: string;
  openingHours?: string[];
  geo?: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
};

export function GBPLandingPage() {
  const landmarkList = gbpLocation.localLandmarks.join(", ");
  const nearbyAreaList = gbpLocation.nearbyAreas.slice(0, 4).join(", ");
  const categoryGuideLinks = gbpLocation.products.slice(0, 6).map((product) => ({
    label: product,
    href: categoryLinks[product] || "/"
  }));

  // Generate schema.org markup dynamically
  const schemaMarkup: StoreSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": gbpLocation.storeName,
    "url": `https://${gbpLocation.domain}/${gbpLocation.slug}/`,
    "telephone": gbpLocation.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": gbpLocation.streetAddress,
      "addressLocality": gbpLocation.city,
      "addressRegion": gbpLocation.province,
      "postalCode": gbpLocation.postalCode,
      "addressCountry": gbpLocation.country
    },
    "priceRange": "$$"
  };

  // Inject real opening hours and coordinates if they exist
  if (gbpLocation.hours && gbpLocation.hours.length > 0) {
    schemaMarkup.openingHours = gbpLocation.hours;
  }

  if (gbpLocation.latitude && gbpLocation.longitude) {
    schemaMarkup.geo = {
      "@type": "GeoCoordinates",
      "latitude": Number(gbpLocation.latitude),
      "longitude": Number(gbpLocation.longitude)
    };
  }

  return (
    <div className={styles.container}>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero Header */}
      <header className={styles.hero}>
        <h1 className={styles.h1}>{gbpLocation.storeName} — 24 Hour Ottawa Dispensary Near ByWard Market & Gatineau</h1>
        <p className={styles.heroTagline}>Serving downtown Ottawa, Lowertown, Vanier, Gatineau, Hull, Orleans, Barrhaven, Kanata, Stittsville, Westboro and nearby areas</p>
      </header>

      {/* Call to Actions */}
      <div className={styles.btnRow}>
        <a href={gbpLocation.menuUrl} className={`${styles.btn} ${styles.btnPrimary}`}>
          View Menu
        </a>
        <a href={`tel:${gbpLocation.phoneIntl}`} className={`${styles.btn} ${styles.btnSecondary}`}>
          Call Store
        </a>
      </div>

      {/* Intro Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Ottawa & Gatineau Cannabis Store Visit Planning</h2>
        <p className={styles.introText}>{gbpLocation.introVariant}</p>
      </section>

      {/* Product Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Cannabis Menu Categories for Ottawa Shoppers</h2>
        <p className={styles.infoText}>
          At {gbpLocation.storeName}, adults 19+ can browse helpful cannabis menu categories before visiting the downtown Ottawa store. Use the links below to compare the main sections customers ask about most often:
        </p>
        <div className={styles.productGrid}>
          {gbpLocation.products.map((p) => {
            const href = categoryLinks[p] || "/";
            return (
              <Link key={p} href={href} className={styles.productCard}>
                {p}
              </Link>
            );
          })}
        </div>
      </section>      {/* Visit Planning Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Plan a Visit from ByWard Market, Lowertown, Vanier, Gatineau or Hull</h2>
        <p className={styles.infoText}>
          Planning a visit to {gbpLocation.storeName} is easier when the main store details are in one place. Adults 19+ can use this page to confirm the store address, phone number, hours, local area, and menu-category links before heading to {gbpLocation.city}.
        </p>
        <p className={styles.infoText}>
          The store is near {gbpLocation.neighborhood || gbpLocation.city}, with local reference points including {landmarkList}. Nearby shoppers also use this page from {nearbyAreaList}.
        </p>
        <p className={styles.infoText}>
          For a fuller local overview, read the{" "}
          <Link href="/">Home</Link>.
        </p>
      </section>

      {/* Priority Internal Links Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Helpful Ottawa & Gatineau Store Pages</h2>
        <p className={styles.infoText}>
          Use these store-scoped pages to plan the right Spirit Corner visit, compare key menu sections, and find the most relevant local information before heading to the shop.
        </p>
        <div className={styles.seoLinkGrid}>
          {prioritySeoLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.seoLinkCard}>
              <span className={styles.seoLinkTitle}>{link.label}</span>
              <span className={styles.seoLinkDescription}>{link.description}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Location & NAP Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Visit {gbpLocation.storeName} at 251 Dalhousie St in Downtown Ottawa</h2>
        <div className={styles.napGrid}>
          <div className={styles.napDetails}>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Store Name</span>
              <strong>{gbpLocation.storeName}</strong>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Address</span>
              <span>{gbpLocation.address}</span>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Phone</span>
              <span><a href={`tel:${gbpLocation.phoneIntl}`} style={{ color: "inherit" }}>{gbpLocation.phone}</a></span>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Website</span>
              <span><a href={`https://${gbpLocation.domain}/`} style={{ color: "inherit" }}>https://{gbpLocation.domain}/</a></span>
            </div>
            {gbpLocation.hours && gbpLocation.hours.length > 0 && (
              <div className={styles.napItem}>
                <span className={styles.napLabel}>Store Hours</span>
                {gbpLocation.hours.map((line) => (
                  <span key={line} style={{ fontSize: "0.95rem" }}>{line}</span>
                ))}
              </div>
            )}
            <div className={styles.napItem} style={{ marginTop: "10px" }}>
              <p className={styles.infoBlock} style={{ fontSize: "0.9rem", fontStyle: "italic", margin: 0 }}>
                * {gbpLocation.parkingNote}.
              </p>
            </div>
          </div>
          <div className={styles.mapWrapper}>
            {gbpLocation.mapEmbedUrl ? (
              <iframe
                title={`Map of ${gbpLocation.storeName}`}
                src={gbpLocation.mapEmbedUrl}
                className={styles.mapIframe}
                allowFullScreen={true}
                loading="lazy"
              />
            ) : (
              <div style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}>
                Map preview not available.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>{gbpLocation.sectionTitle}</h2>
        <p className={styles.infoText}>
          {gbpLocation.neighborhoodDescription} {gbpLocation.transitNote}. We proudly welcome customers from:
        </p>
        <div className={styles.areaList}>
          {gbpLocation.nearbyAreas.map((area) => (
            <span key={area} className={styles.areaTag}>
              {area}
            </span>
          ))}
        </div>
      </section>      {/* Category Link Context Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Compare Flower, Pre-Rolls, Edibles, Vapes and Accessories Before You Visit</h2>
        <p className={styles.infoText}>
          These category links help adults 19+ browse general menu sections before visiting. Use the live menu for current details and ask staff if you want help comparing categories during your visit.
        </p>
        <div className={styles.productGrid}>
          {categoryGuideLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.productCard}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={styles.section}>
        <h2 className={styles.h2}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>How should I plan a Spirit Corner visit from Ottawa or Gatineau?</h3>
            <p className={styles.faqAnswer}>
              Check the store address, phone number, hours, directions, menu links, and nearby-area notes on this page before visiting. Spirit Corner serves adults 19+ from downtown Ottawa, ByWard Market, Lowertown, Vanier, Gatineau, Hull, and nearby areas.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Can I use this page to compare menu categories?</h3>
            <p className={styles.faqAnswer}>
              Yes. The category links on this page are intended to help adults 19+ compare general menu sections such as flower, pre-rolls, edibles, vapes, concentrates, and accessories before checking the live menu.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Where is {gbpLocation.storeName} located?</h3>
            <p className={styles.faqAnswer}>{gbpLocation.storeName} is located at {gbpLocation.address}.</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Is {gbpLocation.storeName} a weed dispensary in {gbpLocation.city}?</h3>
            <p className={styles.faqAnswer}>
              Yes, {gbpLocation.storeName} is a fully licensed local weed dispensary in {gbpLocation.city} serving cannabis customers aged 19 and older with valid identification.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>What products does {gbpLocation.storeName} carry?</h3>
            <p className={styles.faqAnswer}>
              We carry a complete line of weed products including premium flower, pre-rolls, THC edibles, concentrates, shatter, THC vape cartridges, CBD oils, and accessories.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Do I need to be 19+ to shop at {gbpLocation.storeName}?</h3>
            <p className={styles.faqAnswer}>
              Yes, to visit our cannabis store or order from our menu, you must be at least 19 years of age. Valid government-issued photo ID is required for verification.
            </p>
          </div>
          {gbpLocation.neighborhood && (
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Is {gbpLocation.storeName} near {gbpLocation.neighborhood}?</h3>
              <p className={styles.faqAnswer}>
                Yes, {gbpLocation.storeName} is located near {gbpLocation.neighborhood} and serves customers from nearby landmarks like {gbpLocation.localLandmarks.join(", ")}.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
