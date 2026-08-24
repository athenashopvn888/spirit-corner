"use client";

import { useState } from "react";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CannabisDeliveryPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); if (!email.trim()) return; setStatus("loading");
    try { await fetch(`https://script.google.com/macros/s/AKfycbymVE6EzwMRAiAa7OBvwEdoUF36PIuxgfUYYazmPDwngO0ueXINTtrlDZ-Dpna6ZK7znQ/exec?action=delivery_email&email=${encodeURIComponent(email)}&store=SCC01`, { method: "GET", mode: "no-cors" }); }
    finally { setStatus("success"); setEmail(""); }
  }
  return (
    <main className={styles.main}>
      <Navbar />
      <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.7 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "18px" }}>Ottawa Delivery Coming Soon</h1>
          <p style={{ marginBottom: "16px" }}>Delivery is not available yet. Spirit Corner Cannabis remains open 24 hours at 251 Dalhousie St for in-store shopping.</p>
          <p style={{ marginBottom: "28px" }}>Call <a href="tel:+13433088998" style={{ color: "var(--green-mid)", fontWeight: "bold" }}>(343) 308-8998</a> for store directions or questions before visiting.</p>
          <div style={{ background: "var(--bg-secondary)", padding: "30px", borderRadius: "16px", border: "1px solid var(--border-subtle)" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "10px" }}>Get a Delivery Launch Update</h2>
            <p style={{ marginBottom: "16px" }}>Enter your email if you want a notification when delivery becomes available.</p>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required disabled={status === "loading"} style={{ flex: 1, minWidth: "220px", padding: "14px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }} />
              <button type="submit" disabled={status === "loading"} style={{ padding: "14px 22px", borderRadius: "10px", border: 0, background: "var(--green-dark)", color: "white", fontWeight: "bold" }}>{status === "loading" ? "Sending..." : "Notify Me"}</button>
            </form>
            {status === "success" && <p style={{ color: "#16a34a", fontWeight: "bold", marginTop: "14px" }}>Thanks. Your email was submitted for delivery updates.</p>}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
