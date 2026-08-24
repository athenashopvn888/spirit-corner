import { allFlowers, allItems } from "../lib/products";

const BASE = "https://spiritcornercannabis.com";
const hasShaker = allItems.some(
  (item) => item.slug === "grabba-shaker-redrose-red-herring"
);

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absoluteImageUrl(value: string) {
  if (/^https?:\/\//i.test(value)) return value;
  return `${BASE}${value.startsWith("/") ? value : `/${value}`}`;
}

const staticEntries = [
  {
    page: BASE,
    images: [`${BASE}/storeFavicon.webp`],
  },
  {
    page: `${BASE}/info/weed-store-near-gatineau`,
    images: [
      `${BASE}/banners/spirit_corner_cannabis_showcase.webp`,
    ],
  },
  {
    page: `${BASE}/grabba-leaf-shakers`,
    images: [
      `${BASE}/products/GRABBA-2G.webp`,
      ...(hasShaker ? [`${BASE}/products/GrabbaShaker.webp`] : []),
    ],
  },
];

const productEntries = [
  ...allFlowers
    .filter((flower) => flower.image)
    .map((flower) => ({
      page: `${BASE}/flower/${flower.slug}`,
      images: [absoluteImageUrl(flower.image)],
    })),
  ...allItems
    .filter((item) => item.image)
    .map((item) => ({
      page: `${BASE}/item/${item.slug}`,
      images: [absoluteImageUrl(item.image)],
    })),
];

export const dynamic = "force-static";

export function GET() {
  const urls = [...staticEntries, ...productEntries]
    .map(
      ({ page, images }) =>
        `  <url>\n    <loc>${escapeXml(page)}</loc>\n${images
          .map(
            (image) =>
              `    <image:image>\n      <image:loc>${escapeXml(image)}</image:loc>\n    </image:image>`
          )
          .join("\n")}\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
