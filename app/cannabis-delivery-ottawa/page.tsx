"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const linkStyle = {
  color: "var(--green-mid)",
  textDecoration: "underline",
  fontWeight: "bold",
};

export default function CannabisDeliveryPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      await fetch(
        `https://script.google.com/macros/s/AKfycbymVE6EzwMRAiAa7OBvwEdoUF36PIuxgfUYYazmPDwngO0ueXINTtrlDZ-Dpna6ZK7znQ/exec?action=delivery_email&email=${encodeURIComponent(email)}&store=SCC01`,
        { method: "GET", mode: "no-cors" }
      );
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success");
    }
  }

  return (
    <main className={styles.main}>
      <Navbar />

      <section style={{ marginTop: 0, position: "relative" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
          <img
            src="/banners/spirit-corner-cannabis-weed-delivery-coming-soon-banner.png"
            alt="Ottawa weed delivery coming soon from Spirit Corner Cannabis with storefront pickup available at 251 Dalhousie St near ByWard Market"
            style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
          />
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "20px" }}>
            Weed Delivery Ottawa: 24/7 Storefront Pickup & Upcoming Rapid Delivery Networks
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            24/7 Central Hub Serving Downtown, ByWard Market, Centretown, Lowertown, Sandy Hill & Rideau
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Spirit Corner Cannabis is preparing Ottawa weed delivery while the storefront remains open now at 251 Dalhousie St for adult customers. For immediate help with pickup planning, directions, or menu questions, call <a href="tel:+16136122107" style={linkStyle}>(613) 612-2107</a>.
            </p>

            <div style={{ background: "white", border: "1px solid var(--border-subtle)", borderRadius: "16px", padding: "22px", margin: "28px 0" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 900, color: "var(--text-primary)", marginBottom: "12px" }}>
                Storefront pickup available while delivery is being built
              </h3>
              <p style={{ marginBottom: "12px" }}>
                The delivery system is being prepared, but the physical store is ready for 24-hour walk-ins and pickup-style visit planning now. Customers can browse <Link href="/cheap-weed-ottawa" style={linkStyle}>cheap weed Ottawa value options</Link>, <Link href="/native-cigarettes-ottawa" style={linkStyle}>$25 native cigarette cartons</Link>, <Link href="/nicotine-pouches-ottawa" style={linkStyle}>$20 nicotine pouch tins</Link>, vapes, edibles, and pre-rolls.
              </p>
              <p style={{ marginBottom: 0 }}>
                Use the live menu before visiting or call the store team for quick help with directions to the Dalhousie St storefront.
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              Future Rapid Courier Zones: Kanata, Stittsville, Barrhaven, Nepean & Richmond
            </h2>
            <p style={{ marginBottom: "16px" }}>
              The delivery plan is being organized around high-intent Ottawa searches and practical routes across Kanata, Stittsville, Barrhaven, Nepean, Richmond, Westboro, Glebe, Alta Vista, and nearby communities.
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, color: "var(--text-primary)", marginTop: "34px", marginBottom: "12px" }}>
              East Ottawa Expansion Corridors: Orleans, Vanier, Navan & Gloucester
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Spirit Corner is also mapping East Ottawa and Gatineau-area demand, including Orleans, Vanier, Navan, Gloucester, Gatineau, Hull, Aylmer, Manotick, Greely, Findlay Creek, Osgoode, and Kemptville.
            </p>

            <div style={{ background: "var(--bg-secondary)", padding: "30px", borderRadius: "16px", border: "1px solid var(--border-subtle)", margin: "40px 0" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-deep)", marginBottom: "10px" }}>
                Register Your Email For Delivery Updates
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "20px" }}>
                Sign up to stay informed about launch timing, service areas, and delivery updates.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === "loading"}
                  style={{ flex: 1, minWidth: "250px", padding: "14px 20px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "15px" }}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{ background: "var(--green-dark)", color: "white", padding: "14px 28px", borderRadius: "10px", border: "none", fontWeight: "bold", fontSize: "15px", cursor: "pointer", transition: "background 0.3s" }}
                >
                  {status === "loading" ? "Registering..." : "Notify Me"}
                </button>
              </form>

              {status === "success" && (
                <p style={{ color: "#16a34a", fontWeight: "bold", marginTop: "14px", fontSize: "14px" }}>
                  Thank you. You have successfully registered for Spirit Corner delivery updates.
                </p>
              )}
            </div>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Weed Delivery FAQ
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What can I do before delivery launches?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Use the live menu, call (613) 612-2107, or visit Spirit Corner Cannabis at 251 Dalhousie St for 24-hour storefront help.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Which areas are being planned?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Planned route research includes Ottawa, Gatineau, Hull, Kanata, Barrhaven, Nepean, Orleans, Vanier, Gloucester, and nearby communities.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Where should I browse products now?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Start with the home menu, cheap weed page, native cigarettes page, nicotine pouches page, or category links for flower, edibles, vapes, and pre-rolls.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
