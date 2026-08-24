import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PAGE_URL = "https://spiritcornercannabis.com/24-hour-ottawa-dispensary";

export const metadata: Metadata = {
  title: "24 Hour Ottawa Dispensary | Late Night Cannabis Store Ottawa | Spirit Corner Cannabis",
  description: "Spirit Corner Cannabis is open 24 hours at 251 Dalhousie St near ByWard Market in downtown Ottawa. Adults 19+ can compare listed flower and other product categories.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "24 Hour Ottawa Dispensary | Spirit Corner Cannabis",
    description: "Visit 251 Dalhousie St near ByWard Market in downtown Ottawa. Open 24 hours for adults 19+.",
    url: PAGE_URL,
    images: [{ url: "/banners/spirit_corner_cannabis_showcase.webp", width: 1168, height: 784, alt: "Spirit Corner Cannabis branded welcome graphic" }],
  },
};

const linkStyle = {
  color: "var(--green-mid)",
  textDecoration: "underline",
  fontWeight: "bold",
};

export default function TwentyFourHourPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section style={{ marginTop: 0, position: "relative" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 24px" }}>
          <Image
            src="/banners/spirit_corner_cannabis_showcase.webp"
            alt="Spirit Corner Cannabis branded welcome graphic"
            width={1168}
            height={784}
            priority
            sizes="(max-width: 1180px) calc(100vw - 48px), 1132px"
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
            Open 24 Hours Near ByWard Market
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Spirit Corner Cannabis is open 24 hours a day, seven days a week at
              251 Dalhousie St in downtown Ottawa. Adults can visit early, during
              the day, in the evening, or late at night.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Compare Listings Before a Late-Night Visit
            </h3>
            <p style={{ marginBottom: "16px" }}>
              Compare five flower tiers plus listed{" "}
              <Link href="/items/prerolls" style={linkStyle}>pre-rolls</Link>,{" "}
              <Link href="/items/edibles" style={linkStyle}>edibles</Link>,{" "}
              <Link href="/items/vapes" style={linkStyle}>vapes</Link>, and{" "}
              <Link href="/items/concentrates" style={linkStyle}>concentrates</Link>.
              Listings and prices can change, so call ahead when a particular
              product matters.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Downtown Ottawa Store Information
            </h3>
            <p style={{ marginBottom: "16px" }}>
              The storefront is near ByWard Market and Lowertown. Check current
              directions from your starting point and allow for downtown traffic.
              Visitors travelling from Gatineau can also review the{" "}
              <Link href="/info/weed-store-near-gatineau" style={linkStyle}>
                Ottawa store information near Gatineau
              </Link>.
            </p>
            <p style={{ marginBottom: "24px" }}>
              Call <a href="tel:+13433088998" style={linkStyle}>(343) 308-8998</a>{" "}
              for directions or product questions before visiting.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Frequently Asked Questions
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Is Spirit Corner Cannabis open 24 hours?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Yes. The Ottawa storefront is open 24 hours a day, seven days a week for adults 19+.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Where is the store?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Spirit Corner Cannabis is at 251 Dalhousie St in downtown Ottawa near ByWard Market.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Can I call before visiting?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Yes. Call (343) 308-8998 for directions or questions about a particular listing.</p>
              </details>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
