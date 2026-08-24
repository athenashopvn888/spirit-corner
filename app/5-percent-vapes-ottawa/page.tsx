import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "5% Disposable Vapes in Downtown Ottawa | Spirit Corner Cannabis",
  description: "Visit Spirit Corner Cannabis at 251 Dalhousie St for listed 5% disposable vapes, including OVNS and Geek Max options. Open 24 hours.",
  alternates: { canonical: "https://spiritcornercannabis.com/5-percent-vapes-ottawa" },
  openGraph: {
    title: "5% Disposable Vapes in Downtown Ottawa",
    description: "Review listed 5% disposable vape options at Spirit Corner Cannabis and call ahead about a particular listing.",
    url: "https://spiritcornercannabis.com/5-percent-vapes-ottawa",
  },
};

const linkStyle = { color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" };

export default function VapesPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://spiritcornercannabis.com/5-percent-vapes-ottawa#webpage",
    url: "https://spiritcornercannabis.com/5-percent-vapes-ottawa",
    name: "5% Disposable Vapes in Downtown Ottawa",
    about: { "@id": "https://spiritcornercannabis.com" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <main className={styles.main}>
        <Navbar />
        <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.7 }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "18px" }}>5% Disposable Vapes in Downtown Ottawa</h1>
            <p style={{ marginBottom: "24px" }}>Spirit Corner Cannabis is open 24 hours at 251 Dalhousie St near ByWard Market. Call <a href="tel:+13433088998" style={linkStyle}>(343) 308-8998</a> if you want help before visiting.</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginBottom: "12px" }}>Listed 5% Vape Options</h2>
            <p style={{ marginBottom: "16px" }}>Store listings include OVNS 2500, OVNS 10000, and Geek Max 5% disposable vape options. Selection can change, so call the store if you are looking for a particular item.</p>
            <p style={{ marginBottom: "28px" }}>Adults can also review <Link href="/nicotine-pouches-ottawa" style={linkStyle}>nicotine pouch information</Link>, compare <Link href="/native-cigarettes-ottawa" style={linkStyle}>Native cigarettes and Native smokes</Link>, and browse listed smoking accessories.</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginBottom: "12px" }}>Visit Spirit Corner Cannabis</h2>
            <p>The store is at 251 Dalhousie St in downtown Ottawa and is open 24 hours a day, seven days a week.</p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
