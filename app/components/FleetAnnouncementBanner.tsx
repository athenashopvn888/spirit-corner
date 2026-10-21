"use client";

import { SHOW_CIGARETTES } from "../lib/siteConfig";

import CigaretteSeasonalNotice from "./CigaretteSeasonalNotice";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";

const lineStyle = {
  margin: 0,
  padding: "14px 16px",
  color: "#fff",
  fontSize: "clamp(18px, 3vw, 32px)",
  fontWeight: 900,
  lineHeight: 1.15,
  letterSpacing: "0.02em",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
};

function isHalloweenNoticeActive(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const value = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const dateKey = Number(`${value.year}${value.month}${value.day}`);

  return dateKey >= 20261014 && dateKey <= 20261031;
}

export default function FleetAnnouncementBanner() {
  const announcementRef = useRef<HTMLElement>(null);
  const [navClearance, setNavClearance] = useState<number | null>(null);
  const [showHalloweenNotice, setShowHalloweenNotice] = useState(false);

  useEffect(() => {
    const updateVisibility = () =>
      setShowHalloweenNotice(isHalloweenNoticeActive(new Date()));

    updateVisibility();
    const timer = window.setInterval(updateVisibility, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const announcement = announcementRef.current;
    const nav = document.getElementById("main-nav");
    if (!announcement || !nav) return;

    let frame = 0;
    const updateClearance = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        // Document coordinates (scroll-safe); only a fixed nav overlaps page flow.
        const currentMargin = Number.parseFloat(window.getComputedStyle(announcement).marginTop) || 0;
        const flowTopDoc = announcement.getBoundingClientRect().top + window.scrollY - currentMargin;
        const nextClearance = window.getComputedStyle(nav).position === "fixed" ? Math.min(400, Math.max(0, Math.ceil(nav.getBoundingClientRect().bottom - flowTopDoc))) : 0;
        setNavClearance((current) =>
          current === nextClearance ? current : nextClearance,
        );
      });
    };

    updateClearance();
    const resizeObserver = new ResizeObserver(updateClearance);
    resizeObserver.observe(nav);
    window.addEventListener("resize", updateClearance);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateClearance);
    };
  }, []);

  return (
    <aside
      ref={announcementRef}
      data-fleet-homepage-announcement=""
      aria-label="Store announcements"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        minHeight: 0,
        marginTop: navClearance === null ? undefined : navClearance,
        position: "relative",
        zIndex: 50,
      }}
    >
      {showHalloweenNotice ? (
        <p
          data-halloween-hours-notice=""
          style={{ ...lineStyle, background: "#166534" }}
        >
          Happy Halloween! Spirit Corner Cannabis is open regular hours on Saturday, October 31.
        </p>
      ) : null}
      <CigaretteSeasonalNotice />
      {SHOW_CIGARETTES ? (<p style={{ ...lineStyle, background: "#b91c1c" }}>
        CIGARETTE DEAL ! 2 PACK $5 MIX AND MATCH
      </p>) : null}
      {SHOW_CIGARETTES ? (<p style={{ ...lineStyle, background: "#c2410c" }}>
        EXCLUSIVE SPECIAL PREMIUM GRADE BB FULL, BB LIGHT &amp; BELMONT KING SIZE!
      </p>) : null}
      {SHOW_CIGARETTES ? (<Link href="/items/cigarettes" data-bb-premium-banner="" aria-label="Shop BB and Belmont Premium Grade cigarettes">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/banners/BB_Belmont_Premium_Grade.webp"
          alt="Exclusive Premium Grade BB Full Flavor, BB Lights, and Belmont King Size cigarettes at Spirit Corner Cannabis."
        />
      </Link>) : null}
      {SHOW_CIGARETTES ? (<Link href="/items/cigarettes" data-belmont-mix-match-banner="" aria-label="BELMONT KING SIZE $10 - 2PACK BB $5 MIX & MATCH">
        <span data-belmont-offer-lead="">BELMONT KING SIZE $10 -</span>
        <span data-belmont-offer-tail=""> 2PACK BB $5 MIX &amp; MATCH</span>
      </Link>) : null}
    </aside>
  );
}
