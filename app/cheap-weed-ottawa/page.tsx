import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Cheap Weed Ottawa | Ounces from $40 | Spirit Corner Cannabis",
  description:
    "Visit Spirit Corner Cannabis in downtown Ottawa for cheap weed, budget flower, value ounces, edibles, vapes, native cigarettes, and nicotine pouches. Call (613) 612-2107.",
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
            Cheap Weed Ottawa: 24/7 Budget Cannabis at Our ByWard Market, Lowertown & Centretown Dispensary
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Affordable Dispensary Near Me for Vanier, Sandy Hill, Rideau & Overbrook Walk-Ins
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Spirit Corner Cannabis is a 24-hour downtown Ottawa storefront for adult customers comparing cheap weed, budget flower, value ounces, vapes, edibles, native cigarettes, and nicotine pouches near ByWard Market. Visit 251 Dalhousie St or call <a href="tel:+16136122107" style={linkStyle}>(613) 612-2107</a> for quick store help before you arrive.
            </p>

            <div style={{ background: "white", border: "1px solid var(--border-subtle)", borderRadius: "16px", padding: "22px", margin: "28px 0" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 900, color: "var(--text-primary)", marginBottom: "12px" }}>
                Value menu price anchors customers ask for
              </h3>
              <p style={{ marginBottom: "12px" }}>
                Flower shoppers can compare 3g bags from $10 to $40, 5g bags for $20, 6g bags from $30 to $60, 14g bags from $40 to $140, and 28g ounces from $40 to $80 in the live menu.
              </p>
              <p style={{ marginBottom: "12px" }}>
                Edible shoppers can also ask about Celebrity Knockout Gummies, including 1500mg Sean O'Malley, 3000mg Connor McGregor, and 5000mg Mike Tyson options shown through the store menu.
              </p>
              <p style={{ marginBottom: 0 }}>
                Smoke essentials include <Link href="/native-cigarettes-ottawa" style={linkStyle}>native cigarettes at $25 per carton</Link> and <Link href="/nicotine-pouches-ottawa" style={linkStyle}>nicotine pouches at $20 per tin</Link>.
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Discount Buds & Vapes Near the East End: Orleans, Navan & Blackburn Hamlet
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Drivers coming from Vanier, Overbrook, Alta Vista, Gloucester, Orleans, Navan, and Blackburn Hamlet can use Spirit Corner as a central downtown stop for budget flower, <Link href="/items/vape-disposables" style={linkStyle}>THC vape disposables</Link>, <Link href="/items/edibles" style={linkStyle}>edibles</Link>, and <Link href="/items/prerolls" style={linkStyle}>pre-rolls</Link>.
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Budget-Friendly Cannabis Menus for Westboro, Glebe, Kanata & Barrhaven
            </h2>
            <p style={{ marginBottom: "16px" }}>
              The live menu keeps flower tiers easy to compare: <Link href="/budget" style={linkStyle}>Budget</Link>, <Link href="/aa" style={linkStyle}>AA</Link>, <Link href="/aaa" style={linkStyle}>AAA+</Link>, <Link href="/premium" style={linkStyle}>Premium</Link>, and <Link href="/exotic" style={linkStyle}>Exotic</Link>. That gives shoppers a direct path from price-first browsing to higher-tier flower when they want something stronger or more premium.
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Value Menus for Gatineau, Hull, Aylmer & South Ottawa
            </h2>
            <p style={{ marginBottom: "24px" }}>
              Spirit Corner is built for simple adult shopping across downtown Ottawa, Gatineau, Hull, Aylmer, Manotick, Greely, Findlay Creek, and nearby communities. Call <a href="tel:+16136122107" style={linkStyle}>(613) 612-2107</a> for quick help, directions, or menu questions before heading to Dalhousie St.
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
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Use the live menu categories or call (613) 612-2107 for quick help from the store team before visiting.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
