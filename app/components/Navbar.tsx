"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.css";

const ALL_LINKS = [
  { href: "/careers/budtender", label: "Join Team" },
  { href: "/exotic", label: "Exotic" },
  { href: "/premium", label: "Premium" },
  { href: "/aaa", label: "AAA+" },
  { href: "/aa", label: "AA" },
  { href: "/budget", label: "Budget" },
  { href: "/items/edibles", label: "Edibles" },
  { href: "/items/prerolls", label: "Pre-Rolls" },
  { href: "/items/vapes", label: "Nic Vape" },
  { href: "/items/vape-disposables", label: "THC Vape" },
  { href: "/items/concentrates", label: "Concentrates" },
  { href: "/items/magic", label: "Magic Stuff" },
  { href: "/items/cigarettes", label: "Cigarettes" },
  { href: "/items/add-ons", label: "Accessories" },
  { href: "/resources", label: "Resources" },
  { href: "/cannabis-delivery-ottawa", label: "Delivery" },
  { href: "/faq", label: "FAQ" },
  { href: "/games", label: "Games" },
];

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=251%20Dalhousie%20St%2C%20Ottawa%2C%20ON%20K1N%201E7";
const ORDER_URL = "/cannabis-delivery-ottawa";
const CTA_HIDDEN_ROUTES = ["/manager-blog", "/tv", "/tv2"];

export default function Navbar() {
  const pathname = usePathname();
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const [canAdvance, setCanAdvance] = useState(false);
  const updateScrollState = useCallback(() => {
    const scrollBar = scrollBarRef.current;
    if (!scrollBar) return;
    setCanAdvance(scrollBar.scrollWidth - scrollBar.clientWidth - scrollBar.scrollLeft > 2);
  }, []);

  useEffect(() => {
    const scrollBar = scrollBarRef.current;
    if (!scrollBar) return;
    updateScrollState();
    scrollBar.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(scrollBar);
    if (scrollBar.firstElementChild) resizeObserver.observe(scrollBar.firstElementChild);
    return () => {
      scrollBar.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [pathname, updateScrollState]);

  const advanceScrollBar = () => {
    const scrollBar = scrollBarRef.current;
    if (!scrollBar) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scrollBar.scrollBy({ left: Math.max(180, scrollBar.clientWidth * 0.75), behavior: reduceMotion ? "auto" : "smooth" });
  };
  const showQuickCtas = !CTA_HIDDEN_ROUTES.some((route) =>
    pathname?.startsWith(route)
  );

  return (
    <nav className={styles.navbar} id="main-nav">
      {/* Top bar: logo + open now */}
      <div className={styles.topBar}>
        <Link href="/" className={styles.logo}>
          <img
            src="/banners/logo.jpg"
            alt="Spirit Corner Cannabis - Ottawa Dispensary"
            className={styles.logoImg}
          />
        </Link>
        <div className={styles.topBarRight}>
          <Link href="/games" className={styles.gamesBtn}>
            Play Games
          </Link>
          <span className={styles.open}>
            <span className={styles.dot}></span>
            Open Now
          </span>
        </div>
      </div>

      {/* Scrollable link bar */}
      <div className={styles.scrollShell}>
        <div ref={scrollBarRef} id="store-menu-scrollbar" className={styles.scrollBar}>
          <div className={styles.scrollInner}>
          {ALL_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          </div>
        </div>
        {canAdvance && (
          <button type="button" className={styles.scrollAdvance} aria-label="Show more navigation links" aria-controls="store-menu-scrollbar" onClick={advanceScrollBar}>
            <span aria-hidden="true">›</span>
          </button>
        )}
      </div>
      {showQuickCtas && (
        <div className={styles.quickCtaBar} aria-label="Spirit Corner quick actions">
          <a
            href={DIRECTIONS_URL}
            className={`${styles.quickCtaButton} ${styles.quickCtaDirections}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
          <Link
            href={ORDER_URL}
            className={`${styles.quickCtaButton} ${styles.quickCtaOrder}`}
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
}
