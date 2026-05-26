import type { Metadata } from "next";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nicotine Pouches Ottawa | Zyn & Velo Pouches | Spirit Corner Cannabis",
  description: "Looking for premium nicotine pouches in Ottawa? Spirit Corner Cannabis stocks popular brands like Zyn, Velo, Killa, and Pablo near the ByWard Market.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/nicotine-pouches-ottawa",
  },
};

export default function NicotinePouchesPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Banner Section ── */}
      <section style={{ marginTop: "92px", position: "relative" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
          <img
            src="/banners/native-cigarettes-ottawa-25-dollar-cartons-spirit-corner-cannabis.png"
            alt="Nicotine Pouches and Native Cigarette Cartons in Ottawa at Spirit Corner Cannabis near ByWard Market"
            style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
          />
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "8px", textAlign: "center", fontStyle: "italic" }}>
            Explore premium Zyn, Velo, and Killa nicotine pouches alongside native cigarette cartons at Spirit Corner Cannabis in downtown Ottawa.
          </p>
        </div>
      </section>

      <section style={{ marginTop: "20px", padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "20px" }}>
            Nicotine Pouches Ottawa
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Your Premium Pouch Destination Near ByWard Market
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Spirit Corner Cannabis is downtown Ottawa&apos;s leading destination for premium, tobacco-free nicotine pouches. Centrally located at 251 Dalhousie St, we carry a complete selection of highly searched and widely requested nicotine pouches for customers looking for convenient, smokeless nicotine alternatives.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Popular Nicotine Pouch Brands & Strengths
            </h3>
            <p style={{ marginBottom: "16px" }}>
              We stock the most popular and highly sought-after brand selections including Zyn, Velo, Killa, Pablo, and more. Available in multiple strengths (from 3mg, 6mg, up to extra strong) and a wide variety of refreshing flavours including Cool Mint, Wintergreen, Peppermint, Citrus, and Spearmint.
            </p>
            
            <p style={{ marginBottom: "24px" }}>
              Whether you are looking for local Zyn in Ottawa or Velo pouch varieties, our friendly team is here to assist. We ensure consistent inventory levels and competitive prices to help you find the perfect option.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Complete Smoke & Vape Alternatives
            </h3>
            <p style={{ marginBottom: "16px" }}>
              At Spirit Corner Cannabis, we cater to all smokeless and tobacco preferences. In addition to our pouch selection, you can browse a premium variety of other smoke-related products.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Mid-page support: We carry a full selection of{" "}
              <Link href="/native-cigarettes-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                native cigarettes and smoke products
              </Link>{" "}
              for customers looking for trusted, affordable tobacco brands.
            </p>
            <p style={{ marginBottom: "16px" }}>
              For those who prefer vaping, we stock a wide array of premium{" "}
              <Link href="/5-percent-vapes-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                disposable vape products
              </Link>{" "}
              featuring the latest technology and popular flavours.
            </p>
            <p style={{ marginBottom: "24px" }}>
              You can also check out our general{" "}
              <Link href="/items/vapes" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                vape products
              </Link>{" "}
              section to find compatible batteries, cartridges, and hardware accessories.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Visit Spirit Corner Cannabis Today
            </h3>
            <p style={{ marginBottom: "16px" }}>
              We are open 24 hours a day, 7 days a week, making it incredibly easy to pick up your nicotine products on your own schedule. Visit us at 251 Dalhousie St, Ottawa, ON — just minutes from major transit routes and the Quebec bridge.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
