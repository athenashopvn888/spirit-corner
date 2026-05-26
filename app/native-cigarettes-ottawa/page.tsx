import type { Metadata } from "next";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Native Cigarettes Ottawa | Cheap Smokes & Cartons $25 | Spirit Corner Cannabis",
  description: "Looking for cheap smokes in Ottawa? Spirit Corner Cannabis offers popular native cigarette cartons for only $25 including Nexus, Canadian, BB, Putters, and more.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/native-cigarettes-ottawa",
  },
};

export default function NativeCigarettesPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Banner Section ── */}
      <section style={{ marginTop: "92px", position: "relative" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
          <img
            src="/banners/native-cigarettes-ottawa-25-dollar-cartons-spirit-corner-cannabis.png"
            alt="Native Cigarette Cartons in Ottawa for only $25 featuring Nexus, Canadian, BB, and Time cigarettes at Spirit Corner Cannabis near ByWard Market"
            style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
          />
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "20px" }}>
            Native Cigarettes Ottawa
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Discount Tobacco & Cheap Smokes Cartons For $25 Near ByWard Market
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Spirit Corner Cannabis is Ottawa&apos;s leading smoke and tobacco destination, offering the best selection of native cigarettes at unbeatable prices. Located at 251 Dalhousie St near the ByWard Market, we carry a complete stock of premium and value native cigarette brands starting at only $25 per carton.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Unbeatable Native Cigarette Carton Prices
            </h3>
            <p style={{ marginBottom: "16px" }}>
              As more tobacco customers seek affordable alternatives to high-priced commercial retailers charging upwards of $100-$150, Spirit Corner Cannabis provides trusted native cigarette cartons for only $25. Browse our comprehensive in-store{" "}
              <Link href="/items/cigarettes" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                native cigarette selection
              </Link>{" "}
              featuring premium tobacco blends and value lines.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Popular Native Cigarette Brands Available
            </h3>
            <p style={{ marginBottom: "14px", fontWeight: "bold" }}>
              We carry a highly searched and requested selection of native cigarette brands:
            </p>
            <ul style={{ listStyleType: "circle", paddingLeft: "24px", marginBottom: "22px", lineHeight: "1.8" }}>
              <li>Nexus Full & Light</li>
              <li>Canadian Full & Light & Menthol</li>
              <li>BB Full & Light</li>
              <li>Canadian Classics Original & Silver</li>
              <li>Canadian Goose Red & Blue</li>
              <li>Putters Light & Playfare Light</li>
              <li>Time Full & Light</li>
            </ul>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Smoke & Vape Alternatives
            </h3>
            <p style={{ marginBottom: "16px" }}>
              We are dedicated to providing a full spectrum of nicotine products for our clients. In addition to tobacco cartons, we carry a strong inventory of premium{" "}
              <Link href="/5-percent-vapes-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                disposable vape products
              </Link>{" "}
              featuring OVNS, Elf Bar, and Geek Max.
            </p>
            <p style={{ marginBottom: "24px" }}>
              For those who prefer pouch options, we also carry highly requested{" "}
              <Link href="/nicotine-pouches-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                nicotine pouch products
              </Link>{" "}
              such as Zyn and Velo.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Frequently Asked Questions
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>How much are cigarette cartons?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Spirit Corner Cannabis offers highly requested native cigarette cartons for only $25 per carton.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Why are your prices lower than other Ottawa smoke shops?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Many Ottawa retailers charge between $40–$55 per carton. Spirit Corner Cannabis focuses on affordability and competitive pricing.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Which brands are available?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>We carry multiple popular brands including Nexus, Canadian, BB, Time, Putters, Playfare, and more.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Which Ottawa areas do you serve?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>We regularly serve customers throughout Ottawa, Barrhaven, Kanata, Orleans, Nepean, Gatineau, Gloucester, and nearby communities.</p>
              </details>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
