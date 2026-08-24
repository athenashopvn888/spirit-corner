import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSlider.module.css";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=251%20Dalhousie%20St%2C%20Ottawa%2C%20ON%20K1N%201E7";

export default function HeroSlider() {
  return (
    <section className={styles.slider} aria-labelledby="home-hero-title">
      <div className={`${styles.slide} ${styles.slideActive}`}>
        <Image
          src="/banners/spirit_corner_cannabis_showcase.webp"
          alt="Spirit Corner Cannabis branded welcome graphic"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <div className={styles.badge}>251 Dalhousie St · Adults 19+</div>
          <h1 id="home-hero-title" className={styles.title}>
            24 Hour Downtown Ottawa Cannabis Store
          </h1>
          <p className={styles.caption}>Near ByWard Market in downtown Ottawa</p>
          <p className={styles.desc}>
            Compare five flower tiers plus listed edibles, vapes, pre-rolls,
            concentrates, cigarettes, nicotine pouches, and smoke accessories.
          </p>
          <div className={styles.btns}>
            <Link href="/menu" className={styles.btn}>
              Browse Menu
            </Link>
            <a
              href={DIRECTIONS_URL}
              className={styles.btnGhost}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
