/**
 * Per-gram label for the /tv tier badge.
 *
 * Uses the smallest listed weight on each flower. EXOTIC, PREMIUM, and AAA+
 * sell the price5g field as 6g (same rule as the board). The badge shows the
 * most common real rate in that tier. It never substitutes a catalog default.
 */

const SIX_GRAM_TIERS = new Set(["EXOTIC", "PREMIUM", "AAA+"]);
const PRICE_FIELDS = ["price3g", "price5g", "price14g", "price28g"];

function gramsForField(tier, field) {
  if (field === "price3g") return 3;
  if (field === "price5g") return SIX_GRAM_TIERS.has(String(tier || "").toUpperCase()) ? 6 : 5;
  if (field === "price14g") return 14;
  if (field === "price28g") return 28;
  return 0;
}

function amountOf(pricePoint) {
  if (!pricePoint || typeof pricePoint !== "object") return null;
  const regular = pricePoint.regular;
  if (typeof regular === "number" && Number.isFinite(regular) && regular > 0) return regular;
  const sale = pricePoint.sale;
  if (typeof sale === "number" && Number.isFinite(sale) && sale > 0) return sale;
  return null;
}

function flowerPerGram(tier, flower) {
  if (!flower || typeof flower !== "object") return null;
  for (const field of PRICE_FIELDS) {
    const grams = gramsForField(tier, field);
    const amount = amountOf(flower[field]);
    if (amount == null || grams <= 0) continue;
    return amount / grams;
  }
  return null;
}

function formatPerGram(perGram) {
  const rounded = Math.round(perGram * 100) / 100;
  if (!Number.isFinite(rounded) || rounded <= 0) return null;
  const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
  return `$${text}/g`;
}

function tierPerGramLabel(tier, flowers) {
  if (!Array.isArray(flowers) || flowers.length === 0) return null;
  const counts = new Map();
  for (const flower of flowers) {
    const per = flowerPerGram(tier, flower);
    if (per == null) continue;
    const key = (Math.round(per * 100) / 100).toFixed(2);
    const perValue = Number(key);
    if (!Number.isFinite(perValue) || perValue <= 0) continue;
    counts.set(key, (counts.get(key) || 0) + 1);
  }

  let bestKey = null;
  let bestCount = 0;
  for (const [key, count] of counts) {
    if (count > bestCount) {
      bestKey = key;
      bestCount = count;
    }
  }
  if (!bestKey) return null;
  return formatPerGram(Number(bestKey));
}

module.exports = {
  gramsForField,
  flowerPerGram,
  tierPerGramLabel,
};
