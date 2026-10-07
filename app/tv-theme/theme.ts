import type { CSSProperties } from "react";

export type TvTheme = {
  headerImage: string;
  backgroundImage: string;
  cornerLeft?: string;
  cornerRight?: string;
  primary: string;
  accent: string;
  glow: string;
  cardBorder: string;
  headerText: string;
  sloganLeft: string;
  sloganRight: string;
  footerLeft: string;
  footerRight: string;
};

export const TV_THEMES: Readonly<Record<string, TvTheme>> = {
  SCC01: {
    headerImage: "/tv-theme/scc01/header.webp",
    backgroundImage: "/tv-theme/scc01/background.webp",
    cornerLeft: "/tv-theme/scc01/corner-left.png",
    cornerRight: "/tv-theme/scc01/corner-right.png",
    primary: "#11150C",
    accent: "#A8D52A",
    glow: "rgba(168,213,42,.44)",
    cardBorder: "rgba(222,255,155,.92)",
    headerText: "#FFFFFF",
    sloganLeft: "CORNER OF QUALITY",
    sloganRight: "SPIRIT OF THE CITY",
    footerLeft: "SPIRIT CORNER CANNABIS",
    footerRight: "QUALITY AT EVERY CORNER",
  },
};

export function getTvTheme(storeCode?: string | null): TvTheme | undefined {
  return storeCode ? TV_THEMES[storeCode] : undefined;
}

type TvThemeVariables = CSSProperties & {
  "--tv-theme-header-image": string;
  "--tv-theme-background-image": string;
  "--tv-theme-primary": string;
  "--tv-theme-accent": string;
  "--tv-theme-glow": string;
  "--tv-theme-card-border": string;
  "--tv-theme-header-text": string;
};

export function getTvThemeVariables(theme: TvTheme): TvThemeVariables {
  return {
    "--tv-theme-header-image": `url("${theme.headerImage}")`,
    "--tv-theme-background-image": `url("${theme.backgroundImage}")`,
    "--tv-theme-primary": theme.primary,
    "--tv-theme-accent": theme.accent,
    "--tv-theme-glow": theme.glow,
    "--tv-theme-card-border": theme.cardBorder,
    "--tv-theme-header-text": theme.headerText,
  };
}