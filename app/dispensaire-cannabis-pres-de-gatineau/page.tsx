import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PAGE_URL = "https://spiritcornercannabis.com/dispensaire-cannabis-pres-de-gatineau";
const linkStyle = { color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" };
const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Dispensaire Cannabis Près de Gatineau",
    description:
      "Renseignements pour visiter Spirit Corner Cannabis au 251 rue Dalhousie à Ottawa depuis Gatineau et les environs.",
    inLanguage: "fr-CA",
    about: { "@id": "https://spiritcornercannabis.com" },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Spirit Corner Cannabis",
        item: "https://spiritcornercannabis.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dispensaire près de Gatineau",
        item: PAGE_URL,
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Dispensaire Cannabis Près de Gatineau | Spirit Corner Cannabis Ottawa",
  description: "Spirit Corner Cannabis est situé au 251 rue Dalhousie à Ottawa, près de Gatineau et Hull. Ouvert 24 heures pour les adultes de 19 ans et plus.",
  alternates: { canonical: PAGE_URL, languages: { "fr-CA": PAGE_URL } },
  openGraph: {
    title: "Dispensaire Cannabis Près de Gatineau",
    description: "Boutique d’Ottawa au 251 rue Dalhousie, ouverte 24 heures pour les adultes de 19 ans et plus.",
    url: PAGE_URL,
    locale: "fr_CA",
    images: [{ url: "/banners/spirit_corner_cannabis_showcase.webp", width: 1168, height: 784, alt: "Graphique d’accueil de Spirit Corner Cannabis" }],
  },
};

export default function GatineauPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Navbar />

      <section style={{ marginTop: 0, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 24px" }}>
          <Image
            src="/banners/spirit_corner_cannabis_showcase.webp"
            alt="Graphique d’accueil de Spirit Corner Cannabis"
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
            Dispensaire Cannabis Près de Gatineau
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Boutique à Ottawa près du marché By, ouverte 24 heures
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.8" }}>
            <p style={{ marginBottom: "20px" }}>
              Spirit Corner Cannabis est une boutique d’Ottawa située au 251 rue
              Dalhousie, près du marché By. Les adultes de 19 ans et plus venant de
              Gatineau, Hull, Aylmer ou Chelsea peuvent vérifier l’itinéraire actuel
              avant de traverser la rivière des Outaouais.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Comparer les catégories avant la visite
            </h3>
            <p style={{ marginBottom: "16px" }}>
              Les adultes peuvent comparer cinq catégories de fleurs — Budget, AA,
              AAA+, Premium et Exotic — ainsi que les produits comestibles, les
              vapoteuses, les concentrés, les préroulés, les cigarettes et les
              accessoires affichés.
            </p>
            <ul style={{ listStyleType: "square", paddingLeft: "24px", marginBottom: "24px" }}>
              <li style={{ marginBottom: "12px" }}><Link href="/budget" style={linkStyle}>Fleurs Budget</Link> avec formats et prix affichés.</li>
              <li style={{ marginBottom: "12px" }}><Link href="/premium" style={linkStyle}>Fleurs Premium</Link> avec type, THC, formats et prix affichés.</li>
              <li style={{ marginBottom: "12px" }}><Link href="/items/edibles" style={linkStyle}>Produits comestibles</Link> avec renseignements fournis et prix affichés.</li>
              <li style={{ marginBottom: "12px" }}><Link href="/items/vape-disposables" style={linkStyle}>Vapoteuses jetables</Link> avec renseignements fournis et prix affichés.</li>
            </ul>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Vérifier l’itinéraire et appeler avant de partir
            </h3>
            <p style={{ marginBottom: "16px" }}>
              Le choix du pont, la circulation et le temps de trajet peuvent changer.
              Vérifiez l’itinéraire vers le 251 rue Dalhousie depuis votre point de
              départ. Les listes de produits et les prix peuvent aussi changer.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Appelez le <a href="tel:+13433088998" style={linkStyle}>(343) 308-8998</a>{" "}
              si un produit précis est important pour votre visite. La boutique
              d’Ottawa est ouverte 24 heures, sept jours sur sept.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
