import type { Metadata } from "next";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5% Vapes Ottawa | Disposable Vape Shop Downtown Ottawa | Spirit Corner Cannabis",
  description: "Looking for 5% disposable vapes in Ottawa? Spirit Corner Cannabis offers popular vape products near ByWard Market including OVNS Truth Puff, Elf Bar 10K, Geek Max 40K, and more.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/5-percent-vapes-ottawa",
  },
};

export default function VapesPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    additionalType: "https://schema.org/Store",
    "@id": "https://spiritcornercannabis.com",
    name: "Spirit Corner Cannabis",
    description: "Spirit Corner Cannabis offers popular 5% disposable vape products in downtown Ottawa near ByWard Market including OVNS Truth Puff, Elf Bar 10K, Geek Max 40K, and more.",
    url: "https://spiritcornercannabis.com/5-percent-vapes-ottawa",
    telephone: "+16136122107",
    image: "https://spiritcornercannabis.com/banners/5-percent-vapes-ottawa-spirit-corner-cannabis.png",
    priceRange: "$10 - $60",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Spirit Corner Cannabis located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spirit Corner Cannabis is located at 251 Dalhousie St near the ByWard Market in downtown Ottawa.",
        },
      },
      {
        "@type": "Question",
        name: "What vape products do visitors commonly search for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visitors commonly search for OVNS Truth Puff 5%, Elf Bar 10K 5%, Geek Max 40K 5%, STLTH, Flavour Beast, Vice vape products, disposable vapes, and downtown Ottawa vape products.",
        },
      },
      {
        "@type": "Question",
        name: "Do visitors from Gatineau shop in Ottawa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many visitors from Gatineau, Hull, Aylmer, Chelsea, Cantley, and nearby Outaouais communities regularly visit downtown Ottawa smoke shops and vape stores.",
        },
      },
      {
        "@type": "Question",
        name: "Why do visitors search for downtown Ottawa vape shops?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many visitors search for downtown Ottawa vape products because of convenient access near nightlife districts, entertainment venues, hotels, restaurants, concerts, tourism areas, and major transportation routes.",
        },
      },
      {
        "@type": "Question",
        name: "What nearby smoke-related products do visitors commonly search for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visitors commonly search for nicotine pouches, smoking accessories, disposable vape products, rolling papers, and other downtown Ottawa smoke-related products.",
        },
      },
      {
        "@type": "Question",
        name: "Why is the ByWard Market location important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ByWard Market is one of Ottawa’s busiest downtown districts and provides convenient access for both Ottawa residents and visitors travelling from Gatineau and nearby communities.",
        },
      },
      {
        "@type": "Question",
        name: "Can visitors stay updated on future announcements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Visitors can register through the delivery updates page to receive future announcements, updates, and local Ottawa information from Spirit Corner Cannabis.",
        },
      },
      {
        "@type": "Question",
        name: "Why do visitors search for vape products open late in Ottawa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many visitors throughout Ottawa and Gatineau search for accessible downtown Ottawa vape products near nightlife districts, entertainment venues, concerts, hotels, and weekend activity.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className={styles.main}>
        <Navbar />

        {/* ── Banner Section ── */}
        <section style={{ marginTop: "92px", position: "relative" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
            <img
              src="/banners/5-percent-vapes-ottawa-spirit-corner-cannabis.png"
              alt="5 percent disposable vapes in downtown Ottawa at Spirit Corner Cannabis featuring OVNS Truth Puff, Elf Bar 10K, and Geek Max 40K near ByWard Market"
              style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
            />
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "8px", textAlign: "center", fontStyle: "italic" }}>
              Explore premium 5% disposable vape products at Spirit Corner Cannabis in downtown Ottawa near ByWard Market.
            </p>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "10px" }}>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)" }}>
                5% Vapes Ottawa
              </h1>
              <span style={{ fontSize: "12px", fontWeight: "bold", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Last Updated: May 2026
              </span>
            </div>
            
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
              Disposable Vape Products In Downtown Ottawa Near ByWard Market
            </h2>

            <div style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
              
              {/* Section 1 */}
              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                  Disposable Vape Products In Downtown Ottawa
                </h3>
                <p style={{ marginBottom: "14px" }}>
                  Spirit Corner Cannabis continues attracting visitors searching for disposable vape products, downtown Ottawa vape shops, smoke accessories, and accessible vape products near the ByWard Market.
                </p>
                <p style={{ marginBottom: "14px" }}>
                  Located at 251 Dalhousie St near the ByWard Market, Rideau Centre, Parliament area, and major Gatineau access routes, Spirit Corner Cannabis continues appearing in searches related to:
                </p>
                <ul style={{ listStyleType: "circle", paddingLeft: "24px", marginBottom: "14px", lineHeight: "1.8" }}>
                  <li>5% vapes Ottawa</li>
                  <li>Disposable vapes Ottawa</li>
                  <li>Downtown Ottawa vape shop</li>
                  <li>Vape products Ottawa</li>
                  <li>Disposable vape near me</li>
                  <li>Ottawa smoke shop</li>
                  <li>Vape products near Gatineau</li>
                  <li>Downtown Ottawa smoke products</li>
                </ul>
                <p>
                  Visitors throughout Ottawa, Gatineau, Hull, Barrhaven, Kanata, Orleans, Nepean, Gloucester, Stittsville, Riverside South, Findlay Creek, Greely, and nearby communities continue searching for accessible downtown Ottawa vape products near nightlife districts, entertainment venues, restaurants, hotels, concerts, and major transportation routes.
                </p>
              </div>

              {/* Section 2 */}
              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                  Popular Disposable Vape Brands
                </h3>
                <p style={{ marginBottom: "14px" }}>
                  Visitors throughout Ottawa continue searching for popular disposable vape brands and accessible downtown Ottawa vape products while exploring smoke shops near the city core.
                </p>
                <p style={{ marginBottom: "14px", fontWeight: "bold" }}>
                  Popular vape-related searches commonly include:
                </p>
                <ul style={{ listStyleType: "circle", paddingLeft: "24px", marginBottom: "14px", lineHeight: "1.8" }}>
                  <li>OVNS Truth Puff 5%</li>
                  <li>Elf Bar 10K 5%</li>
                  <li>Geek Max 40K 5%</li>
                  <li>STLTH vape Ottawa</li>
                  <li>Flavour Beast Ottawa</li>
                  <li>Vice vape Ottawa</li>
                  <li>Disposable vape Ottawa</li>
                  <li>Vape flavours Ottawa</li>
                  <li>Ottawa vape products</li>
                  <li>Downtown Ottawa smoke shop</li>
                </ul>
                <p>
                  Many downtown Ottawa visitors continue searching for vape products near nightlife districts, hotels, restaurants, tourism areas, entertainment venues, and the ByWard Market while exploring the downtown core.
                </p>
              </div>

              {/* Section 3 */}
              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                  Downtown Ottawa Smoke Shop Accessibility
                </h3>
                <p style={{ marginBottom: "14px" }}>
                  Downtown Ottawa continues attracting visitors searching for accessible vape products, smoke accessories, and disposable vape products because of nightlife districts, entertainment venues, tourism areas, restaurants, hotels, and major transportation routes near the city core.
                </p>
                <p style={{ marginBottom: "14px", fontWeight: "bold" }}>
                  Visitors staying near the ByWard Market, Rideau Centre, Parliament area, and Macdonald-Cartier Bridge routes continue discovering Spirit Corner Cannabis while searching for:
                </p>
                <ul style={{ listStyleType: "circle", paddingLeft: "24px", marginBottom: "14px", lineHeight: "1.8" }}>
                  <li>Downtown Ottawa vape shop</li>
                  <li>Vape products near me</li>
                  <li>Ottawa smoke shop</li>
                  <li>Disposable vape near downtown Ottawa</li>
                  <li>Smoke products near ByWard Market</li>
                  <li>Vape products near Rideau Centre</li>
                </ul>
                <p>
                  Many downtown visitors searching for{" "}
                  <Link href="/24-hour-ottawa-dispensary" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    vape products open late
                  </Link>{" "}
                  continue discovering Spirit Corner Cannabis while exploring downtown Ottawa nightlife districts and entertainment areas.
                </p>
              </div>

              {/* Section 4 */}
              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                  Vape Products Near Gatineau
                </h3>
                <p style={{ marginBottom: "14px" }}>
                  Many visitors from Gatineau, Hull, Aylmer, Chelsea, Cantley, and nearby Outaouais communities continue visiting downtown Ottawa while searching for disposable vape products, smoke accessories, and downtown Ottawa smoke shops near the city core.
                </p>
                <p style={{ marginBottom: "14px" }}>
                  Located near the Macdonald-Cartier Bridge and ByWard Market, Spirit Corner Cannabis continues attracting visitors from both Ontario and Quebec because of convenient downtown accessibility and strong local visibility.
                </p>
                <p style={{ marginBottom: "14px", fontWeight: "bold" }}>
                  Visitors frequently search for:
                </p>
                <ul style={{ listStyleType: "circle", paddingLeft: "24px", marginBottom: "14px", lineHeight: "1.8" }}>
                  <li>
                    <Link href="/dispensaire-cannabis-pres-de-gatineau" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                      Vape products near Gatineau
                    </Link>
                  </li>
                  <li>Disposable vape near Hull</li>
                  <li>Ottawa vape shop near Quebec</li>
                  <li>Vape products downtown Ottawa</li>
                  <li>Downtown Ottawa smoke shop</li>
                  <li>Vape products near me</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                  Nicotine Pouches & Smoking Accessories
                </h3>
                <p style={{ marginBottom: "14px" }}>
                  Many downtown Ottawa visitors searching for disposable vape products also search for nicotine pouches, smoking accessories, rolling papers, smoke-related products, and nearby{" "}
                  <Link href="/" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    Ottawa smoke shops
                  </Link>
                  .
                </p>
                <p style={{ marginBottom: "14px", fontWeight: "bold" }}>
                  Visitors commonly search for:
                </p>
                <ul style={{ listStyleType: "circle", paddingLeft: "24px", marginBottom: "14px", lineHeight: "1.8" }}>
                  <li>
                    <Link href="/nicotine-pouches-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                      Nicotine pouches Ottawa
                    </Link>
                  </li>
                  <li>Zyn Ottawa</li>
                  <li>Pablo nicotine pouches</li>
                  <li>Killa nicotine pouches</li>
                  <li>Velo nicotine pouches</li>
                  <li>Downtown Ottawa smoke products</li>
                  <li>Ottawa smoking accessories</li>
                  <li>Popular nicotine products</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                  A Modern Downtown Ottawa Smoke Shop Experience
                </h3>
                <p style={{ marginBottom: "14px" }}>
                  Today’s downtown Ottawa visitors continue searching for accessible smoke shops that provide vape products, nicotine products, smoke accessories, and strong local visibility near entertainment districts and nightlife areas.
                </p>
                <p style={{ marginBottom: "14px", fontWeight: "bold" }}>
                  Spirit Corner Cannabis continues focusing on:
                </p>
                <ul style={{ listStyleType: "circle", paddingLeft: "24px", marginBottom: "14px", lineHeight: "1.8" }}>
                  <li>Downtown Ottawa accessibility</li>
                  <li>Modern smoke shop relevance</li>
                  <li>Popular vape product visibility</li>
                  <li>Ottawa/Gatineau accessibility</li>
                  <li>A connected customer experience</li>
                  <li>Convenient downtown Ottawa access</li>
                </ul>
                <p>
                  Visitors throughout Ottawa continue searching for smoke shops that balance accessibility, convenience, product variety, and downtown visibility near the city core.
                </p>
              </div>

              {/* Section 7 */}
              <div style={{ marginBottom: "40px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                  Stay Connected With Spirit Corner Cannabis
                </h3>
                <p>
                  As more visitors throughout Ottawa and Gatineau continue searching for downtown Ottawa smoke products, vape products, and local updates, Spirit Corner Cannabis continues expanding visibility through helpful local information and strong regional relevance. Visitors interested in future announcements and local updates can also register through the{" "}
                  <Link href="/cannabis-delivery-ottawa" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                    delivery updates page
                  </Link>
                  .
                </p>
              </div>

              {/* FAQ Section */}
              <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "40px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 900, textAlign: "center", marginBottom: "24px", color: "var(--green-deep)" }}>
                  Frequently Asked Questions
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                    <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Where is Spirit Corner Cannabis located?</summary>
                    <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Spirit Corner Cannabis is located at 251 Dalhousie St near the ByWard Market in downtown Ottawa.</p>
                  </details>

                  <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                    <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What vape products do visitors commonly search for?</summary>
                    <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Visitors commonly search for OVNS Truth Puff 5%, Elf Bar 10K 5%, Geek Max 40K 5%, STLTH, Flavour Beast, Vice vape products, disposable vapes, and downtown Ottawa vape products.</p>
                  </details>

                  <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                    <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Do visitors from Gatineau shop in Ottawa?</summary>
                    <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Yes. Many visitors from Gatineau, Hull, Aylmer, Chelsea, Cantley, and nearby Outaouais communities regularly visit downtown Ottawa smoke shops and vape stores.</p>
                  </details>

                  <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                    <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Why do visitors search for downtown Ottawa vape shops?</summary>
                    <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Many visitors search for downtown Ottawa vape products because of convenient access near nightlife districts, entertainment venues, hotels, restaurants, concerts, tourism areas, and major transportation routes.</p>
                  </details>

                  <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                    <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>What nearby smoke-related products do visitors commonly search for?</summary>
                    <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Visitors commonly search for nicotine pouches, smoking accessories, disposable vape products, rolling papers, and other downtown Ottawa smoke-related products.</p>
                  </details>

                  <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                    <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Why is the ByWard Market location important?</summary>
                    <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>The ByWard Market is one of Ottawa’s busiest downtown districts and provides convenient access for both Ottawa residents and visitors travelling from Gatineau and nearby communities.</p>
                  </details>

                  <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                    <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Can visitors stay updated on future announcements?</summary>
                    <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Yes. Visitors can register through the delivery updates page to receive future announcements, updates, and local Ottawa information from Spirit Corner Cannabis.</p>
                  </details>

                  <details style={{ background: "white", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                    <summary style={{ fontWeight: "bold", cursor: "pointer", color: "var(--text-primary)" }}>Why do visitors search for vape products open late in Ottawa?</summary>
                    <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>Many visitors throughout Ottawa and Gatineau search for accessible downtown Ottawa vape products near nightlife districts, entertainment venues, concerts, hotels, and weekend activity.</p>
                  </details>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
