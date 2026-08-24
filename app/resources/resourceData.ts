export interface ResourceCard { title: string; href: string; text: string; }
export interface ResourceSection { heading: string; body: string; bullets?: string[]; }
export interface ResourcePage {
  slug: string; title: string; seoTitle: string; description: string; eyebrow: string;
  intro: string; banner: string; cards: ResourceCard[]; sections: ResourceSection[];
}

const SAFE_BANNER = "/banners/spirit_corner_cannabis_showcase.webp";

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Spirit Corner Cannabis Resources",
    seoTitle: "Downtown Ottawa Cannabis Guides | Spirit Corner Cannabis",
    description: "Plan an adult visit to Spirit Corner Cannabis from downtown Ottawa, ByWard Market, Lowertown, Gatineau, or Hull and compare store menu categories.",
    eyebrow: "Downtown Ottawa Resources",
    intro: "Plan an adult visit to 251 Dalhousie St with current directions, the store phone number, and useful ways to compare flower, smoke products, and accessories. Spirit Corner is open 24 hours near ByWard Market.",
    banner: SAFE_BANNER,
    cards: [
      { title: "ByWard Market And Lowertown Visit Guide", href: "/resources/byward-lowertown-visit-guide", text: "Check directions and store details for a visit from ByWard Market, Lowertown, Rideau, Sandy Hill, or Vanier." },
      { title: "Downtown Ottawa Menu Guide", href: "/resources/downtown-ottawa-menu-guide", text: "Compare flower, pre-roll, edible, vape, concentrate, cigarette, specialty, and accessory categories." },
      { title: "Flower Tier Guide", href: "/resources/flower-shelf-guide", text: "Compare Exotic, Premium, AAA+, AA, and Budget flower listings." },
      { title: "Gatineau And Hull Route Guide", href: "/resources/gatineau-hull-route-guide", text: "Check current bridge directions before travelling to the Ottawa storefront." },
      { title: "Smoke And Accessory Guide", href: "/resources/smoke-accessory-guide", text: "Compare cigarette, vape, Grabba, and accessory listings before visiting." },
    ],
    sections: [
      { heading: "Open 24 Hours Near ByWard Market", body: "Spirit Corner Cannabis is at 251 Dalhousie St in downtown Ottawa. Adults can visit at any hour or call (343) 308-8998 for store directions and product questions." },
      { heading: "Compare Listings Before Travelling", body: "Menu listings show supplied names, types, package details, and prices. Listings can change, so call ahead when a particular product matters to your visit." },
    ],
  },
  {
    slug: "byward-lowertown-visit-guide",
    title: "ByWard Market And Lowertown Visit Guide",
    seoTitle: "ByWard Market And Lowertown Cannabis Visit Guide | Spirit Corner Cannabis",
    description: "Plan a Spirit Corner Cannabis visit from ByWard Market, Lowertown, Rideau, Sandy Hill, Vanier, or downtown Ottawa.",
    eyebrow: "Downtown Visit Guide",
    intro: "Spirit Corner Cannabis is at 251 Dalhousie St near ByWard Market and Lowertown. Adults travelling from Rideau, Sandy Hill, Vanier, or another downtown starting point can check current directions before leaving.",
    banner: SAFE_BANNER,
    cards: [
      { title: "Ottawa Store Information", href: "/weed-dispensary-ottawa", text: "Find the address, hours, phone number, and directions for the Ottawa storefront." },
      { title: "Downtown Menu Categories", href: "/resources/downtown-ottawa-menu-guide", text: "Compare flower and other listed product categories before visiting." },
      { title: "Contact Spirit Corner", href: "/contact", text: "Call the store when a particular listing or visit detail matters." },
    ],
    sections: [
      { heading: "Check Directions From Your Starting Point", body: "Walking from ByWard Market differs from travelling through Vanier or Sandy Hill. Use current directions from your actual starting point and allow for local traffic." },
      { heading: "Call Ahead For A Particular Listing", body: "Listings and prices can change. Call (343) 308-8998 when you are travelling for a particular flower, edible, vape, concentrate, cigarette, specialty item, or accessory." },
    ],
  },
  {
    slug: "downtown-ottawa-menu-guide",
    title: "Downtown Ottawa Menu Guide",
    seoTitle: "Downtown Ottawa Cannabis Menu Guide | Spirit Corner Cannabis",
    description: "Compare Spirit Corner Cannabis categories for flower, pre-rolls, edibles, vapes, concentrates, specialty items, cigarettes, and accessories.",
    eyebrow: "Menu Categories",
    intro: "Adults can compare five flower tiers plus listed pre-rolls, edibles, vapes, concentrates, specialty items, cigarettes, and accessories before visiting 251 Dalhousie St.",
    banner: SAFE_BANNER,
    cards: [
      { title: "Flower Tier Guide", href: "/resources/flower-shelf-guide", text: "Compare Exotic, Premium, AAA+, AA, and Budget flower." },
      { title: "Pre-Rolls", href: "/items/prerolls", text: "Compare listed pre-roll names, package details, and prices." },
      { title: "Edibles", href: "/items/edibles", text: "Compare listed edible names, supplied details, and prices." },
      { title: "Vapes", href: "/items/vapes", text: "Compare listed vape names, supplied details, and prices." },
      { title: "Concentrates", href: "/items/concentrates", text: "Compare listed concentrate names, supplied details, and prices." },
      { title: "Specialty Items", href: "/items/magic", text: "Compare listed specialty item names, supplied details, and prices." },
    ],
    sections: [
      { heading: "Compare Product Formats", body: "Names, supplied THC or MG details, package information, and prices appear with listings when provided. That makes it easier to compare similar products before an adult in-store visit." },
      { heading: "Listings Can Change", body: "Call (343) 308-8998 before travelling when a particular product matters. The downtown Ottawa storefront is open 24 hours." },
    ],
  },
  {
    slug: "flower-shelf-guide",
    title: "Spirit Corner Flower Tier Guide",
    seoTitle: "Exotic Premium AAA AA Budget Flower Tier Guide | Spirit Corner Cannabis",
    description: "Compare Spirit Corner Cannabis flower tiers: Exotic, Premium, AAA+, AA, and Budget.",
    eyebrow: "Flower Tiers",
    intro: "Compare Exotic, Premium, AAA+, AA, and Budget flower using the listed name, Indica, Sativa, or Hybrid type, THC label, sizes, and prices.",
    banner: SAFE_BANNER,
    cards: [
      { title: "Exotic", href: "/exotic", text: "Compare listed Exotic flower details and prices." },
      { title: "Premium", href: "/premium", text: "Compare listed Premium flower details and prices." },
      { title: "AAA+", href: "/aaa", text: "Compare listed AAA+ flower details and prices." },
      { title: "AA", href: "/aa", text: "Compare listed AA flower details and prices." },
      { title: "Budget", href: "/budget", text: "Compare listed Budget flower sizes and prices." },
    ],
    sections: [
      { heading: "Flower Details At A Glance", body: "Each flower listing shows its supplied name, type, THC label, sizes, and prices so adults can compare choices before visiting." },
      { heading: "Call Before A Product-Specific Trip", body: "Listings and prices can change. Call (343) 308-8998 if a particular flower or size matters to your visit." },
    ],
  },
  {
    slug: "gatineau-hull-route-guide",
    title: "Gatineau And Hull Route Guide",
    seoTitle: "Gatineau And Hull Route Guide | Spirit Corner Cannabis Ottawa",
    description: "Plan a Spirit Corner Cannabis visit from Gatineau, Hull, Aylmer, or another Outaouais starting point using current directions.",
    eyebrow: "Cross-River Visit Guide",
    intro: "Spirit Corner Cannabis is an Ottawa storefront at 251 Dalhousie St. Adults travelling from Gatineau, Hull, or Aylmer can check current bridge directions and traffic before leaving.",
    banner: SAFE_BANNER,
    cards: [
      { title: "Ottawa Store Information", href: "/weed-dispensary-ottawa", text: "Find the Ottawa address, hours, phone number, and directions." },
      { title: "Downtown Menu Categories", href: "/resources/downtown-ottawa-menu-guide", text: "Compare listed flower and smoke-product categories before travelling." },
      { title: "ByWard Market Visit Guide", href: "/resources/byward-lowertown-visit-guide", text: "Review the destination near ByWard Market and Lowertown." },
    ],
    sections: [
      { heading: "Use Current Bridge Directions", body: "Bridge choice and traffic conditions can change. Check directions from your actual Outaouais starting point instead of relying on a fixed travel-time claim." },
      { heading: "The Store Is In Ottawa", body: "Spirit Corner Cannabis is not a Quebec location. The storefront is at 251 Dalhousie St in downtown Ottawa and is open 24 hours for adults 19+." },
    ],
  },
  {
    slug: "smoke-accessory-guide",
    title: "Spirit Corner Smoke And Accessory Guide",
    seoTitle: "Ottawa Cigarette Vape And Accessory Guide | Spirit Corner Cannabis",
    description: "Compare Spirit Corner Cannabis cigarette, vape, Grabba, and accessory listings in downtown Ottawa.",
    eyebrow: "Smoke Products And Accessories",
    intro: "Adults can compare listed cigarettes, vapes, Grabba leaf and shakers, rolling items, and accessories before visiting the downtown Ottawa storefront.",
    banner: SAFE_BANNER,
    cards: [
      { title: "Cigarettes", href: "/items/cigarettes", text: "Compare listed cigarette and smoke-product names and prices." },
      { title: "Vapes", href: "/items/vapes", text: "Compare listed vape names, supplied details, and prices." },
      { title: "Grabba Leaf And Shakers", href: "/grabba-leaf-shakers", text: "Compare listed Grabba leaf and shaker choices or call ahead." },
      { title: "Accessories", href: "/items/add-ons", text: "Compare listed rolling items and smoke accessories." },
      { title: "Nicotine Pouch Information", href: "/nicotine-pouches-ottawa", text: "Review the Ottawa visit information and call-ahead guidance." },
    ],
    sections: [
      { heading: "Compare Smoke Products Before Visiting", body: "Listings show supplied names, package details, and prices when provided. Call ahead when a particular cigarette, vape, Grabba item, or accessory matters." },
      { heading: "Visit The Downtown Ottawa Store", body: "Spirit Corner Cannabis is open 24 hours at 251 Dalhousie St near ByWard Market. Call (343) 308-8998 for product questions or directions." },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];
export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
