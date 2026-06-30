"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./manager-blog-admin.module.css";

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
  author: string;
  date?: string;
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
  published: boolean;
};

type Tab = "drafts" | "published" | "archived" | "all" | "experiment";

type ManagerBlogAdminProps = {
  storeName: string;
  storeCode: string;
  storageConfigured: boolean;
  storageProvider: string;
  username: string;
  role: "publisher" | "master_admin";
  canManageUsers: boolean;
};

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
  published: false,
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

function postStatus(post: ManagerPost) {
  if (isTrue(post.archived)) return "archived";
  return isTrue(post.published) ? "published" : "draft";
}

function postDate(value?: string) {
  if (!value) return "Not set";
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return value;
  return date.toLocaleString("en-CA", { dateStyle: "medium", timeStyle: "short" });
}

function fieldFromPost(post: ManagerPost, key: keyof FormState) {
  const value = post[key as keyof ManagerPost];
  return typeof value === "string" ? value : "";
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
  const editing = Boolean(form.id);
  const isMasterAdmin = role === "master_admin";
  const tabs: Tab[] = isMasterAdmin ? ["drafts", "published", "archived", "all", "experiment"] : ["drafts", "published", "archived", "all"];
  const publicUrl = useMemo(() => (form.slug ? `/blog/${form.slug}` : "/blog/[slug]"), [form.slug]);

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

  async function savePayload(payload: FormState) {
    if (!storageConfigured) return;
    setSaving(true);
    setMessage("");
    setError("");
    const response = await fetch("/api/manager-blog/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({}));
    setSaving(false);
    if (!response.ok) {
      setError(data.error || "Unable to save post.");
      return;
    }
    setMessage(payload.published ? "Post saved as published." : "Post saved as draft.");
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
      published: isTrue(post.published),
    });
    setMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function runAction(post: ManagerPost, action: "publish" | "unpublish" | "archive" | "duplicate" | "delete") {
    if (!post.id || !storageConfigured) return;
    if (action === "delete" && !post.can_delete) return;
    if (action === "delete" && !confirm("Permanently delete this manager blog post?")) return;
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
    if (activeTab === "experiment") return isMasterAdmin && Boolean(post.target_keyword || post.expected_result || post.baseline_query || post.manager_notes);
    return status === activeTab;
  });

  const counts: Record<Tab, number> = {
    drafts: posts.filter((post) => postStatus(post) === "draft").length,
    published: posts.filter((post) => postStatus(post) === "published").length,
    archived: posts.filter((post) => postStatus(post) === "archived").length,
    all: posts.length,
    experiment: posts.filter((post) => post.target_keyword || post.expected_result || post.baseline_query || post.manager_notes).length,
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
      {canManageUsers && <section className={styles.notice}><strong>Master admin mode.</strong><p>User management remains environment-based. This role can manage manager-submitted CHC/SCC posts once storage is active.</p></section>}
      {!canManageUsers && <section className={styles.notice}><strong>Publisher mode.</strong><p>This account can create, edit, publish, unpublish, archive, duplicate, and preview its own manager-submitted posts for this store. Permanent delete is reserved for MasterAdmin.</p></section>}
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

          {isMasterAdmin && <>
            <h3 className={styles.subhead}>Experiment tracking</h3>
            <div className={styles.twoColumn}>
              <label className={styles.label}>Target keyword<input className={styles.input} value={form.target_keyword} onChange={(event) => updateForm({ target_keyword: event.target.value })} /></label>
              <label className={styles.label}>Supporting keywords<input className={styles.input} value={form.supporting_keywords} onChange={(event) => updateForm({ supporting_keywords: event.target.value })} /></label>
            </div>
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

          <div className={styles.metaGrid}><div><span className={styles.metaLabel}>Author</span><strong>Ottawa Manager</strong></div><div><span className={styles.metaLabel}>Preview URL</span><strong>{publicUrl}</strong></div></div>
          <label className={styles.checkbox}><input type="checkbox" checked={form.published} onChange={(event) => updateForm({ published: event.target.checked })} />Publish immediately</label>
          <button className={styles.primaryButton} disabled={saving || !storageConfigured}>{saving ? "Saving..." : form.published ? "Save and publish" : "Save draft"}</button>
        </form>

        <section className={styles.postsPanel}>
          <div className={styles.editorHeader}><h2>Manager posts</h2><button type="button" className={styles.secondaryButton} onClick={loadPosts} disabled={!storageConfigured || loading}>Refresh</button></div>
          <div className={styles.tabs}>{tabs.map((tab) => <button key={tab} type="button" className={activeTab === tab ? styles.activeTab : styles.tab} onClick={() => setActiveTab(tab)}>{tab} ({counts[tab]})</button>)}</div>
          {loading ? <p>Loading posts...</p> : visiblePosts.length === 0 ? <p className={styles.empty}>No manager-submitted posts found for this view.</p> : (
            <div className={styles.postList}>{visiblePosts.map((post) => (
              <article key={post.id || post.slug} className={styles.postRow}>
                <div>
                  <h3>{post.title || "Untitled"}</h3>
                  <p>{post.slug}</p>
                  <span className={styles[postStatus(post)]}>{postStatus(post)}</span>
                  <dl className={styles.postMetaList}>
                    <div><dt>Author</dt><dd>{post.author || "Ottawa Manager"}</dd></div>
                    <div><dt>Owner</dt><dd>{post.manager_owner || "Not set"}</dd></div>
                    <div><dt>Updated</dt><dd>{postDate(post.updated_at)}</dd></div>
                    <div><dt>Published</dt><dd>{postDate(post.published_at)}</dd></div>
                    {isMasterAdmin && <div><dt>Target keyword</dt><dd>{post.target_keyword || "Not set"}</dd></div>}
                    <div><dt>Preview</dt><dd><a href={post.preview_url || `/blog/${post.slug}`} target="_blank" rel="noreferrer">Open</a></dd></div>
                  </dl>
                </div>
                <div className={styles.actions}>
                  <button type="button" className={styles.secondaryButton} onClick={() => editPost(post)}>Edit</button>
                  {!isTrue(post.published) && !isTrue(post.archived) && <button type="button" className={styles.secondaryButton} onClick={() => runAction(post, "publish")}>Publish</button>}
                  {isTrue(post.published) && <button type="button" className={styles.secondaryButton} onClick={() => runAction(post, "unpublish")}>Unpublish</button>}
                  {!isTrue(post.archived) && <button type="button" className={styles.secondaryButton} onClick={() => runAction(post, "archive")}>Archive</button>}
                  <button type="button" className={styles.secondaryButton} onClick={() => runAction(post, "duplicate")}>Duplicate</button>
                  {post.can_delete && <button type="button" className={styles.dangerButton} onClick={() => runAction(post, "delete")}>Delete</button>}
                </div>
              </article>
            ))}</div>
          )}
        </section>
      </section>
    </main>
  );
}
