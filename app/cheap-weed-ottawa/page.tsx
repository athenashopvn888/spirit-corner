import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Budget Flower and Value Ounces in Ottawa",
  description:
    "Visit Spirit Corner Cannabis in downtown Ottawa for cheap weed, budget flower, value ounces, edibles, vapes, native cigarettes, and nicotine pouches. Call (343) 308-8998.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/cheap-weed-ottawa",
  },
};

const linkStyle = {
  color: "var(--green-mid)",
  textDecoration: "underline",
  fontWeight: "bold",
};

export default function CheapWeedPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section style={{ marginTop: 0, position: "relative" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
          <img
            src="/banners/cheap-weed-ottawa-dispensary-deals-spirit-corner-cannabis-24-hour.png"
            alt="Cheap weed Ottawa value menu at Spirit Corner Cannabis near ByWard Market with budget flower ounces and local adult dispensary shopping"
            style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
          />
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "20px" }}>
            Budget Flower and Value Ounces in Ottawa
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Open 24 Hours at 251 Dalhousie St
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Spirit Corner Cannabis is a 24-hour downtown Ottawa storefront for adult customers comparing cheap weed, budget flower, value ounces, vapes, edibles, native cigarettes, and nicotine pouches near ByWard Market. Visit 251 Dalhousie St or call <a href="tel:+13433088998" style={linkStyle}>(343) 308-8998</a> for quick store help before you arrive.
            </p>

            <div style={{ background: "white", border: "1px solid var(--border-subtle)", borderRadius: "16px", padding: "22px", margin: "28px 0" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 900, color: "var(--text-primary)", marginBottom: "12px" }}>
                Listed Flower Prices and Sizes
              </h3>
              <p style={{ marginBottom: "12px" }}>
                Listed flower options include 3g bags from $10 to $40, 5g bags for $20, 6g bags from $30 to $60, 14g bags from $40 to $140, and 28g ounces from $40 to $80. Selection can change.
              </p>
              <p style={{ marginBottom: "12px" }}>
                Edible listings also include Celebrity Knockout Gummies in several listed strengths. Call the store if you want to ask about a particular item before visiting.
              </p>
              <p style={{ marginBottom: 0 }}>
                Smoke essentials include <Link href="/native-cigarettes-ottawa" style={linkStyle}>native cigarettes at $25 per carton</Link> and <Link href="/nicotine-pouches-ottawa" style={linkStyle}>nicotine pouches at $20 per tin</Link>.
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Flower, Vapes, Edibles, and Pre-Rolls
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Compare budget flower alongside <Link href="/items/vape-disposables" style={linkStyle}>THC vape disposables</Link>, <Link href="/items/edibles" style={linkStyle}>edibles</Link>, and <Link href="/items/prerolls" style={linkStyle}>pre-rolls</Link> during an in-store visit.
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Five Flower Tiers
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Compare <Link href="/budget" style={linkStyle}>Budget</Link>, <Link href="/aa" style={linkStyle}>AA</Link>, <Link href="/aaa" style={linkStyle}>AAA+</Link>, <Link href="/premium" style={linkStyle}>Premium</Link>, and <Link href="/exotic" style={linkStyle}>Exotic</Link> flower tiers. Start with Budget or AA for lower-priced choices, or explore AAA+, Premium, and Exotic when you want to compare higher-tier options.
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Visit the Downtown Ottawa Store
            </h2>
            <p style={{ marginBottom: "24px" }}>
              Spirit Corner is open 24 hours at 251 Dalhousie St near ByWard Market. Call <a href="tel:+13433088998" style={linkStyle}>(343) 308-8998</a> for directions or product questions before visiting.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Cheap Weed FAQ
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What value flower options can shoppers compare?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Adult shoppers can compare Budget, AA, AAA+, Premium, and Exotic flower tiers, including 3g, 5g or 6g, 14g, and 28g options depending on tier and menu availability.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Where is Spirit Corner Cannabis located?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Spirit Corner Cannabis is located at 251 Dalhousie St in downtown Ottawa near ByWard Market, Lowertown, Sandy Hill, Rideau, and Centretown.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>How do I check current menu options?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Review the listed flower tiers or call (343) 308-8998 if you want help before visiting.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
