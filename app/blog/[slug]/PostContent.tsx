"use client";

import { useState, useEffect, type ReactNode } from "react";
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
  internal_links_used?: string;
  internal_link_notes?: string;
  author: string;
  date?: string;
}

type PostContentProps = {
  managerPost?: BlogPost | null;
  slug: string;
  storeCode: string;
  storeName: string;
  ctaLine: string;
  isManagerPreview?: boolean;
};
type RelatedLink = {
  href: string;
  label: string;
  note?: string;
};

const defaultRelatedLinksByStore: Record<string, RelatedLink[]> = {
  CHC01: [
    { href: "/", label: "Castle Heights Cannabis", note: "Store homepage" },
    { href: "/weed-dispensary-ottawa", label: "Ottawa cannabis dispensary", note: "Local visit guide" },
    { href: "/blog", label: "Castle Heights cannabis blog", note: "More local guides" },
    { href: "/items/prerolls", label: "Pre-roll menu category", note: "General category page" },
    { href: "/items/edibles", label: "Edibles menu category", note: "General category page" },
  ],
  SCC01: [
    { href: "/", label: "Spirit Corner Cannabis", note: "Store homepage" },
    { href: "/info/native-cigarettes-ottawa", label: "Native cigarettes in Ottawa", note: "Popular shopper guide" },
    { href: "/24-hour-ottawa-dispensary", label: "24-hour Ottawa dispensary", note: "Local visit page" },
    { href: "/blog", label: "Spirit Corner cannabis blog", note: "More local guides" },
    { href: "/items/prerolls", label: "Pre-roll menu category", note: "General category page" },
  ],
};

function cleanInternalHref(value: string) {
  const href = value.trim();
  if (!href.startsWith("/") || href.startsWith("//") || href.includes("..") || href.includes("\\") || /[\s<>]/.test(href)) return "";
  return href;
}

function parseRelatedLinkLine(line: string): RelatedLink | null {
  const trimmed = line.trim();
  if (!trimmed) return null;

  const markdown = trimmed.match(/^\[([^\]]+)\]\((\/[^)]+)\)$/);
  if (markdown) {
    const href = cleanInternalHref(markdown[2]);
    return href ? { label: markdown[1].trim(), href } : null;
  }

  const pipeParts = trimmed.split("|").map((item) => item.trim());
  if (pipeParts.length >= 2) {
    const href = cleanInternalHref(pipeParts[1]);
    return href ? { label: pipeParts[0], href, note: pipeParts[2] } : null;
  }

  const arrowParts = trimmed.split("->").map((item) => item.trim());
  if (arrowParts.length >= 2) {
    const href = cleanInternalHref(arrowParts[1]);
    return href ? { label: arrowParts[0], href } : null;
  }

  return null;
}

function relatedLinksForPost(post: BlogPost, storeCode: string) {
  const selected = (post.internal_links_used || "").split("\n").map(parseRelatedLinkLine).filter((link): link is RelatedLink => Boolean(link));
  const source = selected.length > 0 ? selected : (defaultRelatedLinksByStore[storeCode] || []);
  const seen = new Set<string>();
  return source.filter((link) => {
    const key = `${link.href}|${link.label.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 5);
}

function RelatedLinksSection({ links, storeName }: { links: RelatedLink[]; storeName: string }) {
  if (links.length === 0) return null;

  return (
    <section className={styles.relatedLinks} aria-label="Helpful related links">
      <div className={styles.relatedHeader}>
        <span className={styles.relatedKicker}>Helpful next steps</span>
        <h2>Plan your next visit to {storeName}</h2>
        <p>Use these store-specific links to keep exploring without hunting through the menu.</p>
      </div>
      <div className={styles.relatedGrid}>
        {links.map((link) => (
          <Link key={`${link.href}-${link.label}`} href={link.href} className={styles.relatedCard}>
            <strong>{link.label}</strong>
            {link.note && <span>{link.note}</span>}
          </Link>
        ))}
      </div>
    </section>
  );
}

function renderInline(text: string) {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*([^*]+)\*\*)|\[([^\]]+)\]\((\/[^)\s]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(<span key={`text-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>);

    if (match[2]) {
      nodes.push(<strong key={`bold-${match.index}`}>{match[2]}</strong>);
    } else if (match[3] && match[4]) {
      nodes.push(<Link key={`link-${match.index}`} href={match[4]} className={styles.contentLink}>{match[3]}</Link>);
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) nodes.push(<span key={`text-${lastIndex}`}>{text.slice(lastIndex)}</span>);
  return nodes.length ? nodes : text;
}

function renderContent(raw: string) {
  return raw.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("## ")) {
      return <h2 key={i} className={styles.contentH2}>{renderInline(trimmed.replace("## ", ""))}</h2>;
    }
    if (trimmed.startsWith("### ")) {
      return <h3 key={i} className={styles.contentH3}>{renderInline(trimmed.replace("### ", ""))}</h3>;
    }

    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((line) => line.trim().startsWith("- "));
      return (
        <ul key={i} className={styles.contentList}>
          {items.map((item, j) => (
            <li key={j}>{renderInline(item.replace(/^-\s*/, ""))}</li>
          ))}
        </ul>
      );
    }

    return <p key={i} className={styles.contentP}>{renderInline(trimmed)}</p>;
  });
}

function renderFaq(raw?: string) {
  if (!raw) return null;
  const entries = raw.split("\n").map((line) => line.trim()).filter(Boolean);
  if (entries.length === 0) return null;

  return (
    <section className={styles.body}>
      <h2 className={styles.contentH2}>FAQ</h2>
      {entries.map((entry, index) => <p key={index} className={styles.contentP}>{renderInline(entry)}</p>)}
    </section>
  );
}

export default function PostContent({ managerPost = null, slug, storeCode, storeName, ctaLine, isManagerPreview = false }: PostContentProps) {
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

        {isManagerPreview && (
          <div className={styles.previewNotice}>
            <strong>Manager preview</strong>
            <span>This draft or scheduled post is visible only while signed in. Public readers will not see scheduled posts before their publish time.</span>
          </div>
        )}

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
        <RelatedLinksSection links={relatedLinksForPost(post, storeCode)} storeName={storeName} />

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
