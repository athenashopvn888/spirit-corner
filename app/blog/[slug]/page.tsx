import type { Metadata } from "next";
import { managerBlogConfig } from "../../lib/managerBlogConfig";
import { getPublishedManagerBlogPostBySlug } from "../../lib/managerBlogStorage";
import PostContent from "./PostContent";

async function getManagerPost(slug: string) {
  try {
    return await getPublishedManagerBlogPostBySlug(slug);
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const managerPost = await getManagerPost(slug);
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: managerPost?.seo_title || `${title} - Blog | Spirit Corner Cannabis`,
    description: managerPost?.meta_description || `Read about ${title.toLowerCase()} and other cannabis guides from Spirit Corner Cannabis in Ottawa.`,
    alternates: {
      canonical: `https://spiritcornercannabis.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const managerPost = await getManagerPost(slug);
  return (
    <PostContent
      managerPost={managerPost}
      slug={slug}
      storeCode={managerBlogConfig.storeCode}
      storeName={managerBlogConfig.storeName}
      ctaLine="251 Dalhousie St, Ottawa - Open 24 Hours - (613) 612-2107"
    />
  );
}
