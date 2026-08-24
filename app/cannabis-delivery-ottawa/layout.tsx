import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ottawa Cannabis Delivery Coming Soon",
  description: "Spirit Corner Cannabis delivery is coming soon. The store remains open 24 hours at 251 Dalhousie St in downtown Ottawa.",
  alternates: { canonical: "https://spiritcornercannabis.com/cannabis-delivery-ottawa" },
};

export default function CannabisDeliveryLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
