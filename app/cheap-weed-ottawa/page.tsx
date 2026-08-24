import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Budget Flower and Value Ounces in Ottawa | Spirit Corner Cannabis",
  description: "Compare Budget flower and listed ounce options at Spirit Corner Cannabis in downtown Ottawa. Visit 251 Dalhousie St, open 24 hours, or call (343) 308-8998.",
  alternates: { canonical: "https://spiritcornercannabis.com/cheap-weed-ottawa" },
  openGraph: {
    title: "Budget Flower and Value Ounces in Ottawa",
    description: "Compare listed Budget flower sizes and prices at Spirit Corner Cannabis in downtown Ottawa.",
    url: "https://spiritcornercannabis.com/cheap-weed-ottawa",
    images: [{ url: "/banners/spirit_corner_cannabis_showcase.webp", width: 1168, height: 784, alt: "Spirit Corner Cannabis branded welcome graphic" }],
  },
};

const linkStyle = { color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" };

export default function CheapWeedPage() {
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
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "20px" }}>
            Budget Flower and Value Ounces in Ottawa
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Open 24 Hours at 251 Dalhousie St
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Adults can compare Budget flower names, Indica, Sativa, or Hybrid
              types, THC labels, sizes, and listed prices before visiting Spirit
              Corner Cannabis near ByWard Market.
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Compare Five Flower Tiers
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Start with <Link href="/budget" style={linkStyle}>Budget flower</Link>{" "}
              or compare <Link href="/aa" style={linkStyle}>AA</Link>,{" "}
              <Link href="/aaa" style={linkStyle}>AAA+</Link>,{" "}
              <Link href="/premium" style={linkStyle}>Premium</Link>, and{" "}
              <Link href="/exotic" style={linkStyle}>Exotic</Link>. Each flower
              listing shows its supplied sizes and prices when provided.
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              More Listed Product Categories
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Adults can also compare listed{" "}
              <Link href="/items/edibles" style={linkStyle}>edibles</Link>,{" "}
              <Link href="/items/vape-disposables" style={linkStyle}>vape disposables</Link>,{" "}
              <Link href="/items/prerolls" style={linkStyle}>pre-rolls</Link>, and{" "}
              <Link href="/items/concentrates" style={linkStyle}>concentrates</Link>.
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Call Ahead for a Particular Listing
            </h2>
            <p style={{ marginBottom: "24px" }}>
              Listings and prices can change. Call{" "}
              <a href="tel:+13433088998" style={linkStyle}>(343) 308-8998</a>{" "}
              before travelling when a particular flower, size, or price matters.
              The storefront is open 24 hours at 251 Dalhousie St.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Cheap Weed Ottawa FAQ
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What Budget flower details can I compare?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Listings show the flower name, type, THC label, sizes, and prices when provided.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Can listed flower prices change?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Yes. Call (343) 308-8998 before travelling when a particular price matters.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Where is Spirit Corner Cannabis?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Spirit Corner Cannabis is at 251 Dalhousie St in downtown Ottawa near ByWard Market.</p>
              </details>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
