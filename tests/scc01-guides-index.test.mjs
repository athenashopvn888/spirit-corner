import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const registry = read("app/lib/guideRegistry.ts");
const page = read("app/guides/page.tsx");

test("SCC01 guides index is registry-driven and indexable", () => {
  assert.equal((registry.match(/\{ slug: "/g) ?? []).length, 28);
  assert.match(registry, /export function getGuidesByLane\(\)/);
  assert.match(page, /getGuidesByLane\(\)/);
  assert.match(page, /title: \{ absolute: "Guides \| Spirit Corner Cannabis" \}/);
  assert.match(page, /alternates: \{ canonical: CANONICAL \}/);
  assert.match(page, /robots: \{ index: true, follow: true \}/);
  assert.match(page, /"@type": "WebPage"/);
  assert.match(page, /"@type": "BreadcrumbList"/);
  assert.doesNotMatch(page, /"@type": "(?:Product|Offer)"/);
});

test("SCC01 Resources, navigation, footer and sitemap expose Guides", () => {
  const resourceData = read("app/resources/resourceData.ts");
  const navbar = read("app/components/Navbar.tsx");
  const footer = read("app/components/Footer.tsx");
  const sitemap = read("app/sitemap.ts");
  assert.match(resourceData, /title: "Name Guides", href: "\/guides"/);
  assert.ok(navbar.indexOf('href: "/guides"') > navbar.indexOf('href: "/resources"'));
  assert.ok(navbar.indexOf('href: "/guides"') < navbar.indexOf('href: "/cannabis-delivery-ottawa"'));
  assert.match(footer, /<Link href="\/guides">Guides<\/Link>/);
  assert.match(sitemap, /url: `\$\{BASE\}\/guides`/);
  assert.match(sitemap, /GUIDE_REGISTRY\.map/);
});
