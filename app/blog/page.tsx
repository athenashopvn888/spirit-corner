import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Spirit Corner Cannabis | Ottawa",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Spirit Corner Cannabis in Ottawa.",
  alternates: {
    canonical: "https://spiritcornercannabis.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
