"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { FlowerProduct, ItemProduct } from "@/app/lib/products";
import styles from "./MenuFinder.module.css";

type MenuFinderProps = {
  flowers: FlowerProduct[];
  items: ItemProduct[];
};

type MenuResult = {
  key: string;
  name: string;
  href: string;
  productType: string;
  category: string;
  tier: string;
  effect: string;
  thcNumber: number | null;
  thcLabel: string;
  priceMin: number | null;
  priceLabel: string;
  weights: string[];
  image: string;
  searchText: string;
};

const QUICK_CATEGORIES = [
  { code: "FL", label: "Flower", value: "Flower", helper: "Browse by tier, type, THC, and weight." },
  { code: "EX", label: "Exotic", value: "Exotic", helper: "High-THC top shelf flower." },
  { code: "PR", label: "Premium", value: "Premium", helper: "Connoisseur flower picks." },
  { code: "AA+", label: "AAA+", value: "AAA+", helper: "Strong flower options." },
  { code: "AA", label: "AA", value: "AA", helper: "Daily flower choices." },
  { code: "BG", label: "Budget", value: "Budget", helper: "Value flower options." },
  { code: "ED", label: "Edibles", value: "EDIBLES", helper: "Gummies, drinks, and more." },
  { code: "PRR", label: "Pre-Rolls", value: "PREROLLS", helper: "Ready-to-smoke picks." },
  { code: "VP", label: "Vapes", value: "VAPE", helper: "Vape carts and disposables." },
  { code: "CN", label: "Concentrates", value: "CONCENTRATES", helper: "Extracts, hash, and concentrates." },
  { code: "CG", label: "Cigarettes", value: "CIGARETTES", helper: "Native cigarette catalog." },
  { code: "AC", label: "Accessories", value: "ADD ONS", helper: "Add-ons and smoke accessories." },
];

const PRODUCT_TYPES = [
  "All products",
  "Flower",
  "Edibles",
  "Pre-Rolls",
  "Vapes",
  "Concentrates",
  "Cigarettes",
  "Accessories",
  "Magic",
];

const PRICE_RANGES = [
  { label: "Any price", min: null, max: null },
  { label: "Under $10", min: 0, max: 10 },
  { label: "$10-$25", min: 10, max: 25 },
  { label: "$25-$40", min: 25, max: 40 },
  { label: "$40-$60", min: 40, max: 60 },
  { label: "$60+", min: 60, max: null },
];

const THC_RANGES = [
  { label: "Any THC", min: null, max: null },
  { label: "No THC shown", min: null, max: null, noThc: true },
  { label: "Under 25%", min: 0, max: 25 },
  { label: "25%-30%", min: 25, max: 30 },
  { label: "30%-35%", min: 30, max: 35 },
  { label: "35%+", min: 35, max: null },
];

const WEIGHTS = ["Any weight", "3g", "5g", "14g", "28g", "Non-flower items"];

const EFFECTS = [
  "Any effect",
  "Indica",
  "Sativa",
  "Hybrid",
  "Fast-acting",
  "Long-lasting",
  "Convenient",
  "Smoke products",
  "Accessories",
];

function parseMoney(value: string) {
  const match = value.match(/\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function parseThc(value: string) {
  const match = value.match(/\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function flowerPrice(product: FlowerProduct) {
  const points = [
    product.price3g,
    product.price5g,
    product.price14g,
    product.price28g,
  ].filter(Boolean);
  if (!points.length) return { min: null, label: "Ask staff" };
  const prices = points.map((point) => point?.sale ?? point?.regular ?? 0).filter(Boolean);
  const min = Math.min(...prices);
  return { min, label: `From $${min}` };
}

function flowerWeights(product: FlowerProduct) {
  return [
    product.price3g ? "3g" : null,
    product.price5g ? "5g" : null,
    product.price14g ? "14g" : null,
    product.price28g ? "28g" : null,
  ].filter(Boolean) as string[];
}

function normalizeItemType(category: string) {
  const c = category.toUpperCase();
  if (c.includes("EDIBLE")) return "Edibles";
  if (c.includes("PREROLL")) return "Pre-Rolls";
  if (c.includes("VAPE")) return "Vapes";
  if (c.includes("CONCENTRATE")) return "Concentrates";
  if (c.includes("CIGARETTE")) return "Cigarettes";
  if (c.includes("ADD")) return "Accessories";
  if (c.includes("MAGIC")) return "Magic";
  return category
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function itemEffect(category: string) {
  const c = category.toUpperCase();
  if (c.includes("EDIBLE")) return "Long-lasting";
  if (c.includes("VAPE") || c.includes("CONCENTRATE")) return "Fast-acting";
  if (c.includes("CIGARETTE")) return "Smoke products";
  if (c.includes("ADD")) return "Accessories";
  return "Convenient";
}

function buildResults(flowers: FlowerProduct[], items: ItemProduct[]) {
  const flowerResults: MenuResult[] = flowers.map((product) => {
    const price = flowerPrice(product);
    const effect = product.type.charAt(0).toUpperCase() + product.type.slice(1);
    return {
      key: `flower-${product.sku}`,
      name: product.name,
      href: `/flower/${product.slug}`,
      productType: "Flower",
      category: product.tier,
      tier: product.tier,
      effect,
      thcNumber: parseThc(product.thc),
      thcLabel: product.thc || "THC varies",
      priceMin: price.min,
      priceLabel: price.label,
      weights: flowerWeights(product),
      image: product.image,
      searchText: `${product.name} ${product.tier} ${product.type} ${product.thc}`.toLowerCase(),
    };
  });

  const itemResults: MenuResult[] = items.map((product) => {
    const productType = normalizeItemType(product.category);
    const effect = itemEffect(product.category);
    return {
      key: `item-${product.sku}`,
      name: product.name,
      href: `/item/${product.slug}`,
      productType,
      category: product.category,
      tier: product.category,
      effect,
      thcNumber: parseThc(product.thc),
      thcLabel: product.thc || product.mg || "Details on menu",
      priceMin: parseMoney(product.price),
      priceLabel: product.price || "Ask staff",
      weights: ["Non-flower items"],
      image: product.image,
      searchText: `${product.name} ${product.category} ${product.type} ${product.thc} ${product.mg}`.toLowerCase(),
    };
  });

  return [...flowerResults, ...itemResults];
}

export default function MenuFinder({ flowers, items }: MenuFinderProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [productType, setProductType] = useState("All products");
  const [priceRange, setPriceRange] = useState("Any price");
  const [weight, setWeight] = useState("Any weight");
  const [thcRange, setThcRange] = useState("Any THC");
  const [effect, setEffect] = useState("Any effect");
  const [sort, setSort] = useState("Recommended");

  const allResults = useMemo(() => buildResults(flowers, items), [flowers, items]);

  const filtered = useMemo(() => {
    const selectedPrice = PRICE_RANGES.find((range) => range.label === priceRange) ?? PRICE_RANGES[0];
    const selectedThc = THC_RANGES.find((range) => range.label === thcRange) ?? THC_RANGES[0];
    const normalizedQuery = query.trim().toLowerCase();

    const results = allResults.filter((product) => {
      if (normalizedQuery && !product.searchText.includes(normalizedQuery)) return false;
      if (category !== "All") {
        const categoryMatch =
          product.category.toLowerCase().includes(category.toLowerCase()) ||
          product.tier.toLowerCase().includes(category.toLowerCase()) ||
          product.productType.toLowerCase().includes(category.toLowerCase());
        if (!categoryMatch) return false;
      }
      if (productType !== "All products" && product.productType !== productType) return false;
      if (weight !== "Any weight" && !product.weights.includes(weight)) return false;
      if (effect !== "Any effect" && product.effect !== effect) return false;
      if (selectedPrice.min !== null || selectedPrice.max !== null) {
        if (product.priceMin === null) return false;
        if (selectedPrice.min !== null && product.priceMin < selectedPrice.min) return false;
        if (selectedPrice.max !== null && product.priceMin > selectedPrice.max) return false;
      }
      if (selectedThc.noThc) {
        if (product.thcNumber !== null) return false;
      } else if (selectedThc.min !== null || selectedThc.max !== null) {
        if (product.thcNumber === null) return false;
        if (selectedThc.min !== null && product.thcNumber < selectedThc.min) return false;
        if (selectedThc.max !== null && product.thcNumber > selectedThc.max) return false;
      }
      return true;
    });

    return results.sort((a, b) => {
      if (sort === "Price low to high") return (a.priceMin ?? 9999) - (b.priceMin ?? 9999);
      if (sort === "THC high to low") return (b.thcNumber ?? -1) - (a.thcNumber ?? -1);
      if (sort === "A-Z") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [allResults, category, effect, priceRange, productType, query, sort, thcRange, weight]);

  function resetFilters() {
    setQuery("");
    setCategory("All");
    setProductType("All products");
    setPriceRange("Any price");
    setWeight("Any weight");
    setThcRange("Any THC");
    setEffect("Any effect");
    setSort("Recommended");
  }

  const visible = filtered.slice(0, 18);

  return (
    <div className={styles.finder} id="menu-finder">
      <div className={styles.header}>
        <span className={styles.kicker}>Menu finder</span>
        <h2>Find the right Spirit Corner menu section faster</h2>
        <p>
          Use quick category buttons, search, and filters to compare flower tiers,
          weights, THC ranges, product types, smoke products, and accessories before
          opening the full product page.
        </p>
      </div>

      <div className={styles.quickGrid} aria-label="Quick menu categories">
        {QUICK_CATEGORIES.map((item) => (
          <button
            key={item.value}
            type="button"
            className={`${styles.quickButton} ${category === item.value ? styles.quickButtonActive : ""}`}
            onClick={() => setCategory(category === item.value ? "All" : item.value)}
          >
            <span className={styles.quickCode}>{item.code}</span>
            <span>
              <strong>{item.label}</strong>
              <small>{item.helper}</small>
            </span>
          </button>
        ))}
      </div>

      <div className={styles.filterPanel}>
        <label className={styles.searchField}>
          <span>Search product, strain, brand, or keyword</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try indica, Canadian, vape, pre-roll, 28g..."
          />
        </label>

        <div className={styles.filterGrid}>
          <label>
            <span>Product type</span>
            <select value={productType} onChange={(event) => setProductType(event.target.value)}>
              {PRODUCT_TYPES.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Price range</span>
            <select value={priceRange} onChange={(event) => setPriceRange(event.target.value)}>
              {PRICE_RANGES.map((option) => (
                <option key={option.label}>{option.label}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Weight</span>
            <select value={weight} onChange={(event) => setWeight(event.target.value)}>
              {WEIGHTS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            <span>THC range</span>
            <select value={thcRange} onChange={(event) => setThcRange(event.target.value)}>
              {THC_RANGES.map((option) => (
                <option key={option.label}>{option.label}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Desired effect</span>
            <select value={effect} onChange={(event) => setEffect(event.target.value)}>
              {EFFECTS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Sort</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option>Recommended</option>
              <option>Price low to high</option>
              <option>THC high to low</option>
              <option>A-Z</option>
            </select>
          </label>
        </div>

        <div className={styles.filterSummary}>
          <span>
            Showing <strong>{visible.length}</strong> of <strong>{filtered.length}</strong> matches
          </span>
          <button type="button" onClick={resetFilters}>
            Reset filters
          </button>
        </div>
      </div>

      <div className={styles.resultGrid}>
        {visible.map((product) => (
          <Link href={product.href} className={styles.resultCard} key={product.key}>
            <div className={styles.resultImageWrap}>
              <img src={product.image} alt={`${product.name} menu preview`} loading="lazy" />
            </div>
            <div className={styles.resultBody}>
              <span className={styles.resultType}>{product.productType}</span>
              <h3>{product.name}</h3>
              <div className={styles.resultMeta}>
                <span>{product.category}</span>
                <span>{product.effect}</span>
                <span>{product.thcLabel}</span>
                <span>{product.priceLabel}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className={styles.emptyState}>
          <strong>No exact match yet.</strong>
          <span>Try a broader category, lower the filters, or search a different product keyword.</span>
        </div>
      )}
    </div>
  );
}
