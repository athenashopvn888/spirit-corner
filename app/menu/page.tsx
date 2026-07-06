import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import MenuFinder from "../components/MenuFinder";
import Navbar from "../components/Navbar";
import { allFlowers, allItems } from "../lib/products";
import styles from "./menuPage.module.css";

export const metadata: Metadata = {
  title: "Spirit Corner Cannabis Menu Finder | Ottawa Cannabis Menu",
  description:
    "Find Spirit Corner Cannabis flower, pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories with fast category and shopper filters.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/menu",
  },
};

export default function MenuPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <section className={styles.hero}>
        <p className={styles.kicker}>Spirit Corner Cannabis Menu</p>
        <h1>Find the right menu section faster</h1>
        <p className={styles.copy}>
          Browse Spirit Corner Cannabis by category, price range, weight, THC
          range, desired effect, product type, and search terms so adult
          shoppers can get to the right section with less scrolling.
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
