"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./blog.module.css";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx09_sDal1eMVF1r-hUck4e7oq_XBHEWhGvA79JuhZNQ6P4CdhCas0xE3FfexWQ3hq4/exec";

interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  date?: string;
  published?: boolean | string;
  excerpt?: string;
  metaDescription?: string;
  meta_description?: string;
  target_keyword?: string;
}

type BlogContentProps = {
  managerPosts?: BlogPost[];
  storeCode: string;
  storeName: string;
};

const STATIC_POSTS = [
  {
    slug: "indica-vs-sativa-vs-hybrid",
    title: "Indica vs Sativa vs Hybrid - What's the Difference?",
    excerpt: "Not sure which type to pick? We break down the effects, best uses, and top strains for each category so you can shop with confidence.",
    date: "2026-05-10",
    category: "Guides",
    emoji: "Guide",
    readTime: "5 min",
  },
  {
    slug: "how-to-choose-thc-level",
    title: "How to Choose the Right THC Level for You",
    excerpt: "From budget strains to exotic flower, here's how to pick the THC percentage that matches your tolerance and desired experience.",
    date: "2026-05-08",
    category: "Guides",
    emoji: "Guide",
    readTime: "4 min",
  },
  {
    slug: "edibles-dosing-guide",
    title: "Edibles Dosing Guide - Start Low, Go Slow",
    excerpt: "First time trying edibles? Our dosing notes explain why adult shoppers should start low, go slow, and read product labels carefully.",
    date: "2026-05-05",
    category: "Guides",
    emoji: "Guide",
    readTime: "6 min",
  },
  {
    slug: "best-dispensary-byward-market",
    title: "What Makes a Local Cannabis Store Easy to Visit?",
    excerpt: "A practical look at location, hours, product categories, and planning a simple adult 19+ store visit.",
    date: "2026-05-03",
    category: "News",
    emoji: "News",
    readTime: "3 min",
  },
  {
    slug: "vape-pen-vs-flower",
    title: "Vape Pen vs Flower - Which Should You Choose?",
    excerpt: "Convenience vs tradition. We compare format, discretion, and shopping considerations to help adults plan their visit.",
    date: "2026-04-28",
    category: "Guides",
    emoji: "Guide",
    readTime: "5 min",
  },
  {
    slug: "ottawa-cannabis-laws-2026",
    title: "Ottawa Cannabis Laws in 2026 - What You Need to Know",
    excerpt: "Age limits, public consumption rules, possession limits, and where adults should check current Ontario cannabis rules before shopping.",
    date: "2026-04-25",
    category: "News",
    emoji: "News",
    readTime: "4 min",
  },
];

function truncate(text: string, len: number) {
  if (text.length <= len) return text;
  return text.substring(0, len).replace(/\s+\S*$/, "") + "...";
}

function postExcerpt(post: BlogPost) {
  return post.excerpt || post.meta_description || post.metaDescription || truncate(post.content.replace(/[#*\-]/g, ""), 160);
}

function mergePosts(primary: BlogPost[], secondary: BlogPost[]) {
  const seen = new Set<string>();
  const merged: BlogPost[] = [];
  for (const post of [...primary, ...secondary]) {
    if (!post.slug || seen.has(post.slug)) continue;
    seen.add(post.slug);
    merged.push(post);
  }
  return merged;
}

export default function BlogContent({ managerPosts = [], storeCode, storeName }: BlogContentProps) {
  const [dynamicPosts, setDynamicPosts] = useState<BlogPost[]>(managerPosts);

  useEffect(() => {
    fetch(`${APPS_SCRIPT_URL}?action=blog&store=${encodeURIComponent(storeCode)}`)
      .then((r) => r.json())
      .then((data) => setDynamicPosts((current) => mergePosts(current, data.posts || [])))
      .catch(() => {});
  }, [storeCode]);

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroH1}>
            {storeName} <span className={styles.heroAccent}>Blog</span>
          </h1>
          <p className={styles.heroSub}>
            Cannabis guides, store updates, and local shopping notes for adult 19+ visitors.
          </p>
        </div>
      </section>

      {dynamicPosts.length > 0 && (
        <section className={styles.postsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Latest Posts</h2>
            <div className={styles.postsGrid}>
              {dynamicPosts.map((post) => (
                <Link
                  key={post.id || post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.postCard}
                >
                  <div className={styles.postEmoji}>Post</div>
                  <div className={styles.postMeta}>
                    <span className={styles.postCategory}>Blog</span>
                    <span className={styles.postDot}>/</span>
                    <span className={styles.postTime}>{post.author}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{postExcerpt(post)}</p>
                  <div className={styles.postDate}>
                    {post.date ? new Date(post.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }) : "Manager post"}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.postsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Guides &amp; Resources</h2>
          <div className={styles.postsGrid}>
            {STATIC_POSTS.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <div className={styles.postEmoji}>{post.emoji}</div>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <span className={styles.postDot}>/</span>
                  <span className={styles.postTime}>{post.readTime}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postDate}>
                  {new Date(post.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to Shop?</h2>
          <p className={styles.ctaSub}>
            Browse categories, store details, and adult 19+ shopping information.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/exotic" className={styles.ctaBtn}>
              Browse Menu
            </Link>
            <Link href="/faq" className={styles.ctaBtnSecondary}>
              FAQ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
