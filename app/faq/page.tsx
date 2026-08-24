import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Spirit Corner Cannabis",
  description: "Spirit Corner Cannabis location, hours, product categories, in-store shopping, and delivery status.",
  alternates: { canonical: "https://spiritcornercannabis.com/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Spirit Corner Cannabis",
    description: "Spirit Corner Cannabis location, hours, product categories, in-store shopping, and delivery information.",
    url: "https://spiritcornercannabis.com/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: "Location & Hours",
    faqs: [
      { q: "Where is Spirit Corner Cannabis located?", a: "Spirit Corner Cannabis is at 251 Dalhousie St, Ottawa, ON K1N 1E7, near ByWard Market." },
      { q: "What are the store hours?", a: "The store is open 24 hours a day, seven days a week." },
      { q: "Do I need an appointment?", a: "No appointment is needed for an in-store visit." },
    ],
  },
  {
    title: "Products & Shopping",
    faqs: [
      { q: "What product categories are listed?", a: "Spirit Corner lists flower in Budget, AA, AAA+, Premium, and Exotic tiers, along with edibles, vapes, concentrates, pre-rolls, cigarettes, specialty items, and accessories." },
      { q: "Can I shop online?", a: "Shopping is in store. Website listings can help you compare categories before visiting, but selection can change." },
      { q: "Can I call before visiting?", a: "Yes. Call (343) 308-8998 for store directions or product questions." },
    ],
  },
  {
    title: "Delivery",
    faqs: [
      { q: "Where can I check delivery information?", a: "Review the Ottawa delivery information or call (343) 308-8998 before planning an order because service details can change." },
      { q: "Does the website guarantee delivery service?", a: "No. Call the store to confirm current service details before planning an order." },
    ],
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((category) => category.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } }))),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>Store details for Spirit Corner Cannabis at 251 Dalhousie St in downtown Ottawa.</p>
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              {category.faqs.map((faq) => <details key={faq.q} className={styles.faqItem}><summary className={styles.faqQuestion}>{faq.q}</summary><p className={styles.faqAnswer}>{faq.a}</p></details>)}
            </div>
          ))}
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>Call <strong>(343) 308-8998</strong> or visit 251 Dalhousie St, Ottawa.</p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
