import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snake Munchies Game | Spirit Corner Cannabis",
  robots: { index: false, follow: false },
};

export default function GameLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
