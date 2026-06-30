"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./manager-blog-login.module.css";

export default function ManagerBlogLogin({ storeName }: { storeName: string }) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/manager-blog/session", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json().catch(() => ({}));
    setLoading(false);

    if (!response.ok) {
      setError(data.error || "Unable to sign in.");
      return;
    }

    router.replace(data.redirect || "/manager-blog-admin");
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.eyebrow}>Manager blog access</p>
        <h1 className={styles.title}>{storeName}</h1>
        <p className={styles.copy}>Sign in to create, save, and publish manager-submitted blog posts for this store only.</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Username
            <input className={styles.input} value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" required />
          </label>
          <label className={styles.label}>
            Password
            <input className={styles.input} value={password} onChange={(event) => setPassword(event.target.value)} type="password" autoComplete="current-password" required />
          </label>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </section>
    </main>
  );
}