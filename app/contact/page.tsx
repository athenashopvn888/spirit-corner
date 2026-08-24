import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact and Store Hours",
  description:
    "Visit Spirit Corner Cannabis at 251 Dalhousie St, Ottawa, ON K1N 1E7. Open 24 Hours a day, 7 days a week. Walk-ins welcome.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/contact",
  },
  openGraph: {
    title: "Contact Spirit Corner Cannabis",
    description:
      "Visit 251 Dalhousie St in Ottawa. Spirit Corner Cannabis is open 24 hours a day, seven days a week.",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Visit <span className={styles.heroAccent}>Spirit Corner</span>
          </h1>
          <p className={styles.heroSub}>
            251 Dalhousie St - Ottawa, ON K1N 1E7
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>PIN</div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                251 Dalhousie St
                <br />
                Ottawa, ON K1N 1E7
                <br />
                <span className={styles.infoMuted}>Near ByWard Market</span>
              </p>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>24H</div>
              <h2 className={styles.infoTitle}>Hours</h2>
              <div className={styles.hoursTable}>
                <div className={styles.hoursRow}>
                  <span>Monday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Tuesday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Wednesday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Thursday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Friday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Saturday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Sunday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
              </div>
              <div className={styles.openBadge}>
                <span className={styles.openDot}></span>
                Open 24/7 - Never Closed
              </div>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>SHOP</div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and our staff will
                <br />
                help you compare listed flower tiers.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>OK</span>
                  Five flower tiers
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>OK</span>
                  Edibles, vapes, and pre-rolls
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>OK</span>
                  Staff help with store questions
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>OK</span>
                  Debit &amp; cash accepted
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
