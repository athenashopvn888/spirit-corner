import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2048 Strains Game | Spirit Corner Cannabis",
  robots: { index: false, follow: false },
};

export default function GameLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
