"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./HeroSlider.module.css";

const SLIDES = [
  {
    image: "/banners/spirit-corner-cannabis-ottawa-24-hour-dispensary-banner.png",
    alt: "Spirit Corner Cannabis downtown Ottawa 24 hour dispensary near Gatineau with premium weed native cigarettes vapes edibles and cannabis deals",
    title: "Downtown Ottawa 24 Hour Dispensary Near Gatineau",
    caption: "24 hour cannabis, native cigarettes, weed deals, vapes and edibles in downtown Ottawa near Gatineau",
    description: "Spirit Corner Cannabis is a downtown Ottawa cannabis dispensary near Gatineau offering premium cannabis flower, cheap weed deals, native cigarettes, prerolls, vapes, edibles, and loyalty rewards.",
    link: "/24-hour-ottawa-dispensary",
    btnText: "Browse Late Night Menu",
  },
  {
    image: "/banners/cheap-weed-ottawa-cannabis-tiers-spirit-corner-cannabis.png",
    alt: "Cheap weed Ottawa near Gatineau with exotic flower premium cannabis AAA plus flower and budget weed deals at Spirit Corner Cannabis downtown Ottawa",
    title: "Cheap Weed Ottawa Near Gatineau Cannabis Deals",
    caption: "Exotic flower, premium weed, AAA plus cannabis and budget weed in downtown Ottawa near Gatineau",
    description: "Spirit Corner Cannabis offers cheap weed in Ottawa with 4 cannabis tiers including exotic flower, premium cannabis, AAA plus flower, and budget weed deals near Gatineau and downtown Ottawa.",
    link: "/cheap-weed-ottawa",
    btnText: "Shop Cannabis Deals",
  },
  {
    image: "/banners/spirit-corner-cannabis-ottawa-weed-delivery-coming-soon-banner.png",
    alt: "Ottawa weed delivery coming soon for downtown Ottawa Gatineau Kanata Barrhaven Orleans Nepean Gloucester Stittsville and Findlay Creek",
    title: "Ottawa Weed Delivery Coming Soon Near Gatineau",
    caption: "Cannabis delivery updates for Ottawa Gatineau Barrhaven Kanata Orleans and surrounding areas",
    description: "Spirit Corner Cannabis is preparing weed delivery across Ottawa and near Gatineau including downtown Ottawa, Barrhaven, Kanata, Orleans, Nepean, Gloucester, Stittsville, Greely, and Findlay Creek.",
    link: "/cannabis-delivery-ottawa",
    btnText: "Register for Delivery Updates",
  },
];

export default function HeroSlider() {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurr((prev) => (prev + 1) % SLIDES.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.slider}>
      {SLIDES.map((slide, i) => {
        const isActive = i === curr;
        return (
          <div
            key={i}
            className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <div className={styles.badge}>FEATURED HIGHLIGHT</div>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.caption}>{slide.caption}</p>
              <p className={styles.desc}>{slide.description}</p>
              
              <div className={styles.btns}>
                <Link href={slide.link} className={styles.btn}>
                  {slide.btnText}
                </Link>
                <a href="#menu" className={styles.btnGhost}>
                  Explore Menu
                </a>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Indicators */}
      <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurr(i)}
            className={`${styles.dot} ${i === curr ? styles.dotActive : ""}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
