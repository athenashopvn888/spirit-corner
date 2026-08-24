import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spirit Corner In-Store Flower Display",
  description: "Operational in-store flower menu display for Spirit Corner Cannabis.",
  robots: { index: false, follow: false },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
