export interface ResourceCard { title: string; href: string; text: string; }
export interface ResourceSection { heading: string; body: string; bullets?: string[]; }
export interface ResourcePage {
  slug: string; title: string; seoTitle: string; description: string; eyebrow: string;
  intro: string; banner: string; cards: ResourceCard[]; sections: ResourceSection[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Spirit Corner Cannabis Resources",
    seoTitle: "Spirit Corner Cannabis Resources | Downtown Ottawa Guides",
    description: "Spirit Corner Cannabis guides for ByWard Market, Lowertown, downtown Ottawa, Gatineau and Hull routes, menu categories, flower shelves, and smoke accessories.",
    eyebrow: "Downtown Ottawa Resource Hub",
    intro: "A downtown stop works best when the route and the menu are planned separately. Use these guides for ByWard Market and Lowertown context, bridge trips from Gatineau or Hull, flower shelf choices, and direct category paths before visiting Spirit Corner.",
    banner: "/banners/spirit_corner_cannabis_showcase.webp",
    cards: [
      { title: "ByWard Market And Lowertown Visit Guide", href: "/resources/byward-lowertown-visit-guide", text: "Plan the Dalhousie Street stop from ByWard Market, Lowertown, Rideau, Sandy Hill, or Vanier." },
      { title: "Downtown Ottawa Menu Guide", href: "/resources/downtown-ottawa-menu-guide", text: "Move from visit intent to flower, pre-rolls, edibles, vapes, concentrates, magic, cigarettes, or accessories." },
      { title: "Flower Shelf Guide", href: "/resources/flower-shelf-guide", text: "Compare Exotic, Premium, AAA+, AA, and Budget as separate flower lanes." },
      { title: "Gatineau And Hull Route Guide", href: "/resources/gatineau-hull-route-guide", text: "Use current directions when the trip begins across the Ottawa River." },
      { title: "Smoke And Accessory Guide", href: "/resources/smoke-accessory-guide", text: "Find cigarettes, nicotine pouches, vapes, rolling items, and accessories without searching the whole menu." },
    ],
    sections: [
      { heading: "Built For A Downtown Ottawa Stop", body: "Spirit Corner sits near ByWard Market and Lowertown, where a store visit may happen alongside restaurants, hotels, nightlife, events, or a trip through the Rideau area. The hub keeps that downtown context connected to useful menu paths." },
      { heading: "Use Current Pages For Current Details", body: "Resource pages explain where to begin. The store page carries directions and contact options, while category pages carry the menu details displayed today." },
    ],
  },
  {
    slug: "byward-lowertown-visit-guide",
    title: "ByWard Market And Lowertown Visit Guide",
    seoTitle: "ByWard Market And Lowertown Cannabis Visit Guide | Spirit Corner",
    description: "Plan a Spirit Corner Cannabis visit from ByWard Market, Lowertown, Rideau, Sandy Hill, Vanier, or downtown Ottawa.",
    eyebrow: "Downtown Visit Guide",
    intro: "This guide keeps the Dalhousie Street stop practical for adults arriving from ByWard Market, Lowertown, Rideau, Sandy Hill, Vanier, or another downtown starting point. Confirm the route, then open one category before heading out.",
    banner: "/banners/08_Contact_Us.webp",
    cards: [
      { title: "Ottawa Store Page", href: "/weed-dispensary-ottawa", text: "Review current directions, contact options, and local store details." },
      { title: "Downtown Menu Guide", href: "/resources/downtown-ottawa-menu-guide", text: "Choose a format before opening individual menu cards." },
      { title: "Contact", href: "/contact", text: "Use Contact when a visit detail needs confirmation." },
    ],
    sections: [
      { heading: "Plan From The Actual Starting Point", body: "A walk from ByWard Market is different from a trip through Vanier or Sandy Hill. Open directions from the real starting point instead of relying on a broad downtown label." },
      { heading: "Keep The Menu Decision Focused", body: "A flower visit starts with the shelf guide. A pre-roll, edible, vape, concentrate, cigarette, or accessory visit starts with that category. One clear path is faster than scanning every card." },
    ],
  },
  {
    slug: "downtown-ottawa-menu-guide",
    title: "Downtown Ottawa Menu Guide",
    seoTitle: "Spirit Corner Cannabis Menu Guide | Downtown Ottawa",
    description: "Navigate Spirit Corner Cannabis menu categories for flower, pre-rolls, edibles, vapes, concentrates, magic, cigarettes, and accessories.",
    eyebrow: "Menu Guide",
    intro: "Downtown visitors often know the format they want before they know the item. Start with flower, pre-rolls, edibles, vapes, concentrates, Magic Stuff, cigarettes, or accessories, then use the current cards inside that category.",
    banner: "/banners/edibles_prerolls_more_banner.webp",
    cards: [
      { title: "Flower Shelf Guide", href: "/resources/flower-shelf-guide", text: "Use shelf level as the first flower filter." },
      { title: "Pre-Rolls", href: "/items/prerolls", text: "Open the ready-to-smoke category." },
      { title: "Edibles", href: "/items/edibles", text: "Keep edible browsing in its own menu lane." },
      { title: "Vapes", href: "/items/vapes", text: "Open the current vape category." },
      { title: "Concentrates", href: "/items/concentrates", text: "Use the extract-format menu lane." },
      { title: "Magic Stuff", href: "/items/magic", text: "Open the current Magic Stuff category when that is the intended path." },
    ],
    sections: [
      { heading: "One Format At A Time", body: "Separating formats keeps a downtown quick stop manageable. Once the category is clear, the current menu cards provide the next comparison." },
      { heading: "Return To Visit Details Last", body: "After choosing a category, use the Ottawa store page for directions and contact information. This prevents local planning text from crowding the menu decision." },
    ],
  },
  {
    slug: "flower-shelf-guide",
    title: "Spirit Corner Flower Shelf Guide",
    seoTitle: "Spirit Corner Flower Shelf Guide | Exotic Premium AAA AA Budget",
    description: "Compare Spirit Corner Cannabis flower shelves: Exotic, Premium, AAA+, AA, and Budget.",
    eyebrow: "Flower Guide",
    intro: "Spirit Corner flower browsing is organized into five shelf lanes. Choose a tier first, compare the current cards inside it, and move shelves only when the first lane does not fit the visit.",
    banner: "/banners/premium_banner.webp",
    cards: [
      { title: "Exotic", href: "/exotic", text: "Open the Exotic shelf and its current cards." },
      { title: "Premium", href: "/premium", text: "Browse the Premium shelf separately." },
      { title: "AAA+", href: "/aaa", text: "Use AAA+ as a middle flower lane." },
      { title: "AA", href: "/aa", text: "Open the AA shelf for value-focused browsing." },
      { title: "Budget", href: "/budget", text: "Start here when the visit is price-conscious." },
    ],
    sections: [
      { heading: "Shelf First, Strain Second", body: "The shelf gives the first layer of structure before strain names enter the decision. This is useful when many flower cards are available to browse." },
      { heading: "The Tier Page Carries The Details", body: "Use current tier cards for the names and package details displayed today. This guide stays focused on navigation and does not imply live availability." },
    ],
  },
  {
    slug: "gatineau-hull-route-guide",
    title: "Gatineau And Hull Route Guide",
    seoTitle: "Gatineau And Hull To Spirit Corner Route Guide | Ottawa",
    description: "Plan a Spirit Corner Cannabis visit from Gatineau, Hull, Aylmer, or another Outaouais starting point using current directions.",
    eyebrow: "Cross-River Visit Guide",
    intro: "A trip from Gatineau, Hull, or Aylmer crosses into a different downtown traffic pattern than an Ottawa neighbourhood trip. Start with current directions, allow for the route in use, and open one menu category before leaving.",
    banner: "/banners/08_Contact_Us.webp",
    cards: [
      { title: "Ottawa Store Page", href: "/weed-dispensary-ottawa", text: "Review current directions and store details." },
      { title: "Downtown Menu Guide", href: "/resources/downtown-ottawa-menu-guide", text: "Choose the menu path before travelling." },
      { title: "ByWard Visit Guide", href: "/resources/byward-lowertown-visit-guide", text: "Review the downtown destination context." },
    ],
    sections: [
      { heading: "Use Live Directions For The Bridge Trip", body: "Bridge selection and traffic conditions can change. Open directions from the actual Outaouais starting point rather than treating every Gatineau or Hull trip as the same route." },
      { heading: "Prepare The Menu Before Crossing", body: "Keeping one category open reduces extra browsing after arrival. Flower shoppers can choose a shelf; format-first shoppers can open the matching category directly." },
    ],
  },
  {
    slug: "smoke-accessory-guide",
    title: "Spirit Corner Smoke And Accessory Guide",
    seoTitle: "Spirit Corner Cigarette Vape And Accessory Guide | Ottawa",
    description: "Find Spirit Corner Cannabis menu paths for cigarettes, nicotine pouches, vapes, rolling items, and accessories.",
    eyebrow: "Smoke Shop Guide",
    intro: "Downtown shoppers looking for cigarettes, nicotine pouches, vapes, rolling items, or accessories should not have to move through every flower tier. Use the matching current category, then return to cannabis formats only if needed.",
    banner: "/banners/06_Cigarettes.webp",
    cards: [
      { title: "Cigarettes", href: "/items/cigarettes", text: "Open the current cigarette and smoke-menu lane." },
      { title: "Vapes", href: "/items/vapes", text: "Use the current vape category." },
      { title: "Accessories", href: "/items/add-ons", text: "Check papers, lighters, and related add-ons separately." },
      { title: "Nicotine Pouches", href: "/nicotine-pouches-ottawa", text: "Open the dedicated Ottawa pouch guide." },
    ],
    sections: [
      { heading: "Separate Smoke-Shop And Flower Browsing", body: "A shopper looking for a pouch or rolling item does not need every cannabis tier in the same decision. These links keep the smoke-shop path short." },
      { heading: "Confirm From The Current Category", body: "Use the current category for the details displayed today. This guide organizes the route without making stock claims." },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];
export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
