"use client";

import { useState } from "react";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    additionalType: "https://schema.org/Store",
    "@id": "https://spiritcornercannabis.com",
    name: "Spirit Corner Cannabis",
    description: "Contact Spirit Corner Cannabis near the ByWard Market in downtown Ottawa for cannabis-related questions, local updates, and store information.",
    url: "https://spiritcornercannabis.com/contact-spirit-corner-cannabis",
    telephone: "+16136122107",
    image: "https://spiritcornercannabis.com/banners/spirit-corner-cannabis-logo-NEW.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "251 Dalhousie St",
      addressLocality: "Ottawa",
      addressRegion: "ON",
      postalCode: "K1N 1E7",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.4292,
      longitude: -75.6928,
    },
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("loading");

    try {
      // Fetch GET to save feedback in sheet (Apps Script endpoint)
      await fetch(
        `https://script.google.com/macros/s/AKfycbymVE6EzwMRAiAa7OBvwEdoUF36PIuxgfUYYazmPDwngO0ueXINTtrlDZ-Dpna6ZK7znQ/exec?action=contact_message&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}&store=SCC01`,
        { method: "GET", mode: "no-cors" }
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("success"); // no-cors always succeeds visually
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main className={styles.main}>
        <Navbar />

        <section style={{ marginTop: "120px", padding: "60px 24px", background: "var(--bg-primary)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "20px" }}>
              Contact Spirit Corner Cannabis
            </h1>

            {/* Intro text */}
            <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "30px" }}>
              <p style={{ marginBottom: "14px" }}>
                Spirit Corner Cannabis is located at 251 Dalhousie St near the ByWard Market in downtown Ottawa.
              </p>
              <p style={{ marginBottom: "14px" }}>
                Visitors throughout Ottawa, Gatineau, Hull, Barrhaven, Kanata, Orleans, Nepean, Gloucester, Stittsville, Riverside South, and nearby communities continue contacting Spirit Corner Cannabis for local updates, cannabis information, downtown Ottawa accessibility, and general store inquiries.
              </p>
              <p>
                Located near the ByWard Market, Rideau Centre, Parliament area, and major Gatineau access routes, Spirit Corner Cannabis continues attracting visitors searching for downtown Ottawa cannabis accessibility and nearby cannabis information.
              </p>
            </div>

            {/* Interactive Form */}
            <div style={{ background: "var(--bg-secondary)", padding: "30px", borderRadius: "16px", border: "1px solid var(--border-subtle)", marginBottom: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-deep)", marginBottom: "20px" }}>
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={status === "loading"}
                    style={{ flex: 1, minWidth: "250px", padding: "14px 20px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "15px" }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "loading"}
                    style={{ flex: 1, minWidth: "250px", padding: "14px 20px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "15px" }}
                  />
                </div>

                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  disabled={status === "loading"}
                  style={{ padding: "14px 20px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontSize: "15px", fontFamily: "inherit", resize: "vertical" }}
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{ background: "var(--green-dark)", color: "white", padding: "14px 28px", borderRadius: "10px", border: "none", fontWeight: "bold", fontSize: "15px", cursor: "pointer", transition: "background 0.3s", alignSelf: "flex-start" }}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>

              {status === "success" && (
                <p style={{ color: "#16a34a", fontWeight: "bold", marginTop: "14px", fontSize: "14px" }}>
                  Thanks for contacting Spirit Corner Cannabis.
                </p>
              )}
            </div>

            {/* Location & Accessibility links */}
            <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", marginBottom: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>
                Location & Accessibility
              </h2>
              <p style={{ marginBottom: "14px" }}>
                Visitors throughout Ottawa and Gatineau continue searching for convenient, accessible downtown cannabis:
              </p>
              <ul style={{ listStyleType: "circle", paddingLeft: "24px", lineHeight: "1.8" }}>
                <li>Downtown Ottawa cannabis</li>
                <li>Cannabis near ByWard Market</li>
                <li>Ottawa cannabis store</li>
                <li>
                  <Link href="/dispensaire-cannabis-pres-de-gatineau" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Cannabis near Gatineau
                  </Link>
                </li>
                <li>
                  <Link href="/cheap-weed-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Affordable cannabis Ottawa
                  </Link>
                </li>
                <li>
                  <Link href="/24-hour-ottawa-dispensary" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Downtown Ottawa dispensary
                  </Link>
                </li>
              </ul>
            </div>

            {/* Embedded Google Map */}
            <div style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-subtle)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0!2d-75.6928!3d45.4292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04c8524ed59b%3A0x5836a82438336497!2s251+Dalhousie+St%2C+Ottawa%2C+ON+K1N+1E7!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="350"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Spirit Corner Cannabis — 251 Dalhousie St, Ottawa"
              />
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
