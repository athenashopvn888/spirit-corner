"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./manager-blog-admin.module.css";

type ManagerBlogStatus = "draft" | "scheduled" | "published" | "archived";

type ManagerPost = {
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
  manager_owner?: string;
  created_at?: string;
  updated_at?: string;
  published_at?: string;
  can_edit?: boolean;
  can_delete?: boolean;
  preview_url?: string;
};

type FormState = {
  id: string;
  title: string;
  slug: string;
  seo_title: string;
  meta_description: string;
  h1: string;
  content: string;
  faq: string;
  featured_image_url: string;
  target_keyword: string;
  supporting_keywords: string;
  expected_result: string;
  manager_notes: string;
  baseline_query: string;
  baseline_note: string;
  baseline_screenshot_url: string;
  result_7_day_note: string;
  result_14_day_note: string;
  result_28_day_note: string;
  gsc_clicks: string;
  gsc_impressions: string;
  gsc_ctr: string;
  gsc_position: string;
  internal_links_used: string;
  internal_link_notes: string;
  status: ManagerBlogStatus;
  scheduled_at: string;
};

type Tab = "drafts" | "scheduled" | "published" | "archived" | "all" | "experiment";

type ManagerBlogAdminProps = {
  storeName: string;
  storeCode: string;
  storageConfigured: boolean;
  storageProvider: string;
  username: string;
  role: "publisher" | "master_admin";
  canManageUsers: boolean;
};

type InternalLinkSuggestion = {
  href: string;
  label: string;
  anchor: string;
  note: string;
  group: string;
  priority: number;
};

const STORE_TIME_ZONE = "America/Toronto";

const internalLinksByStore: Record<string, InternalLinkSuggestion[]> = {
  CHC01: [
    { href: "/", label: "Store homepage", anchor: "Castle Heights Cannabis", note: "Best default link when a post mentions the store, location, or visit planning.", group: "Visit planning", priority: 1 },
    { href: "/weed-dispensary-ottawa", label: "Ottawa local guide", anchor: "Ottawa cannabis dispensary", note: "Use for Ottawa, Center St, neighbourhood, and local shopping context.", group: "Visit planning", priority: 2 },
    { href: "/blog", label: "Blog hub", anchor: "Castle Heights cannabis blog", note: "Use when pointing readers to more store guides and updates.", group: "Visit planning", priority: 3 },
    { href: "/items/prerolls", label: "Pre-roll category", anchor: "pre-roll menu category", note: "Use only for general category education, not live availability.", group: "Menu categories", priority: 4 },
    { href: "/items/edibles", label: "Edibles category", anchor: "edibles menu category", note: "Use only for general category education, not live availability.", group: "Menu categories", priority: 5 },
    { href: "/items/vapes", label: "Vape category", anchor: "vape menu category", note: "Use only for general category education, not live availability.", group: "Menu categories", priority: 6 },
    { href: "/items/concentrates", label: "Concentrates category", anchor: "concentrates menu category", note: "Use only for general category education, not live availability.", group: "Menu categories", priority: 7 },
    { href: "/exotic", label: "Flower tiers", anchor: "flower menu tiers", note: "Use for general flower/tier navigation without price or availability claims.", group: "Menu categories", priority: 8 },
    { href: "/items/add-ons", label: "Accessories", anchor: "accessories and add-ons", note: "Use for accessories context without Product/Offer claims.", group: "Menu categories", priority: 9 },
  ],
  SCC01: [
    { href: "/", label: "Store homepage", anchor: "Spirit Corner Cannabis", note: "Best default link when a post mentions the store, downtown Ottawa, or visit planning.", group: "Visit planning", priority: 1 },
    { href: "/info/native-cigarettes-ottawa", label: "Native cigarettes guide", anchor: "native cigarettes in Ottawa", note: "Use for the high-value native cigarettes page and related shopper questions.", group: "Priority pages", priority: 2 },
    { href: "/24-hour-ottawa-dispensary", label: "24-hour Ottawa page", anchor: "24-hour Ottawa dispensary", note: "Use only when 24-hour wording naturally fits the post topic.", group: "Priority pages", priority: 3 },
    { href: "/blog", label: "Blog hub", anchor: "Spirit Corner cannabis blog", note: "Use when pointing readers to more store guides and updates.", group: "Visit planning", priority: 4 },
    { href: "/items/prerolls", label: "Pre-roll category", anchor: "pre-roll menu category", note: "Use only for general category education, not live availability.", group: "Menu categories", priority: 5 },
    { href: "/items/edibles", label: "Edibles category", anchor: "edibles menu category", note: "Use only for general category education, not live availability.", group: "Menu categories", priority: 6 },
    { href: "/items/vapes", label: "Vape category", anchor: "vape menu category", note: "Use only for general category education, not live availability.", group: "Menu categories", priority: 7 },
    { href: "/items/concentrates", label: "Concentrates category", anchor: "concentrates menu category", note: "Use only for general category education, not live availability.", group: "Menu categories", priority: 8 },
    { href: "/exotic", label: "Flower tiers", anchor: "flower menu tiers", note: "Use for general flower/tier navigation without price or availability claims.", group: "Menu categories", priority: 9 },
    { href: "/items/add-ons", label: "Accessories", anchor: "accessories and add-ons", note: "Use for accessories context without Product/Offer claims.", group: "Menu categories", priority: 10 },
  ],
};

const EMPTY_INTERNAL_LINKS: InternalLinkSuggestion[] = [];

const emptyForm: FormState = {
  id: "",
  title: "",
  slug: "",
  seo_title: "",
  meta_description: "",
  h1: "",
  content: "",
  faq: "",
  featured_image_url: "",
  target_keyword: "",
  supporting_keywords: "",
  expected_result: "",
  manager_notes: "",
  baseline_query: "",
  baseline_note: "",
  baseline_screenshot_url: "",
  result_7_day_note: "",
  result_14_day_note: "",
  result_28_day_note: "",
  gsc_clicks: "",
  gsc_impressions: "",
  gsc_ctr: "",
  gsc_position: "",
  internal_links_used: "",
  internal_link_notes: "",
  status: "draft",
  scheduled_at: "",
};

function makeSlug(value: string) {
  return value.toLowerCase().trim().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/-{2,}/g, "-");
}

function isTrue(value: boolean | string | undefined) {
  if (typeof value === "boolean") return value;
  return String(value || "").toLowerCase() === "true";
}

function roleLabel(role: ManagerBlogAdminProps["role"]) {
  return role === "master_admin" ? "Master admin" : "Blog publisher";
}

function normalizedStatus(value?: string): ManagerBlogStatus | "" {
  const status = String(value || "").toLowerCase();
  return status === "draft" || status === "scheduled" || status === "published" || status === "archived" ? status : "";
}

function isScheduledDue(value?: string) {
  if (!value) return false;
  const date = new Date(value);
  return !Number.isNaN(date.valueOf()) && date.getTime() <= Date.now();
}

function postStatus(post: ManagerPost): ManagerBlogStatus {
  if (isTrue(post.archived)) return "archived";
  const status = normalizedStatus(post.status);
  if (status === "archived") return "archived";
  if (status === "scheduled") return isScheduledDue(post.scheduled_at) ? "published" : "scheduled";
  if (status === "published" || status === "draft") return status;
  return isTrue(post.published) ? "published" : "draft";
}

function statusLabel(status: ManagerBlogStatus) {
  if (status === "draft") return "Save draft";
  if (status === "scheduled") return "Schedule publish";
  if (status === "published") return "Publish immediately";
  return "Archive";
}

function postDate(value?: string) {
  if (!value) return "Not set";
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return value;
  return date.toLocaleString("en-CA", { dateStyle: "medium", timeStyle: "short", timeZone: STORE_TIME_ZONE });
}

function fieldFromPost(post: ManagerPost, key: keyof FormState) {
  const value = post[key as keyof ManagerPost];
  return typeof value === "string" ? value : "";
}

function timeZoneOffsetMs(date: Date, timeZone: string) {
  const offsetName = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(date).find((part) => part.type === "timeZoneName")?.value || "GMT";
  const match = offsetName.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/);
  if (!match) return 0;
  const sign = match[1] === "-" ? -1 : 1;
  const hours = Number(match[2] || 0);
  const minutes = Number(match[3] || 0);
  return sign * ((hours * 60 + minutes) * 60 * 1000);
}

function storeLocalInputToIso(value: string) {
  const [datePart, timePart] = value.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = (timePart || "00:00").split(":").map(Number);
  if (!year || !month || !day || Number.isNaN(hour) || Number.isNaN(minute)) return "";
  let utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute));
  for (let i = 0; i < 2; i += 1) {
    utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute) - timeZoneOffsetMs(utcDate, STORE_TIME_ZONE));
  }
  return utcDate.toISOString();
}

function isoToStoreLocalInput(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return "";
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: STORE_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const part = (type: string) => parts.find((item) => item.type === type)?.value || "";
  return `${part("year")}-${part("month")}-${part("day")}T${part("hour")}:${part("minute")}`;
}

function markdownLink(link: InternalLinkSuggestion) {
  return `[${link.anchor}](${link.href})`;
}
function relatedLinkLine(link: InternalLinkSuggestion) {
  return `${link.anchor} -> ${link.href}`;
}

function selectedRelatedLinkLines(value: string) {
  return value.split("\n").map((item) => item.trim()).filter(Boolean);
}

function selectedRelatedLinkLabel(line: string) {
  const [label, href] = line.split("->").map((item) => item.trim());
  return href ? `${label} (${href})` : line;
}

export default function ManagerBlogAdmin({ storeName, storeCode, storageConfigured, storageProvider, username, role, canManageUsers }: ManagerBlogAdminProps) {
  const router = useRouter();
  const [posts, setPosts] = useState<ManagerPost[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [activeTab, setActiveTab] = useState<Tab>("drafts");
  const [loading, setLoading] = useState(storageConfigured);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(storageConfigured ? "" : "Manager blog storage is not configured yet. Set the storage env vars before live publishing.");
  const [copiedLink, setCopiedLink] = useState("");
  const editing = Boolean(form.id);
  const isMasterAdmin = role === "master_admin";
  const tabs: Tab[] = isMasterAdmin ? ["drafts", "scheduled", "published", "archived", "all", "experiment"] : ["drafts", "scheduled", "published", "archived", "all"];
  const previewUrl = useMemo(() => (form.slug ? `/blog/${form.slug}?manager_preview=1` : "/blog/[slug]?manager_preview=1"), [form.slug]);
  const internalLinks = internalLinksByStore[storeCode] ?? EMPTY_INTERNAL_LINKS;
  const linkGroups = useMemo(() => {
    return [...internalLinks].sort((a, b) => a.priority - b.priority).reduce<Record<string, InternalLinkSuggestion[]>>((groups, link) => {
      groups[link.group] = [...(groups[link.group] || []), link];
      return groups;
    }, {});
  }, [internalLinks]);
  const selectedRelatedLinks = useMemo(() => selectedRelatedLinkLines(form.internal_links_used), [form.internal_links_used]);

  async function loadPosts() {
    setLoading(true);
    setError("");
    const response = await fetch("/api/manager-blog/posts", { cache: "no-store" });
    const data = await response.json().catch(() => ({}));
    setLoading(false);
    if (!response.ok) {
      setError(data.error || "Unable to load manager posts.");
      setPosts([]);
      return;
    }
    setPosts(data.posts || []);
  }

  useEffect(() => {
    if (!storageConfigured) return;
    const timer = window.setTimeout(() => {
      void loadPosts();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [storageConfigured]);

  function updateForm(next: Partial<FormState>) {
    setForm((current) => ({ ...current, ...next }));
  }

  function handleTitleChange(value: string) {
    setForm((current) => ({
      ...current,
      title: value,
      slug: current.slug || makeSlug(value),
      seo_title: current.seo_title || value,
      h1: current.h1 || value,
    }));
  }

  function addUsedLink(link: InternalLinkSuggestion) {
    const entry = relatedLinkLine(link);
    setForm((current) => {
      const currentLinks = selectedRelatedLinkLines(current.internal_links_used);
      const nextLinks = currentLinks.includes(entry) ? currentLinks : [...currentLinks, entry];
      return { ...current, internal_links_used: nextLinks.join("\n") };
    });
  }

  function addRelatedLink(link: InternalLinkSuggestion) {
    addUsedLink(link);
    setMessage(`Added related link: ${link.anchor}. It will show in the public Helpful next steps block.`);
  }

  function applyRecommendedLinks() {
    const recommended = [...internalLinks].sort((a, b) => a.priority - b.priority).slice(0, 5).map(relatedLinkLine);
    setForm((current) => {
      const currentLinks = selectedRelatedLinkLines(current.internal_links_used);
      const nextLinks = [...currentLinks];
      recommended.forEach((entry) => {
        if (!nextLinks.includes(entry)) nextLinks.push(entry);
      });
      return { ...current, internal_links_used: nextLinks.join("\n") };
    });
    setMessage("Added the recommended related-link set. These render as public link cards below the article.");
  }

  function removeRelatedLink(line: string) {
    setForm((current) => ({
      ...current,
      internal_links_used: selectedRelatedLinkLines(current.internal_links_used).filter((item) => item !== line).join("\n"),
    }));
  }
  function insertInternalLink(link: InternalLinkSuggestion) {
    const insertion = markdownLink(link);
    setForm((current) => ({
      ...current,
      content: `${current.content.trim()}${current.content.trim() ? "\n\n" : ""}${insertion}`,
    }));
    addUsedLink(link);
    setMessage(`Inserted internal link: ${link.anchor}.`);
  }

  async function copyInternalLink(link: InternalLinkSuggestion) {
    const text = markdownLink(link);
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLink(link.href);
      window.setTimeout(() => setCopiedLink(""), 1600);
    } catch {
      setError("Could not copy link. You can still insert it directly.");
    }
  }

  async function savePayload(payload: FormState) {
    if (!storageConfigured) return;
    const scheduledAt = payload.status === "scheduled" ? storeLocalInputToIso(payload.scheduled_at) : "";
    if (payload.status === "scheduled" && !scheduledAt) {
      setError("Choose a valid schedule date/time in Ottawa/Toronto time.");
      return;
    }

    setSaving(true);
    setMessage("");
    setError("");
    const response = await fetch("/api/manager-blog/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...payload,
        scheduled_at: scheduledAt,
        published: payload.status === "published",
        archived: payload.status === "archived",
      }),
    });
    const data = await response.json().catch(() => ({}));
    setSaving(false);
    if (!response.ok) {
      setError(data.error || "Unable to save post.");
      return;
    }
    setMessage(payload.status === "scheduled" ? "Post scheduled." : payload.status === "published" ? "Post saved as published." : payload.status === "archived" ? "Post archived." : "Post saved as draft.");
    setForm(emptyForm);
    await loadPosts();
  }

  async function savePost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await savePayload(form);
  }

  function editPost(post: ManagerPost) {
    setForm({
      ...emptyForm,
      id: post.id || "",
      title: post.title || "",
      slug: post.slug || "",
      seo_title: post.seo_title || post.title || "",
      meta_description: post.meta_description || post.metaDescription || post.excerpt || "",
      h1: post.h1 || post.title || "",
      content: post.content || "",
      faq: fieldFromPost(post, "faq"),
      featured_image_url: fieldFromPost(post, "featured_image_url"),
      target_keyword: fieldFromPost(post, "target_keyword"),
      supporting_keywords: fieldFromPost(post, "supporting_keywords"),
      expected_result: fieldFromPost(post, "expected_result"),
      manager_notes: fieldFromPost(post, "manager_notes"),
      baseline_query: fieldFromPost(post, "baseline_query"),
      baseline_note: fieldFromPost(post, "baseline_note"),
      baseline_screenshot_url: fieldFromPost(post, "baseline_screenshot_url"),
      result_7_day_note: fieldFromPost(post, "result_7_day_note"),
      result_14_day_note: fieldFromPost(post, "result_14_day_note"),
      result_28_day_note: fieldFromPost(post, "result_28_day_note"),
      gsc_clicks: fieldFromPost(post, "gsc_clicks"),
      gsc_impressions: fieldFromPost(post, "gsc_impressions"),
      gsc_ctr: fieldFromPost(post, "gsc_ctr"),
      gsc_position: fieldFromPost(post, "gsc_position"),
      internal_links_used: fieldFromPost(post, "internal_links_used"),
      internal_link_notes: fieldFromPost(post, "internal_link_notes"),
      status: postStatus(post),
      scheduled_at: isoToStoreLocalInput(post.scheduled_at),
    });
    setMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function runAction(post: ManagerPost, action: "publish" | "unpublish" | "archive" | "duplicate" | "delete") {
    if (!post.id || !storageConfigured) return;
    if (action === "delete" && !post.can_delete) return;
    if (action === "delete" && !confirm("Permanently delete this manager blog post? This cannot be undone.")) return;
    if (action === "archive" && !confirm("Archive this manager blog post?")) return;

    setSaving(true);
    setMessage("");
    setError("");
    const response = await fetch("/api/manager-blog/posts", {
      method: action === "delete" ? "DELETE" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ action, id: post.id }),
    });
    const data = await response.json().catch(() => ({}));
    setSaving(false);
    if (!response.ok) {
      setError(data.error || `Unable to ${action} post.`);
      return;
    }
    setMessage(`Post ${action === "duplicate" ? "duplicated" : `${action}ed`}.`);
    await loadPosts();
  }

  async function logout() {
    await fetch("/api/manager-blog/session", { method: "DELETE" });
    router.replace("/manager-blog-login");
  }

  const visiblePosts = posts.filter((post) => {
    const status = postStatus(post);
    if (activeTab === "all") return true;
    if (activeTab === "experiment") return isMasterAdmin && Boolean(post.expected_result || post.baseline_query || post.manager_notes || post.gsc_clicks || post.gsc_impressions || post.gsc_ctr || post.gsc_position);
    return status === activeTab.replace(/s$/, "");
  });

  const counts: Record<Tab, number> = {
    drafts: posts.filter((post) => postStatus(post) === "draft").length,
    scheduled: posts.filter((post) => postStatus(post) === "scheduled").length,
    published: posts.filter((post) => postStatus(post) === "published").length,
    archived: posts.filter((post) => postStatus(post) === "archived").length,
    all: posts.length,
    experiment: posts.filter((post) => post.expected_result || post.baseline_query || post.manager_notes || post.gsc_clicks || post.gsc_impressions || post.gsc_ctr || post.gsc_position).length,
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>{isMasterAdmin ? "Manager SEO experiment dashboard" : "Manager blog dashboard"}</p>
          <h1>{storeName}</h1>
          <p className={styles.scope}>Store locked to {storeCode}. Signed in as {username} ({roleLabel(role)}). Author: Ottawa Manager.</p>
        </div>
        <button className={styles.secondaryButton} onClick={logout}>Logout</button>
      </header>

      <section className={styles.statusGrid}>
        <div className={styles.statusCard}><span>Storage configured</span><strong>{storageConfigured ? "Yes" : "No"}</strong></div>
        <div className={styles.statusCard}><span>Storage provider</span><strong>{storageProvider}</strong></div>
        <div className={styles.statusCard}><span>Public route</span><strong>/blog/[slug]</strong></div>
        <div className={styles.statusCard}><span>Role</span><strong>{roleLabel(role)}</strong></div>
      </section>

      {!storageConfigured && <section className={styles.notice}><strong>Storage setup required.</strong><p>Login/admin routes are installed, but live self-publishing stays blocked until MANAGER_BLOG_STORAGE_PROVIDER, MANAGER_BLOG_STORAGE_URL, and the server-side token are configured in Vercel.</p></section>}
      {canManageUsers && <section className={styles.notice}><strong>Master admin mode.</strong><p>This role can manage scheduled posts, publish timing, internal link notes, and manager-submitted CHC/SCC posts.</p></section>}
      {!canManageUsers && <section className={styles.notice}><strong>Publisher mode.</strong><p>This account can create, edit, schedule, publish, unpublish, archive, duplicate, preview, and delete its own manager-submitted posts for this store. MasterAdmin can manage all CHC/SCC manager posts.</p></section>}
      {error && <p className={styles.error}>{error}</p>}
      {message && <p className={styles.message}>{message}</p>}

      <section className={styles.layout}>
        <form className={styles.editor} onSubmit={savePost}>
          <div className={styles.editorHeader}>
            <h2>{editing ? "Edit manager post" : "Create manager post"}</h2>
            {editing && <button type="button" className={styles.secondaryButton} onClick={() => setForm(emptyForm)}>New post</button>}
          </div>
          <label className={styles.label}>Title<input className={styles.input} value={form.title} onChange={(event) => handleTitleChange(event.target.value)} required /></label>
          <label className={styles.label}>Slug<input className={styles.input} value={form.slug} onChange={(event) => updateForm({ slug: makeSlug(event.target.value) })} required /></label>
          <label className={styles.label}>SEO title<input className={styles.input} value={form.seo_title} onChange={(event) => updateForm({ seo_title: event.target.value })} /></label>
          <label className={styles.label}>Meta description<textarea className={styles.textareaSmall} value={form.meta_description} onChange={(event) => updateForm({ meta_description: event.target.value })} maxLength={320} /></label>
          <label className={styles.label}>H1<input className={styles.input} value={form.h1} onChange={(event) => updateForm({ h1: event.target.value })} /></label>
          <label className={styles.label}>Content / body<textarea className={styles.textarea} value={form.content} onChange={(event) => updateForm({ content: event.target.value })} required /></label>
          <label className={styles.label}>FAQ section<textarea className={styles.textareaSmall} value={form.faq} onChange={(event) => updateForm({ faq: event.target.value })} /></label>
          <label className={styles.label}>Featured image URL<input className={styles.input} value={form.featured_image_url} onChange={(event) => updateForm({ featured_image_url: event.target.value })} /></label>

          <h3 className={styles.subhead}>SEO focus</h3>
          <div className={styles.twoColumn}>
            <label className={styles.label}>Target keyword<input className={styles.input} value={form.target_keyword} onChange={(event) => updateForm({ target_keyword: event.target.value })} /></label>
            <label className={styles.label}>Supporting keywords<input className={styles.input} value={form.supporting_keywords} onChange={(event) => updateForm({ supporting_keywords: event.target.value })} /></label>
          </div>

          <section className={styles.linkAssistant}>
            <div className={styles.editorHeader}>
              <div>
                <h3 className={styles.subhead}>Related links assistant</h3>
                <p className={styles.helperText}>Pick 3-5 store-specific links. They show as a public Helpful next steps block, not a messy link dump.</p>
              </div>
              <button type="button" className={styles.secondaryButton} onClick={applyRecommendedLinks} disabled={!internalLinks.length}>Use recommended set</button>
            </div>
            <div className={styles.selectedLinksPanel}>
              <div>
                <strong>Selected public links: {selectedRelatedLinks.length}</strong>
                <p className={styles.helperText}>These links render as button cards below the article. If none are selected, the public post uses safe store defaults.</p>
              </div>
              {selectedRelatedLinks.length > 0 ? (
                <div className={styles.selectedLinkList}>
                  {selectedRelatedLinks.map((line) => (
                    <div key={line} className={styles.selectedLinkRow}>
                      <span>{selectedRelatedLinkLabel(line)}</span>
                      <button type="button" className={styles.secondaryButton} onClick={() => removeRelatedLink(line)}>Remove</button>
                    </div>
                  ))}
                </div>
              ) : <p className={styles.empty}>No related links selected yet.</p>}
            </div>
            {Object.entries(linkGroups).map(([group, links]) => (
              <section key={group} className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>{group}</h4>
                <div className={styles.linkGrid}>
                  {links.map((link) => (
                    <article key={link.href} className={styles.linkCard}>
                      <div className={styles.linkCardHeader}>
                        <strong>{link.label}</strong>
                        {link.priority <= 3 && <span className={styles.recommendationBadge}>Recommended</span>}
                      </div>
                      <span>{link.href}</span>
                      <p>{link.note}</p>
                      <p><b>Anchor:</b> {link.anchor}</p>
                      <div className={styles.linkActions}>
                        <button type="button" className={styles.secondaryButton} onClick={() => addRelatedLink(link)}>Add to related section</button>
                        <button type="button" className={styles.secondaryButton} onClick={() => insertInternalLink(link)}>Insert in body</button>
                        <button type="button" className={styles.secondaryButton} onClick={() => copyInternalLink(link)}>{copiedLink === link.href ? "Copied" : "Copy markdown"}</button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </section>

          <label className={styles.label}>Related links used / public cards<textarea className={styles.textareaSmall} value={form.internal_links_used} onChange={(event) => updateForm({ internal_links_used: event.target.value })} /></label>
          <label className={styles.label}>Internal link notes<textarea className={styles.textareaSmall} value={form.internal_link_notes} onChange={(event) => updateForm({ internal_link_notes: event.target.value })} /></label>

          {isMasterAdmin && <>
            <h3 className={styles.subhead}>Admin experiment tracking</h3>
            <label className={styles.label}>Expected result<textarea className={styles.textareaSmall} value={form.expected_result} onChange={(event) => updateForm({ expected_result: event.target.value })} /></label>
            <label className={styles.label}>Manager notes<textarea className={styles.textareaSmall} value={form.manager_notes} onChange={(event) => updateForm({ manager_notes: event.target.value })} /></label>
            <div className={styles.twoColumn}>
              <label className={styles.label}>Baseline query<input className={styles.input} value={form.baseline_query} onChange={(event) => updateForm({ baseline_query: event.target.value })} /></label>
              <label className={styles.label}>Baseline screenshot URL<input className={styles.input} value={form.baseline_screenshot_url} onChange={(event) => updateForm({ baseline_screenshot_url: event.target.value })} /></label>
            </div>
            <label className={styles.label}>Baseline note<textarea className={styles.textareaSmall} value={form.baseline_note} onChange={(event) => updateForm({ baseline_note: event.target.value })} /></label>
            <div className={styles.threeColumn}>
              <label className={styles.label}>7 day result<textarea className={styles.textareaMini} value={form.result_7_day_note} onChange={(event) => updateForm({ result_7_day_note: event.target.value })} /></label>
              <label className={styles.label}>14 day result<textarea className={styles.textareaMini} value={form.result_14_day_note} onChange={(event) => updateForm({ result_14_day_note: event.target.value })} /></label>
              <label className={styles.label}>28 day result<textarea className={styles.textareaMini} value={form.result_28_day_note} onChange={(event) => updateForm({ result_28_day_note: event.target.value })} /></label>
            </div>
            <div className={styles.fourColumn}>
              <label className={styles.label}>GSC clicks<input className={styles.input} value={form.gsc_clicks} onChange={(event) => updateForm({ gsc_clicks: event.target.value })} /></label>
              <label className={styles.label}>GSC impressions<input className={styles.input} value={form.gsc_impressions} onChange={(event) => updateForm({ gsc_impressions: event.target.value })} /></label>
              <label className={styles.label}>GSC CTR<input className={styles.input} value={form.gsc_ctr} onChange={(event) => updateForm({ gsc_ctr: event.target.value })} /></label>
              <label className={styles.label}>GSC position<input className={styles.input} value={form.gsc_position} onChange={(event) => updateForm({ gsc_position: event.target.value })} /></label>
            </div>
          </>}

          <div className={styles.metaGrid}><div><span className={styles.metaLabel}>Author</span><strong>Ottawa Manager</strong></div><div><span className={styles.metaLabel}>Manager preview URL</span><strong>{previewUrl}</strong></div></div>

          <fieldset className={styles.publishOptions}>
            <legend>Publish mode</legend>
            <label><input type="radio" name="status" checked={form.status === "draft"} onChange={() => updateForm({ status: "draft", scheduled_at: "" })} /> Save draft</label>
            <label><input type="radio" name="status" checked={form.status === "published"} onChange={() => updateForm({ status: "published", scheduled_at: "" })} /> Publish immediately</label>
            <label><input type="radio" name="status" checked={form.status === "scheduled"} onChange={() => updateForm({ status: "scheduled" })} /> Schedule publish date/time</label>
          </fieldset>
          {form.status === "scheduled" && (
            <label className={styles.label}>Schedule date/time <span className={styles.helperText}>Ottawa/Toronto time ({STORE_TIME_ZONE})</span><input className={styles.input} type="datetime-local" value={form.scheduled_at} onChange={(event) => updateForm({ scheduled_at: event.target.value })} required /></label>
          )}
          <button className={styles.primaryButton} disabled={saving || !storageConfigured}>{saving ? "Saving..." : statusLabel(form.status)}</button>
        </form>

        <section className={styles.postsPanel}>
          <div className={styles.editorHeader}><h2>Manager posts</h2><button type="button" className={styles.secondaryButton} onClick={loadPosts} disabled={!storageConfigured || loading}>Refresh</button></div>
          <div className={styles.tabs}>{tabs.map((tab) => <button key={tab} type="button" className={activeTab === tab ? styles.activeTab : styles.tab} onClick={() => setActiveTab(tab)}>{tab} ({counts[tab]})</button>)}</div>
          {loading ? <p>Loading posts...</p> : visiblePosts.length === 0 ? <p className={styles.empty}>No manager-submitted posts found for this view.</p> : (
            <div className={styles.postList}>{visiblePosts.map((post) => {
              const status = postStatus(post);
              return (
              <article key={post.id || post.slug} className={styles.postRow}>
                <div>
                  <h3>{post.title || "Untitled"}</h3>
                  <p>{post.slug}</p>
                  <span className={styles[status]}>{status}</span>
                  <dl className={styles.postMetaList}>
                    <div><dt>Author</dt><dd>{post.author || "Ottawa Manager"}</dd></div>
                    <div><dt>Owner</dt><dd>{post.manager_owner || "Not set"}</dd></div>
                    <div><dt>Updated</dt><dd>{postDate(post.updated_at)}</dd></div>
                    <div><dt>Scheduled</dt><dd>{postDate(post.scheduled_at)}</dd></div>
                    <div><dt>Published</dt><dd>{postDate(post.published_at)}</dd></div>
                    <div><dt>Links used</dt><dd>{post.internal_links_used ? "Yes" : "No"}</dd></div>
                    {isMasterAdmin && <div><dt>Target keyword</dt><dd>{post.target_keyword || "Not set"}</dd></div>}
                    <div><dt>Preview</dt><dd><a href={post.preview_url || `/blog/${post.slug}?manager_preview=1`} target="_blank" rel="noreferrer">Open</a></dd></div>
                  </dl>
                </div>
                <div className={styles.actions}>
                  <button type="button" className={styles.secondaryButton} onClick={() => editPost(post)}>Edit</button>
                  {status !== "published" && status !== "archived" && <button type="button" className={styles.secondaryButton} onClick={() => runAction(post, "publish")}>Publish now</button>}
                  {status === "published" && <button type="button" className={styles.secondaryButton} onClick={() => runAction(post, "unpublish")}>Unpublish</button>}
                  {status !== "archived" && <button type="button" className={styles.secondaryButton} onClick={() => runAction(post, "archive")}>Archive</button>}
                  <button type="button" className={styles.secondaryButton} onClick={() => runAction(post, "duplicate")}>Duplicate</button>
                  {post.can_delete && <button type="button" className={styles.dangerButton} onClick={() => runAction(post, "delete")}>Delete</button>}
                </div>
              </article>
            );})}</div>
          )}
        </section>
      </section>
    </main>
  );
}
