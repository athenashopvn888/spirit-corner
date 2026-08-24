import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ottawa Cannabis Delivery Coming Soon | Spirit Corner Cannabis",
  description: "Spirit Corner Cannabis delivery is coming soon. The store remains open 24 hours at 251 Dalhousie St in downtown Ottawa.",
  alternates: { canonical: "https://spiritcornercannabis.com/cannabis-delivery-ottawa" },
  openGraph: {
    title: "Ottawa Cannabis Delivery Coming Soon | Spirit Corner Cannabis",
    description: "Spirit Corner Cannabis delivery information and 24-hour downtown Ottawa storefront details.",
    url: "https://spiritcornercannabis.com/cannabis-delivery-ottawa",
  },
};

export default function CannabisDeliveryLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
