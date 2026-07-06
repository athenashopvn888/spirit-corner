import type { Metadata } from "next";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "24 Hour Ottawa Dispensary | Late Night Cannabis Store Ottawa | Spirit Corner Cannabis",
  description: "Looking for a 24 hour Ottawa dispensary? Spirit Corner Cannabis offers a professional late night cannabis experience serving Ottawa, Gatineau, Barrhaven, Kanata, Orleans, and Nepean.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/24-hour-ottawa-dispensary",
  },
};

export default function TwentyFourHourPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Banner Section ── */}
      <section style={{ marginTop: 0, position: "relative" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
          <img
            src="/banners/24-hour-dispensary-ottawa-spirit-corner-cannabis-downtown-gatineau-open-late.png"
            alt="Spirit Corner Cannabis downtown Ottawa 24 hour dispensary near Gatineau with premium weed native cigarettes vapes edibles and cannabis deals"
            style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
          />
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "20px" }}>
            24 Hour Ottawa Dispensary
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Ottawa&apos;s Late Night Cannabis Destination Near ByWard Market
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Spirit Corner Cannabis is becoming one of the most searched destinations for customers looking for a 24 hour Ottawa dispensary and late night cannabis access throughout Ottawa and surrounding communities. Located at 251 Dalhousie St near the ByWard Market, we offer a professional late night cannabis experience.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Built For Late-Night Convenience & Accessibility
            </h3>
            <p style={{ marginBottom: "16px" }}>
              The Ottawa cannabis market continues evolving as more customers look for dispensaries that offer flexible access, modern service, and dependable product availability. Spirit Corner Cannabis focuses on providing a professional cannabis retail experience designed around convenience and accessibility.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Whether you are looking for ready-to-smoke{" "}
              <Link href="/items/prerolls" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                pre-roll products
              </Link>{" "}
              or popular, high-flavor{" "}
              <Link href="/items/vapes" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                vape products
              </Link>{" "}
              for your late-night session, our 24 hour dispensary has a complete menu ready.
            </p>
            <p style={{ marginBottom: "24px" }}>
              Customers searching for late night cannabis stores often prioritize convenient Ottawa access, a professional atmosphere, reliable product availability, and fast service. Spirit Corner Cannabis continues positioning itself within this growing late-night search category.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Serving Ottawa & Gatineau Surrounding Areas
            </h3>
            <p style={{ marginBottom: "16px" }}>
              We proudly serve shift workers, late-night travelers, nightlife explorers, and visitors looking for off-peak hours access across Ottawa, Barrhaven, Kanata, Orleans, Nepean, Gatineau, Gloucester, Stittsville, Kemptville, and surrounding regions.
            </p>
            <p style={{ marginBottom: "24px" }}>
              Explore our full, curated{" "}
              <Link href="/premium" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                premium cannabis selection
              </Link>{" "}
              featuring hand-picked connoisseur-grade flower to make the most of your late-night shopping trip.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Frequently Asked Questions
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Is Spirit Corner Cannabis a 24 hour dispensary in Ottawa?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Spirit Corner Cannabis is commonly searched as a 24 hour Ottawa dispensary due to high demand for late night cannabis access and convenient shopping throughout Ottawa. Customers use this page to find a reliable cannabis store experience at any time of day.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What does &quot;24 hour dispensary Ottawa&quot; mean?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>&quot;24 hour dispensary Ottawa&quot; is a high-volume search term used by customers looking for cannabis stores that are open late, open extended hours, or accessible when most dispensaries are closed. Spirit Corner Cannabis is optimized for this demand and late night cannabis searches across Ottawa.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Is there a dispensary open late in Ottawa near me?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Yes. Customers searching &quot;dispensary open late Ottawa&quot;, &quot;weed store open now&quot;, and &quot;cannabis near me open late&quot; regularly find Spirit Corner Cannabis through local Ottawa cannabis SEO targeting.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Why do people search for 24 hour dispensaries in Ottawa?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Customers often search for 24 hour dispensaries due to convenience, shift work schedules, late night needs, travel timing, and the growing demand for flexible cannabis access.</p>
              </details>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
