"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./blogpost.module.css";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx09_sDal1eMVF1r-hUck4e7oq_XBHEWhGvA79JuhZNQ6P4CdhCas0xE3FfexWQ3hq4/exec";

interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  seo_title?: string;
  meta_description?: string;
  h1?: string;
  content: string;
  faq?: string;
  author: string;
  date?: string;
}

type PostContentProps = {
  managerPost?: BlogPost | null;
  slug: string;
  storeCode: string;
  storeName: string;
  ctaLine: string;
};

function renderContent(raw: string) {
  return raw.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("## ")) {
      return <h2 key={i} className={styles.contentH2}>{trimmed.replace("## ", "")}</h2>;
    }
    if (trimmed.startsWith("### ")) {
      return <h3 key={i} className={styles.contentH3}>{trimmed.replace("### ", "")}</h3>;
    }

    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((line) => line.trim().startsWith("- "));
      return (
        <ul key={i} className={styles.contentList}>
          {items.map((item, j) => (
            <li key={j}>{item.replace(/^-\s*/, "")}</li>
          ))}
        </ul>
      );
    }

    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className={styles.contentP}>
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j}>{part.slice(2, -2)}</strong>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
      </p>
    );
  });
}

function renderFaq(raw?: string) {
  if (!raw) return null;
  const entries = raw.split("\n").map((line) => line.trim()).filter(Boolean);
  if (entries.length === 0) return null;

  return (
    <section className={styles.body}>
      <h2 className={styles.contentH2}>FAQ</h2>
      {entries.map((entry, index) => <p key={index} className={styles.contentP}>{entry}</p>)}
    </section>
  );
}

export default function PostContent({ managerPost = null, slug, storeCode, storeName, ctaLine }: PostContentProps) {
  const [post, setPost] = useState<BlogPost | null>(managerPost);
  const [loading, setLoading] = useState(!managerPost);

  useEffect(() => {
    if (managerPost) return;
    fetch(`${APPS_SCRIPT_URL}?action=blog&store=${encodeURIComponent(storeCode)}`)
      .then((r) => r.json())
      .then((data) => {
        const found = (data.posts || []).find((item: BlogPost) => item.slug === slug);
        setPost(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [managerPost, slug, storeCode]);

  if (loading) {
    return (
      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.loading}>Loading post...</div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!post) {
    return (
      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.notFound}>
            <h1>Post Not Found</h1>
            <p>This blog post does not exist or has been removed.</p>
            <Link href="/blog" className={styles.backLink}>Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Navbar />
      <article className={styles.content}>
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/blog">Blog</Link>
          <span>/</span>
          <span className={styles.breadcrumbCurrent}>{post.title}</span>
        </nav>

        <header className={styles.header}>
          <h1 className={styles.title}>{post.h1 || post.title}</h1>
          <div className={styles.meta}>
            <span>{post.author}</span>
            <span>/</span>
            <span>
              {post.date ? new Date(post.date).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) : "Manager post"}
            </span>
          </div>
        </header>

        <div className={styles.body}>
          {renderContent(post.content)}
        </div>
        {renderFaq(post.faq)}

        <div className={styles.cta}>
          <p>
            <strong>{storeName}</strong> - {ctaLine}
          </p>
          <Link href="/exotic" className={styles.ctaBtn}>Browse Our Menu</Link>
        </div>

        <Link href="/blog" className={styles.backLink}>Back to Blog</Link>
      </article>
      <Footer />
    </main>
  );
}
