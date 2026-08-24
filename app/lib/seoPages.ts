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
    title: "Weed Store Near Gatineau — Spirit Corner Cannabis | 5 Min From the Bridge",
    metaDescription: "Looking for a weed store near Gatineau? Spirit Corner Cannabis at 251 Dalhousie St, Ottawa is just 5 minutes from the Portage Bridge. 200+ strains, open 24 hours.",
    h1: "Weed Store Near Gatineau — Spirit Corner Cannabis",
    icon: "🌉",
    heroTagline: "Just 5 Minutes From the Portage Bridge · Open 24 Hours",
    banner: "/banners/dispensaire-cannabis-pres-de-gatineau-hull-ottawa-spirit-corner-cannabis.png",
    sections: [
      {
        heading: "The Closest Quality Dispensary to Gatineau",
        body: "Spirit Corner Cannabis is one of the closest cannabis dispensaries to Gatineau, Quebec. Located at 251 Dalhousie St in Ottawa's ByWard Market — just 5 minutes from the Portage Bridge and 7 minutes from the Macdonald-Cartier Bridge — we're the easiest dispensary to reach when you're coming from the Quebec side. Whether you're crossing from Hull, Aylmer, downtown Gatineau, or anywhere in the Outaouais region, Spirit Corner is the fastest, most convenient option for premium cannabis.",
      },
      {
        heading: "Why Cross the Bridge to Spirit Corner?",
        body: "Ontario's cannabis market offers a wider selection and more competitive pricing than Quebec's SQDC. At Spirit Corner, you'll find over 200 strains across five quality tiers — from ultra-rare Exotic genetics (THC 35-39%) to affordable Budget flower at just $3/g. Our 3g bundle pricing applies to every tier, and our top three tiers offer 6g bundle pricing. With prices starting at $3/g and ounces from $40, Spirit Corner delivers value that's worth the 5-minute drive.",
      },
      {
        heading: "Open 24 Hours — Perfect for Cross-Border Visits",
        body: "Unlike most dispensaries with limited hours, Spirit Corner Cannabis is open 24 hours a day, 7 days a week. Whether you're heading to Ottawa for dinner, a Senators game, shopping at the Rideau Centre, or just making a quick trip across the bridge, you can stop by Spirit Corner anytime. Early morning, late night, weekends, holidays — we're always here.",
      },
      {
        heading: "Directions From Gatineau",
        body: "From downtown Gatineau/Hull: Take the Portage Bridge into Ottawa, turn right on Wellington St, right on Elgin/Mackenzie King Bridge, and follow to Dalhousie St. Total drive time: approximately 5-7 minutes. From Aylmer: Take Autoroute 50 to the Champlain Bridge or Portage Bridge. Total drive time: approximately 15-20 minutes. Free evening street parking is available on Dalhousie St. We're also accessible by STO (Société de transport de l'Outaouais) buses that cross into downtown Ottawa.",
      },
      {
        heading: "Full Menu — Cannabis, Edibles, Vapes & More",
        body: "When you make the trip across the bridge, make it count. Spirit Corner carries a full selection including 200+ flower strains, edibles, vape pens, disposable vapes, concentrates (shatter, wax, hash, live resin), pre-rolled joints, native cigarettes, and accessories. Check our live online menu at spiritcornercannabis.com before you visit to see exactly what's in stock.",
      },
    ],
    faqs: [
      { q: "How far is Spirit Corner from Gatineau?", a: "We're located at 251 Dalhousie St in Ottawa's ByWard Market — just 5 minutes from the Portage Bridge and 7 minutes from the Macdonald-Cartier Bridge. It's one of the closest dispensaries to the Quebec border." },
      { q: "Is it worth crossing the bridge for cannabis?", a: "Absolutely. Spirit Corner offers 200+ strains, prices starting at $3/g, and bundle pricing options like 3g total that you won't find at Quebec's SQDC locations. The selection and value are significantly better." },
      { q: "Is Spirit Corner Cannabis open late?", a: "We're open 24 hours a day, 7 days a week. Whether you're crossing the bridge at noon or midnight, we're open and ready to serve you." },
      { q: "What's the cheapest weed near Gatineau?", a: "Spirit Corner Cannabis has Budget flower from $3/g and value ounces from $40. With our 3g bundle pricing, these are some of the best prices near the Gatineau border." },
      { q: "Is there parking at Spirit Corner?", a: "Yes. Free evening street parking is available on Dalhousie St and surrounding streets. Paid parking lots are also nearby during the day." },
      { q: "Can I take the bus from Gatineau to Spirit Corner?", a: "Yes! STO (Gatineau transit) buses cross into downtown Ottawa. Spirit Corner is also near major OC Transpo routes. The store is walking distance from several downtown bus stops." },
      { q: "Do you carry products besides cannabis?", a: "Yes — we also carry native cigarettes, rolling papers, grinders, and other accessories. Many Gatineau customers appreciate the one-stop convenience." },
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
