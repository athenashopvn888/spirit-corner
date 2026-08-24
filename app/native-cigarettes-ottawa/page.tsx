import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allItems } from "../lib/products";

const cigaretteItems = allItems.filter((item) =>
  item.category.toUpperCase().includes("CIGARETTE")
);
const PAGE_URL = "https://spiritcornercannabis.com/native-cigarettes-ottawa";

export const metadata: Metadata = {
  title: "Native Cigarettes & Native Smokes Ottawa | Spirit Corner Cannabis",
  description: "Compare listed Native cigarettes and smoke products at Spirit Corner Cannabis, 251 Dalhousie St near ByWard Market. Adults 19+. Open 24 hours.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Native Cigarettes & Native Smokes Ottawa",
    description: "Compare listed cigarette and smoke-product names and prices before visiting the downtown Ottawa storefront.",
    url: PAGE_URL,
    images: [{ url: "/banners/spirit_corner_cannabis_showcase.webp", width: 1168, height: 784, alt: "Spirit Corner Cannabis branded welcome graphic" }],
  },
};

const linkStyle = { color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" };

export default function NativeCigarettesPage() {
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
            Native Cigarettes and Native Smokes in Ottawa
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Adult Smoke Product Listings Near ByWard Market
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Adults can compare listed cigarette and smoke-product names, supplied
              package details, and prices before visiting Spirit Corner Cannabis at
              251 Dalhousie St in downtown Ottawa.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Cigarette and Smoke Product Listings
            </h3>
            <p style={{ marginBottom: "16px" }}>
              Listings can change. Use the current product names and listed prices
              below for comparison, then call (343) 308-8998 when a particular brand
              or package matters to your visit.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", margin: "18px 0 28px" }}>
              {cigaretteItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/item/${item.slug}`}
                  style={{ display: "grid", gridTemplateColumns: "58px 1fr", gap: "10px", alignItems: "center", minHeight: "82px", padding: "10px", color: "inherit", textDecoration: "none", background: "white", border: "1px solid var(--border-subtle)", borderRadius: "12px" }}
                >
                  <span style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "58px", height: "62px", overflow: "hidden", background: "#f8faf9", borderRadius: "9px" }}>
                    <Image
                      src={item.image}
                      alt={`${item.name} cigarette or smoke-product listing`}
                      fill
                      sizes="58px"
                      style={{ objectFit: "contain" }}
                    />
                  </span>
                  <span>
                    <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "13px", lineHeight: 1.2, textTransform: "uppercase" }}>{item.name}</strong>
                    {item.price && (
                      <small style={{ display: "block", marginTop: "5px", color: "var(--text-muted)", fontWeight: 800 }}>{item.price}</small>
                    )}
                  </span>
                </Link>
              ))}
            </div>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Grabba Leaf and Shakers
            </h3>
            <p style={{ marginBottom: "16px" }}>
              Adults looking for Grabba can compare listed Grabba choices on the{" "}
              <Link href="/grabba-leaf-shakers" style={linkStyle}>
                Grabba leaf and shaker page
              </Link>. Call ahead when a particular choice matters.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Plan Your Downtown Ottawa Visit
            </h3>
            <p style={{ marginBottom: "24px" }}>
              Spirit Corner Cannabis is open 24 hours at 251 Dalhousie St near
              ByWard Market. Check current directions from your starting point or
              call <a href="tel:+13433088998" style={linkStyle}>(343) 308-8998</a>.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Frequently Asked Questions
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What cigarette details can I compare?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Listings show the product name, supplied package details, and listed price when provided.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Can cigarette listings change?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Yes. Call (343) 308-8998 before travelling when a particular brand matters.</p>
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
