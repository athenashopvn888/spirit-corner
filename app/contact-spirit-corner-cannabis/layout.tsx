import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact, Hours, and Directions",
  description: "Call or visit Spirit Corner Cannabis at 251 Dalhousie St in downtown Ottawa. Open 24 hours.",
  alternates: { canonical: "https://spiritcornercannabis.com/contact-spirit-corner-cannabis" },
};

export default function ContactSpiritCornerLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
