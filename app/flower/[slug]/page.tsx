import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { allFlowers, TIER_CONFIG, type FlowerProduct, type PricePoint } from "../../lib/products";
import { getStrainData } from "../../lib/strainData";
import RelatedScroll from "./RelatedScroll";
import styles from "./flower.module.css";

/* -- Pre-generate all flower pages -- */
export function generateStaticParams() {
  return allFlowers.map((f) => ({ slug: f.slug }));
}

/* -- SEO metadata per strain -- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const flower = allFlowers.find((f) => f.slug === slug);
  if (!flower) return {};

  const tierName = TIER_CONFIG[flower.tier]?.name || flower.tier;
  const strainData = getStrainData(flower.name, flower.type, flower.tier, flower.thc);

  return {
    title: `${flower.name} | ${tierName} ${flower.type === "indica" ? "Indica" : flower.type === "sativa" ? "Sativa" : "Hybrid"} | THC ${flower.thc} | Always Lit Cannabis Toronto`,
    description: strainData.metaDescription,
    openGraph: {
      title: `${flower.name} | Always Lit Cannabis`,
      description: strainData.metaDescription,
      images: flower.image ? [{ url: flower.image, width: 800, height: 800, alt: flower.name }] : [],
    },
  };
}

/* -- JSON-LD Structured Data -- */
function getJsonLd(flower: FlowerProduct) {
  const lowestPrice = [flower.price3g, flower.price5g, flower.price14g, flower.price28g]
    .filter((p): p is PricePoint => p !== null)
    .map((p) => p.sale ?? p.regular)
    .sort((a, b) => a - b)[0];

  const strainData = getStrainData(flower.name, flower.type, flower.tier, flower.thc);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: flower.name,
    image: flower.image,
    description: strainData.description,
    brand: { "@type": "Brand", name: "Always Lit Cannabis" },
    sku: flower.sku,
    offers: {
      "@type": "Offer",
      price: lowestPrice || 0,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Always Lit Cannabis" },
    },
  };
}

/* -- Page -- */
export default async function FlowerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const flower = allFlowers.find((f) => f.slug === slug);
  if (!flower) notFound();

  const tierConfig = TIER_CONFIG[flower.tier];
  const tierColor = tierConfig?.color || "#94a3b8";
  const tierName = tierConfig?.name || flower.tier;
  const typeName = flower.type === "indica" ? "Indica" : flower.type === "sativa" ? "Sativa" : "Hybrid";
  const strainData = getStrainData(flower.name, flower.type, flower.tier, flower.thc);

  const prices = [
    { label: "3g", p: flower.price3g },
    { label: "5g / 6g", p: flower.price5g },
    { label: "14g (half oz)", p: flower.price14g },
    { label: "28g (1 oz)", p: flower.price28g },
  ].filter((x) => x.p !== null);

  // Cheapest per-gram for value display
  const perGram = prices.map(({ label, p }) => {
    if (!p) return null;
    const grams = label.startsWith("3") ? 3 : label.startsWith("5") ? 5 : label.startsWith("14") ? 14 : 28;
    const price = p.sale ?? p.regular;
    return { perG: +(price / grams).toFixed(2), label, price };
  }).filter(Boolean).sort((a, b) => (a?.perG ?? 99) - (b?.perG ?? 99));

  const bestValue = perGram[0];

  // Related strains from same tier
  const related = allFlowers
    .filter((f) => f.tier === flower.tier && f.slug !== flower.slug);

  // Check if any prices have actual sale
  const hasSalePrice = prices.some(({ p }) => p && p.sale !== null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(flower)) }}
      />

      <main className={styles.main}>
        <Navbar />

        <div className={styles.content}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href={`/${tierConfig?.slug || "exotic"}`}>{tierName}</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>{flower.name}</span>
          </nav>

          <div className={styles.layout}>
            {/* -- Image -- */}
            <div className={styles.imageWrap}>
              {flower.image ? (
                <img src={flower.image} alt={flower.name} className={styles.image} />
              ) : (
                <div className={styles.imagePlaceholder}>{flower.name[0]}</div>
              )}

              {/* Tags on image */}
              <div className={styles.imageTags}>
                {flower.isSale && (
                  <span className={styles.saleTag}>SALE</span>
                )}
                {flower.isHot && (
                  <span className={styles.hotTag}>HOT</span>
                )}
              </div>

              {/* THC badge on image */}
              <span className={styles.thcOverlay}>THC {flower.thc}</span>
            </div>

            {/* -- Details -- */}
            <div className={styles.details}>
              <div className={styles.tierBadge} style={{ color: tierColor, borderColor: `${tierColor}33`, background: `${tierColor}10` }}>
                {tierConfig?.icon} {tierName}
              </div>

              <h1 className={styles.strainName}>{flower.name}</h1>

              {/* Type + Meta badges */}
              <div className={styles.metaRow}>
                <span className={`${styles.typeBadge} ${styles[flower.type]}`}>
                  {typeName}
                </span>
                <span className={styles.thcBadge}>THC {flower.thc}</span>
                <span className={styles.skuBadge}>SKU {flower.sku}</span>
              </div>

              {/* Effects */}
              <div className={styles.effectsRow}>
                {strainData.effects.map((e) => (
                  <span key={e.label} className={styles.effectPill}>
                    {e.emoji} {e.label}
                  </span>
                ))}
              </div>

              {/* -- Pricing table -- */}
              <div className={styles.pricingSection}>
                <h2 className={styles.pricingTitle}>Pricing</h2>
                <div className={styles.priceTable}>
                  <div className={styles.priceTableHeader}>
                    <span>SIZE</span>
                    <span>PRICE</span>
                  </div>
                  {prices.map(({ label, p }) => (
                    <div key={label} className={`${styles.priceTableRow} ${p && p.sale !== null ? styles.priceTableRowSale : ""}`}>
                      <span className={styles.priceWeight}>{label}</span>
                      {p && p.sale !== null ? (
                        <div className={styles.priceSale}>
                          <span className={styles.priceNew}>${p.sale}</span>
                          <span className={styles.priceOld}>(was ${p.regular})</span>
                        </div>
                      ) : (
                        <span className={styles.priceRegular}>
                          ${p?.regular}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {bestValue && (
                  <div className={styles.valueNote}>
                    Best value: <strong>${bestValue.perG}/g</strong> at {bestValue.label}
                  </div>
                )}

                {prices[0]?.p && (
                  <div className={styles.bonusNote}>
                    <span className={styles.bonusIcon}>🎁</span>
                    Buy 2g get 1g FREE = {prices[0].label} for ${prices[0].p.sale ?? prices[0].p.regular}
                  </div>
                )}
              </div>

              {/* -- Description (SEO) -- */}
              <div className={styles.descSection}>
                <h2 className={styles.descTitle}>About {flower.name}</h2>
                <p className={styles.descText}>{strainData.description}</p>
              </div>

              {/* -- Quick info -- */}
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Type</span>
                  <span className={styles.infoValue}>{typeName}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>THC</span>
                  <span className={styles.infoValue}>{flower.thc}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Tier</span>
                  <span className={styles.infoValue} style={{ color: tierColor }}>{tierName}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>SKU</span>
                  <span className={styles.infoValue}>{flower.sku}</span>
                </div>
              </div>

              <div className={styles.visitCta}>
                <p>Available in-store · Walk-in welcome · No appointment needed</p>
              </div>
            </div>
          </div>

          {/* -- Related strains -- */}
          {related.length > 0 && (
            <RelatedScroll
              flowers={related.map((r) => ({ sku: r.sku, slug: r.slug, name: r.name, image: r.image, thc: r.thc }))}
              tierName={tierName}
              tierColor={tierColor}
            />
          )}
        </div>
      </main>
    </>
  );
}
