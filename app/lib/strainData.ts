interface StrainDetails {
  attributes: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
}

const TIER_LABELS: Record<string, string> = {
  EXOTIC: "Exotic",
  PREMIUM: "Premium",
  "AAA+": "AAA+",
  AA: "AA",
  BUDGET: "Budget",
};

export function getStrainData(
  name: string,
  type: "indica" | "sativa" | "hybrid",
  tier: string,
  thc: string
): StrainDetails {
  const typeLabel =
    type === "indica" ? "Indica" : type === "sativa" ? "Sativa" : "Hybrid";
  const tierLabel = TIER_LABELS[tier] || tier;
  const thcText = thc ? ` with ${thc} THC shown in the menu listing` : "";

  return {
    attributes: [
      { emoji: "🌿", label: typeLabel },
      { emoji: "🏷️", label: `${tierLabel} tier` },
    ],
    description: `${name} is listed as a ${tierLabel} tier ${typeLabel}${thcText} at Spirit Corner Cannabis, 251 Dalhousie St in Ottawa. Menu listings and prices can change, so call the store when a particular flower matters to your visit.`,
    metaDescription: `${name} is listed as a ${tierLabel} ${typeLabel}${
      thc ? ` with ${thc} THC` : ""
    } at Spirit Corner Cannabis in Ottawa. View listed sizes and prices or call before visiting.`,
  };
}
