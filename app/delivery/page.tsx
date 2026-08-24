import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Cannabis Delivery Coming Soon in Ottawa",
  description: "Spirit Corner Cannabis delivery is coming soon. The store remains open 24 hours at 251 Dalhousie St in Ottawa.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
