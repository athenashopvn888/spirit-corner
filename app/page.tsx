import type { Metadata } from "next";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import HiringCallout from "./components/HiringCallout";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import Image from "next/image";
import { allFlowers, allItems } from "./lib/products";
import Link from "next/link";

/* Homepage metadata */
export const metadata: Metadata = {
  title: "24 Hour Downtown Ottawa Cannabis Store | Spirit Corner Cannabis",
  description:
    "Spirit Corner Cannabis is a downtown Ottawa cannabis store near ByWard Market with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ store info.",
  alternates: {
    canonical: "https://spiritcornercannabis.com",
  },
  openGraph: {
    title: "24 Hour Downtown Ottawa Cannabis Store | Spirit Corner Cannabis",
    description:
      "Spirit Corner Cannabis is a downtown Ottawa cannabis store near ByWard Market with five flower tiers and listed smoke-product categories.",
    url: "https://spiritcornercannabis.com",
    images: ["/banners/spirit_corner_cannabis_showcase.webp"],
  },
};

/* Tier data */
const TIERS = [
  {
    name: "EXOTIC",
    slug: "exotic",
    tagline: "Compare listed Exotic flower details and prices",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.2)",
    icon: "EX",
    count: allFlowers.filter((flower) => flower.tier === "EXOTIC").length,
    countLabel: "flower listings",
  },
  {
    name: "PREMIUM",
    slug: "premium",
    tagline: "Compare listed Premium flower details and prices",
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.2)",
    icon: "PR",
    count: allFlowers.filter((flower) => flower.tier === "PREMIUM").length,
    countLabel: "flower listings",
  },
  {
    name: "AAA+",
    slug: "aaa",
    tagline: "Compare listed AAA+ flower details and prices",
    color: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.2)",
    icon: "AA+",
    count: allFlowers.filter((flower) => flower.tier === "AAA+").length,
    countLabel: "flower listings",
  },
  {
    name: "AA",
    slug: "aa",
    tagline: "Compare listed AA flower details and prices",
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.2)",
    icon: "AA",
    count: allFlowers.filter((flower) => flower.tier === "AA").length,
    countLabel: "flower listings",
  },
  {
    name: "BUDGET",
    slug: "budget",
    tagline: "Compare listed Budget flower details and prices",
    color: "#94a3b8",
    glow: "rgba(148, 163, 184, 0.15)",
    icon: "BG",
    count: allFlowers.filter((flower) => flower.tier === "BUDGET").length,
    countLabel: "flower listings",
  },
  {
    name: "EDIBLES",
    slug: "items/edibles",
    tagline: "Compare listed edible names, details, and prices",
    color: "#fb923c",
    glow: "rgba(251, 146, 60, 0.2)",
    icon: "ED",
    count: allItems.filter((item) => item.category === "EDIBLES").length,
    countLabel: "item listings",
  },
];

/* Build featured strains dynamically from real inventory */
function buildFeatured() {
  const hot = allFlowers.filter((f) => f.isHot);
  const sale = allFlowers.filter((f) => f.isSale && !f.isHot);
  const rest = allFlowers
    .filter((f) => !f.isHot && !f.isSale && f.image)
    .sort((a, b) => parseFloat(b.thc) - parseFloat(a.thc));
  const pool = [...hot, ...sale, ...rest];
  const picked: typeof pool = [];
  const tierCounts: Record<string, number> = {};
  for (const f of pool) {
    if (picked.length >= 8) break;
    const tc = tierCounts[f.tier] || 0;
    if (tc >= 3) continue;
    if (!f.image) continue;
    picked.push(f);
    tierCounts[f.tier] = tc + 1;
  }
  return picked.map((f) => ({
    slug: f.slug,
    name: f.name,
    sku: f.sku,
    tier: f.tier.toUpperCase(),
    thc: f.thc,
    type: f.type === "indica" ? "IH" : f.type === "sativa" ? "SH" : "H",
    price3g: f.price3g ? `$${f.price3g.sale ?? f.price3g.regular}` : null,
    image: f.image,
  }));
}
const FEATURED_STRAINS = buildFeatured();

const HOMEPAGE_HIGHLIGHTS = [
  {
    eyebrow: "Late-night store information",
    title: "24 Hour Ottawa Dispensary",
    description:
      "Plan an adult in-store visit to 251 Dalhousie St near ByWard Market at any hour.",
    href: "/24-hour-ottawa-dispensary",
    cta: "View 24-hour store details",
  },
  {
    eyebrow: "Budget flower",
    title: "Cheap Weed Ottawa",
    description:
      "Compare listed Budget flower names, sizes, and prices before visiting the downtown Ottawa store.",
    href: "/cheap-weed-ottawa",
    cta: "Compare Budget flower",
  },
  {
    eyebrow: "Adult smoke products",
    title: "Nicotine Pouches Ottawa",
    description:
      "Review nicotine pouch listings and visit-planning details for adults near ByWard Market before visiting Spirit Corner.",
    href: "/nicotine-pouches-ottawa",
    cta: "Explore nicotine pouches",
  },
  {
    eyebrow: "Native cigarettes",
    title: "Native Smokes Ottawa",
    description:
      "Compare Native smoke listings and visit details for adults shopping at 251 Dalhousie St in downtown Ottawa.",
    href: "/native-cigarettes-ottawa",
    cta: "Browse Native smokes",
  },
];

function getTypeLabel(type: string) {
  if (type.startsWith("IH")) return "Indica";
  if (type.startsWith("SH")) return "Sativa";
  return "Hybrid";
}

function getTypeClass(type: string) {
  if (type.startsWith("IH")) return styles.badgeIndica;
  if (type.startsWith("SH")) return styles.badgeSativa;
  return styles.badgeHybrid;
}

function getTierColor(tier: string) {
  const t = TIERS.find((t) => t.name === tier);
  return t?.color || "#94a3b8";
}

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Spirit Corner Cannabis located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spirit Corner Cannabis is located at 251 Dalhousie St near the ByWard Market in downtown Ottawa.",
        },
      },
      {
        "@type": "Question",
        name: "When is Spirit Corner Cannabis open?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spirit Corner Cannabis is open 24 hours a day, seven days a week.",
        },
      },
      {
        "@type": "Question",
        name: "Which flower tiers are listed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The store lists Budget, AA, AAA+, Premium, and Exotic flower tiers.",
        },
      },
      {
        "@type": "Question",
        name: "What other product categories are listed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The menu lists categories for edibles, vapes, concentrates, pre-rolls, cigarettes, specialty items, and accessories.",
        },
      },
      {
        "@type": "Question",
        name: "Can I call before visiting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Call (343) 308-8998 for store directions or product questions.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className={styles.main}>
        {/* Navbar */}
        <Navbar />
      <HiringCallout />

        {/* Homepage hero */}
        <HeroSlider />

        {/* Shop by tier section */}
        <section className={styles.tierSection} id="menu">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Compare Flower Tiers and Edibles</h2>

            <div className={styles.tierGrid}>
              {TIERS.map((tier, i) => (
                <Link
                  key={tier.slug}
                  href={`/${tier.slug}`}
                  className={styles.tierCard}
                  style={
                    {
                      "--tier-color": tier.color,
                      "--tier-glow": tier.glow,
                      animationDelay: `${i * 0.1}s`,
                    } as React.CSSProperties
                  }
                >
                  <div className={styles.tierCardBody}>
                    <h3
                      className={styles.tierCardName}
                      style={{ color: tier.color }}
                    >
                      {tier.name}
                    </h3>
                    <div className={styles.tierCardMeta}>
                      <span className={styles.tierCardThc}>{tier.tagline}</span>
                      <span className={styles.tierCardCount}>
                        {tier.count} {tier.countLabel}
                      </span>
                    </div>
                  </div>
                  <div className={styles.tierCardArrow}>View</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hot right now */}
        {/* Featured local product pages */}
        <section className={styles.localHighlightSection}>
          <div className={styles.container}>
            <div className={styles.localHighlightHeader}>
              <span className={styles.localHighlightKicker}>Helpful local pages</span>
              <h2 className={styles.localHighlightTitle}>
                Popular Ottawa smoke product guides
              </h2>
            </div>

            <div className={styles.localHighlightGrid}>
              {HOMEPAGE_HIGHLIGHTS.map((highlight) => (
                <Link
                  key={highlight.href}
                  href={highlight.href}
                  className={styles.localHighlightCard}
                >
                  <span className={styles.localHighlightEyebrow}>
                    {highlight.eyebrow}
                  </span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                  <span className={styles.localHighlightButton}>
                    {highlight.cta}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Featured Flower Listings</h2>

            <div className={styles.featuredGrid}>
              {FEATURED_STRAINS.map((strain, i) => (
                <Link
                  key={strain.slug}
                  href={`/flower/${strain.slug}`}
                  className={styles.productCard}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className={styles.productMedia}>
                    <Image
                      src={strain.image}
                      alt={`${strain.name} flower listing at Spirit Corner Cannabis`}
                      fill
                      sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                      className={styles.productImg}
                    />
                    <div className={styles.productBadges}>
                      <span className={styles.productBadgeThc}>
                        THC {strain.thc}
                      </span>
                      <span
                        className={`${styles.productBadgeTier}`}
                        style={{
                          background: `linear-gradient(135deg, ${getTierColor(strain.tier)}, ${getTierColor(strain.tier)}dd)`,
                          color: strain.tier === "BUDGET" ? "#1e293b" : "white",
                        }}
                      >
                        {strain.tier}
                      </span>
                    </div>
                  </div>
                  <div className={styles.productBody}>
                    <span
                      className={`${styles.productType} ${getTypeClass(strain.type)}`}
                    >
                      {getTypeLabel(strain.type)}
                    </span>
                    <h3 className={styles.productName}>{strain.name}</h3>
                    {strain.price3g && (
                    <div className={styles.productPricing}>
                      <span className={styles.productPrice}>
                        {strain.price3g}
                      </span>
                      <span className={styles.productPriceUnit}>/ 3g</span>
                    </div>
                    )}
                    <div className={styles.productCta}>View Strain</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Store details */}
        <section style={{ padding: "60px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border-subtle)" }}>
          <div className={styles.container} style={{ maxWidth: "900px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "10px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)" }}>
                Spirit Corner Cannabis
              </h2>
            </div>
            
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
              24 Hour Downtown Ottawa Cannabis Store Near ByWard Market
            </h3>

            {/* Section 1 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                Open 24 Hours in Downtown Ottawa
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Spirit Corner Cannabis is located at 251 Dalhousie St near the ByWard Market, Rideau Centre, Parliament area, and major Gatineau access routes in downtown Ottawa.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                The storefront is open 24 hours a day, seven days a week for adult in-store shopping.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px", fontWeight: "bold" }}>
                Store details:
              </p>
              <ul style={{ listStyleType: "circle", paddingLeft: "24px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
                <li>251 Dalhousie St, Ottawa</li>
                <li>Open 24 hours</li>
                <li>Near ByWard Market</li>
                <li>Call (343) 308-8998</li>
              </ul>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                Call the store for directions or product questions before visiting.
              </p>
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                Five Flower Tiers
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Compare Budget, AA, AAA+, Premium, and Exotic flower tiers, with listed prices and sizes shown for each product.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                The five tiers offer a straightforward way to compare value and higher-tier flower during an in-store visit.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px", fontWeight: "bold" }}>
                Flower options include:
              </p>
              <ul style={{ listStyleType: "circle", paddingLeft: "24px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
                <li>Budget and AA value flower</li>
                <li>AAA+, Premium, and Exotic flower</li>
                <li>
                  <Link href="/dispensaire-cannabis-pres-de-gatineau" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Store information for visitors from Gatineau
                  </Link>
                </li>
                <li>Listed flower sizes and prices vary by product</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                Affordable Cannabis & Popular Products
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Spirit Corner also lists pre-rolls, concentrates, edibles, and vape products.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px", fontWeight: "bold" }}>
                Adults can compare:
              </p>
              <ul style={{ listStyleType: "circle", paddingLeft: "24px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
                <li>
                  <Link href="/cheap-weed-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Budget flower and value ounces
                  </Link>
                </li>
                <li>Pre-rolls and concentrates</li>
                <li>Edibles and vapes</li>
              </ul>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                Selection can change, so call the store if you want to ask about a particular item.
              </p>
            </div>

            {/* Section 4 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                Late-Night Cannabis Convenience
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Spirit Corner remains open 24 hours for adult in-store shopping.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px", fontWeight: "bold" }}>
                Visit details:
              </p>
              <ul style={{ listStyleType: "circle", paddingLeft: "24px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
                <li>
                  <Link href="/24-hour-ottawa-dispensary" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    24-hour store information
                  </Link>
                </li>
                <li>Open every day</li>
                <li>251 Dalhousie St</li>
              </ul>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                No appointment is needed for an in-store visit.
              </p>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                Smoking Accessories, Nicotine Pouches & Vape Products
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Adults can also compare smoking accessories, nicotine pouches, vape products, and rolling papers.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px", fontWeight: "bold" }}>
                Listed categories include:
              </p>
              <ul style={{ listStyleType: "circle", paddingLeft: "24px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
                <li>
                  <Link href="/nicotine-pouches-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Nicotine pouches
                  </Link>
                </li>
                <li>
                  <Link href="/5-percent-vapes-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    5% disposable vapes
                  </Link>
                </li>
                <li>Smoking accessories</li>
                <li>
                  <Link href="/native-cigarettes-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Native cigarettes
                  </Link>
                </li>
                <li>Rolling papers</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                Ottawa Delivery Information
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                Delivery details can change. Adults can review the{" "}
                <Link href="/cannabis-delivery-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                  Ottawa delivery information
                </Link>
                {" "}or call the store before planning an order.
              </p>
            </div>

            {/* FAQ Accordion UI */}
            <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "40px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 900, textAlign: "center", marginBottom: "24px", color: "var(--green-deep)" }}>
                Frequently Asked Questions
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Where is Spirit Corner Cannabis located?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Spirit Corner Cannabis is located at 251 Dalhousie St near the ByWard Market in downtown Ottawa.</p>
                </details>

                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>When is Spirit Corner Cannabis open?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Spirit Corner Cannabis is open 24 hours a day, seven days a week.</p>
                </details>

                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Which flower tiers are listed?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>The store lists Budget, AA, AAA+, Premium, and Exotic flower tiers.</p>
                </details>

                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What other product categories are listed?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Menu listings include categories for edibles, vapes, concentrates, pre-rolls, cigarettes, specialty items, and accessories.</p>
                </details>

                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Can I call before visiting?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Yes. Call (343) 308-8998 for directions or product questions.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Store info */}
        <section className={styles.storeSection} id="contact">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Visit <span className="text-gradient-neon">Spirit Corner</span>
              </h2>
            </div>
            <div className={styles.storeGrid}>
              <div className={styles.storeCard}>
                <div className={styles.storeIcon}>PIN</div>
                <h3 className={styles.storeCardTitle}>Location</h3>
                <p className={styles.storeCardText}>
                  251 Dalhousie St
                  <br />
                  Ottawa, ON K1N 1E7
                  <br />
                </p>
              </div>
              <div className={styles.storeCard}>
                <div className={styles.storeIcon}>24H</div>
                <h3 className={styles.storeCardTitle}>Hours</h3>
                <p className={styles.storeCardText}>
                  Open 7 Days a Week
                  <br />
                  <span className={styles.storeHighlight}>Open 24 Hours</span>
                </p>
              </div>
              <div className={styles.storeCard}>
                <div className={styles.storeIcon}>SHOP</div>
                <h3 className={styles.storeCardTitle}>Walk In</h3>
                <p className={styles.storeCardText}>
                  No appointment needed
                  <br />
                  <span className={styles.storeHighlight}>
                    Dalhousie St, Ottawa
                  </span>
                </p>
              </div>
            </div>

            {/* Embedded map */}
            <div className={styles.mapWrap}>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
