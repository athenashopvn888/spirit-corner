"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./manager-blog-admin.module.css";

type ManagerPost = {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  author: string;
  date?: string;
  published: boolean | string;
};

type FormState = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published: boolean;
};

const emptyForm: FormState = { id: "", title: "", slug: "", excerpt: "", content: "", published: false };

function makeSlug(value: string) {
  return value.toLowerCase().trim().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/-{2,}/g, "-");
}

function isPublished(value: boolean | string) {
  if (typeof value === "boolean") return value;
  return String(value || "").toUpperCase() === "TRUE";
}

export default function ManagerBlogAdmin({ storeName, storeCode, storageConfigured }: { storeName: string; storeCode: string; storageConfigured: boolean }) {
  const router = useRouter();
  const [posts, setPosts] = useState<ManagerPost[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [loading, setLoading] = useState(storageConfigured);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(storageConfigured ? "" : "Manager blog storage is not configured yet. Set the storage env vars before live publishing.");
  const editing = Boolean(form.id);
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
    setForm((current) => ({ ...current, title: value, slug: current.slug || makeSlug(value) }));
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
    setForm({ id: post.id || "", title: post.title || "", slug: post.slug || "", excerpt: post.excerpt || "", content: post.content || "", published: isPublished(post.published) });
    setMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function togglePost(post: ManagerPost) {
    await savePayload({ id: post.id || "", title: post.title, slug: post.slug, excerpt: post.excerpt || "", content: post.content, published: !isPublished(post.published) });
  }

  async function deletePost(post: ManagerPost) {
    if (!post.id || !confirm("Delete this manager blog post?")) return;
    const response = await fetch("/api/manager-blog/posts", { method: "DELETE", headers: { "content-type": "application/json" }, body: JSON.stringify({ id: post.id }) });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      setError(data.error || "Unable to delete post.");
      return;
    }
    setMessage("Post deleted.");
    await loadPosts();
  }

  async function logout() {
    await fetch("/api/manager-blog/session", { method: "DELETE" });
    router.replace("/manager-blog-login");
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Manager blog admin</p>
          <h1>{storeName}</h1>
          <p className={styles.scope}>Store locked to {storeCode}. Source: manager-submitted. Author: Ottawa Manager.</p>
        </div>
        <button className={styles.secondaryButton} onClick={logout}>Logout</button>
      </header>

      {!storageConfigured && <section className={styles.notice}><strong>Storage setup required.</strong><p>Login/admin routes are installed, but live self-publishing stays blocked until the storage provider env vars are configured.</p></section>}
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
          <label className={styles.label}>Excerpt / meta description<textarea className={styles.textareaSmall} value={form.excerpt} onChange={(event) => updateForm({ excerpt: event.target.value })} maxLength={320} /></label>
          <label className={styles.label}>Content<textarea className={styles.textarea} value={form.content} onChange={(event) => updateForm({ content: event.target.value })} required /></label>
          <div className={styles.metaGrid}><div><span className={styles.metaLabel}>Author</span><strong>Ottawa Manager</strong></div><div><span className={styles.metaLabel}>Preview URL</span><strong>{publicUrl}</strong></div></div>
          <label className={styles.checkbox}><input type="checkbox" checked={form.published} onChange={(event) => updateForm({ published: event.target.checked })} />Publish immediately</label>
          <button className={styles.primaryButton} disabled={saving || !storageConfigured}>{saving ? "Saving..." : form.published ? "Save and publish" : "Save draft"}</button>
        </form>

        <section className={styles.postsPanel}>
          <div className={styles.editorHeader}><h2>Manager posts</h2><button type="button" className={styles.secondaryButton} onClick={loadPosts} disabled={!storageConfigured || loading}>Refresh</button></div>
          {loading ? <p>Loading posts...</p> : posts.length === 0 ? <p className={styles.empty}>No manager-submitted posts found for this store.</p> : (
            <div className={styles.postList}>{posts.map((post) => (
              <article key={post.id || post.slug} className={styles.postRow}>
                <div><h3>{post.title || "Untitled"}</h3><p>{post.slug}</p><span className={isPublished(post.published) ? styles.published : styles.draft}>{isPublished(post.published) ? "Published" : "Draft"}</span></div>
                <div className={styles.actions}><button type="button" className={styles.secondaryButton} onClick={() => editPost(post)}>Edit</button><button type="button" className={styles.secondaryButton} onClick={() => togglePost(post)}>{isPublished(post.published) ? "Unpublish" : "Publish"}</button><button type="button" className={styles.dangerButton} onClick={() => deletePost(post)}>Delete</button></div>
              </article>
            ))}</div>
          )}
        </section>
      </section>
    </main>
  );
}