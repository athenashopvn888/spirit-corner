import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlowerCard from "../components/FlowerCard";
import {
  getFlowersByTier,
  getTierFromSlug,
  TIER_CONFIG,
} from "../lib/products";
import { TIER_SEO } from "../lib/tierSeoContent";
import styles from "./tier.module.css";

/* -- Generate all tier pages at build -- */
export function generateStaticParams() {
  return Object.values(TIER_CONFIG).map((t) => ({ tier: t.slug }));
}

/* -- Dynamic SEO metadata -- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tier: string }>;
}): Promise<Metadata> {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) return {};
  const flowers = getFlowersByTier(tierInfo.key);
  const seo = TIER_SEO[tierInfo.key];
  const pageUrl = `https://spiritcornercannabis.com/${tierInfo.config.slug}`;

  return {
    title: seo?.seoTitle || `${tierInfo.config.name} Cannabis Flower — ${flowers.length} Strains`,
    description: seo?.seoIntro || `Shop ${flowers.length} ${tierInfo.config.name.toLowerCase()} cannabis strains at Spirit Corner Cannabis.`,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${tierInfo.config.name} Flower | Spirit Corner Cannabis`,
      description: seo?.seoIntro || `Compare ${flowers.length} listed ${tierInfo.config.name.toLowerCase()} flower options at Spirit Corner Cannabis.`,
      url: pageUrl,
    },
  };
}

/* -- Page component -- */
export default async function TierPage({
  params,
}: {
  params: Promise<{ tier: string }>;
}) {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) notFound();

  const flowers = getFlowersByTier(tierInfo.key);
  const { config } = tierInfo;
  const seo = TIER_SEO[tierInfo.key];

  const saleFlowers = flowers.filter((f) => f.isSale);
  const regularFlowers = flowers.filter((f) => !f.isSale);
  const hotFlowers = flowers.filter((f) => f.isHot);

  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Tier summary ── */}
      <section
        className={styles.heroInfo}
        style={{ "--tier-color": config.color } as React.CSSProperties}
      >
        <div className={styles.heroInfoInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTitleRow}>
              <span className={styles.heroIcon}>{config.icon}</span>
              <h1 className={styles.heroTitle}>
                <span style={{ color: config.color }}>{config.name}</span>
              </h1>
            </div>
            <p className={styles.heroTagline}>{config.tagline}</p>
            <div className={styles.heroStats}>
              <span className={styles.stat}>
                <strong>{flowers.length}</strong> strains
              </span>
              {saleFlowers.length > 0 && (
                <span className={styles.statSale}>
                  🔥 {saleFlowers.length} on sale
                </span>
              )}
              {hotFlowers.length > 0 && (
                <span className={styles.statHot}>
                  ⚡ {hotFlowers.length} hot picks
                </span>
              )}
            </div>
          </div>

          <div className={styles.heroRight}>
            <p className={styles.heroTagline}>
              Listed sizes and prices appear with each flower below. Call ahead when a
              particular listing matters to your visit.
            </p>
          </div>
        </div>
      </section>

      {/* ── Product grid ── */}
      <section className={styles.products}>
        <div className={styles.container}>
          {saleFlowers.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>
                🔥 <span style={{ color: "#f43f5e" }}>On Sale</span>
              </h2>
              <div className={styles.grid}>
                {saleFlowers.map((f) => (
                  <FlowerCard
                    key={`${f.sku}-${f.slug}`}
                    flower={f}
                    tierKey={tierInfo.key}
                  />
                ))}
              </div>
            </>
          )}

          <h2 className={styles.sectionTitle}>
            All{" "}
            <span style={{ color: config.color }}>{config.name}</span>{" "}
            Strains
          </h2>
          <div className={styles.grid}>
            {regularFlowers.map((f) => (
              <FlowerCard
                key={`${f.sku}-${f.slug}`}
                flower={f}
                tierKey={tierInfo.key}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Content ── */}
      {seo && (
        <section className={styles.seoSection}>
          <div className={styles.container}>
            <h2 className={styles.seoMainTitle}>{seo.seoTitle}</h2>
            <p className={styles.seoIntro}>{seo.seoIntro}</p>

            {seo.sections.map((s, i) => (
              <div key={i} className={styles.seoBlock}>
                <h3 className={styles.seoHeading}>{s.heading}</h3>
                <p className={styles.seoBody}>{s.body}</p>
              </div>
            ))}

            {/* FAQ Accordion */}
            {seo.faqs.length > 0 && (
              <div className={styles.faqSection}>
                <h3 className={styles.seoHeading}>Frequently Asked Questions</h3>
                {seo.faqs.map((faq, i) => (
                  <details key={i} className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>{faq.q}</summary>
                    <p className={styles.faqAnswer}>{faq.a}</p>
                  </details>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
