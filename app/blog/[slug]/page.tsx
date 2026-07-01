import type { Metadata } from "next";
import { managerBlogConfig } from "../../lib/managerBlogConfig";
import { getManagerBlogSession } from "../../lib/managerBlogAuth";
import { getPreviewManagerBlogPostBySlug, getPublishedManagerBlogPostBySlug } from "../../lib/managerBlogStorage";
import PostContent from "./PostContent";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ manager_preview?: string | string[]; preview?: string | string[] }>;
};

function hasManagerPreviewFlag(searchParams?: { manager_preview?: string | string[]; preview?: string | string[] }) {
  const value = searchParams?.manager_preview || searchParams?.preview;
  const flag = Array.isArray(value) ? value[0] : value;
  return flag === "1" || flag === "true" || flag === "manager";
}

async function getManagerPost(slug: string, managerPreview: boolean) {
  try {
    if (managerPreview) {
      const session = await getManagerBlogSession();
      const post = session ? await getPreviewManagerBlogPostBySlug(slug, session) : null;
      return { post, isManagerPreview: Boolean(post) };
    }

    const publishedPost = await getPublishedManagerBlogPostBySlug(slug);
    if (publishedPost) return { post: publishedPost, isManagerPreview: false };

    const session = await getManagerBlogSession();
    const previewPost = session ? await getPreviewManagerBlogPostBySlug(slug, session) : null;
    return { post: previewPost, isManagerPreview: Boolean(previewPost) };
  } catch {
    return { post: null, isManagerPreview: false };
  }
}

export async function generateMetadata({ params, searchParams }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const managerPreview = hasManagerPreviewFlag(resolvedSearchParams);
  const result = await getManagerPost(slug, managerPreview);
  const managerPost = result.post;
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
    robots: result.isManagerPreview || managerPreview ? { index: false, follow: false } : undefined,
  };
}

export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const managerPreview = hasManagerPreviewFlag(resolvedSearchParams);
  const result = await getManagerPost(slug, managerPreview);
  return (
    <PostContent
      managerPost={result.post}
      slug={slug}
      storeCode={managerBlogConfig.storeCode}
      storeName={managerBlogConfig.storeName}
      ctaLine="251 Dalhousie St, Ottawa - Open 24 Hours - (613) 612-2107"
      isManagerPreview={result.isManagerPreview}
    />
  );
}
