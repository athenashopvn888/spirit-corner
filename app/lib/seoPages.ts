export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  banner?: string;
}

const SAFE_BANNER = "/banners/spirit_corner_cannabis_showcase.webp";

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "ottawa-weed-dispensary",
    title: "24 Hour Cannabis Store in Downtown Ottawa | Spirit Corner Cannabis",
    metaDescription: "Visit Spirit Corner Cannabis at 251 Dalhousie St near ByWard Market. Open 24 hours with five flower tiers plus listed edibles, vapes, concentrates, pre-rolls, and accessories.",
    h1: "Spirit Corner Cannabis in Downtown Ottawa",
    icon: "✨",
    heroTagline: "251 Dalhousie St · Open 24 Hours · Walk-In Welcome",
    banner: SAFE_BANNER,
    sections: [
      {
        heading: "Visit Spirit Corner Cannabis",
        body: "Spirit Corner Cannabis is at 251 Dalhousie St near ByWard Market in downtown Ottawa. The storefront is open 24 hours a day, seven days a week for adult in-store shopping.",
      },
      {
        heading: "Compare Five Flower Tiers",
        body: "Compare Budget, AA, AAA+, Premium, and Exotic flower listings using the supplied name, Indica, Sativa, or Hybrid type, THC label, sizes, and prices.",
      },
      {
        heading: "More Store Categories",
        body: "The menu snapshot also includes categories for edibles, vape products, concentrates, pre-rolls, cigarettes, specialty items, and accessories. Listings and prices can change.",
      },
      {
        heading: "Open 24 Hours Near ByWard Market",
        body: "Adults can visit the Dalhousie Street storefront at any hour. Check current directions from your starting point and allow for downtown traffic.",
      },
      {
        heading: "Call Before You Visit",
        body: "Call (343) 308-8998 for directions or product questions before visiting 251 Dalhousie St, Ottawa, ON K1N 1E7.",
      },
    ],
    faqs: [
      { q: "Where is Spirit Corner Cannabis located?", a: "Spirit Corner Cannabis is at 251 Dalhousie St, Ottawa, ON K1N 1E7, near ByWard Market." },
      { q: "What are the store hours?", a: "The store is open 24 hours a day, seven days a week." },
      { q: "What flower tiers are listed?", a: "The store lists Budget, AA, AAA+, Premium, and Exotic flower tiers." },
      { q: "Can listings change?", a: "Yes. Call (343) 308-8998 before travelling when a particular product matters to your visit." },
    ],
  },
  {
    slug: "cheap-weed-ottawa",
    title: "Cheap Weed Ottawa — Budget Flower | Spirit Corner Cannabis",
    metaDescription: "Compare Budget flower names, types, sizes, and listed prices at Spirit Corner Cannabis, 251 Dalhousie St in downtown Ottawa. Open 24 hours.",
    h1: "Cheap Weed Ottawa — Budget Cannabis",
    icon: "💰",
    heroTagline: "Budget Flower Listings · Listed Sizes And Prices · Open 24 Hours",
    banner: SAFE_BANNER,
    sections: [
      {
        heading: "Compare Budget Flower in Ottawa",
        body: "Budget flower listings show the supplied name, Indica, Sativa, or Hybrid type, THC label, listed menu sizes, and listed prices so adults can compare choices before visiting.",
      },
      {
        heading: "Listed Sizes and Prices",
        body: "Prices appear with each listed flower size when provided. Listings and prices can change, so call the store when a particular flower, size, or price matters.",
      },
      {
        heading: "Open 24 Hours on Dalhousie Street",
        body: "Visit Spirit Corner Cannabis at 251 Dalhousie St near ByWard Market. The Ottawa storefront is open 24 hours for adults 19+.",
      },
    ],
    faqs: [
      { q: "What details can I compare for Budget flower?", a: "Listings show the flower name, type, THC label, menu sizes, and listed prices." },
      { q: "Can Budget listings and prices change?", a: "Yes. Call (343) 308-8998 before travelling when a particular flower or price matters." },
      { q: "Where is Spirit Corner Cannabis?", a: "The store is at 251 Dalhousie St in downtown Ottawa near ByWard Market and is open 24 hours." },
    ],
  },
  {
    slug: "native-cigarettes-ottawa",
    title: "Native Cigarettes Ottawa | Spirit Corner Cannabis",
    metaDescription: "Compare listed Native cigarette and smoke-product names and prices at Spirit Corner Cannabis near ByWard Market. Adults 19+. Open 24 hours.",
    h1: "Native Cigarettes Ottawa",
    icon: "🏷️",
    heroTagline: "Adult Smoke Products · 251 Dalhousie St · Open 24 Hours",
    banner: SAFE_BANNER,
    sections: [
      {
        heading: "Native Cigarette Listings in Ottawa",
        body: "Adults can compare listed Native cigarette and smoke-product names, supplied package details, and prices before visiting Spirit Corner Cannabis in downtown Ottawa.",
      },
      {
        heading: "Visit Near ByWard Market",
        body: "Spirit Corner Cannabis is at 251 Dalhousie St near ByWard Market and Lowertown. Check current directions from your starting point and allow for downtown traffic.",
      },
      {
        heading: "Call Ahead for a Particular Brand",
        body: "Cigarette and smoke-product listings can change. Call (343) 308-8998 before travelling when a particular brand, package, or listed price matters.",
      },
    ],
    faqs: [
      { q: "What cigarette details can I compare?", a: "Listings show the product name, supplied package details, and listed price when provided." },
      { q: "Are cigarette listings guaranteed?", a: "No. Listings can change, so call (343) 308-8998 when a particular brand matters to your visit." },
      { q: "When is Spirit Corner Cannabis open?", a: "The Ottawa storefront is open 24 hours a day, seven days a week for adults 19+." },
      { q: "Where is Spirit Corner located?", a: "Spirit Corner Cannabis is at 251 Dalhousie St, Ottawa, ON K1N 1E7, near ByWard Market." },
    ],
  },
  {
    slug: "weed-store-near-gatineau",
    title: "Cannabis Dispensary Near Gatineau — Open 24 Hours | Spirit Corner Cannabis",
    metaDescription: "Visit Spirit Corner Cannabis at 251 Dalhousie St in Ottawa, near Gatineau, Hull, Aylmer, and Chelsea. Open 24 hours with five flower tiers and more.",
    h1: "Dispensary Near Gatineau: 24 Hours",
    icon: "🌉",
    heroTagline: "Ottawa Store Near Gatineau · 251 Dalhousie St · Open 24 Hours",
    banner: SAFE_BANNER,
    sections: [
      {
        heading: "Cannabis Dispensary Near Gatineau, Quebec",
        body: "Spirit Corner Cannabis is located at 251 Dalhousie St in Ottawa, near ByWard Market. Adults 19+ visiting from Gatineau can compare five flower tiers plus listed edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories at the Ottawa storefront.",
      },
      {
        heading: "Visiting From Hull, Aylmer, Gatineau, or Chelsea",
        body: "Trips from Hull, Aylmer, Gatineau, and Chelsea cross into Ottawa before reaching Spirit Corner. Bridge choice and travel time can change with traffic, so check current directions to 251 Dalhousie St before leaving. The store is in Ontario and does not claim a Quebec address.",
      },
      {
        heading: "Open 24 Hours at 251 Dalhousie Street",
        body: "Spirit Corner Cannabis is open 24 hours a day, seven days a week. Adults can plan an early, daytime, evening, or late-night in-store visit.",
      },
      {
        heading: "Compare Five Flower Tiers Before Your Visit",
        body: "The flower menu is arranged across Budget, AA, AAA+, Premium, and Exotic tiers, with listed sizes and prices shown for each product. Listings and prices can change.",
      },
      {
        heading: "Call Before Crossing the Ottawa River",
        body: "Call Spirit Corner at (343) 308-8998 if you want to ask about a particular listing before leaving Gatineau, Hull, Aylmer, or Chelsea.",
      },
    ],
    faqs: [
      { q: "Is Spirit Corner Cannabis located in Gatineau?", a: "No. Spirit Corner Cannabis is located at 251 Dalhousie St in Ottawa, Ontario, near ByWard Market." },
      { q: "Is Spirit Corner Cannabis open 24 hours?", a: "Yes. The Ottawa storefront is open 24 hours a day, seven days a week." },
      { q: "Can I visit from Hull, Aylmer, or Chelsea?", a: "Yes. Adults 19+ visiting Ottawa can use current directions to 251 Dalhousie St. Travel time and bridge conditions vary." },
      { q: "What can I compare before visiting?", a: "The menu lists five flower tiers plus other product categories. Listings can change, so call (343) 308-8998 when a particular item matters." },
    ],
  },
  {
    slug: "dispensary-near-me-ottawa",
    title: "Cannabis Dispensary Near Me Ottawa — Open 24 Hours | Spirit Corner Cannabis",
    metaDescription: "Spirit Corner Cannabis is at 251 Dalhousie St near ByWard Market in downtown Ottawa. Compare five flower tiers and other listed categories. Open 24 hours.",
    h1: "Cannabis Dispensary Near Me — Ottawa",
    icon: "🗺️",
    heroTagline: "251 Dalhousie St · Open 24 Hours · Adults 19+",
    banner: SAFE_BANNER,
    sections: [
      {
        heading: "Downtown Ottawa Cannabis Store Near ByWard Market",
        body: "Spirit Corner Cannabis is at 251 Dalhousie St near ByWard Market and Lowertown. Adults can check current directions from Sandy Hill, Centretown, Vanier, or another Ottawa starting point.",
      },
      {
        heading: "Compare Flower and Other Categories",
        body: "Compare Budget, AA, AAA+, Premium, and Exotic flower listings plus listed edibles, vapes, concentrates, pre-rolls, cigarettes, specialty items, and accessories.",
      },
      {
        heading: "Call Before A Product-Specific Visit",
        body: "Listings and prices can change. Call (343) 308-8998 before travelling when a particular flower or other product matters to your visit.",
      },
    ],
    faqs: [
      { q: "Where is Spirit Corner Cannabis?", a: "The store is at 251 Dalhousie St in downtown Ottawa near ByWard Market." },
      { q: "Is Spirit Corner Cannabis open 24 hours?", a: "Yes. The storefront is open 24 hours a day, seven days a week for adults 19+." },
      { q: "Can listings change?", a: "Yes. Call (343) 308-8998 before travelling when a particular product matters." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}
