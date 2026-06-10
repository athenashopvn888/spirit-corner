import type { Metadata } from "next";
import PostContent from "./PostContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${title} — Blog | Spirit Corner Cannabis`,
    description: `Read about ${title.toLowerCase()} and other cannabis guides from Spirit Corner Cannabis in Ottawa.`,
    alternates: {
      canonical: `https://spiritcornercannabis.com/blog/${slug}`,
    },
  };
}

export default function BlogPostPage() {
  return <PostContent />;
}
