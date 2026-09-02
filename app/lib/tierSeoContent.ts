export interface TierSeoData {
  seoTitle: string;
  metaDescription: string;
  socialTitle: string;
  socialDescription: string;
  h1: string;
  imageAlt: string;
  strainHeading: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_LINKS = [
  { href: "/exotic", label: "Exotic Weed & Flower" },
  { href: "/premium", label: "Premium Weed & Flower" },
  { href: "/aaa", label: "AAA+ Weed & Flower" },
  { href: "/aa", label: "AA Weed & Flower" },
  { href: "/budget", label: "Budget Weed & Flower" },
] as const;

export const TIER_COMPARE = {
  heading: "Explore Spirit Corner's Five Flower Tiers",
  body: "Spirit Corner Cannabis separates flower into Exotic, Premium, AAA+, AA and Budget tier pages so each category has its own focused route.",
  ownerSentence: "For a wider view beyond one flower tier, visit the main Spirit Corner Cannabis Weed page:",
  ownerHref: "/weed-dispensary-ottawa/",
  ownerLabel: "Spirit Corner Cannabis Weed Dispensary in Ottawa",
} as const;

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower in Ottawa | Spirit Corner Cannabis",
    metaDescription: "Explore the Exotic weed and cannabis flower tier at Spirit Corner Cannabis in Ottawa as a dedicated part of its existing flower structure.",
    socialTitle: "Exotic Weed & Cannabis Flower | Spirit Corner Cannabis",
    socialDescription: "Explore the dedicated Exotic cannabis flower tier at Spirit Corner Cannabis in Ottawa.",
    h1: "Exotic Weed & Cannabis Flower in Ottawa",
    imageAlt: "Exotic weed and cannabis flower tier at Spirit Corner Cannabis",
    strainHeading: "Explore the Exotic Flower Tier",
    seoIntro: "Spirit Corner Cannabis gives Exotic its own dedicated flower page within the site's existing tier structure. This route stays focused on Exotic weed and cannabis flower while the broader Weed Dispensary in Ottawa page remains the main destination for general Weed intent.",
    sections: [
      { heading: "Exotic as a Separate Spirit Corner Tier", body: "Exotic sits alongside Premium, AAA+, AA and Budget as its own flower category. Keeping the tier separate gives this page a narrow purpose without duplicating the broader Weed page." },
      { heading: "Browse Exotic Within the Five-Tier Structure", body: "The Spirit Corner flower architecture uses dedicated routes for each established tier. Exotic is one of those focused paths and remains subordinate to the broad Ottawa Weed owner." },
    ],
    faqs: [
      { q: "What is the Exotic tier at Spirit Corner Cannabis?", a: "Exotic is one of Spirit Corner Cannabis's five dedicated cannabis flower tiers." },
      { q: "Is the Exotic page Spirit Corner's main Weed page?", a: "No. This page is specific to the Exotic tier, while the Weed Dispensary in Ottawa page remains the broad Weed owner." },
      { q: "What other flower tiers have dedicated pages?", a: "Spirit Corner Cannabis also has separate Premium, AAA+, AA and Budget tier pages." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower in Ottawa | Spirit Corner Cannabis",
    metaDescription: "Explore the Premium weed and cannabis flower tier at Spirit Corner Cannabis in Ottawa through its dedicated flower category page.",
    socialTitle: "Premium Weed & Cannabis Flower | Spirit Corner Cannabis",
    socialDescription: "Explore the dedicated Premium cannabis flower tier at Spirit Corner Cannabis in Ottawa.",
    h1: "Premium Weed & Cannabis Flower in Ottawa",
    imageAlt: "Premium weed and cannabis flower tier at Spirit Corner Cannabis",
    strainHeading: "Browse the Premium Flower Tier",
    seoIntro: "The Premium page gives Spirit Corner Cannabis a dedicated route for this individual flower tier. It remains narrower than the site's broad Weed owner and does not take over general Weed intent.",
    sections: [
      { heading: "Premium Has Its Own Category Role", body: "Premium is organized separately from Exotic, AAA+, AA and Budget so this flower tier has a clear place within the Spirit Corner site." },
      { heading: "Premium Within Spirit Corner's Flower Structure", body: "Separate tier routes keep each flower category distinct. Premium serves a tier-specific browsing role while broader Weed discovery remains on the main Ottawa Weed page." },
    ],
    faqs: [
      { q: "What is the Premium tier at Spirit Corner Cannabis?", a: "Premium is one of Spirit Corner Cannabis's dedicated cannabis flower tiers." },
      { q: "Does the Premium page replace the broad Weed page?", a: "No. Premium serves a narrow flower-tier role only." },
      { q: "Which other Spirit Corner tiers have their own pages?", a: "Exotic, AAA+, AA and Budget each have separate tier pages." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower in Ottawa | Spirit Corner Cannabis",
    metaDescription: "Explore the AAA+ weed and cannabis flower tier at Spirit Corner Cannabis in Ottawa as a focused part of its flower architecture.",
    socialTitle: "AAA+ Weed & Cannabis Flower | Spirit Corner Cannabis",
    socialDescription: "Explore the dedicated AAA+ cannabis flower tier at Spirit Corner Cannabis in Ottawa.",
    h1: "AAA+ Weed & Cannabis Flower in Ottawa",
    imageAlt: "AAA+ weed and cannabis flower tier at Spirit Corner Cannabis",
    strainHeading: "Explore the AAA+ Flower Category",
    seoIntro: "Spirit Corner Cannabis separates AAA+ into its own flower route so the tier has a defined place within the site's wider category structure. The page stays focused on AAA+ while broad Weed intent remains elsewhere.",
    sections: [
      { heading: "AAA+ as Its Own Flower Category", body: "AAA+ is kept distinct from Exotic, Premium, AA and Budget instead of being folded into a general flower page." },
      { heading: "AAA+ in the Spirit Corner Tier System", body: "This route serves AAA+-specific browsing within the established five-tier structure and remains subordinate to the broader Weed Dispensary in Ottawa page." },
    ],
    faqs: [
      { q: "What is AAA+ at Spirit Corner Cannabis?", a: "AAA+ is one of Spirit Corner Cannabis's dedicated cannabis flower tiers." },
      { q: "Why does AAA+ have a separate page?", a: "The separate route keeps AAA+-specific browsing distinct from the site's other flower tiers." },
      { q: "What other flower tiers can be explored separately?", a: "Spirit Corner also has dedicated Exotic, Premium, AA and Budget pages." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower in Ottawa | Spirit Corner Cannabis",
    metaDescription: "Explore the AA weed and cannabis flower tier at Spirit Corner Cannabis in Ottawa through its dedicated flower category route.",
    socialTitle: "AA Weed & Cannabis Flower | Spirit Corner Cannabis",
    socialDescription: "Explore the dedicated AA cannabis flower tier at Spirit Corner Cannabis in Ottawa.",
    h1: "AA Weed & Cannabis Flower in Ottawa",
    imageAlt: "AA weed and cannabis flower tier at Spirit Corner Cannabis",
    strainHeading: "Browse the AA Flower Tier",
    seoIntro: "The AA page gives Spirit Corner Cannabis a focused route for this flower tier without expanding into the broader Weed topic. It remains one part of the site's existing five-tier flower structure.",
    sections: [
      { heading: "AA as a Focused Spirit Corner Category", body: "AA is separated from Exotic, Premium, AAA+ and Budget so this tier has its own defined browsing path." },
      { heading: "Where AA Fits in the Tier Structure", body: "The AA route serves category-specific intent while the broader Weed Dispensary in Ottawa page continues to own general Weed searches." },
    ],
    faqs: [
      { q: "What is the AA tier at Spirit Corner Cannabis?", a: "AA is one of Spirit Corner Cannabis's dedicated cannabis flower tiers." },
      { q: "Is the AA page the main Spirit Corner Weed page?", a: "No. It is a narrow tier page and remains subordinate to the broad Weed owner." },
      { q: "What other Spirit Corner flower tiers have separate pages?", a: "Exotic, Premium, AAA+ and Budget also have dedicated tier routes." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower in Ottawa | Spirit Corner Cannabis",
    metaDescription: "Explore the Budget cannabis flower tier at Spirit Corner Cannabis in Ottawa without implying current price, promotion, stock or availability.",
    socialTitle: "Budget Weed & Cannabis Flower | Spirit Corner Cannabis",
    socialDescription: "Explore the dedicated Budget cannabis flower tier at Spirit Corner Cannabis in Ottawa.",
    h1: "Budget Weed & Cannabis Flower in Ottawa",
    imageAlt: "Budget weed and cannabis flower tier at Spirit Corner Cannabis",
    strainHeading: "Explore the Budget Flower Tier",
    seoIntro: "Spirit Corner Cannabis uses Budget as a dedicated flower tier within its existing category structure. The page identifies the category only and does not establish any current price, promotion, product or availability claim.",
    sections: [
      { heading: "Budget as a Defined Flower Category", body: "Budget is kept separate from Exotic, Premium, AAA+ and AA so it has a distinct role within the Spirit Corner flower structure." },
      { heading: "Budget Within Spirit Corner's Five Tiers", body: "The Budget route serves a narrow category purpose while broader Weed intent remains with the established Weed Dispensary in Ottawa page." },
    ],
    faqs: [
      { q: "What is the Budget tier at Spirit Corner Cannabis?", a: "Budget is the name of one of Spirit Corner Cannabis's dedicated cannabis flower tiers." },
      { q: "Does the Budget label confirm a current deal or price?", a: "No. The tier name identifies the category and does not establish a current price, promotion, stock or availability." },
      { q: "Which other Spirit Corner flower tiers have separate pages?", a: "Spirit Corner Cannabis also has dedicated Exotic, Premium, AAA+ and AA pages." },
    ],
  },
};
