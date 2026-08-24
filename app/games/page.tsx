import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games Ottawa | Spirit Corner Cannabis",
  description: "Play cannabis-themed browser games from Spirit Corner Cannabis, including Flappy Bud, Snake Munchies, Memory Match, and 2048 Strains.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/games",
  },
  openGraph: {
    title: "Cannabis Arcade Games Ottawa | Spirit Corner Cannabis",
    description: "Play cannabis-themed browser games from Spirit Corner Cannabis.",
    url: "https://spiritcornercannabis.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
