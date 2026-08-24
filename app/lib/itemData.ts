export interface ItemDetails {
  attributes: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
  productNote: string;
}

function categoryLabel(category: string): string {
  return category
    .toLowerCase()
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export function getItemData(category: string, name: string): ItemDetails {
  const label = categoryLabel(category);

  return {
    attributes: [{ emoji: "🏷️", label }],
    description: `${name} is listed in the ${label} selection at Spirit Corner Cannabis, 251 Dalhousie St in Ottawa. Menu listings and prices can change, so call the store when a particular item matters to your visit.`,
    metaDescription: `${name} is listed in the ${label} selection at Spirit Corner Cannabis in Ottawa. View the listed price or call before visiting. Open 24 hours.`,
    productNote:
      "Check the product packaging for its label information and directions. Call the store before visiting if you need to ask about this listing.",
  };
}
