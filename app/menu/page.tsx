import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import MenuFinder from "../components/MenuFinder";
import Navbar from "../components/Navbar";
import { allFlowers, allItems } from "../lib/products";
import styles from "./menuPage.module.css";

export const metadata: Metadata = {
  title: "Ottawa Flower & Accessories Menu | Spirit Corner Cannabis",
  description:
    "Compare listed flower, pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories at Spirit Corner Cannabis in downtown Ottawa.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/menu",
  },
  openGraph: {
    title: "Spirit Corner Cannabis Menu | Flower & Accessories Ottawa",
    description:
      "Compare listed cannabis flower and accessory categories before visiting Spirit Corner Cannabis at 251 Dalhousie Street.",
    url: "https://spiritcornercannabis.com/menu",
    images: ["/banners/spirit_corner_cannabis_showcase.webp"],
  },
};

export default function MenuPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <section className={styles.hero}>
        <p className={styles.kicker}>Spirit Corner Cannabis Menu</p>
        <h1>Compare flower and accessories in Ottawa</h1>
        <p className={styles.copy}>
          Compare listed flower by tier, type, weight, THC label, and price,
          or browse pre-rolls, edibles, vapes, concentrates, cigarettes, and
          accessories. Call ahead when you want to confirm a specific item
          before visiting our 24-hour Dalhousie Street store.
        </p>
        <div className={styles.heroActions}>
          <Link href="/#menu" className={styles.secondaryLink}>
            View homepage menu
          </Link>
          <Link href="/cannabis-delivery-ottawa" className={styles.secondaryLink}>
            Delivery updates
          </Link>
        </div>
      </section>
      <section className={styles.finderSection} aria-label="Spirit Corner menu finder">
        <MenuFinder flowers={allFlowers} items={allItems} />
      </section>
      <Footer />
    </main>
  );
}
