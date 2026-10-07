export const CIGARETTE_OFFER_CYCLE_MS = 30_000;
export const CIGARETTE_OFFER_VISIBLE_MS = 5_000;

export type Tv2DaytimePromo = {
  src: string;
  fallbackSrc?: string;
  alt: string;
};

export const CIGARETTE_PROMOS = [
  {
    src: "/banners/luxury_mix_match_600_web.webp",
    alt: "Mix and Match 2 Packs for $5 and $25 Carton Offer",
  },
  {
    src: "/banners/marlboro_belmont_600x600.webp",
    alt: "Marlboro and Belmont $10 Pack Offer",
  },
] as const;

export function isCigaretteOfferVisible(elapsedMs: number): boolean {
  if (!Number.isFinite(elapsedMs) || elapsedMs < 0) return false;
  return elapsedMs % CIGARETTE_OFFER_CYCLE_MS < CIGARETTE_OFFER_VISIBLE_MS;
}

export function getCigaretteOfferPromo(elapsedMs: number) {
  if (!isCigaretteOfferVisible(elapsedMs)) return undefined;
  const cycle = Math.floor(elapsedMs / CIGARETTE_OFFER_CYCLE_MS);
  return CIGARETTE_PROMOS[cycle % CIGARETTE_PROMOS.length];
}
