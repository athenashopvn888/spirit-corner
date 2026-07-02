import type { Metadata } from "next";
import { managerBlogConfig } from "../lib/managerBlogConfig";
import { listPublishedManagerBlogPosts } from "../lib/managerBlogStorage";
import BlogContent from "./BlogContent";
import { STORE_BLOG_CONFIG } from "./staticPosts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `${STORE_BLOG_CONFIG.storeName} Blog | Adult 19+ Store Guides`,
  description: `Read adult 19+ store guides and local visit-planning notes from ${STORE_BLOG_CONFIG.storeName}.`,
  alternates: {
    canonical: `https://${STORE_BLOG_CONFIG.domain}/blog`,
  },
};

export default async function BlogPage() {
  const managerPosts = await listPublishedManagerBlogPosts();
  return <BlogContent managerPosts={managerPosts} storeCode={managerBlogConfig.storeCode} storeName={managerBlogConfig.storeName} />;
}
