import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Nicotine Pouches in Downtown Ottawa",
  description:
    "Shop nicotine pouches in Ottawa at Spirit Corner Cannabis near ByWard Market. $20 tins, native cigarettes at $25 per carton, vapes, accessories, and 24-hour storefront help.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/nicotine-pouches-ottawa",
  },
};

const linkStyle = {
  color: "var(--green-mid)",
  textDecoration: "underline",
  fontWeight: "bold",
};

export default function NicotinePouchesPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section style={{ padding: "34px 24px 18px", background: "linear-gradient(135deg, #052e1d, #0b1120)" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "24px", alignItems: "center" }}>
          <div>
            <p style={{ color: "#86efac", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>
              Downtown Ottawa 19+ smoke essentials
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "40px", fontWeight: 900, color: "white", marginBottom: "14px" }}>
              Nicotine Pouches in Downtown Ottawa
            </h1>
            <p style={{ color: "#d1fae5", fontSize: "16px", lineHeight: 1.7, marginBottom: "18px" }}>
              Visit Spirit Corner Cannabis at 251 Dalhousie St for $20 nicotine pouch tins, disposable vapes, accessories, and native cigarette cartons. Call <a href="tel:+13433088998" style={{ color: "#bbf7d0", fontWeight: 900 }}>(343) 308-8998</a> for quick store help.
            </p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(187,247,208,0.25)", borderRadius: "22px", padding: "20px", textAlign: "center" }}>
            <img
              src="/products/Zyn-Nicotine-pouches.webp"
              alt="Nicotine pouches in Ottawa at Spirit Corner Cannabis near ByWard Market and downtown Ottawa"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "18px" }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginBottom: "12px" }}>
            $20 Nicotine Pouch Tins at Spirit Corner
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "18px" }}>
              Spirit Corner Cannabis is a 24-hour storefront for adult customers looking for nicotine pouches in Ottawa, with pouch tins priced at $20. The store is close to ByWard Market, Lowertown, Rideau, Sandy Hill, Vanier, and Centretown for quick local visits.
            </p>
            <p style={{ marginBottom: "18px" }}>
              Pouch shoppers can also browse <Link href="/5-percent-vapes-ottawa" style={linkStyle}>5 percent vapes</Link>, <Link href="/items/vapes" style={linkStyle}>vape products</Link>, <Link href="/native-cigarettes-ottawa" style={linkStyle}>native cigarettes at $25 per carton</Link>, and <Link href="/cheap-weed-ottawa" style={linkStyle}>cheap weed Ottawa value options</Link>.
            </p>

            <div style={{ background: "white", border: "1px solid var(--border-subtle)", borderRadius: "16px", padding: "22px", margin: "30px 0" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 900, color: "var(--text-primary)", marginBottom: "12px" }}>
                Pouch Styles and Smoke Essentials
              </h3>
              <p style={{ marginBottom: "12px" }}>
                Listed pouch options include Zyn, Velo, Killa, and Pablo, with styles such as mint, wintergreen, and citrus. Selection can change, so call the store if you want to ask about a particular option.
              </p>
              <p style={{ marginBottom: 0 }}>
                For fast help, call <a href="tel:+13433088998" style={linkStyle}>(343) 308-8998</a> before visiting Spirit Corner Cannabis at 251 Dalhousie St.
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Open 24 Hours in Downtown Ottawa
            </h2>
            <p style={{ marginBottom: "22px" }}>
              Visit 251 Dalhousie St near ByWard Market at any hour, or call (343) 308-8998 before your trip.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Nicotine Pouches FAQ
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>How much are nicotine pouch tins?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Nicotine pouch tins are listed at $20 at Spirit Corner Cannabis.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What related smoke products can I browse?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Adult shoppers can also compare disposable vapes, vape accessories, Native cigarettes, and other smoking accessories in store.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Where is the store?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Spirit Corner Cannabis is located at 251 Dalhousie St in downtown Ottawa near ByWard Market.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
