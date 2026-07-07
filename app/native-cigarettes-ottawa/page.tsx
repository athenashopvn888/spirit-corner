import type { Metadata } from "next";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { allItems } from "../lib/products";

const cigaretteItems = allItems.filter((item) =>
  item.category.toUpperCase().includes("CIGARETTE")
);

export const metadata: Metadata = {
  title: "Native Cigarettes Ottawa - $25 Per Carton | Spirit Corner Cannabis",
  description: "Spirit Corner Cannabis offers Native cigarette cartons in downtown Ottawa at $25 Per Carton, with popular brands near ByWard Market for adult customers.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/native-cigarettes-ottawa",
  },
};

export default function NativeCigarettesPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Banner Section */}
      <section style={{ marginTop: 0, position: "relative" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
          <img
            src="/banners/native-cigarettes-ottawa-25-dollar-cartons-spirit-corner-cannabis.png"
            alt="Native cigarette cartons in Ottawa at $25 Per Carton featuring Nexus, Canadian, BB, and Time cigarettes at Spirit Corner Cannabis near ByWard Market"
            style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
          />
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "20px" }}>
            Native Cigarettes Ottawa - $25 Per Carton
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Discount Native Cigarettes Near Downtown Ottawa
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Spirit Corner Cannabis offers Native cigarette cartons at $25 Per Carton for adult customers visiting downtown Ottawa. Located at 251 Dalhousie St near the ByWard Market, the store carries premium and value Native cigarette brands alongside its cannabis menu.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Native Cigarettes at $25 Per Carton
            </h3>
            <p style={{ marginBottom: "16px" }}>
              For adult tobacco customers comparing carton options in Ottawa, Spirit Corner keeps the message simple: Native cigarette cartons are $25 Per Carton. Browse the in-store{" "}
              <Link href="/items/cigarettes" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                Native cigarette selection
              </Link>{" "}
              and ask staff about the brands currently on the shelf.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Ottawa Native Cigarettes Available at Spirit Corner
            </h3>
            <p style={{ marginBottom: "14px", fontWeight: "bold" }}>
              The Native cigarette brands listed on this page include:
            </p>
            <ul style={{ listStyleType: "circle", paddingLeft: "24px", marginBottom: "22px", lineHeight: "1.8" }}>
              <li>Nexus Full &amp; Light</li>
              <li>Canadian Full, Light &amp; Menthol</li>
              <li>BB Full &amp; Light</li>
              <li>Canadian Classics Original &amp; Silver</li>
              <li>Canadian Goose Red &amp; Blue</li>
              <li>Putters Light &amp; Playfare Light</li>
              <li>Time Full &amp; Light</li>
            </ul>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Plan Your Visit Near ByWard Market
            </h3>
            <p style={{ marginBottom: "16px" }}>
              Located at 251 Dalhousie St in the ByWard Market, Spirit Corner is open 24 hours a day for adult customers looking for Native cigarettes in downtown Ottawa.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Smoke &amp; Vape Alternatives
            </h3>
            <p style={{ marginBottom: "16px" }}>
              In addition to tobacco cartons, Spirit Corner also has nicotine products such as{" "}
              <Link href="/5-percent-vapes-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                disposable vape products
              </Link>{" "}
              and accessories for adult customers.
            </p>
            <p style={{ marginBottom: "24px" }}>
              Customers who prefer pouch options can also review the{" "}
              <Link href="/nicotine-pouches-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                nicotine pouch products
              </Link>{" "}
              page before visiting.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Native Cigarette Menu Listings
            </h3>
            <p style={{ marginBottom: "16px" }}>
              Browse the Spirit Corner cigarette menu section below and jump into individual product listings before planning your downtown Ottawa visit.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", margin: "18px 0 28px" }}>
              {cigaretteItems.map((item) => (
                <Link
                  key={item.sku}
                  href={`/item/${item.slug}`}
                  style={{ display: "grid", gridTemplateColumns: "58px 1fr", gap: "10px", alignItems: "center", minHeight: "82px", padding: "10px", color: "inherit", textDecoration: "none", background: "white", border: "1px solid var(--border-subtle)", borderRadius: "12px" }}
                >
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "58px", height: "62px", overflow: "hidden", background: "#f8faf9", borderRadius: "9px" }}>
                    <img
                      src={item.image}
                      alt={`${item.name} native cigarette product listing at Spirit Corner Cannabis Ottawa`}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </span>
                  <span>
                    <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "13px", lineHeight: 1.2, textTransform: "uppercase" }}>{item.name}</strong>
                    <small style={{ display: "block", marginTop: "5px", color: "var(--text-muted)", fontWeight: 800 }}>{item.price || "See menu"}</small>
                  </span>
                </Link>
              ))}
            </div>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Frequently Asked Questions
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>How much are cigarette cartons at Spirit Corner?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Native cigarette cartons are $25 Per Carton.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Where is Spirit Corner located?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Spirit Corner Cannabis is located at 251 Dalhousie St near the ByWard Market in downtown Ottawa.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Which brands are listed on this page?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Brands listed on this page include Nexus, Canadian, BB, Time, Putters, Playfare, and more.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Which Ottawa areas does this page serve?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>This page is written for adult customers in downtown Ottawa, ByWard Market, Lowertown, Sandy Hill, Centretown, and nearby communities.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
