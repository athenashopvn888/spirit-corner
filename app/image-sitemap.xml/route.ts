import { getLiveMenu } from "../lib/liveMenu";
import { isGrabbaItem } from "../lib/products";

// ONE product loader (same as /api/tv-data), filled per request by __loadMenuData(). Grok 2026-10-09.
let __menu!: Awaited<ReturnType<typeof getLiveMenu>>;
async function __loadMenuData(): Promise<void> {
  __menu = await getLiveMenu();
  grabbaImages = __compute_grabbaImages();
  productEntries = __compute_productEntries();
  staticEntries = __compute_staticEntries();
}

const BASE = "https://spiritcornercannabis.com";
function __compute_grabbaImages() {
  return __menu.items
  .filter(isGrabbaItem)
  .map((item) => absoluteImageUrl(item.image));
}
let grabbaImages!: ReturnType<typeof __compute_grabbaImages>;

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

function __compute_staticEntries() {
  return [
  {
    page: BASE,
    images: [`${BASE}/banners/spirit_corner_cannabis_showcase.webp`],
  },
  {
    page: `${BASE}/info/weed-store-near-gatineau`,
    images: [
      `${BASE}/banners/spirit_corner_cannabis_showcase.webp`,
    ],
  },
  {
    page: `${BASE}/grabba-leaf-shakers`,
    images: grabbaImages,
  },
];
}
let staticEntries!: ReturnType<typeof __compute_staticEntries>;

function __compute_productEntries() {
  return [
  ...__menu.flowers
    .filter((flower) => flower.image)
    .map((flower) => ({
      page: `${BASE}/flower/${flower.slug}`,
      images: [absoluteImageUrl(flower.image)],
    })),
  ...__menu.items
    .filter((item) => item.image)
    .map((item) => ({
      page: `${BASE}/item/${item.slug}`,
      images: [absoluteImageUrl(item.image)],
    })),
];
}
let productEntries!: ReturnType<typeof __compute_productEntries>;

export const dynamic = "force-dynamic";

export async function GET() {
    await __loadMenuData();
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
