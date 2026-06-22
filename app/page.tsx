import type { Metadata } from "next";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import { allFlowers } from "./lib/products";
import Link from "next/link";

/* ── HOMEPAGE METADATA ── */
export const metadata: Metadata = {
  title: "24 Hour Dispensary Ottawa | Downtown Ottawa Cannabis Store | Spirit Corner Cannabis",
  description:
    "Spirit Corner Cannabis is a downtown Ottawa cannabis store near the ByWard Market serving Ottawa, Gatineau, Hull, Barrhaven, Kanata, Orleans, Nepean, and surrounding communities.",
  alternates: {
    canonical: "https://spiritcornercannabis.com",
  },
};

/* ── Tier data ── */
const TIERS = [
  {
    name: "EXOTIC",
    slug: "exotic",
    tagline: "Ultra-rare, top-shelf genetics",
    thc: "35-39%",
    unitPrice: 20,
    deal3g: "3g bundle for $40",
    deal6g: "6g bundle for $60",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.2)",
    icon: "🔥",
    count: 42,
    banner: "/banners/exotic_premium_cannabis_with_glowing_accents.webp",
  },
  {
    name: "PREMIUM",
    slug: "premium",
    tagline: "Hand-picked connoisseur grade",
    thc: "32-34%",
    unitPrice: 15,
    deal3g: "3g bundle for $30",
    deal6g: "6g bundle for $45",
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.2)",
    icon: "💎",
    count: 38,
    banner: "/banners/premium_cannabis_with_glowing_accents.webp",
  },
  {
    name: "AAA+",
    slug: "aaa",
    tagline: "Heavy hitters, proven strains",
    thc: "30-32%",
    unitPrice: 10,
    deal3g: "3g bundle for $20",
    deal6g: "6g bundle for $30",
    color: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.2)",
    icon: "⚡",
    count: 55,
    banner: "/banners/electric_neon_cannabis_ad_banner.webp",
  },
  {
    name: "AA",
    slug: "aa",
    tagline: "Quality daily drivers",
    thc: "27-29%",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.2)",
    icon: "✦",
    count: 35,
    banner: "/banners/neon_cannabis_product_showcase.webp",
  },
  {
    name: "BUDGET",
    slug: "budget",
    tagline: "Shreds & value OZs",
    thc: "24-27%",
    unitPrice: 3,
    deal3g: "3g bundle for $10",
    deal6g: null,
    color: "#94a3b8",
    glow: "rgba(148, 163, 184, 0.15)",
    icon: "💰",
    count: 18,
    banner: "/banners/premium_budget_cannabis_deal_showcase.webp",
  },
  {
    name: "EDIBLES & MORE",
    slug: "items/edibles",
    tagline: "Gummies, vapes, pre-rolls, hash",
    thc: "Up to 98%",
    unitPrice: null,
    deal3g: null,
    deal6g: null,
    color: "#fb923c",
    glow: "rgba(251, 146, 60, 0.2)",
    icon: "🍬",
    count: 80,
    banner: "/banners/neon_lit_edible_product_promotion_banner.webp",
  },
];

/* ── Build featured strains dynamically from real inventory ── */
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
    name: f.name,
    sku: f.sku,
    tier: f.tier.toUpperCase(),
    thc: f.thc,
    type: f.type === "indica" ? "IH" : f.type === "sativa" ? "SH" : "H",
    price3g: f.price3g ? `$${f.price3g.sale ?? f.price3g.regular}` : "—",
    image: f.image,
  }));
}
const FEATURED_STRAINS = buildFeatured();

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
  // JSON-LD Structured Data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    additionalType: "https://schema.org/Store",
    "@id": "https://spiritcornercannabis.com",
    name: "Spirit Corner Cannabis",
    description: "Spirit Corner Cannabis is a downtown Ottawa cannabis store near the ByWard Market serving Ottawa, Gatineau, Hull, Barrhaven, Kanata, Orleans, Nepean, and surrounding communities.",
    url: "https://spiritcornercannabis.com",
    telephone: "+16136122107",
    image: "https://spiritcornercannabis.com/banners/spirit-corner-cannabis-logo-NEW.png",
    priceRange: "$3 - $12/g",
    address: {
      "@type": "PostalAddress",
      streetAddress: "251 Dalhousie St",
      addressLocality: "Ottawa",
      addressRegion: "ON",
      postalCode: "K1N 1E7",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.4292,
      longitude: -75.6928,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Gatineau" },
      { "@type": "City", name: "Hull" },
      { "@type": "City", name: "Barrhaven" },
      { "@type": "City", name: "Kanata" },
      { "@type": "City", name: "Orleans" },
      { "@type": "City", name: "Nepean" }
    ],
  };

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
        name: "Why do visitors search for downtown Ottawa cannabis stores?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many visitors search for downtown Ottawa cannabis stores because of convenient access near nightlife districts, hotels, restaurants, entertainment venues, concerts, and major transportation routes.",
        },
      },
      {
        "@type": "Question",
        name: "Do visitors from Gatineau shop in Ottawa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many visitors from Gatineau, Hull, Aylmer, Chelsea, Cantley, and nearby Outaouais communities regularly visit downtown Ottawa cannabis stores.",
        },
      },
      {
        "@type": "Question",
        name: "What cannabis products do visitors commonly search for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visitors commonly search for flower, pre-rolls, vaporizers, concentrates, edibles, smoking accessories, affordable cannabis products, and downtown Ottawa cannabis options.",
        },
      },
      {
        "@type": "Question",
        name: "Why do visitors search for cannabis stores open late in Ottawa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many visitors throughout Ottawa and Gatineau search for accessible downtown cannabis stores near nightlife districts, concerts, entertainment venues, and weekend activity.",
        },
      },
      {
        "@type": "Question",
        name: "Why is the ByWard Market location important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ByWard Market is one of Ottawa’s busiest downtown districts and provides convenient access for both Ottawa residents and visitors travelling from Gatineau and nearby communities.",
        },
      },
      {
        "@type": "Question",
        name: "Can visitors stay updated on future announcements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Visitors can register through the delivery updates page to receive future announcements, updates, and local Ottawa cannabis information.",
        },
      },
      {
        "@type": "Question",
        name: "Do visitors also search for nicotine pouches and vape products in Ottawa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many downtown Ottawa visitors also search for nicotine pouches, vape products, smoking accessories, and related smoke products near the downtown core.",
        },
      },
      {
        "@type": "Question",
        name: "What nearby communities does Spirit Corner Cannabis attract visitors from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spirit Corner Cannabis continues attracting visitors from Ottawa, Gatineau, Hull, Barrhaven, Kanata, Orleans, Nepean, Gloucester, Stittsville, Riverside South, Findlay Creek, Greely, and nearby communities.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className={styles.main}>
        {/* ── NAVBAR ── */}
        <Navbar />

        {/* ── HIGH-FIDELITY HERO SLIDER ── */}
        <HeroSlider />

        {/* ── SHOP BY TIER SECTION ── */}
        <section className={styles.tierSection} id="menu">
          <div className={styles.container}>
            <div className={styles.sectionBanner}>
              <img
                src="/banners/cheap-weed-ottawa-cannabis-tier-nnabis.png"
                alt="Shop by Tier — From exotic craft flower to value budget OZs at Spirit Corner Cannabis"
                className={styles.sectionBannerImg}
              />
            </div>

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
                  <div className={styles.tierCardBanner}>
                    <img
                      src={tier.banner}
                      alt={`${tier.name} cannabis flower tier showcase`}
                      className={styles.tierCardBannerImg}
                    />
                  </div>
                  <div className={styles.tierCardBody}>
                    <h3
                      className={styles.tierCardName}
                      style={{ color: tier.color }}
                    >
                      {tier.icon} {tier.name}
                    </h3>
                    <div className={styles.tierCardMeta}>
                      <span className={styles.tierCardThc}>
                        THC {tier.thc}
                      </span>
                      <span className={styles.tierCardCount}>
                        {tier.count} strains
                      </span>
                    </div>
                    <div className={styles.tierCardPrice}>
                      {tier.unitPrice !== null && (
                        <span className={styles.tierCardUnitPrice}>
                          ${tier.unitPrice}/g
                        </span>
                      )}
                    </div>
                    {tier.deal3g && (
                      <div className={styles.tierCardDeals}>
                        <span className={styles.tierCardDeal}>🎁 {tier.deal3g}</span>
                        {tier.deal6g && <span className={styles.tierCardDeal}>🎁 {tier.deal6g}</span>}
                      </div>
                    )}
                  </div>
                  <div className={styles.tierCardArrow}>→</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOT RIGHT NOW ── */}
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.sectionBanner}>
              <img
                src="/banners/hot_right_now_in_neon_glow.webp"
                alt="Hot Right Now — Staff picks and top sellers"
                className={styles.sectionBannerImg}
              />
            </div>

            <div className={styles.featuredGrid}>
              {FEATURED_STRAINS.map((strain, i) => (
                <Link
                  key={strain.sku}
                  href={`/flower/${strain.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={styles.productCard}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className={styles.productMedia}>
                    <img
                      src={strain.image}
                      alt={`${strain.name} strain media`}
                      loading="lazy"
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
                    <div className={styles.productPricing}>
                      <span className={styles.productPrice}>
                        {strain.price3g}
                      </span>
                      <span className={styles.productPriceUnit}>/ 3g</span>
                    </div>
                    <div className={styles.productCta}>View Strain →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO DETAILED COPYWRITING SECTION ── */}
        <section style={{ padding: "60px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border-subtle)" }}>
          <div className={styles.container} style={{ maxWidth: "900px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "10px" }}>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)" }}>
                Spirit Corner Cannabis
              </h1>
              <span style={{ fontSize: "12px", fontWeight: "bold", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Last Updated: May 2026
              </span>
            </div>
            
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
              24 Hour Downtown Ottawa Cannabis Store Near ByWard Market
            </h2>

            {/* Section 1 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                24 Hour Cannabis Accessibility In Downtown Ottawa
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Spirit Corner Cannabis is located at 251 Dalhousie St near the ByWard Market, Rideau Centre, Parliament area, and major Gatineau access routes in downtown Ottawa.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Visitors searching for 24 hour dispensary access, downtown Ottawa cannabis, and convenient late-night cannabis accessibility continue discovering Spirit Corner Cannabis while exploring the downtown core.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px", fontWeight: "bold" }}>
                Customers throughout Ottawa and nearby communities continue searching for:
              </p>
              <ul style={{ listStyleType: "circle", paddingLeft: "24px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
                <li>24 hour dispensary Ottawa</li>
                <li>Cannabis store open late</li>
                <li>Downtown Ottawa dispensary</li>
                <li>Ottawa weed store</li>
                <li>Cannabis near ByWard Market</li>
                <li>Cannabis near Gatineau</li>
                <li>Cannabis near me Ottawa</li>
                <li>Downtown Ottawa cannabis</li>
              </ul>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                Visitors from Ottawa, Gatineau, Hull, Barrhaven, Kanata, Orleans, Nepean, Gloucester, Stittsville, Riverside South, Findlay Creek, Greely, and surrounding communities regularly search for accessible downtown Ottawa cannabis stores near nightlife districts, hotels, restaurants, entertainment venues, concerts, and major transportation routes.
              </p>
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                Why Visitors Search For Cannabis In Downtown Ottawa
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Downtown Ottawa continues attracting visitors from across the city and nearby Outaouais communities because of nightlife districts, entertainment venues, tourism areas, hotels, restaurants, concerts, and major transportation routes near the ByWard Market.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Many downtown visitors searching for cannabis stores open late continue discovering Spirit Corner Cannabis while exploring downtown Ottawa nightlife, hotels, entertainment districts, and nearby attractions.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px", fontWeight: "bold" }}>
                Visitors staying near the ByWard Market, Rideau Centre, Parliament area, and Macdonald-Cartier Bridge routes continue searching for:
              </p>
              <ul style={{ listStyleType: "circle", paddingLeft: "24px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
                <li>Downtown Ottawa cannabis</li>
                <li>Cannabis near Rideau Centre</li>
                <li>
                  <Link href="/dispensaire-cannabis-pres-de-gatineau" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Ottawa dispensary near Gatineau
                  </Link>
                </li>
                <li>Weed store near me Ottawa</li>
                <li>Cannabis near Parliament</li>
                <li>Cannabis near downtown nightlife</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                Affordable Cannabis & Popular Products
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Many Ottawa cannabis customers continue comparing flower, pre-roll, concentrate, edible, and vaporizer options while searching for accessible cannabis products and convenient downtown Ottawa access.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px", fontWeight: "bold" }}>
                Spirit Corner Cannabis continues attracting visitors searching for:
              </p>
              <ul style={{ listStyleType: "circle", paddingLeft: "24px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
                <li>
                  <Link href="/cheap-weed-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Affordable cannabis Ottawa
                  </Link>
                </li>
                <li>Budget-friendly cannabis</li>
                <li>Ottawa cannabis deals</li>
                <li>Affordable flower Ottawa</li>
                <li>Affordable pre-rolls</li>
                <li>Downtown Ottawa cannabis products</li>
                <li>Affordable cannabis near me</li>
              </ul>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                Visitors throughout Ottawa continue searching for cannabis stores that balance accessibility, downtown convenience, product variety, and value.
              </p>
            </div>

            {/* Section 4 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                Late-Night Cannabis Convenience
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Many visitors throughout Ottawa and Gatineau continue searching for cannabis stores open late near downtown nightlife districts, entertainment venues, concerts, hotels, and weekend activity.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px", fontWeight: "bold" }}>
                Spirit Corner Cannabis continues building strong downtown Ottawa visibility for visitors searching for:
              </p>
              <ul style={{ listStyleType: "circle", paddingLeft: "24px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
                <li>
                  <Link href="/24-hour-ottawa-dispensary" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Late-night cannabis Ottawa
                  </Link>
                </li>
                <li>Cannabis store open late</li>
                <li>Downtown Ottawa weed store</li>
                <li>Cannabis near downtown Ottawa</li>
                <li>Ottawa cannabis near me</li>
                <li>24 hour cannabis Ottawa</li>
              </ul>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                Visitors exploring Ottawa nightlife districts, restaurants, and entertainment venues continue discovering Spirit Corner Cannabis while searching for accessible cannabis products near the downtown core.
              </p>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                Smoking Accessories, Nicotine Pouches & Vape Products
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px" }}>
                Many downtown Ottawa visitors searching for cannabis products also search for nearby smoking accessories, vaporizers, nicotine pouch products, vape products, rolling papers, and other popular smoke-related products near the ByWard Market.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "14px", fontWeight: "bold" }}>
                Visitors throughout Ottawa continue searching for:
              </p>
              <ul style={{ listStyleType: "circle", paddingLeft: "24px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.8", marginBottom: "14px" }}>
                <li>
                  <Link href="/nicotine-pouches-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Nicotine pouches Ottawa
                  </Link>
                </li>
                <li>
                  <Link href="/5-percent-vapes-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Vape products Ottawa
                  </Link>
                </li>
                <li>Smoking accessories Ottawa</li>
                <li>Downtown Ottawa smoke products</li>
                <li>
                  <Link href="/native-cigarettes-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Popular smoking products
                  </Link>
                </li>
                <li>Ottawa nicotine products</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                Stay Connected With Spirit Corner Cannabis
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
                As more visitors throughout Ottawa and Gatineau continue searching for downtown cannabis accessibility, future updates, and local cannabis information, Spirit Corner Cannabis continues expanding visibility through helpful local content and regional relevance. Visitors interested in future announcements and local updates can also register through the{" "}
                <Link href="/cannabis-delivery-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                  delivery updates page
                </Link>
                .
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
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Why do visitors search for downtown Ottawa cannabis stores?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Many visitors search for downtown Ottawa cannabis stores because of convenient access near nightlife districts, hotels, restaurants, entertainment venues, concerts, and major transportation routes.</p>
                </details>

                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Do visitors from Gatineau shop in Ottawa?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Yes. Many visitors from Gatineau, Hull, Aylmer, Chelsea, Cantley, and nearby Outaouais communities regularly visit downtown Ottawa cannabis stores.</p>
                </details>

                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What cannabis products do visitors commonly search for?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Visitors commonly search for flower, pre-rolls, vaporizers, concentrates, edibles, smoking accessories, affordable cannabis products, and downtown Ottawa cannabis options.</p>
                </details>

                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Why do visitors search for cannabis stores open late in Ottawa?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Many visitors throughout Ottawa and Gatineau search for accessible downtown cannabis stores near nightlife districts, concerts, entertainment venues, and weekend activity.</p>
                </details>

                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Why is the ByWard Market location important?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>The ByWard Market is one of Ottawa’s busiest downtown districts and provides convenient access for both Ottawa residents and visitors travelling from Gatineau and nearby communities.</p>
                </details>

                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Can visitors stay updated on future announcements?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Yes. Visitors can register through the delivery updates page to receive future announcements, updates, and local Ottawa cannabis information.</p>
                </details>

                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Do visitors also search for nicotine pouches and vape products in Ottawa?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Yes. Many downtown Ottawa visitors also search for nicotine pouches, vape products, smoking accessories, and related smoke products near the downtown core.</p>
                </details>

                <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What nearby communities does Spirit Corner Cannabis attract visitors from?</summary>
                  <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Spirit Corner Cannabis continues attracting visitors from Ottawa, Gatineau, Hull, Barrhaven, Kanata, Orleans, Nepean, Gloucester, Stittsville, Riverside South, Findlay Creek, Greely, and nearby communities.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* ── GAMES ARCADE BANNER ── */}
        <section className={styles.promoSection}>
          <Link href="/games" className={styles.promoBannerLink}>
            <img
              src="/banners/neon_arcade_gaming_promotion_banner.webp"
              alt="Games Arcade — Flappy Bud, Snake Munchies, Brick Breaker 420 Promotion Banner"
              className={styles.promoBannerImg}
            />
          </Link>
        </section>

        {/* ── STORE INFO ── */}
        <section className={styles.storeSection} id="contact">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Visit <span className="text-gradient-neon">Spirit Corner</span>
              </h2>
            </div>
            <div className={styles.storeGrid}>
              <div className={styles.storeCard}>
                <div className={styles.storeIcon}>📍</div>
                <h3 className={styles.storeCardTitle}>Location</h3>
                <p className={styles.storeCardText}>
                  251 Dalhousie St
                  <br />
                  Ottawa, ON K1N 1E7
                  <br />
                </p>
              </div>
              <div className={styles.storeCard}>
                <div className={styles.storeIcon}>🕒</div>
                <h3 className={styles.storeCardTitle}>Hours</h3>
                <p className={styles.storeCardText}>
                  Open 7 Days a Week
                  <br />
                  <span className={styles.storeHighlight}>Open 24 Hours</span>
                </p>
              </div>
              <div className={styles.storeCard}>
                <div className={styles.storeIcon}>🔥</div>
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

        {/* ── FOOTER ── */}
        <Footer />
      </main>
    </>
  );
}
