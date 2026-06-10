import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us — Spirit Corner Cannabis | 251 Dalhousie St, Ottawa",
  description:
    "Visit Spirit Corner Cannabis at 251 Dalhousie St, Ottawa, ON K1N 1E7. Open 24 Hours a day, 7 days a week. Walk-ins welcome.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/contact",
  },
  openGraph: {
    title: "Contact Spirit Corner Cannabis — Ottawa Dispensary",
    description:
      "251 Dalhousie St, Ottawa. Open 24 Hours a day, 7 days a week. Premium cannabis, always fire.",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* â”€â”€ Hero â”€â”€ */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Visit <span className={styles.heroAccent}>Spirit Corner</span>
          </h1>
          <p className={styles.heroSub}>
            251 Dalhousie St Â· Ottawa, ON K1N 1E7
          </p>
        </div>
      </section>

      {/* â”€â”€ Info Cards â”€â”€ */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>ðŸ“</div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                251 Dalhousie St
                <br />
                Ottawa, ON K1N 1E7
                <br />
                <span className={styles.infoMuted}>ByWard Market &amp; Bathurst</span>
              </p>
              <a
                href="https://maps.app.goo.gl/YFPDuRCjwiuZL4J86"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoBtn}
              >
                Get Directions â†’
              </a>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>ðŸ•’</div>
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
                Open 24/7 â€” Never Closed
              </div>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>ðŸ”¥</div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and our staff will
                <br />
                help you find the perfect strain.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>âœ“</span>
                  200+ strains in stock
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>âœ“</span>
                  Lab-tested &amp; safe
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>âœ“</span>
                  Knowledgeable budtenders
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>âœ“</span>
                  Debit &amp; cash accepted
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0!2d-75.6928!3d45.4292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04c8524ed59b%3A0x5836a82438336497!2s251+Dalhousie+St%2C+Ottawa%2C+ON+K1N+1E7!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Spirit Corner Cannabis â€” 251 Dalhousie St, Ottawa"
            ></iframe>
          </div>
        </div>
      </section>

      {/* â”€â”€ Footer â”€â”€ */}
      <Footer />
    </main>
  );
}

