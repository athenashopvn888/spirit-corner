import type { Metadata } from "next";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dispensaire Cannabis Près de Gatineau | Spirit Corner Cannabis Ottawa",
  description: "À seulement 7 minutes de Gatineau/Hull, Spirit Corner Cannabis offre plus de variété, moins d’attente et une meilleure expérience cannabis qu’à la SQDC.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/dispensaire-cannabis-pres-de-gatineau",
  },
};

export default function GatineauPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Banner Section ── */}
      <section style={{ marginTop: 0, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
          <img
            src="/banners/dispensaire-cannabis-pres-de-gatineau-hull-ottawa-spirit-corner-cannabis.png"
            alt="Bannière de Spirit Corner Cannabis à Ottawa destinée aux clients de Gatineau et Hull recherchant plus de choix que la SQDC, incluant vapoteuses, comestibles et cannabis légal à seulement 7 minutes de Gatineau."
            style={{ width: "100%", height: "auto", borderRadius: "24px", border: "1px solid var(--border-subtle)", display: "block" }}
          />
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "8px", textAlign: "center", fontStyle: "italic" }}>
            À seulement 7 minutes de Gatineau/Hull, Spirit Corner Cannabis offre plus de variété, moins d’attente et une meilleure expérience cannabis qu’à la SQDC.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section style={{ padding: "60px 24px", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900, color: "var(--green-deep)", marginBottom: "20px" }}>
            Dispensaire Cannabis Près de Gatineau
          </h1>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "30px", marginTop: "-10px" }}>
            Votre Alternative Cannabis Premium à seulement 7 minutes du Québec
          </h2>

          <div style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.8" }}>
            <p style={{ marginBottom: "20px" }}>
              Bienvenue chez Spirit Corner Cannabis, la destination cannabis préférée des résidents de Gatineau, Hull et de l’Outaouais recherchant une sélection exceptionnelle de produits indisponibles au Québec. Situé au 251 rue Dalhousie à Ottawa, notre dispensaire est à seulement quelques minutes des ponts Macdonald-Cartier et Alexandra.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Pourquoi les consommateurs de Gatineau préfèrent-ils Spirit Corner ?
            </h3>
            <p style={{ marginBottom: "16px" }}>
              Contrairement aux réglementations strictes de la SQDC, l’Ontario vous permet d’accéder légalement à une immense variété de formats, de concentrés et de produits innovants. Que vous soyez un connaisseur à la recherche de génétiques rares ou simplement curieux de découvrir de nouveaux horizons, Spirit Corner vous accueille chaleureusement 24h sur 24.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Notre assortiment complet comprend des fleurs haut de gamme, des concentrés puissants, des stylos vapoteurs jetables ainsi qu’une délicieuse gamme de comestibles.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Notre Sélection de Produits Recommandés
            </h3>
            <ul style={{ listStyleType: "square", paddingLeft: "24px", marginBottom: "24px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Génétiques Exceptionnelles :</strong> Découvrez notre{" "}
                <Link href="/exotic" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                  exotic cannabis products
                </Link>{" "}
                avec des taux de THC impressionnants et des profils terpéniques uniques.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Qualité Connaisseur :</strong> Laissez-vous tenter par notre{" "}
                <Link href="/premium" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                  premium flower selection
                </Link>{" "}
                cultivée avec soin par les meilleurs producteurs canadiens.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Comestibles & Friandises :</strong> Explorez une large gamme de gummies, chocolats et boissons infusées en choisissant nos{" "}
                <Link href="/items/edibles" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                  edible cannabis products
                </Link>{" "}
                pour un dosage précis et agréable.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Vapoteuses Pratiques :</strong> Pour une discrétion absolue et un usage nomade, essayez nos{" "}
                <Link href="/items/vape-disposables" style={{ color: "var(--green-mid)", textDecoration: "underline", fontWeight: "bold" }}>
                  disposable vape products
                </Link>{" "}
                disponibles dans une multitude de saveurs.
              </li>
            </ul>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginTop: "32px", marginBottom: "12px" }}>
              Un accès simple et rapide depuis Gatineau et Hull
            </h3>
            <p style={{ marginBottom: "16px" }}>
              Situé au cœur du marché By, Spirit Corner Cannabis est extrêmement facile d’accès. En voiture, il vous suffit de traverser le pont Macdonald-Cartier et de suivre la rue Dalhousie sur 7 minutes. Des stationnements sont facilement accessibles à proximité. Nous sommes également idéalement desservis par les lignes de bus de la STO et d&apos;OC Transpo.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Venez nous rendre visite aujourd&apos;hui et découvrez une expérience d&apos;achat unique, dynamique et professionnelle avec nos conseillers passionnés.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
