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
  const pageUrl = `https://spiritcornercannabis.com/info/${slug}`;

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: pageUrl,
      images: page.banner
        ? [
            {
              url: `https://spiritcornercannabis.com${page.banner}`,
              width: 1168,
              height: 784,
              alt: "Spirit Corner Cannabis branded welcome graphic",
            },
          ]
        : [],
    },
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
  const pageJsonLd = {
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
      };
  const breadcrumbJsonLd = {
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
            name: page.h1,
            item: pageUrl,
          },
        ],
      };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className={styles.main}>
      <Navbar />

      {/* Banner Section */}
      {page.banner && (
        <section style={{ marginTop: 0, position: "relative" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
            <Image
              src={page.banner}
              alt="Spirit Corner Cannabis branded welcome graphic"
              width={1168}
              height={784}
              sizes="(max-width: 1440px) calc(100vw - 48px), 1392px"
              priority
              style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
            />
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
            <h2 className={styles.sectionTitle}>Compare Five Flower Tiers</h2>
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
                  <p className={styles.tierDesc}>{tier.tagline}</p>
                  <span className={styles.tierLink}>Browse {tier.name} →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Visit 251 Dalhousie St</h2>
            <p className={styles.sectionBody}>
              Spirit Corner Cannabis is near ByWard Market in downtown Ottawa and is
              open 24 hours for adults 19+.
            </p>
            <div className={styles.visitBtns}>
              <a href="tel:+13433088998" className={styles.visitBtn}>Call (343) 308-8998</a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=251%20Dalhousie%20St%2C%20Ottawa%2C%20ON%20K1N%201E7"
                className={styles.visitBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
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
