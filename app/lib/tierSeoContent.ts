export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Cannabis Flower Ottawa | Spirit Corner Cannabis",
    seoIntro:
      "Compare Exotic flower listings by name, type, THC label, weight, and listed price at Spirit Corner Cannabis in downtown Ottawa.",
    sections: [
      {
        heading: "Compare Exotic Flower Listings",
        body:
          "Each listing shows the flower name, Indica, Sativa, or Hybrid type, its listed THC value, and the weights and prices supplied with the menu snapshot.",
      },
      {
        heading: "Visit Spirit Corner in Downtown Ottawa",
        body:
          "Spirit Corner Cannabis is at 251 Dalhousie St near ByWard Market and is open 24 hours for adults 19+. Call ahead when a particular flower matters to your visit because listings and prices can change.",
      },
    ],
    faqs: [
      {
        q: "What information is shown for Exotic flower?",
        a: "Listings show the flower name, type, THC label, listed menu sizes, and listed prices.",
      },
      {
        q: "Can I call before visiting?",
        a: "Yes. Call (343) 308-8998 to ask about a particular listing before travelling.",
      },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Cannabis Flower Ottawa | Spirit Corner Cannabis",
    seoIntro:
      "Compare Premium flower listings by name, type, THC label, weight, and listed price at Spirit Corner Cannabis in downtown Ottawa.",
    sections: [
      {
        heading: "Premium Flower Details at a Glance",
        body:
          "Use the listed type, THC value, weights, and prices to compare Premium flower choices before an adult in-store visit.",
      },
      {
        heading: "Open 24 Hours on Dalhousie Street",
        body:
          "The store is at 251 Dalhousie St near ByWard Market. Listings and prices can change, so call ahead if you are travelling for a particular flower.",
      },
    ],
    faqs: [
      {
        q: "Which Premium flower details can I compare?",
        a: "You can compare listed flower names, types, THC values, sizes, and prices.",
      },
      {
        q: "When is Spirit Corner Cannabis open?",
        a: "The Ottawa storefront is open 24 hours for adults 19+.",
      },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Cannabis Flower Ottawa | Spirit Corner Cannabis",
    seoIntro:
      "Browse AAA+ flower listings with their supplied type, THC label, weights, and prices at Spirit Corner Cannabis in Ottawa.",
    sections: [
      {
        heading: "Compare AAA+ Flower",
        body:
          "Flower listings include the name, Indica, Sativa, or Hybrid type, THC label, and the sizes and prices shown in the menu snapshot.",
      },
      {
        heading: "Plan an Adult In-Store Visit",
        body:
          "Spirit Corner Cannabis is open 24 hours at 251 Dalhousie St. Call (343) 308-8998 when you want to ask about a specific AAA+ listing before visiting.",
      },
    ],
    faqs: [
      {
        q: "What does each AAA+ listing show?",
        a: "Each listing shows the flower name, type, THC label, menu sizes, and listed prices.",
      },
      {
        q: "Can AAA+ listings change?",
        a: "Yes. Listings and prices can change, so call ahead when a particular flower matters to your visit.",
      },
    ],
  },
  AA: {
    seoTitle: "AA Cannabis Flower Ottawa | Spirit Corner Cannabis",
    seoIntro:
      "Compare AA flower listings, supplied THC labels, menu sizes, and listed prices at Spirit Corner Cannabis in downtown Ottawa.",
    sections: [
      {
        heading: "AA Flower Names, Types, and Sizes",
        body:
          "Compare each listed flower by name, Indica, Sativa, or Hybrid type, THC label, listed menu sizes, and listed prices.",
      },
      {
        heading: "Downtown Ottawa Store Information",
        body:
          "Visit 251 Dalhousie St near ByWard Market. The storefront is open 24 hours for adults 19+, and shoppers can call ahead about a particular listing.",
      },
    ],
    faqs: [
      {
        q: "What can I compare in the AA selection?",
        a: "You can compare listed flower names, types, THC labels, sizes, and prices.",
      },
      {
        q: "Where is Spirit Corner Cannabis?",
        a: "The store is at 251 Dalhousie St in downtown Ottawa near ByWard Market.",
      },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Cannabis Ottawa | Listed Flower Prices | Spirit Corner Cannabis",
    seoIntro:
      "Compare Budget flower names, types, sizes, and listed prices at Spirit Corner Cannabis, 251 Dalhousie St in downtown Ottawa.",
    sections: [
      {
        heading: "Compare Budget Flower Prices and Sizes",
        body:
          "Each Budget listing shows the supplied flower name, type, THC label, menu sizes, and listed prices so adults can compare choices before visiting.",
      },
      {
        heading: "Call Ahead for a Particular Budget Listing",
        body:
          "Menu listings and prices can change. Call (343) 308-8998 if a particular Budget flower or size matters to your visit. The downtown Ottawa storefront is open 24 hours.",
      },
    ],
    faqs: [
      {
        q: "What details are shown for Budget flower?",
        a: "Listings show the flower name, type, THC label, menu sizes, and listed prices.",
      },
      {
        q: "Are the listed Budget prices guaranteed?",
        a: "Listings and prices can change. Call the store before travelling when a particular flower or price matters.",
      },
    ],
  },
};
