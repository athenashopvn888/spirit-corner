/* -- Product & Item Types -- */
export interface FlowerProduct {
  sku: string;
  name: string;
  slug: string;
  tier: string;
  type: "indica" | "sativa" | "hybrid";
  isHot: boolean;
  isSale: boolean;
  thc: string;
  price3g: PricePoint | null;
  price5g: PricePoint | null;
  price14g: PricePoint | null;
  price28g: PricePoint | null;
  image: string;
}

export interface PricePoint {
  regular: number;
  sale: number | null;
}

export interface ItemProduct {
  sku: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  thc: string;
  mg: string;
  price: string;
  image: string;
  promoImage: string | null;
}

/* ── Data imports (static fallback) ── */
import flowersJson from "./flowers.json";
import itemsJson from "./items.json";

const FLOWER_DISPLAY_NAME_OVERRIDES: Record<string, string> = {
  "mike-tyson-ko-super-exotics": "MIKE TYSON KO SUPER EXOTICS",
};

const ITEM_SLUG_ALIASES: Record<string, string> = {
  "grabba-redrose-redherring": "grabba",
  "grabba-shaker-redrose-red-herring-x2-available":
    "grabba-shaker-redrose-red-herring",
};

function normalizeFlowerDisplayName(flower: FlowerProduct): FlowerProduct {
  const name = FLOWER_DISPLAY_NAME_OVERRIDES[flower.slug];
  return name ? { ...flower, name } : flower;
}

function cleanDisplayName(name: string): string {
  return name.replace(/\*/g, "").replace(/\s+/g, " ").trim();
}

function normalizeItemDisplayName(item: ItemProduct): ItemProduct {
  const cleanedName = cleanDisplayName(item.name).replace(
    /\s+x?2\s+available\s*$/i,
    ""
  );
  const cleanedSlug = ITEM_SLUG_ALIASES[item.slug] || item.slug;
  return cleanedName === item.name && cleanedSlug === item.slug
    ? item
    : { ...item, name: cleanedName, slug: cleanedSlug };
}

function dedupeBySlug<T extends { slug: string }>(products: T[]): T[] {
  const seen = new Set<string>();
  return products.filter((product) => {
    const slug = product.slug.trim().toLowerCase();
    if (!slug || seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
}

export const allFlowers: FlowerProduct[] = dedupeBySlug(
  (flowersJson as FlowerProduct[]).map(normalizeFlowerDisplayName)
);
export const allItems: ItemProduct[] = dedupeBySlug(
  (itemsJson as ItemProduct[]).map(normalizeItemDisplayName)
);

/* ── Live stock fetch from Apps Script ── */
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || "";

interface LiveStockResponse {
  flowers: FlowerProduct[];
  items: ItemProduct[];
  storeCode?: string;
  stockDate?: string;
}

/**
 * Fetch live stock-filtered products from Apps Script endpoint.
 * Used at build time (getStaticProps / generateStaticParams).
 * Falls back to static JSON if endpoint not configured.
 */
export async function fetchLiveProducts(): Promise<{
  flowers: FlowerProduct[];
  items: ItemProduct[];
  isLive: boolean;
  stockDate: string | null;
}> {
  if (!APPS_SCRIPT_URL) {
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }

  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?store=SCC01`, {
      next: { revalidate: 300 }, // Cache for 5 min during build
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: LiveStockResponse = await res.json();
    return {
      flowers: dedupeBySlug(
        (data.flowers || allFlowers).map(normalizeFlowerDisplayName)
      ),
      items: dedupeBySlug(
        (data.items || allItems).map(normalizeItemDisplayName)
      ),
      isLive: true,
      stockDate: data.stockDate || null,
    };
  } catch (err) {
    console.warn("[products] Live fetch failed, using static data:", err);
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }
}

export const TIER_CONFIG: Record<
  string,
  {
    name: string; slug: string; color: string; icon: string; tagline: string; banner: string;
    unitPrice: number; /* $/g */
    deal3g: { label: string; total: string; price: number } | null; /* 3g bundle pricing */
    deal6g: { label: string; total: string; price: number } | null; /* 6g bundle pricing (top 3 only) */
  }
> = {
  EXOTIC: {
    name: "Exotic",
    slug: "exotic",
    color: "#f59e0b",
    icon: "\uD83D\uDD25",
    tagline: "Exotic flower listings with supplied type, THC, size, and price details",
    banner: "/banners/exotic_premium_cannabis_with_glowing_accents.webp",
    unitPrice: 20,
    deal3g: { label: "3g bundle", total: "3G", price: 40 },
    deal6g: { label: "6g bundle", total: "6G", price: 60 },
  },
  PREMIUM: {
    name: "Premium",
    slug: "premium",
    color: "#a78bfa",
    icon: "\uD83D\uDC8E",
    tagline: "Premium flower listings with supplied type, THC, size, and price details",
    banner: "/banners/premium_cannabis_with_glowing_accents.webp",
    unitPrice: 15,
    deal3g: { label: "3g bundle", total: "3G", price: 30 },
    deal6g: { label: "6g bundle", total: "6G", price: 45 },
  },
  "AAA+": {
    name: "AAA+",
    slug: "aaa",
    color: "#22d3ee",
    icon: "\u26A1",
    tagline: "AAA+ flower listings with supplied type, THC, size, and price details",
    banner: "/banners/electric_neon_cannabis_ad_banner.webp",
    unitPrice: 10,
    deal3g: { label: "3g bundle", total: "3G", price: 20 },
    deal6g: { label: "6g bundle", total: "6G", price: 30 },
  },
  AA: {
    name: "AA",
    slug: "aa",
    color: "#34d399",
    icon: "\u2726",
    tagline: "AA flower listings with supplied type, THC, size, and price details",
    banner: "/banners/neon_cannabis_product_showcase.webp",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
  },
  BUDGET: {
    name: "Budget",
    slug: "budget",
    color: "#94a3b8",
    icon: "\uD83D\uDCB0",
    tagline: "Budget flower listings with supplied type, THC, size, and price details",
    banner: "/banners/premium_budget_cannabis_deal_showcase.webp",
    unitPrice: 3,
    deal3g: { label: "$10 / 3g Special", total: "3G", price: 10 },
    deal6g: null,
  },
};

/* ── Item category config ── */
export interface CategoryInfo {
  name: string; slug: string; color: string; icon: string;
  seoTitle: string; seoIntro: string; seoDescription: string;
  faqs: { q: string; a: string }[];
  banner?: string;
}

export const CATEGORY_CONFIG: Record<string, CategoryInfo> = {
  EDIBLES: {
    name: "Edibles", slug: "edibles", color: "#f97316", icon: "🍬",
    seoTitle: "Cannabis Edibles Ottawa — Gummies, Chocolates & Drinks | Spirit Corner Cannabis",
    seoIntro: "Compare listed cannabis edible names, package details, and prices at Spirit Corner Cannabis on Dalhousie St in Ottawa.",
    seoDescription: "Adults can compare edible listings using the product name, supplied THC or MG details, package information, and listed price. Spirit Corner Cannabis is at 251 Dalhousie St and is open 24 hours. Listings and prices can change, so call ahead when a particular edible matters to your visit.",
    faqs: [
      { q: "What details can I compare for edibles?", a: "Listings show the product name, supplied THC or MG details, package information, and listed price when provided." },
      { q: "Can edible listings change?", a: "Yes. Call (343) 308-8998 before travelling when a particular edible matters to your visit." },
    ],
  },
  "VAPE PENS": {
    name: "Vape Pens", slug: "vapes", color: "#8b5cf6", icon: "💨",
    seoTitle: "Vape Pens Ottawa — THC & Nicotine Cartridges | Spirit Corner Cannabis",
    seoIntro: "Compare listed vape pen names, supplied product details, and prices at Spirit Corner Cannabis in downtown Ottawa.",
    seoDescription: "Adults can compare vape pen listings by product name, supplied THC or MG details, package information, and listed price. Visit 251 Dalhousie St near ByWard Market, open 24 hours, or call ahead about a particular listing.",
    faqs: [
      { q: "What details can I compare for vape pens?", a: "Listings show the product name, supplied product details, and listed price when provided." },
      { q: "Can I ask about a particular vape product?", a: "Yes. Call (343) 308-8998 before visiting when a particular listing matters." },
    ],
  },
  "VAPE DISPOSABLE": {
    name: "Vape Disposables", slug: "vape-disposables", color: "#a78bfa", icon: "💨",
    seoTitle: "Disposable Vapes Ottawa — THC Disposable Pens | Spirit Corner Cannabis",
    seoIntro: "Compare listed disposable vape names, supplied product details, and prices at Spirit Corner Cannabis in Ottawa.",
    seoDescription: "Adults can compare disposable vape listings by product name, supplied THC or MG details, package information, and listed price. Visit 251 Dalhousie St, open 24 hours, or call ahead about a particular listing.",
    faqs: [
      { q: "What disposable vape details are shown?", a: "Listings show the product name, supplied product details, and listed price when provided." },
      { q: "Can disposable vape listings change?", a: "Yes. Call (343) 308-8998 before travelling when a particular product matters." },
    ],
  },
  CONCENTRATES: {
    name: "Concentrates", slug: "concentrates", color: "#f59e0b", icon: "💎",
    seoTitle: "Cannabis Concentrates Ottawa — Shatter, Wax, Hash & Live Resin | Spirit Corner Cannabis",
    seoIntro: "Compare listed cannabis concentrate names, supplied product details, and prices at Spirit Corner Cannabis in Ottawa.",
    seoDescription: "Adults can compare concentrate listings by product name, supplied THC or MG details, package information, and listed price. Visit 251 Dalhousie St near ByWard Market, open 24 hours, or call ahead about a particular listing.",
    faqs: [
      { q: "What concentrate details can I compare?", a: "Listings show the product name, supplied product details, and listed price when provided." },
      { q: "Can concentrate listings change?", a: "Yes. Call (343) 308-8998 before travelling when a particular concentrate matters." },
    ],
  },
  PREROLLS: {
    name: "Pre-Rolls", slug: "prerolls", color: "#22c55e", icon: "🚬",
    seoTitle: "Pre-Rolls Ottawa — Ready-to-Smoke Cannabis Joints | Spirit Corner Cannabis",
    seoIntro: "Compare listed pre-roll names, supplied package details, and prices at Spirit Corner Cannabis in Ottawa.",
    seoDescription: "Adults can compare pre-roll listings by product name, supplied THC or MG details, package information, and listed price. Spirit Corner Cannabis is at 251 Dalhousie St and is open 24 hours. Call ahead about a particular listing.",
    faqs: [
      { q: "What pre-roll details can I compare?", a: "Listings show the product name, supplied product details, and listed price when provided." },
      { q: "Can pre-roll listings change?", a: "Yes. Call (343) 308-8998 before travelling when a particular pre-roll matters." },
    ],
  },
  "ADD ONS": {
    name: "Accessories", slug: "add-ons", color: "#34d399", icon: "➕",
    seoTitle: "Cannabis Accessories Ottawa — Grinders, Papers, Lighters & More | Spirit Corner Cannabis",
    seoIntro: "Compare listed smoke accessory names and prices at Spirit Corner Cannabis in downtown Ottawa.",
    seoDescription: "Adults can compare accessory listings by product name, supplied package details, and listed price. Visit 251 Dalhousie St near ByWard Market, open 24 hours, or call ahead when a particular accessory matters.",
    faqs: [
      { q: "What accessory details can I compare?", a: "Listings show the product name, supplied package details, and listed price when provided." },
    ],
  },
  "MAGIC & OTHERS": {
    name: "Magic Stuff", slug: "magic", color: "#64748b", icon: "*",
    seoTitle: "Magic Stuff - Specialty Items | Spirit Corner Cannabis",
    seoIntro: "Compare listed specialty item names, supplied product details, and prices at Spirit Corner Cannabis in Ottawa.",
    seoDescription: "Adults can compare specialty listings by product name, supplied package details, and listed price. Listings can change, so call (343) 308-8998 when a particular specialty item matters to your visit.",
    faqs: [
      { q: "What specialty item details can I compare?", a: "Listings show the product name, supplied product details, and listed price when provided." },
      { q: "Can specialty listings change?", a: "Yes. Call (343) 308-8998 before travelling when a particular specialty item matters." },
    ],
  },
  CIGARETTES: {
    name: "Cigarettes", slug: "cigarettes", color: "#78716c", icon: "🏷️",
    seoTitle: "Native Cigarettes Ottawa — Discount Tobacco | Spirit Corner Cannabis",
    seoIntro: "Compare listed Native cigarette and smoke-product names and prices at Spirit Corner Cannabis on Dalhousie St in Ottawa.",
    seoDescription: "Adults can compare cigarette and smoke-product listings by name, supplied package details, and listed price. Spirit Corner Cannabis is at 251 Dalhousie St near ByWard Market and is open 24 hours. Call ahead about a particular listing.",
    faqs: [
      { q: "What cigarette details can I compare?", a: "Listings show the product name, supplied package details, and listed price when provided." },
      { q: "Can cigarette listings change?", a: "Yes. Call (343) 308-8998 before travelling when a particular cigarette or smoke product matters." },
    ],
  },
};

/* ── Helper functions ── */
export function getFlowersByTier(tier: string): FlowerProduct[] {
  return allFlowers.filter(
    (f) => f.tier.toUpperCase() === tier.toUpperCase()
  );
}

export function getFlowerBySlug(slug: string): FlowerProduct | undefined {
  return allFlowers.find((f) => f.slug === slug);
}

export function getItemsByCategory(category: string): ItemProduct[] {
  return allItems.filter(
    (i) => i.category.toUpperCase() === category.toUpperCase()
  );
}

function normalizeProductText(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function isGrabbaItem(item: ItemProduct): boolean {
  return normalizeProductText(`${item.slug} ${item.name}`)
    .split(" ")
    .includes("grabba");
}

export function isGrabbaShakerItem(item: ItemProduct): boolean {
  const normalized = normalizeProductText(`${item.slug} ${item.name}`);
  return normalized.includes("grabba") && normalized.includes("shaker");
}

export function getCategoryForItem(
  item: Pick<ItemProduct, "category">
): { key: string; config: (typeof CATEGORY_CONFIG)[string] } | undefined {
  const normalizedCategory = normalizeProductText(item.category);
  const entry = Object.entries(CATEGORY_CONFIG).find(([key, config]) => {
    return (
      normalizeProductText(key) === normalizedCategory ||
      normalizeProductText(config.name) === normalizedCategory ||
      normalizeProductText(config.slug) === normalizedCategory
    );
  });
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getTierFromSlug(
  slug: string
): { key: string; config: (typeof TIER_CONFIG)[string] } | undefined {
  const entry = Object.entries(TIER_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getCategoryFromSlug(
  slug: string
): { key: string; config: (typeof CATEGORY_CONFIG)[string] } | undefined {
  const entry = Object.entries(CATEGORY_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getLowestPrice(flower: FlowerProduct): number | null {
  const prices = [flower.price3g, flower.price5g, flower.price14g, flower.price28g]
    .filter((p): p is PricePoint => p !== null)
    .map((p) => p.sale ?? p.regular);
  return prices.length ? Math.min(...prices) : null;
}

export function formatPrice(p: PricePoint | null): string {
  if (!p) return "—";
  if (p.sale !== null) return `$${p.sale}`;
  return `$${p.regular}`;
}
