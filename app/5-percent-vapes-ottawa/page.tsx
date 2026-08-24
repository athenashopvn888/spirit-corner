import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "5% Disposable Vapes in Downtown Ottawa",
  description: "Visit Spirit Corner Cannabis at 251 Dalhousie St for listed 5% disposable vapes, including OVNS and Geek Max options. Open 24 hours.",
  alternates: { canonical: "https://spiritcornercannabis.com/5-percent-vapes-ottawa" },
};

const linkStyle = { color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" };

export default function VapesPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org", "@type": "Store", "@id": "https://spiritcornercannabis.com",
    name: "Spirit Corner Cannabis",
    description: "Spirit Corner Cannabis is a 24-hour downtown Ottawa store with listed 5% disposable vape options.",
    url: "https://spiritcornercannabis.com/5-percent-vapes-ottawa", telephone: "+13433088998",
    address: { "@type": "PostalAddress", streetAddress: "251 Dalhousie St", addressLocality: "Ottawa", addressRegion: "ON", postalCode: "K1N 1E7", addressCountry: "CA" },
    geo: { "@type": "GeoCoordinates", latitude: 45.4310488, longitude: -75.6927362 },
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "Where can I visit Spirit Corner Cannabis?", acceptedAnswer: { "@type": "Answer", text: "Spirit Corner Cannabis is at 251 Dalhousie St in downtown Ottawa near ByWard Market." } },
      { "@type": "Question", name: "Which 5% disposable vape listings are shown?", acceptedAnswer: { "@type": "Answer", text: "The store listings include OVNS 2500, OVNS 10000, and Geek Max 5% disposable vape options." } },
      { "@type": "Question", name: "When is Spirit Corner Cannabis open?", acceptedAnswer: { "@type": "Answer", text: "Spirit Corner Cannabis is open 24 hours a day, seven days a week." } },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className={styles.main}>
        <Navbar />
        <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.7 }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "18px" }}>5% Disposable Vapes in Downtown Ottawa</h1>
            <p style={{ marginBottom: "24px" }}>Spirit Corner Cannabis is open 24 hours at 251 Dalhousie St near ByWard Market. Call <a href="tel:+13433088998" style={linkStyle}>(343) 308-8998</a> if you want help before visiting.</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginBottom: "12px" }}>Listed 5% Vape Options</h2>
            <p style={{ marginBottom: "16px" }}>Store listings include OVNS 2500, OVNS 10000, and Geek Max 5% disposable vape options. Selection can change, so call the store if you are looking for a particular item.</p>
            <p style={{ marginBottom: "28px" }}>Adults can also compare <Link href="/nicotine-pouches-ottawa" style={linkStyle}>nicotine pouches</Link>, <Link href="/native-cigarettes-ottawa" style={linkStyle}>Native cigarettes</Link>, and smoking accessories during a store visit.</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginBottom: "12px" }}>Visit Spirit Corner Cannabis</h2>
            <p>The store is at 251 Dalhousie St in downtown Ottawa and is open 24 hours a day, seven days a week.</p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
