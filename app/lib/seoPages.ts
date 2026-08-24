/* ── Geo-targeted SEO landing pages for Ottawa keywords ── */

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

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "ottawa-weed-dispensary",
    title: "24 Hour Cannabis Store in Downtown Ottawa",
    metaDescription: "Visit Spirit Corner Cannabis at 251 Dalhousie St near ByWard Market. Open 24 hours with five flower tiers, edibles, vapes, concentrates, pre-rolls, and accessories.",
    h1: "Spirit Corner Cannabis in Downtown Ottawa",
    icon: "✨",
    heroTagline: "251 Dalhousie St · Open 24 Hours · Walk-In Welcome",
    banner: "/banners/spirit-corner-cannabis-ottawa-24-hour-dispensary-banner.png",
    sections: [
      {
        heading: "Visit Spirit Corner Cannabis",
        body: "Spirit Corner Cannabis is at 251 Dalhousie St near ByWard Market in downtown Ottawa. The storefront is open 24 hours a day, seven days a week for adult in-store shopping.",
      },
      {
        heading: "Five Flower Tiers",
        body: "Compare Budget, AA, AAA+, Premium, and Exotic flower tiers. Listed prices and sizes are shown with each product, and selection can change.",
      },
      {
        heading: "More Store Categories",
        body: "Spirit Corner also lists edibles, vape pens, disposable vapes, concentrates, pre-rolls, Native cigarettes, nicotine pouches, rolling papers, and accessories. Call the store if you want to ask about a particular item before visiting.",
      },
      {
        heading: "Open 24 Hours in the Heart of ByWard Market",
        body: "Spirit Corner Cannabis is open 24 hours a day, seven days a week at 251 Dalhousie St near ByWard Market. No appointment is needed for an in-store visit.",
      },
      {
        heading: "Flower Sizes and Prices",
        body: "Flower listings show available sizes and prices for each tier. Budget options include listings starting at $3 per gram and value ounces from $40.",
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
      { q: "What other categories are listed?", a: "Listings include edibles, vapes, concentrates, pre-rolls, Native cigarettes, nicotine pouches, and accessories." },
      { q: "Can I call before visiting?", a: "Yes. Call (343) 308-8998 for directions or product questions." },
    ],
  },

  {
    slug: "cheap-weed-ottawa",
    title: "Cheap Weed Ottawa — Budget Cannabis Deals From $3/g | Spirit Corner",
    metaDescription: "Looking for cheap weed in Ottawa? Spirit Corner Cannabis has budget flower from $3/g, ounces from $40, and 3g bundle pricing. Open 24 hours at 251 Dalhousie St.",
    h1: "Cheap Weed Ottawa — Budget Cannabis Deals",
    icon: "💰",
    heroTagline: "Budget Flower From $3/g · Ounces From $40 · Always Open",
    banner: "/banners/cheap-weed-ottawa-dispensary-deals-spirit-corner-cannabis-24-hour.png",
    sections: [
      {
        heading: "Ottawa's Best Prices on Quality Cannabis",
        body: "Looking for cheap weed in Ottawa without sacrificing quality? Spirit Corner Cannabis offers some of the most competitive cannabis prices in the city. Our Budget tier starts at just $3/g with value ounces from $40. Our AA tier ($4/g) and AAA+ tier ($5-$6/g) also deliver incredible value with THC levels from 27% to 32%. We believe great cannabis shouldn't break the bank, and our transparent tier-based pricing ensures you always get exactly what you pay for — no hidden markups, no gimmicks.",
      },
      {
        heading: "Flower Bundle Pricing",
        body: "Every tier at Spirit Corner Cannabis uses clear 3g bundle pricing so the total grams and price are shown before purchase. Our top three tiers (Exotic, Premium, AAA+) also offer 6g bundle pricing for 6g total. When you combine our already low prices with these bundle offers, Spirit Corner delivers the best cannabis value in Ottawa. A $15 AAA+ 3g purchase actually gets you 3g of flower — that's just $5/g for THC 30%+ cannabis.",
      },
      {
        heading: "Budget Doesn't Mean Low Quality",
        body: "At Spirit Corner Cannabis, cheap doesn't mean low quality. Every strain in our Budget and AA tiers delivers reliable potency (THC 24-29%) from trusted Canadian growers. We rotate our inventory frequently to ensure freshness and maintain our quality standards across all price points. Our Budget strains are perfect for rolling, sessions, or anyone who prefers value over premium aesthetics. Our AA tier is a step up — solid daily drivers with consistent effects.",
      },
      {
        heading: "Compare Our Prices",
        body: "Budget: $3/g — $40/oz. AA: $4/g — $90/oz. AAA+: $5-$6/g — $100/oz. Premium: $7-$10/g. Exotic: $10-$12/g. Every tier includes 3g bundle pricing. Top tiers include 6g bundle pricing. These are some of the lowest prices you'll find at any dispensary in Ottawa, Vanier, Sandy Hill, Lower Town, or the ByWard Market area.",
      },
    ],
    faqs: [
      { q: "What is the cheapest weed at Spirit Corner Cannabis?", a: "Our Budget tier starts at $3/g with value ounces from $40. These are quality, properly-cured strains at Ottawa's most competitive prices." },
      { q: "Do you have ounce deals?", a: "Yes! Budget ounces from $40, AA ounces from $90, AAA+ ounces from $100. All with excellent quality, freshness guaranteed, and 3g bundle pricing on top." },
      { q: "Is cheap weed still good quality?", a: "Absolutely. Our Budget flower delivers THC 24-27% from trusted Canadian growers. We never sell old, dry, or improperly stored flower. Every product meets our quality standards regardless of price point." },
      { q: "Where can I buy cheap weed in Ottawa?", a: "Spirit Corner Cannabis at 251 Dalhousie St, Ottawa. Open 24 hours a day, walk in anytime, no appointment needed. We're in the heart of ByWard Market." },
      { q: "What bundle pricing do you offer?", a: "Every tier includes 3g bundle pricing (pay for 3g total). Our Exotic, Premium, and AAA+ tiers also offer 6g bundle pricing (pay for 6g total). These bundle offers apply on every visit." },
      { q: "Do you offer bulk discounts?", a: "Yes — our ounce pricing is deeply discounted compared to per-gram rates. Budget ounces are $40, AA ounces $90, and AAA+ ounces $100. The more you buy, the more you save." },
    ],
  },

  {
    slug: "native-cigarettes-ottawa",
    title: "Native Cigarettes Ottawa — $25 Per Carton | Spirit Corner Cannabis",
    metaDescription: "Native cigarettes in Ottawa at Spirit Corner Cannabis near ByWard Market, with Native cigarette cartons at $25 Per Carton for adult customers. Open 24/7.",
    h1: "Native Cigarettes Ottawa — $25 Per Carton",
    icon: "🏷️",
    heroTagline: "Premium & Value Brands · $25 Per Carton · Open 24 Hours",
    banner: "/banners/native-cigarettes-ottawa-25-dollar-cartons-spirit-corner-cannabis.png",
    sections: [
      {
        heading: "Ottawa Native Cigarettes — $25 Per Carton",
        body: "Spirit Corner Cannabis carries Native cigarette cartons at $25 Per Carton for adult customers in downtown Ottawa. Located at 251 Dalhousie St in the ByWard Market, the store lists premium and value Native cigarette brands alongside its cannabis menu for a clear, local shopping stop.",
      },
      {
        heading: "Why Adult Customers Visit Spirit Corner",
        body: "The page is built for adult customers comparing Native cigarette carton options in downtown Ottawa. Spirit Corner keeps the offer clear: Native cigarette cartons are $25 Per Carton, with the store open 24 hours a day near ByWard Market.",
      },
      {
        heading: "Convenient ByWard Market Location",
        body: "Our shop at 251 Dalhousie St is centrally located in Ottawa's ByWard Market — easily accessible from Rideau St, Sussex Dr, and all major downtown routes. Whether you're walking, driving, or taking the bus, Spirit Corner is easy to reach. Free evening street parking is available on Dalhousie St and nearby streets. We serve customers from across Ottawa including Lower Town, Sandy Hill, Centretown, Vanier, and across the bridge from Gatineau.",
      },
      {
        heading: "More Than Just Cigarettes",
        body: "While you're picking up your cigarettes, browse our full cannabis menu — over 200 strains of flower, plus edibles, vapes, concentrates, pre-rolls, and accessories. Many of our customers appreciate the convenience of getting their cigarettes and cannabis in one trip. Our knowledgeable staff can help you with both sides of our inventory.",
      },
    ],
    faqs: [
      { q: "Does Spirit Corner sell native cigarettes?", a: "Yes. Spirit Corner Cannabis carries Native cigarette cartons at $25 Per Carton for adult customers in downtown Ottawa, with premium and value brand options available in store." },
      { q: "What cigarette brands do you carry?", a: "We stock a comprehensive range of native cigarette brands in multiple varieties. Our selection rotates regularly. Visit us at 251 Dalhousie St to see our full current inventory and pricing." },
      { q: "Where can I buy Native cigarette cartons in Ottawa?", a: "Spirit Corner Cannabis at 251 Dalhousie St offers Native cigarette cartons at $25 Per Carton near Ottawa's ByWard Market. We're open 24 hours so adult customers can shop on their own schedule." },
      { q: "Are you open late for cigarette purchases?", a: "We're open 24 hours a day, 7 days a week. Whether you need cigarettes at noon or 3 AM, our doors are always open." },
      { q: "Can I buy cigarettes and cannabis at Spirit Corner?", a: "Absolutely. Spirit Corner is both a fully-licensed cannabis dispensary and a tobacco retailer. Many customers appreciate the convenience of one stop for both products." },
      { q: "Where is Spirit Corner located?", a: "251 Dalhousie St, Ottawa, ON K1N 1E7 — in the ByWard Market. Near Rideau Centre, close to major bus routes, with free evening street parking available." },
    ],
  },

  {
    slug: "weed-store-near-gatineau",
    title: "Cannabis Dispensary Near Gatineau — Open 24 Hours",
    metaDescription: "Visit Spirit Corner Cannabis at 251 Dalhousie St in Ottawa, near Gatineau, Hull, Aylmer, and Chelsea. Open 24 hours with five flower tiers and more.",
    h1: "Dispensary Near Gatineau: 24 Hours",
    icon: "🌉",
    heroTagline: "Ottawa Store Near Gatineau · 251 Dalhousie St · Open 24 Hours",
    banner: "/banners/spirit_corner_cannabis_showcase.webp",
    sections: [
      {
        heading: "Cannabis Dispensary Near Gatineau, Quebec",
        body: "Spirit Corner Cannabis is located at 251 Dalhousie St in Ottawa, near ByWard Market. Adults 19+ visiting from Gatineau can shop five flower tiers plus edibles, vapes, concentrates, pre-rolls, Native cigarettes, and accessories at one Ottawa storefront.",
      },
      {
        heading: "Visiting From Hull, Aylmer, Gatineau, or Chelsea",
        body: "Trips from Hull, Aylmer, Gatineau, and Chelsea cross into Ottawa before reaching Spirit Corner. Bridge choice and travel time can change with traffic, so check current directions to 251 Dalhousie St before leaving. The store is in Ontario and does not claim a Quebec address.",
      },
      {
        heading: "Open 24 Hours at 251 Dalhousie Street",
        body: "Spirit Corner Cannabis is open 24 hours a day, seven days a week. The round-the-clock schedule gives cross-border shoppers flexibility for an early, daytime, evening, or late-night visit without relying on a short shopping window.",
      },
      {
        heading: "Compare Five Flower Tiers Before Your Visit",
        body: "The flower menu is arranged across Budget, AA, AAA+, Premium, and Exotic tiers, with listed sizes and prices shown for each product. Shoppers can also compare the current edibles, vape, concentrate, pre-roll, cigarette, and accessory categories before coming to Ottawa.",
      },
      {
        heading: "Call Before Crossing the Ottawa River",
        body: "Call Spirit Corner at (343) 308-8998 if you want to ask about a particular menu item or confirm the best current route before leaving Gatineau, Hull, Aylmer, or Chelsea.",
      },
    ],
    faqs: [
      { q: "Is Spirit Corner Cannabis located in Gatineau?", a: "No. Spirit Corner Cannabis is located at 251 Dalhousie St in Ottawa, Ontario, near ByWard Market. It is an Ottawa shopping option for adults visiting from Gatineau and nearby Quebec communities." },
      { q: "Is Spirit Corner Cannabis open 24 hours?", a: "Yes. The Ottawa storefront is open 24 hours a day, seven days a week." },
      { q: "Can I visit from Hull, Aylmer, or Chelsea?", a: "Yes. Adults 19+ visiting Ottawa from Hull, Aylmer, Gatineau, or Chelsea can use current directions to 251 Dalhousie St. Travel time and bridge conditions vary." },
      { q: "What can I compare before visiting?", a: "The menu lists five flower tiers plus edibles, vapes, concentrates, pre-rolls, Native cigarettes, and accessories. Selection can change, so call (343) 308-8998 if you are looking for a particular item." },
    ],
  },

  {
    slug: "dispensary-near-me-ottawa",
    title: "Cannabis Dispensary Near Me Ottawa — Spirit Corner | Open 24 Hours",
    metaDescription: "Find a cannabis dispensary near you in Ottawa. Spirit Corner Cannabis at 251 Dalhousie St has 200+ strains from $3/g. Open 24 hours. Walk in anytime, no appointment needed.",
    h1: "Cannabis Dispensary Near Me — Ottawa",
    icon: "🗺️",
    heroTagline: "Walk-In Welcome · Open 24 Hours · 200+ Strains In Stock",
    sections: [
      {
        heading: "Find Premium Cannabis Near You in Ottawa",
        body: "If you're searching for a cannabis dispensary near you in Ottawa, Spirit Corner Cannabis is conveniently located at 251 Dalhousie St — in the heart of the ByWard Market. We serve customers from across Ottawa and Gatineau including Sandy Hill, Lower Town, Centretown, the Glebe, Old Ottawa South, Vanier, Orleans, Kanata, Barrhaven, and across the bridge from Gatineau and Hull.",
      },
      {
        heading: "Why Choose Spirit Corner Over Other Dispensaries?",
        body: "What sets Spirit Corner apart from other Ottawa dispensaries is our combination of selection, pricing, and convenience. We carry 200+ strains across five clear quality tiers — no confusing markups, no inconsistent pricing. Our 3g bundle pricing applies to every tier, every purchase. And unlike most dispensaries that close at midnight, we're open 24 hours a day, 7 days a week. Whether you need flower, edibles, vapes, or concentrates at any hour, Spirit Corner is here.",
      },
      {
        heading: "Areas We Serve in Ottawa & Gatineau",
        body: "Spirit Corner Cannabis is centrally located and easily accessible from anywhere in Ottawa. We regularly serve customers from: ByWard Market, Sandy Hill, Lower Town, Centretown, the Glebe, Old Ottawa South, Vanier, New Edinburgh, Rockcliffe, Orleans, Kanata, Barrhaven, Nepean, Stittsville, and across the bridge from Gatineau, Hull, and Aylmer. We're near major OC Transpo routes and the Rideau Centre.",
      },
    ],
    faqs: [
      { q: "Where is the closest dispensary in ByWard Market?", a: "Spirit Corner Cannabis at 251 Dalhousie St is conveniently located in the heart of ByWard Market — one of Ottawa's most accessible neighbourhoods." },
      { q: "Is Spirit Corner Cannabis walk-in friendly?", a: "Absolutely! No appointment needed. Walk in anytime — we're open 24 hours a day, 7 days a week. Our friendly staff is always ready to help." },
      { q: "What neighbourhoods does Spirit Corner serve?", a: "We serve all of Ottawa including ByWard Market, Sandy Hill, Lower Town, Centretown, the Glebe, Vanier, Orleans, Kanata, Barrhaven, and Gatineau/Hull across the bridge." },
      { q: "How do I check what's in stock?", a: "Visit spiritcornercannabis.com for our live menu with real-time stock, pricing, and THC levels for all products." },
      { q: "Do you sell edibles and vapes?", a: "Yes! In addition to 200+ flower strains, we carry edibles (gummies, chocolates), vape pens, disposable vapes, concentrates, pre-rolls, and accessories." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
