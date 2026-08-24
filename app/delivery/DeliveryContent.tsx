"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./delivery.module.css";

export default function DeliveryContent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      // Save to Google Sheets via Apps Script
      await fetch(
        `https://script.google.com/macros/s/AKfycbx09_sDal1eMVF1r-hUck4e7oq_XBHEWhGvA79JuhZNQ6P4CdhCas0xE3FfexWQ3hq4/exec?action=delivery_email&email=${encodeURIComponent(email)}&store=SCC01`,
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
      <div className={styles.content}>
        <span className={styles.icon}>Delivery</span>
        <h1 className={styles.pageTitle}>
          Delivery <span className={styles.highlight}>Coming Soon</span>
        </h1>
        <p className={styles.pageSubtitle}>
          Delivery is not available yet. Sign up for a notification when it becomes available.
        </p>

        {/* Email signup */}
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Get Notified When We Launch</h2>
          <p className={styles.formDesc}>
            Enter your email if you want a delivery launch update.
          </p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={styles.emailInput}
                required
                disabled={status === "loading"}
              />
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Notify Me"}
              </button>
            </div>
          </form>
          {status === "success" && (
            <p className={styles.successMsg}>
              Thanks. Your email was submitted for delivery updates.
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        {/* Info cards */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>Delivery</span>
            <h3 className={styles.infoTitle}>Coming Soon</h3>
            <p className={styles.infoDesc}>Delivery is still being prepared and is not available yet.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>Area</span>
            <h3 className={styles.infoTitle}>Visit the Store</h3>
            <p className={styles.infoDesc}>Shop in person at 251 Dalhousie St in downtown Ottawa.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>Value</span>
            <h3 className={styles.infoTitle}>Open 24 Hours</h3>
            <p className={styles.infoDesc}>The storefront is open 24 hours a day, seven days a week.</p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Can&apos;t wait? Visit us in-store at <strong>251 Dalhousie St, Ottawa</strong> -
            open <strong>24 hours</strong>. Call <strong>(343) 308-8998</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
