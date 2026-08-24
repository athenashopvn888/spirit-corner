import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  getItemsByCategory,
  getCategoryFromSlug,
  CATEGORY_CONFIG,
} from "../../lib/products";
import styles from "./items.module.css";
import ItemCard from "./ItemCard";

/* ── Generate all category pages ── */
export function generateStaticParams() {
  return Object.values(CATEGORY_CONFIG).map((c) => ({ category: c.slug }));
}

/* ── SEO ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: catSlug } = await params;
  const catInfo = getCategoryFromSlug(catSlug);
  if (!catInfo) return {};
  const items = getItemsByCategory(catInfo.key);
  const pageUrl = `https://spiritcornercannabis.com/items/${catInfo.config.slug}`;

  return {
    title: catInfo.config.seoTitle || `${catInfo.config.name} — ${items.length} Products`,
    description: catInfo.config.seoIntro || `Shop ${items.length} ${catInfo.config.name.toLowerCase()} at Spirit Corner Cannabis.`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: catInfo.config.seoTitle,
      description: catInfo.config.seoIntro,
      url: pageUrl,
    },
  };
}

export default async function ItemsCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: catSlug } = await params;
  const catInfo = getCategoryFromSlug(catSlug);
  if (!catInfo) notFound();

  /* Pre-Rolls also shows accessories (ADD ONS) */
  let items = getItemsByCategory(catInfo.key);
  if (catInfo.key === "PREROLLS") {
    const accessories = getItemsByCategory("ADD ONS");
    const existingIds = new Set(items.map(i => i.sku));
    const uniqueAccessories = accessories.filter(a => !existingIds.has(a.sku));
    items = [...items, ...uniqueAccessories];
  }
  const { config } = catInfo;

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Category heading */}
      <section style={{ width: "100%", overflow: "hidden", marginTop: 0, marginBottom: "24px" }}>
        <div className={styles.heroContent} style={{ background: config.color, padding: "60px 24px", textAlign: "center" }}>
          <span className={styles.heroIcon}>{config.icon}</span>
          <h1 className={styles.heroTitle}>
            <span style={{ color: "#fff" }}>{config.name}</span>
          </h1>
          <p className={styles.heroSub} style={{ color: "rgba(255,255,255,0.8)" }}>
            {items.length} listed {items.length === 1 ? "item" : "items"}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className={styles.products}>
        <div className={styles.container}>
          {items.length > 0 ? (
            <div className={styles.grid}>
              {items.map((item) => (
                <ItemCard key={item.sku} item={item} catColor={config.color} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>🌱</span>
              <h2>No Current Listings</h2>
              <p>Call (343) 308-8998 to ask about this category before visiting.</p>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <h2 className={styles.seoTitle}>{config.seoTitle}</h2>
          <p className={styles.seoBody}>{config.seoDescription}</p>

          {/* FAQ */}
          {config.faqs.length > 0 && (
            <div className={styles.faqBlock}>
              <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
              {config.faqs.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          )}

          {/* Visit CTA */}
          <div className={styles.visitCta}>
            <h3 className={styles.visitTitle}>Visit Spirit Corner Cannabis</h3>
            <p className={styles.visitText}>
              251 Dalhousie St, Ottawa, ON K1N 1E7 · Open 24 Hours
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
