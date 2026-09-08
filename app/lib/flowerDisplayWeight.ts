const SIX_GRAM_TIERS = new Set(["EXOTIC", "PREMIUM", "AAA+"]);

export function getPrice5gDisplay(tierKey: string) {
  const grams = SIX_GRAM_TIERS.has(tierKey.toUpperCase()) ? 6 : 5;
  return { label: `${grams}g`, grams };
}

export function formatPerGram(effectivePrice: number, grams: number) {
  return effectivePrice > 0 ? (effectivePrice / grams).toFixed(2) : "—";
}
