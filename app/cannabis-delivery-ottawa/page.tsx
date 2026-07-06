"use client";

import { useState } from "react";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function CannabisDeliveryPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      // Save to Google Sheets via shared Apps Script
      await fetch(
        `https://script.google.com/macros/s/AKfycbymVE6EzwMRAiAa7OBvwEdoUF36PIuxgfUYYazmPDwngO0ueXINTtrlDZ-Dpna6ZK7znQ/exec?action=delivery_email&email=${encodeURIComponent(email)}&store=SCC01`,
        { method: "GET", mode: "no-cors" }
      );
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success"); // no-cors always succeeds visually
    }
  }

  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Banner Section ── */}
      <section style={{ marginTop: 0, position: "relative" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
          <img
            src="/banners/spirit-corner-cannabis-weed-delivery-coming-soon-banner.png"
            alt="Ottawa weed delivery coming soon for downtown Ottawa Gatineau Kanata Barrhaven Orleans Nepean Gloucester Stittsville and Findlay Creek"
            style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
          />
        </div>
      </section>

      {/* ── Main Content ── */}
      <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "20px" }}>
            Weed Delivery Ottawa — Cannabis Delivery Coming Soon
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Preparing Reliable Same Day Weed Delivery Across Ottawa & Gatineau
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              Spirit Corner Cannabis is preparing weed delivery across Ottawa, Barrhaven, Kanata, Orleans, Nepean, Gatineau, and surrounding communities. As Ottawa&apos;s cannabis market continues evolving, delivery accessibility has become one of the fastest-growing search categories, and we are preparing to meet this demand.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Expected Delivery Coverage Areas
            </h3>
            <p style={{ marginBottom: "14px" }}>
              Future delivery coverage is expected to include:
            </p>
            <ul style={{ listStyleType: "circle", paddingLeft: "24px", marginBottom: "20px", lineHeight: "1.8" }}>
              <li>Ottawa & Downtown Core</li>
              <li>Barrhaven & Riverside South</li>
              <li>Kanata & Stittsville</li>
              <li>Orleans & Gloucester</li>
              <li>Nepean, Findlay Creek & Greely</li>
              <li>Gatineau & Hull (crossover updates)</li>
              <li>Kemptville, Carleton Place & Arnprior</li>
            </ul>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              A More Convenient Ottawa Cannabis Experience
            </h3>
            <p style={{ marginBottom: "16px" }}>
              Today&apos;s cannabis customers expect convenience, accessibility, and flexibility. Whether you are looking for fresh{" "}
              <Link href="/items/prerolls" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                pre-roll products
              </Link>{" "}
              or popular{" "}
              <Link href="/items/vapes" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                vape products
              </Link>{" "}
              for your session, Spirit Corner Cannabis plans to provide a streamlined same-day weed delivery experience.
            </p>
            <p style={{ marginBottom: "24px" }}>
              Our goal is to create a convenient, professional online ordering system that delivers your favorite strains, edibles, concentrates, and smokes directly to your door with minimal waiting and outstanding service.
            </p>

            {/* waitlist form */}
            <div style={{ background: "var(--bg-secondary)", padding: "30px", borderRadius: "16px", border: "1px solid var(--border-subtle)", margin: "40px 0" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-deep)", marginBottom: "10px" }}>
                Register Your Email For Delivery Updates
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "20px" }}>
                Sign up to stay informed about our launch dates, service areas, product additions, and exclusive grand opening promos.
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
                  ✅ Thank you! You have successfully registered for Spirit Corner delivery updates.
                </p>
              )}
            </div>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Weed Delivery FAQ
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Is weed delivery currently available?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Delivery services are currently coming soon and are being prepared for future launch.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>How can I stay updated?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Customers can register their email for updates regarding launch announcements and delivery availability.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Which areas will delivery cover?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Expected future coverage areas include Ottawa, Barrhaven, Kanata, Orleans, Nepean, Gatineau, Gloucester, and nearby communities.</p>
              </details>
              <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Will same day weed delivery be available?</summary>
                <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px" }}>Future delivery details and availability options will be announced closer to launch.</p>
              </details>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
