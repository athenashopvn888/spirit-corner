import type { Metadata } from "next";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cheap Weed Ottawa | Affordable Cannabis Deals | Spirit Corner Cannabis",
  description: "Find affordable cannabis in Ottawa at Spirit Corner Cannabis. Serving Ottawa, Barrhaven, Kanata, Orleans, Nepean, Gatineau, and surrounding communities.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/cheap-weed-ottawa",
  },
};

export default function CheapWeedPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Banner Section ── */}
      <section style={{ marginTop: "92px", position: "relative" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
          <img
            src="/banners/cheap-weed-ottawa-dispensary-deals-spirit-corner-cannabis-24-hour.png"
            alt="Cheap weed Ottawa near Gatineau with budget weed ounce deals starting at $40, AA flower at $40-$45 for 14g, and $5 prerolls at Spirit Corner Cannabis"
            style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
          />
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "20px" }}>
            Cheap Weed Ottawa | Affordable Cannabis Deals
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Affordable Cannabis & Ounce Deals in Downtown Ottawa
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Spirit Corner Cannabis is a trusted destination for customers searching for cheap weed in Ottawa, affordable cannabis products, and consistent value across the region. Located at 251 Dalhousie St near the ByWard Market, we are dedicated to providing the best weed prices in town.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              High Quality, Low Prices — Our Affordable Flower Tiers
            </h3>
            <p style={{ marginBottom: "16px" }}>
              At Spirit Corner, we believe great cannabis should be accessible and budget-friendly. We offer multiple tiers dedicated to affordability:
            </p>
            <p style={{ marginBottom: "16px" }}>
              Under our OZ deals section, you can explore excellent value with our curated{" "}
              <Link href="/budget" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                budget flower options
              </Link>{" "}
              offering reliable genetics and strong value.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Under our $40-$45 section, we feature our highly requested{" "}
              <Link href="/aa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                affordable AA flower
              </Link>{" "}
              providing quality daily drivers with great taste and consistent effects.
            </p>
            <p style={{ marginBottom: "24px" }}>
              Under our quality/value paragraph, customers looking for the perfect balance of potency and price love our{" "}
              <Link href="/aaa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                AAA cannabis selection
              </Link>{" "}
              featuring heavy-hitting buds at highly competitive prices.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              More Affordable Choices
            </h3>
            <p style={{ marginBottom: "16px" }}>
              If you want to skip the rolling, we also carry a strong line of discount, ready-to-smoke{" "}
              <Link href="/items/prerolls" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                pre-roll products
              </Link>{" "}
              available in singles and value packs.
            </p>
            <p style={{ marginBottom: "24px" }}>
              We serve customers looking for cheap smokes and budget cannabis across Ottawa, Barrhaven, Kanata, Orleans, Nepean, Gatineau, Gloucester, and nearby communities.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Cheap Weed FAQ
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What is the cheapest weed you sell?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Our Budget tier starts at only $3/g, with value ounces from $40. Our AA tier starts at $4/g.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Do you have ounce deals?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Yes! We offer budget-friendly ounces starting at $40, providing exceptional bulk value in Ottawa.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Is your cheap weed good quality?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Yes. All of our budget flower is properly cured, fresh, lab-tested, and sourced from trusted Canadian growers.</p>
              </details>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
