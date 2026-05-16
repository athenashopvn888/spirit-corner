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

export const allFlowers: FlowerProduct[] = flowersJson as FlowerProduct[];
export const allItems: ItemProduct[] = itemsJson as ItemProduct[];

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
    const res = await fetch(`${APPS_SCRIPT_URL}?store=ALC01`, {
      next: { revalidate: 300 }, // Cache for 5 min during build
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: LiveStockResponse = await res.json();
    return {
      flowers: data.flowers || allFlowers,
      items: data.items || allItems,
      isLive: true,
      stockDate: data.stockDate || null,
    };
  } catch (err) {
    console.warn("[products] Live fetch failed, using static data:", err);
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }
}

/* ── Tier config ── */
export const TIER_CONFIG: Record<
  string,
  { name: string; slug: string; color: string; icon: string; tagline: string; banner: string }
> = {
  EXOTIC: {
    name: "Exotic",
    slug: "exotic",
    color: "#f59e0b",
    icon: "🔥",
    tagline: "Ultra-rare, top-shelf genetics · THC 35-39%",
    banner: "/banners/exotic_premium_cannabis_with_glowing_accents.webp",
  },
  PREMIUM: {
    name: "Premium",
    slug: "premium",
    color: "#a78bfa",
    icon: "💎",
    tagline: "Hand-picked connoisseur grade · THC 32-34%",
    banner: "/banners/premium_cannabis_with_glowing_accents.webp",
  },
  "AAA+": {
    name: "AAA+",
    slug: "aaa",
    color: "#22d3ee",
    icon: "⚡",
    tagline: "Heavy hitters, proven strains · THC 30-32%",
    banner: "/banners/electric_neon_cannabis_ad_banner.webp",
  },
  AA: {
    name: "AA",
    slug: "aa",
    color: "#34d399",
    icon: "🌿",
    tagline: "Quality daily drivers · THC 27-29%",
    banner: "/banners/neon_cannabis_product_showcase.webp",
  },
  BUDGET: {
    name: "Budget",
    slug: "budget",
    color: "#94a3b8",
    icon: "💰",
    tagline: "Shreds & value OZs · From $40/oz",
    banner: "/banners/premium_budget_cannabis_deal_showcase.webp",
  },
};

/* ── Item category config ── */
export const CATEGORY_CONFIG: Record<
  string,
  { name: string; slug: string; color: string; icon: string }
> = {
  EDIBLES: { name: "Edibles", slug: "edibles", color: "#f97316", icon: "🍬" },
  "VAPE PENS": { name: "Vape Pens", slug: "vapes", color: "#8b5cf6", icon: "💨" },
  "VAPE DISPOSABLE": { name: "Vape Disposables", slug: "vape-disposables", color: "#a78bfa", icon: "💨" },
  CONCENTRATES: { name: "Concentrates", slug: "concentrates", color: "#f59e0b", icon: "💎" },
  PREROLLS: { name: "Pre-Rolls", slug: "prerolls", color: "#22c55e", icon: "🚬" },
  "ADD ONS": { name: "Add Ons", slug: "add-ons", color: "#34d399", icon: "➕" },
  CIGARETTES: { name: "Cigarettes", slug: "cigarettes", color: "#94a3b8", icon: "🚬" },
  "MAGIC & OTHERS": { name: "Magic & Others", slug: "magic", color: "#ec4899", icon: "🍄" },
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
