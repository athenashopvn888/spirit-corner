import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Nicotine Pouches Ottawa | $10 Sale Tins | Spirit Corner Cannabis",
  description: "Nicotine pouch tins are currently listed on sale for $10 at Spirit Corner Cannabis in Ottawa. Check the live menu before visiting because pricing can change.",
  alternates: { canonical: "https://spiritcornercannabis.com/nicotine-pouches-ottawa" },
  openGraph: {
    title: "Nicotine Pouches Ottawa | $10 Sale Tins",
    description: "Browse $10 nicotine pouch sale tins in downtown Ottawa. Check the live menu or call ahead because sale pricing can change.",
    url: "https://spiritcornercannabis.com/nicotine-pouches-ottawa",
    images: [{ url: "/banners/spirit_corner_cannabis_showcase.webp", width: 1168, height: 784, alt: "Spirit Corner Cannabis branded welcome graphic" }],
  },
};

const linkStyle = { color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" };

export default function NicotinePouchesPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section style={{ padding: "34px 24px 18px", background: "linear-gradient(135deg, #052e1d, #0b1120)" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "24px", alignItems: "center" }}>
          <div>
            <p style={{ color: "#86efac", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>
              Downtown Ottawa · Adults 19+
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "40px", fontWeight: 900, color: "white", marginBottom: "14px" }}>
              Nicotine Pouches in Ottawa — $10 Sale Tins
            </h1>
            <p style={{ color: "#d1fae5", fontSize: "16px", lineHeight: 1.7, marginBottom: "18px" }}>
              Nicotine pouch tins are currently listed on sale for $10 each at Spirit Corner Cannabis in Ottawa. Check the{" "}
              <Link href="/items/cigarettes" style={{ color: "#bbf7d0", fontWeight: 900 }}>live Cigarettes menu</Link>{" "}
              or call <a href="tel:+13433088998" style={{ color: "#bbf7d0", fontWeight: 900 }}>(343) 308-8998</a>{" "}
              before visiting 251 Dalhousie St because sale pricing can change.
            </p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(187,247,208,0.25)", borderRadius: "22px", padding: "20px", textAlign: "center" }}>
            <Image
              src="/banners/spirit_corner_cannabis_showcase.webp"
              alt="Spirit Corner Cannabis branded welcome graphic"
              width={1168}
              height={784}
              priority
              sizes="(max-width: 800px) 100vw, 420px"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "18px" }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginBottom: "12px" }}>
              $10 Nicotine Pouch Sale Tins
            </h2>
            <p style={{ marginBottom: "18px" }}>
              Check the live <Link href="/items/cigarettes" style={linkStyle}>Cigarettes menu</Link> for the current nicotine pouch selection and pricing, as sale prices and availability can change.
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Compare Other Adult Smoke Products
            </h2>
            <p style={{ marginBottom: "18px" }}>
              Adults can also compare listed{" "}
              <Link href="/5-percent-vapes-ottawa" style={linkStyle}>5% vape products</Link>,{" "}
              <Link href="/native-cigarettes-ottawa" style={linkStyle}>Native cigarettes and Native smokes</Link>,{" "}
              <Link href="/grabba-leaf-shakers" style={linkStyle}>Grabba leaf and shakers</Link>, and{" "}
              <Link href="/items/add-ons" style={linkStyle}>smoke accessories</Link>.
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Open 24 Hours in Downtown Ottawa
            </h2>
            <p style={{ marginBottom: "22px" }}>
              Spirit Corner Cannabis is open 24 hours at 251 Dalhousie St near
              ByWard Market. Check current directions or call (343) 308-8998
              before your trip.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Nicotine Pouches FAQ
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>How much are nicotine pouch tins?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>The live Spirit Corner Cannabis menu currently lists both nicotine pouch tins at $10 each. This is sale pricing and may change, so check the live menu for the latest price and selection.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Can pouch listings change?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Yes. A particular brand, style, or price is not guaranteed, so call ahead when it matters.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Where is the store?</summary>
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
