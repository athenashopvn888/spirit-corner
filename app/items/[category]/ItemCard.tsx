"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { type ItemProduct } from "../../lib/products";
import styles from "./items.module.css";

export default function ItemCard({ item, catColor }: { item: ItemProduct; catColor: string }) {
  const [imageSrc, setImageSrc] = useState(item.image);

  return (
    <Link href={`/item/${item.slug}`} className={styles.card} style={{ "--cat-color": catColor } as React.CSSProperties}>
      <div className={styles.cardMedia}>
        {item.image ? (
          <Image
            src={imageSrc}
            alt={`${item.name} product listing`}
            fill
            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
            className={styles.cardImg}
            onError={() => {
              if (imageSrc.includes("r2.dev")) {
                const filename = imageSrc.split("/").pop();
                setImageSrc(`https://athena-cannabis-images.vercel.app/products/${filename}`);
              }
            }}
          />
        ) : (
          <div className={styles.cardPlaceholder}>
            {item.name[0]}
          </div>
        )}
        <div className={styles.cardBadges}>
          {item.thc && <span className={styles.badgeThc}>{item.thc}</span>}
          {item.mg && <span className={styles.badgeMg}>{item.mg}</span>}
        </div>
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardCategory}>{item.category}</span>
        <h3 className={styles.cardName}>{item.name}</h3>
        {item.price && (
          <div className={styles.cardPrice}>
            <span className={styles.priceVal}>{item.price.startsWith('$') ? item.price : `$${item.price}`}</span>
            <span className={styles.priceUnit}>each</span>
          </div>
        )}
        <span className={styles.skuTag}>SKU {item.sku}</span>
      </div>
    </Link>
  );
}
