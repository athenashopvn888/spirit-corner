import type { ManagerBlogSession } from "./managerBlogAuth";
import { managerBlogConfig } from "./managerBlogConfig";

export type ManagerBlogStatus = "draft" | "scheduled" | "published" | "archived";

export interface ManagerBlogPost {
  id?: string;
  title: string;
  slug: string;
  seo_title?: string;
  meta_description?: string;
  h1?: string;
  excerpt?: string;
  metaDescription?: string;
  content: string;
  faq?: string;
  featured_image_url?: string;
  target_keyword?: string;
  supporting_keywords?: string;
  expected_result?: string;
  manager_notes?: string;
  baseline_query?: string;
  baseline_note?: string;
  baseline_screenshot_url?: string;
  result_7_day_note?: string;
  result_14_day_note?: string;
  result_28_day_note?: string;
  gsc_clicks?: string;
  gsc_impressions?: string;
  gsc_ctr?: string;
  gsc_position?: string;
  internal_links_used?: string;
  internal_link_notes?: string;
  author: string;
  date?: string;
  status?: ManagerBlogStatus | string;
  scheduled_at?: string;
  published: boolean | string;
  archived?: boolean | string;
  store?: string;
  store_code?: string;
  source?: string;
  manager_owner?: string;
  experiment_tag?: string;
  created_at?: string;
  updated_at?: string;
  published_at?: string;
  can_edit?: boolean;
  can_delete?: boolean;
  preview_url?: string;
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

type StorageAction = "create" | "update" | "publish" | "unpublish" | "archive" | "delete" | "duplicate";

const managerBlogStatuses: ManagerBlogStatus[] = ["draft", "scheduled", "published", "archived"];

const textFieldLimits: Record<string, number> = {
  title: managerBlogConfig.maxTitleLength,
  slug: 140,
  seo_title: managerBlogConfig.maxTitleLength,
  meta_description: managerBlogConfig.maxExcerptLength,
  h1: managerBlogConfig.maxTitleLength,
  excerpt: managerBlogConfig.maxExcerptLength,
  faq: 12000,
  featured_image_url: 500,
  target_keyword: 160,
  supporting_keywords: 500,
  expected_result: 1000,
  manager_notes: 2000,
  baseline_query: 240,
  baseline_note: 2000,
  baseline_screenshot_url: 500,
  result_7_day_note: 2000,
  result_14_day_note: 2000,
  result_28_day_note: 2000,
  gsc_clicks: 40,
  gsc_impressions: 40,
  gsc_ctr: 40,
  gsc_position: 40,
  internal_links_used: 2000,
  internal_link_notes: 2000,
  scheduled_at: 80,
  status: 20,
};

export function isManagerBlogStorageConfigured() {
  return Boolean(process.env.MANAGER_BLOG_STORAGE_PROVIDER && process.env.MANAGER_BLOG_STORAGE_URL);
}

export function getManagerBlogStorageProviderName() {
  const provider = (process.env.MANAGER_BLOG_STORAGE_PROVIDER || "").toLowerCase().trim();
  return provider || "not configured";
}

function getStorageConfig(): StorageConfig {
  const provider = (process.env.MANAGER_BLOG_STORAGE_PROVIDER || "").toLowerCase().trim();
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

function storageHeaders() {
  return { "content-type": "application/json;charset=utf-8" };
}

function boolFromStorage(value: unknown) {
  if (typeof value === "boolean") return value;
  const normalized = String(value || "").trim().toLowerCase();
  return ["true", "1", "yes", "published"].includes(normalized);
}

function normalizeStatusValue(value: unknown): ManagerBlogStatus | "" {
  const normalized = String(value || "").trim().toLowerCase();
  return managerBlogStatuses.includes(normalized as ManagerBlogStatus) ? (normalized as ManagerBlogStatus) : "";
}

function parsedTime(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? null : date;
}

function isScheduledDue(value?: string) {
  const date = parsedTime(value);
  return Boolean(date && date.getTime() <= Date.now());
}

function postStatusFromValues(post: Partial<ManagerBlogPost>): ManagerBlogStatus {
  if (boolFromStorage(post.archived)) return "archived";

  const storedStatus = normalizeStatusValue(post.status);
  if (storedStatus === "archived") return "archived";
  if (storedStatus === "scheduled") return isScheduledDue(post.scheduled_at) ? "published" : "scheduled";
  if (storedStatus === "published") return "published";
  if (storedStatus === "draft") return "draft";

  if (boolFromStorage(post.published)) return "published";
  return "draft";
}

function valueFromPost(post: Partial<ManagerBlogPost> & Record<string, unknown>, key: keyof ManagerBlogPost) {
  return post[key] ?? post[String(key).replace(/_([a-z])/g, (_, char: string) => char.toUpperCase())];
}

function isSameStore(post: Partial<ManagerBlogPost>) {
  return post.store === managerBlogConfig.storeCode || post.store_code === managerBlogConfig.storeCode;
}

function isManagerPost(post: Partial<ManagerBlogPost>) {
  return Boolean(
    isSameStore(post) &&
      (post.source === managerBlogConfig.source ||
        post.experiment_tag === "manager-seo-experiment" ||
        post.manager_owner ||
        post.author === managerBlogConfig.defaultAuthor)
  );
}

function isPublicPost(post: Partial<ManagerBlogPost>) {
  return postStatusFromValues(post) === "published" && !boolFromStorage(post.archived);
}

function canEditPost(post: ManagerBlogPost, session: ManagerBlogSession) {
  if (!isManagerPost(post)) return false;
  if (session.role === "master_admin") return true;
  return post.manager_owner === session.manager_owner || post.manager_owner === session.username;
}

function cleanText(input: unknown, maxLength: number) {
  return String(input || "")
    .replace(/\0/g, "")
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<\/?script[^>]*>/gi, "")
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/javascript:/gi, "")
    .trim()
    .slice(0, maxLength);
}

function trimField(input: unknown, maxLength: number) {
  return String(input || "").trim().slice(0, maxLength);
}

function normalizeStoredPost(post: Partial<ManagerBlogPost> & Record<string, unknown>, session?: ManagerBlogSession): ManagerBlogPost {
  const metaDescription = trimField(valueFromPost(post, "meta_description") || post.metaDescription || post.excerpt, managerBlogConfig.maxExcerptLength);
  const effectiveStatus = postStatusFromValues(post);
  const scheduledAt = trimField(valueFromPost(post, "scheduled_at"), textFieldLimits.scheduled_at);
  const normalized: ManagerBlogPost = {
    id: post.id ? String(post.id) : undefined,
    title: trimField(post.title, managerBlogConfig.maxTitleLength),
    slug: trimField(post.slug, 140),
    seo_title: trimField(valueFromPost(post, "seo_title") || post.title, managerBlogConfig.maxTitleLength),
    meta_description: metaDescription,
    metaDescription,
    h1: trimField(post.h1 || post.title, managerBlogConfig.maxTitleLength),
    excerpt: trimField(post.excerpt || metaDescription, managerBlogConfig.maxExcerptLength),
    content: String(post.content || ""),
    faq: post.faq ? String(post.faq) : undefined,
    featured_image_url: trimField(valueFromPost(post, "featured_image_url"), textFieldLimits.featured_image_url),
    target_keyword: trimField(valueFromPost(post, "target_keyword"), textFieldLimits.target_keyword),
    supporting_keywords: trimField(valueFromPost(post, "supporting_keywords"), textFieldLimits.supporting_keywords),
    expected_result: trimField(valueFromPost(post, "expected_result"), textFieldLimits.expected_result),
    manager_notes: trimField(valueFromPost(post, "manager_notes"), textFieldLimits.manager_notes),
    baseline_query: trimField(valueFromPost(post, "baseline_query"), textFieldLimits.baseline_query),
    baseline_note: trimField(valueFromPost(post, "baseline_note"), textFieldLimits.baseline_note),
    baseline_screenshot_url: trimField(valueFromPost(post, "baseline_screenshot_url"), textFieldLimits.baseline_screenshot_url),
    result_7_day_note: trimField(valueFromPost(post, "result_7_day_note"), textFieldLimits.result_7_day_note),
    result_14_day_note: trimField(valueFromPost(post, "result_14_day_note"), textFieldLimits.result_14_day_note),
    result_28_day_note: trimField(valueFromPost(post, "result_28_day_note"), textFieldLimits.result_28_day_note),
    gsc_clicks: trimField(valueFromPost(post, "gsc_clicks"), textFieldLimits.gsc_clicks),
    gsc_impressions: trimField(valueFromPost(post, "gsc_impressions"), textFieldLimits.gsc_impressions),
    gsc_ctr: trimField(valueFromPost(post, "gsc_ctr"), textFieldLimits.gsc_ctr),
    gsc_position: trimField(valueFromPost(post, "gsc_position"), textFieldLimits.gsc_position),
    internal_links_used: trimField(valueFromPost(post, "internal_links_used"), textFieldLimits.internal_links_used),
    internal_link_notes: trimField(valueFromPost(post, "internal_link_notes"), textFieldLimits.internal_link_notes),
    author: String(post.author || managerBlogConfig.defaultAuthor),
    date: post.date ? String(post.date) : undefined,
    status: effectiveStatus,
    scheduled_at: scheduledAt || undefined,
    published: effectiveStatus === "published",
    archived: effectiveStatus === "archived",
    store: post.store ? String(post.store) : undefined,
    store_code: post.store_code ? String(post.store_code) : undefined,
    source: post.source ? String(post.source) : undefined,
    manager_owner: post.manager_owner ? String(post.manager_owner) : undefined,
    experiment_tag: post.experiment_tag ? String(post.experiment_tag) : undefined,
    created_at: post.created_at ? String(post.created_at) : undefined,
    updated_at: post.updated_at ? String(post.updated_at) : undefined,
    published_at: post.published_at ? String(post.published_at) : effectiveStatus === "published" && scheduledAt ? scheduledAt : undefined,
  };

  return {
    ...normalized,
    can_edit: session ? canEditPost(normalized, session) : false,
    can_delete: session ? session.role === "master_admin" && canEditPost(normalized, session) : false,
    preview_url: normalized.slug ? `/blog/${normalized.slug}` : undefined,
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

function cleanManagedField(input: Record<string, unknown>, field: string) {
  return cleanText(input[field], textFieldLimits[field] || 2000);
}

type AdminOnlyField =
  | "expected_result"
  | "manager_notes"
  | "baseline_query"
  | "baseline_note"
  | "baseline_screenshot_url"
  | "result_7_day_note"
  | "result_14_day_note"
  | "result_28_day_note"
  | "gsc_clicks"
  | "gsc_impressions"
  | "gsc_ctr"
  | "gsc_position";

function cleanAdminOnlyField(input: Record<string, unknown>, field: AdminOnlyField, session: ManagerBlogSession, existing?: ManagerBlogPost) {
  if (session.role === "master_admin") return cleanManagedField(input, field);
  return existing ? trimField(existing[field], textFieldLimits[field] || 2000) : "";
}

function normalizeInput(input: Record<string, unknown>, session: ManagerBlogSession, existing?: ManagerBlogPost) {
  const title = cleanText(input.title, managerBlogConfig.maxTitleLength);
  if (!title) throw new ManagerBlogStorageError("Title is required.", 400);

  const slugInput = trimField(input.slug, 140) || title;
  const slug = createSafeSlug(slugInput);
  const content = cleanText(input.content, managerBlogConfig.maxContentLength);
  if (!content) throw new ManagerBlogStorageError("Content is required.", 400);

  const now = new Date().toISOString();
  const metaDescription = cleanText(input.meta_description || input.metaDescription || input.excerpt, managerBlogConfig.maxExcerptLength);
  const requestedStatus = normalizeStatusValue(input.status) || (Boolean(input.published) ? "published" : "draft");
  const rawScheduledAt = cleanText(input.scheduled_at, textFieldLimits.scheduled_at);
  let status: ManagerBlogStatus = requestedStatus;
  let scheduledAt = rawScheduledAt;

  if (status === "scheduled") {
    const scheduledDate = parsedTime(scheduledAt);
    if (!scheduledDate) throw new ManagerBlogStorageError("Scheduled posts need a valid scheduled date/time.", 400);
    if (scheduledDate.getTime() <= Date.now()) status = "published";
  } else {
    scheduledAt = "";
  }

  const wasPublished = postStatusFromValues(existing || {}) === "published";
  const published = status === "published";
  const archived = status === "archived";

  return {
    action: existing?.id ? "update" : "create",
    id: existing?.id,
    title,
    slug,
    seo_title: cleanText(input.seo_title || title, managerBlogConfig.maxTitleLength),
    meta_description: metaDescription,
    metaDescription,
    h1: cleanText(input.h1 || title, managerBlogConfig.maxTitleLength),
    excerpt: metaDescription,
    content,
    faq: cleanManagedField(input, "faq"),
    featured_image_url: cleanManagedField(input, "featured_image_url"),
    target_keyword: cleanManagedField(input, "target_keyword"),
    supporting_keywords: cleanManagedField(input, "supporting_keywords"),
    expected_result: cleanAdminOnlyField(input, "expected_result", session, existing),
    manager_notes: cleanAdminOnlyField(input, "manager_notes", session, existing),
    baseline_query: cleanAdminOnlyField(input, "baseline_query", session, existing),
    baseline_note: cleanAdminOnlyField(input, "baseline_note", session, existing),
    baseline_screenshot_url: cleanAdminOnlyField(input, "baseline_screenshot_url", session, existing),
    result_7_day_note: cleanAdminOnlyField(input, "result_7_day_note", session, existing),
    result_14_day_note: cleanAdminOnlyField(input, "result_14_day_note", session, existing),
    result_28_day_note: cleanAdminOnlyField(input, "result_28_day_note", session, existing),
    gsc_clicks: cleanAdminOnlyField(input, "gsc_clicks", session, existing),
    gsc_impressions: cleanAdminOnlyField(input, "gsc_impressions", session, existing),
    gsc_ctr: cleanAdminOnlyField(input, "gsc_ctr", session, existing),
    gsc_position: cleanAdminOnlyField(input, "gsc_position", session, existing),
    internal_links_used: cleanManagedField(input, "internal_links_used"),
    internal_link_notes: cleanManagedField(input, "internal_link_notes"),
    author: managerBlogConfig.defaultAuthor,
    status,
    scheduled_at: scheduledAt,
    published,
    archived,
    store: managerBlogConfig.storeCode,
    store_code: managerBlogConfig.storeCode,
    source: managerBlogConfig.source,
    experiment_tag: session.role === "master_admin" ? "manager-seo-experiment" : "",
    manager_owner: existing?.manager_owner || session.manager_owner || session.username,
    date: String(input.date || existing?.date || now),
    created_at: existing?.created_at || now,
    updated_at: now,
    published_at: published ? existing?.published_at || scheduledAt || now : wasPublished ? existing?.published_at : undefined,
  };
}

function payloadFromPost(post: ManagerBlogPost, action: StorageAction, extra: Record<string, unknown> = {}) {
  const now = new Date().toISOString();
  return {
    action,
    id: post.id,
    title: post.title,
    slug: post.slug,
    seo_title: post.seo_title || post.title,
    meta_description: post.meta_description || post.excerpt || "",
    metaDescription: post.meta_description || post.excerpt || "",
    h1: post.h1 || post.title,
    excerpt: post.excerpt || post.meta_description || "",
    content: post.content,
    faq: post.faq || "",
    featured_image_url: post.featured_image_url || "",
    target_keyword: post.target_keyword || "",
    supporting_keywords: post.supporting_keywords || "",
    expected_result: post.expected_result || "",
    manager_notes: post.manager_notes || "",
    baseline_query: post.baseline_query || "",
    baseline_note: post.baseline_note || "",
    baseline_screenshot_url: post.baseline_screenshot_url || "",
    result_7_day_note: post.result_7_day_note || "",
    result_14_day_note: post.result_14_day_note || "",
    result_28_day_note: post.result_28_day_note || "",
    gsc_clicks: post.gsc_clicks || "",
    gsc_impressions: post.gsc_impressions || "",
    gsc_ctr: post.gsc_ctr || "",
    gsc_position: post.gsc_position || "",
    internal_links_used: post.internal_links_used || "",
    internal_link_notes: post.internal_link_notes || "",
    author: post.author || managerBlogConfig.defaultAuthor,
    status: post.status || postStatusFromValues(post),
    scheduled_at: post.scheduled_at || "",
    published: boolFromStorage(post.published),
    archived: boolFromStorage(post.archived),
    store: managerBlogConfig.storeCode,
    store_code: managerBlogConfig.storeCode,
    source: managerBlogConfig.source,
    experiment_tag: post.experiment_tag || "",
    manager_owner: post.manager_owner || managerBlogConfig.managerOwner,
    date: post.date || now,
    created_at: post.created_at || now,
    updated_at: now,
    published_at: post.published_at,
    ...extra,
  };
}

async function fetchRawPosts(admin = false) {
  const config = getStorageConfig();
  const url = new URL(config.url);
  url.searchParams.set("action", "blog");
  url.searchParams.set("store", managerBlogConfig.storeCode);
  if (admin) url.searchParams.set("admin", "1");
  if (admin && config.token) url.searchParams.set("token", config.token);

  const response = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new ManagerBlogStorageError("Manager blog storage returned an error while loading posts.", 502);
  }

  const data = await response.json();
  if (Array.isArray(data)) return data as Array<Partial<ManagerBlogPost> & Record<string, unknown>>;
  if (Array.isArray(data.posts)) return data.posts as Array<Partial<ManagerBlogPost> & Record<string, unknown>>;
  if (Array.isArray(data.data)) return data.data as Array<Partial<ManagerBlogPost> & Record<string, unknown>>;
  return [];
}

async function fetchPublicCandidatePosts() {
  try {
    return await fetchRawPosts(true);
  } catch {
    return fetchRawPosts(false);
  }
}

async function postStoragePayload(payload: Record<string, unknown>) {
  const config = getStorageConfig();
  const storagePayload = config.token ? { ...payload, token: config.token } : payload;
  const response = await fetch(config.url, {
    method: "POST",
    cache: "no-store",
    headers: storageHeaders(),
    body: JSON.stringify(storagePayload),
  });

  if (!response.ok) {
    throw new ManagerBlogStorageError("Manager blog storage returned an error while saving.", 502);
  }

  return response.json().catch(() => ({ ok: true }));
}

export async function listManagerBlogPosts(session: ManagerBlogSession): Promise<ManagerBlogPost[]> {
  const posts = (await fetchRawPosts(true)).map((post) => normalizeStoredPost(post, session));
  return posts.filter((post) => canEditPost(post, session));
}

async function findEditablePost(id: string, session: ManagerBlogSession): Promise<ManagerBlogPost | undefined> {
  const posts = await listManagerBlogPosts(session);
  return posts.find((post) => post.id === id || post.slug === id);
}

export async function saveManagerBlogPost(input: Record<string, unknown>, session: ManagerBlogSession) {
  const id = trimField(input.id, 120);
  const existing = id ? await findEditablePost(id, session) : undefined;

  if (id && !existing) {
    throw new ManagerBlogStorageError("This post is not available for manager editing.", 403);
  }

  const payload = normalizeInput(input, session, existing);
  return postStoragePayload(payload);
}

export async function changeManagerBlogPostStatus(input: Record<string, unknown>, session: ManagerBlogSession, action: "publish" | "unpublish" | "archive") {
  const id = trimField(input.id, 120);
  if (!id) throw new ManagerBlogStorageError("Post id is required.", 400);

  const existing = await findEditablePost(id, session);
  if (!existing) throw new ManagerBlogStorageError("This post is not available for manager editing.", 403);

  const now = new Date().toISOString();
  const status: ManagerBlogStatus = action === "publish" ? "published" : action === "archive" ? "archived" : "draft";
  const payload = payloadFromPost(existing, action, {
    status,
    scheduled_at: "",
    published: status === "published",
    archived: status === "archived",
    published_at: status === "published" ? existing.published_at || now : existing.published_at,
    updated_at: now,
  });

  return postStoragePayload(payload);
}

export async function duplicateManagerBlogPost(input: Record<string, unknown>, session: ManagerBlogSession) {
  const id = trimField(input.id, 120);
  if (!id) throw new ManagerBlogStorageError("Post id is required.", 400);

  const existing = await findEditablePost(id, session);
  if (!existing) throw new ManagerBlogStorageError("This post is not available for manager editing.", 403);

  const now = new Date().toISOString();
  const duplicateSlug = createSafeSlug(`${existing.slug || existing.title}-copy-${Date.now().toString(36)}`);
  const payload = payloadFromPost(existing, "create", {
    id: undefined,
    title: `Copy of ${existing.title}`.slice(0, managerBlogConfig.maxTitleLength),
    slug: duplicateSlug,
    status: "draft",
    scheduled_at: "",
    published: false,
    archived: false,
    manager_owner: existing.manager_owner || session.manager_owner || session.username,
    created_at: now,
    updated_at: now,
    published_at: undefined,
  });

  return postStoragePayload(payload);
}

export async function deleteManagerBlogPost(input: Record<string, unknown>, session: ManagerBlogSession) {
  if (session.role !== "master_admin") {
    throw new ManagerBlogStorageError("Only master admin can delete manager blog posts.", 403);
  }

  const id = trimField(input.id, 120);
  if (!id) throw new ManagerBlogStorageError("Post id is required.", 400);

  const existing = await findEditablePost(id, session);
  if (!existing) {
    throw new ManagerBlogStorageError("This post is not available for manager deletion.", 403);
  }

  return postStoragePayload(payloadFromPost(existing, "delete", { updated_at: new Date().toISOString() }));
}

export async function listPublishedManagerBlogPosts(): Promise<ManagerBlogPost[]> {
  if (!isManagerBlogStorageConfigured()) return [];

  try {
    const posts = (await fetchPublicCandidatePosts()).map((post) => normalizeStoredPost(post));
    return posts.filter((post) => isManagerPost(post) && isPublicPost(post));
  } catch {
    return [];
  }
}

export async function getPublishedManagerBlogPostBySlug(slug: string): Promise<ManagerBlogPost | null> {
  const safeSlug = createSafeSlug(slug);
  const posts = await listPublishedManagerBlogPosts();
  return posts.find((post) => post.slug === safeSlug) || null;
}
