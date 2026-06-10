import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Spirit Corner Cannabis | Ottawa",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Spirit Corner Cannabis.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
