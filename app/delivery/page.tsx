import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Spirit Corner Cannabis | Ottawa",
  description: "Get notified when Spirit Corner Cannabis launches same-day weed delivery across Ottawa and surrounding areas.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
