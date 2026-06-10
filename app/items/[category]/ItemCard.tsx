"use client";

import Link from "next/link";
import { type ItemProduct } from "../../lib/products";
import styles from "./items.module.css";

export default function ItemCard({ item, catColor }: { item: ItemProduct; catColor: string }) {
  return (
    <Link href={`/item/${item.slug}`} className={styles.card} style={{ "--cat-color": catColor } as React.CSSProperties}>
      <div className={styles.cardMedia}>
        {item.image ? (
          <img src={item.image} alt={item.name} loading="lazy" className={styles.cardImg} 
            onError={(e) => {
              const t = e.currentTarget;
              if (t.src.indexOf('r2.dev') !== -1 || t.src.indexOf('images.torontodispensaryhub.com') !== -1) {
                const filename = t.src.split('/').pop();
                t.src = 'https://athena-cannabis-images.vercel.app/products/' + filename;
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
