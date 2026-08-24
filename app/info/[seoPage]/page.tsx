import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SEO_PAGES, getSeoPageBySlug } from "../../lib/seoPages";
import { TIER_CONFIG } from "../../lib/products";
import styles from "./seo.module.css";

/* ── Generate all SEO pages ── */
export function generateStaticParams() {
  return SEO_PAGES.map((p) => ({ seoPage: p.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ seoPage: string }>;
}): Promise<Metadata> {
  const { seoPage: slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: `https://spiritcornercannabis.com/info/${slug}`,
    },
    ...(slug === "weed-store-near-gatineau"
      ? {
          openGraph: {
            title: page.title,
            description: page.metaDescription,
            url: `https://spiritcornercannabis.com/info/${slug}`,
            images: [
              {
                url: `https://spiritcornercannabis.com${page.banner}`,
                width: 1168,
                height: 784,
                alt: "Spirit Corner Cannabis branded welcome graphic",
              },
            ],
          },
        }
      : {}),
  };
}

/* ── Page ── */
export default async function SeoLandingPage({
  params,
}: {
  params: Promise<{ seoPage: string }>;
}) {
  const { seoPage: slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) notFound();

  const tiers = Object.values(TIER_CONFIG);
  const pageUrl = `https://spiritcornercannabis.com/info/${slug}`;
  const isGatineauPage = slug === "weed-store-near-gatineau";
  const pageJsonLd = isGatineauPage
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.title,
        description: page.metaDescription,
        about: { "@id": "https://spiritcornercannabis.com" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `https://spiritcornercannabis.com${page.banner}`,
          width: 1168,
          height: 784,
        },
      }
    : null;
  const breadcrumbJsonLd = isGatineauPage
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Spirit Corner Cannabis",
            item: "https://spiritcornercannabis.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Cannabis Dispensary Near Gatineau",
            item: pageUrl,
          },
        ],
      }
    : null;

  return (
    <>
      {pageJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      <main className={styles.main}>
      <Navbar />

      {/* Banner Section */}
      {page.banner && (
        <section style={{ marginTop: 0, position: "relative" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
            {isGatineauPage ? (
              <Image
                src={page.banner}
                alt="Spirit Corner Cannabis branded welcome graphic"
                width={1168}
                height={784}
                sizes="(max-width: 1440px) calc(100vw - 48px), 1392px"
                preload
                style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
              />
            ) : (
              <img
                src={page.banner}
                alt={`${page.h1} at Spirit Corner Cannabis Ottawa`}
                style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
              />
            )}
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "8px", textAlign: "center", fontStyle: "italic" }}>
              Explore premium cannabis and value deals at Spirit Corner Cannabis in downtown Ottawa.
            </p>
          </div>
        </section>
      )}

      {/* Hero */}
      <section className={styles.hero} style={page.banner ? { marginTop: "20px" } : undefined}>
        <div className={styles.heroInner}>
          <span className={styles.heroIcon}>{page.icon}</span>
          <h1 className={styles.heroH1}>{page.h1}</h1>
          <p className={styles.heroTagline}>{page.heroTagline}</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className={styles.content}>
        <div className={styles.container}>
          {page.sections.map((s, i) => (
            <div key={i} className={styles.section}>
              <h2 className={styles.sectionTitle}>{s.heading}</h2>
              <p className={styles.sectionBody}>{s.body}</p>
            </div>
          ))}

          {/* Tier Grid */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Cannabis Menu — Five Tiers of Quality</h2>
            <div className={styles.tierGrid}>
              {tiers.map((tier) => (
                <Link
                  key={tier.slug}
                  href={`/${tier.slug}`}
                  className={styles.tierCard}
                  style={{ "--tier-color": tier.color } as React.CSSProperties}
                >
                  <div className={styles.tierLabel} style={{ color: tier.color }}>
                    {tier.icon} {tier.name}
                  </div>
                  <div className={styles.tierPrice}>${tier.unitPrice}/g</div>
                  <p className={styles.tierDesc}>{tier.tagline}</p>
                  <span className={styles.tierLink}>Browse {tier.name} →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Find Us</h2>
            <div className={styles.mapWrap}>
            </div>
            <div className={styles.visitBtns}>
            </div>
          </div>

          {/* FAQ */}
          {page.faqs.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              {page.faqs.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{faq.q}</summary>
                  <p className={styles.faqA}>{faq.a}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      </main>
    </>
  );
}
