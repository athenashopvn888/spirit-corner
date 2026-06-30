import { managerBlogConfig } from "./managerBlogConfig";

export interface ManagerBlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  metaDescription?: string;
  content: string;
  author: string;
  date?: string;
  published: boolean | string;
  store?: string;
  store_code?: string;
  source?: string;
  manager_owner?: string;
  created_at?: string;
  updated_at?: string;
}

export class ManagerBlogStorageError extends Error {
  status: number;

  constructor(message: string, status = 500) {
    super(message);
    this.status = status;
  }
}

interface StorageConfig {
  provider: "app-script";
  url: string;
  token?: string;
}

export function isManagerBlogStorageConfigured() {
  return Boolean(process.env.MANAGER_BLOG_STORAGE_PROVIDER && process.env.MANAGER_BLOG_STORAGE_URL);
}

function getStorageConfig(): StorageConfig {
  const provider = (process.env.MANAGER_BLOG_STORAGE_PROVIDER || "").toLowerCase();
  const url = process.env.MANAGER_BLOG_STORAGE_URL || "";

  if (!provider || !url) {
    throw new ManagerBlogStorageError(
      "Manager blog storage is not configured. Set MANAGER_BLOG_STORAGE_PROVIDER and MANAGER_BLOG_STORAGE_URL.",
      503
    );
  }

  if (provider !== "app-script") {
    throw new ManagerBlogStorageError(`Unsupported manager blog storage provider: ${provider}`, 503);
  }

  return { provider: "app-script", url, token: process.env.MANAGER_BLOG_STORAGE_TOKEN };
}

function storageHeaders(config: StorageConfig) {
  const headers: Record<string, string> = { "content-type": "application/json;charset=utf-8" };
  if (config.token) headers.authorization = `Bearer ${config.token}`;
  return headers;
}

function boolFromStorage(value: unknown) {
  if (typeof value === "boolean") return value;
  return String(value || "").toUpperCase() === "TRUE";
}

function isManagerOwnedPost(post: ManagerBlogPost) {
  const sameStore = !post.store && !post.store_code
    ? true
    : post.store === managerBlogConfig.storeCode || post.store_code === managerBlogConfig.storeCode;

  return Boolean(
    sameStore &&
      (post.source === managerBlogConfig.source ||
        post.manager_owner === managerBlogConfig.managerOwner ||
        post.author === managerBlogConfig.defaultAuthor)
  );
}

function normalizeStoredPost(post: Partial<ManagerBlogPost>): ManagerBlogPost {
  return {
    id: post.id,
    title: String(post.title || ""),
    slug: String(post.slug || ""),
    excerpt: post.excerpt ? String(post.excerpt) : undefined,
    metaDescription: post.metaDescription ? String(post.metaDescription) : undefined,
    content: String(post.content || ""),
    author: String(post.author || managerBlogConfig.defaultAuthor),
    date: post.date ? String(post.date) : undefined,
    published: boolFromStorage(post.published),
    store: post.store ? String(post.store) : undefined,
    store_code: post.store_code ? String(post.store_code) : undefined,
    source: post.source ? String(post.source) : undefined,
    manager_owner: post.manager_owner ? String(post.manager_owner) : undefined,
    created_at: post.created_at ? String(post.created_at) : undefined,
    updated_at: post.updated_at ? String(post.updated_at) : undefined,
  };
}

export function createSafeSlug(input: string) {
  const slug = input
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new ManagerBlogStorageError("Slug must contain only lowercase letters, numbers, and single hyphens.", 400);
  }

  if (slug.includes("..") || slug.includes("/") || slug.includes("\\")) {
    throw new ManagerBlogStorageError("Slug cannot contain path traversal characters.", 400);
  }

  return slug.slice(0, 120);
}

function sanitizeContent(input: string) {
  return input
    .replace(/\0/g, "")
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<\/?script[^>]*>/gi, "")
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/javascript:/gi, "")
    .slice(0, managerBlogConfig.maxContentLength);
}

function trimField(input: unknown, maxLength: number) {
  return String(input || "").trim().slice(0, maxLength);
}

function normalizeInput(input: Record<string, unknown>, existing?: ManagerBlogPost) {
  const title = trimField(input.title, managerBlogConfig.maxTitleLength);
  if (!title) throw new ManagerBlogStorageError("Title is required.", 400);

  const slugInput = trimField(input.slug, 140) || title;
  const slug = createSafeSlug(slugInput);
  const content = sanitizeContent(String(input.content || "").trim());
  if (!content) throw new ManagerBlogStorageError("Content is required.", 400);

  const now = new Date().toISOString();
  const excerpt = trimField(input.excerpt || input.metaDescription, managerBlogConfig.maxExcerptLength);

  return {
    action: existing?.id ? "update" : "create",
    id: existing?.id,
    title,
    slug,
    excerpt,
    metaDescription: excerpt,
    content,
    author: managerBlogConfig.defaultAuthor,
    published: Boolean(input.published),
    store: managerBlogConfig.storeCode,
    store_code: managerBlogConfig.storeCode,
    source: managerBlogConfig.source,
    manager_owner: managerBlogConfig.managerOwner,
    date: String(input.date || existing?.date || now),
    created_at: existing?.created_at || now,
    updated_at: now,
  };
}

export async function listManagerBlogPosts(): Promise<ManagerBlogPost[]> {
  const config = getStorageConfig();
  const url = new URL(config.url);
  url.searchParams.set("action", "blog");
  url.searchParams.set("store", managerBlogConfig.storeCode);
  url.searchParams.set("admin", "1");

  const response = await fetch(url.toString(), {
    cache: "no-store",
    headers: config.token ? { authorization: `Bearer ${config.token}` } : undefined,
  });

  if (!response.ok) {
    throw new ManagerBlogStorageError("Manager blog storage returned an error while loading posts.", 502);
  }

  const data = await response.json();
  const posts: ManagerBlogPost[] = Array.isArray(data.posts)
    ? data.posts.map((post: Partial<ManagerBlogPost>) => normalizeStoredPost(post))
    : [];
  return posts.filter((post: ManagerBlogPost) => isManagerOwnedPost(post));
}

async function findEditablePost(id: string): Promise<ManagerBlogPost | undefined> {
  const posts = await listManagerBlogPosts();
  return posts.find((post) => post.id === id);
}

export async function saveManagerBlogPost(input: Record<string, unknown>) {
  const config = getStorageConfig();
  const id = trimField(input.id, 120);
  const existing = id ? await findEditablePost(id) : undefined;

  if (id && !existing) {
    throw new ManagerBlogStorageError("This post is not available for manager editing.", 403);
  }

  const payload = normalizeInput(input, existing);
  const response = await fetch(config.url, {
    method: "POST",
    headers: storageHeaders(config),
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new ManagerBlogStorageError("Manager blog storage returned an error while saving.", 502);
  }

  return response.json().catch(() => ({ ok: true }));
}

export async function deleteManagerBlogPost(input: Record<string, unknown>) {
  const config = getStorageConfig();
  const id = trimField(input.id, 120);
  if (!id) throw new ManagerBlogStorageError("Post id is required.", 400);

  const existing = await findEditablePost(id);
  if (!existing) {
    throw new ManagerBlogStorageError("This post is not available for manager deletion.", 403);
  }

  const response = await fetch(config.url, {
    method: "POST",
    headers: storageHeaders(config),
    body: JSON.stringify({
      action: "delete",
      id,
      store: managerBlogConfig.storeCode,
      store_code: managerBlogConfig.storeCode,
      source: managerBlogConfig.source,
      manager_owner: managerBlogConfig.managerOwner,
      updated_at: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new ManagerBlogStorageError("Manager blog storage returned an error while deleting.", 502);
  }

  return response.json().catch(() => ({ ok: true }));
}