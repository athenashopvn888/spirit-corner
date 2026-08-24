import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allItems, isGrabbaItem, isGrabbaShakerItem } from "../lib/products";
import styles from "./grabba.module.css";

const PAGE_URL = "https://spiritcornercannabis.com/grabba-leaf-shakers";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=251%20Dalhousie%20St%2C%20Ottawa%2C%20ON%20K1N%201E7";
const grabbaItems = allItems.filter(isGrabbaItem);
const shakerItem = grabbaItems.find(isGrabbaShakerItem);
const hasShaker = Boolean(shakerItem);
const socialItem = shakerItem ?? grabbaItems[0];
const menuDescription = hasShaker
  ? "Browse listed Grabba leaf and Grabba Shaker choices at Spirit Corner Cannabis in downtown Ottawa."
  : "Browse listed Grabba leaf choices and call Spirit Corner Cannabis to ask about Grabba Shakers in downtown Ottawa.";

export const metadata: Metadata = {
  title: "Grabba Leaf & Grabba Shakers Ottawa | Spirit Corner Cannabis",
  description: `${menuDescription} Visit 251 Dalhousie St, open 24 hours for adults 19+.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Grabba Leaf & Grabba Shakers Ottawa",
    description: `${menuDescription} Open 24 hours.`,
    url: PAGE_URL,
    images: [
      {
        url: socialItem?.image ?? "https://spiritcornercannabis.com/storeFavicon.webp",
        width: 800,
        height: 800,
        alt: hasShaker
          ? `${shakerItem?.name ?? "Grabba Shaker"} listed by Spirit Corner Cannabis in Ottawa`
          : "Grabba leaf product at Spirit Corner Cannabis in downtown Ottawa",
      },
    ],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Grabba Leaf & Grabba Shakers Ottawa",
  description: menuDescription,
  about: { "@id": "https://spiritcornercannabis.com" },
  primaryImageOfPage: socialItem ? { "@type": "ImageObject", url: socialItem.image } : undefined,
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
      name: "Grabba Leaf & Shakers",
      item: PAGE_URL,
    },
  ],
};

export default function GrabbaLeafShakersPage() {
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

      <main className={styles.page}>
        <Navbar />

        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>Spirit Corner Cannabis · Adults 19+</span>
            <h1>Grabba Leaf &amp; Grabba Shakers in Ottawa</h1>
            <p>
              Browse listed Grabba leaf and shaker choices before visiting Spirit
              Corner Cannabis at 251 Dalhousie St near ByWard Market. The Ottawa
              storefront is open 24 hours for adults 19+.
            </p>
            <div className={styles.actions}>
              <a href="tel:+13433088998" className={styles.primaryAction}>
                Call (343) 308-8998
              </a>
              <a
                href={DIRECTIONS_URL}
                className={styles.secondaryAction}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions to 251 Dalhousie St
              </a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.section}>
              <h2>
                {hasShaker
                  ? "Grabba Leaf and Grabba Shaker Choices"
                  : "Grabba Leaf in Downtown Ottawa"}
              </h2>
              {hasShaker ? (
                <p>
                  Compare the listed Grabba leaf and shaker choices, including the
                  RedRose and Red Herring shaker option. Listings and prices can change,
                  so call ahead when a particular product matters to your visit.
                </p>
              ) : (
                <p>
                  Grabba leaf is listed below. Call (343) 308-8998 to ask about Grabba
                  Shaker choices before visiting, because listings and prices can change.
                </p>
              )}

              <div className={styles.productGrid}>
                {grabbaItems.map((item) => {
                  return (
                    <article key={item.slug} className={styles.productCard}>
                      <Link href={`/item/${item.slug}`} className={styles.productImageLink}>
                        <Image
                          src={item.image}
                          alt={`${item.name} listed by Spirit Corner Cannabis in downtown Ottawa`}
                          width={800}
                          height={800}
                          sizes="(max-width: 700px) calc(100vw - 64px), 360px"
                          className={styles.productImage}
                        />
                      </Link>
                      <div className={styles.productBody}>
                        <h3>
                          <Link href={`/item/${item.slug}`}>{item.name}</Link>
                        </h3>
                        {item.price && (
                          <p className={styles.price}>Listed menu price: {item.price}</p>
                        )}
                        <Link href={`/item/${item.slug}`} className={styles.productLink}>
                          Product details
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className={styles.section}>
              <h2>Open 24 Hours Near ByWard Market</h2>
              <p>
                Spirit Corner is in downtown Ottawa, close to ByWard Market and
                Lowertown. Visitors coming from Gatineau, Hull, Aylmer, Vanier,
                Overbrook, or South Keys can check current directions to 251 Dalhousie
                St before leaving.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Smoke Essentials and Flower at Spirit Corner</h2>
              <p>
                Adults can also compare cigarette listings, smoke essentials, and five
                flower tiers for an in-store visit. Call (343) 308-8998 if you need to
                ask about a particular Grabba choice before travelling.
              </p>
              <div className={styles.linkGrid}>
                <Link href="/items/cigarettes">Cigarettes &amp; smoke essentials</Link>
                <Link href="/menu">Full menu</Link>
                <Link href="/info/weed-store-near-gatineau">Gatineau visit information</Link>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Grabba FAQ</h2>
              <div className={styles.faqList}>
                <details>
                  <summary>Which Grabba products are listed?</summary>
                  <p>
                    {hasShaker
                      ? "Listed choices include Grabba leaf and a Grabba Shaker with RedRose and Red Herring options. Listings can change, so call ahead when a particular choice matters."
                      : "Grabba leaf is listed. Call (343) 308-8998 to ask about Grabba Shaker choices before visiting, because listings can change."}
                  </p>
                </details>
                <details>
                  <summary>Where is Spirit Corner Cannabis?</summary>
                  <p>
                    Visit 251 Dalhousie St, Ottawa, ON K1N 1E7, near ByWard Market.
                    The store is open 24 hours.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
