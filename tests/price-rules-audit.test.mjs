import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

test("audited FAQ deep link and server-rendered homepage ranges stay wired", () => {
  const faq = read("app/faq/page.tsx");
  const page = read("app/page.tsx");
  const home = read("app/page.tsx");
  assert.match(faq, /a: "In-store prices are for purchases made in the store\. Delivery orders always use delivery prices\."/);
  assert.doesNotMatch(faq, /a: "No\. In-store prices/);
  assert.match(faq, /open=\{faq\.q === "Can I get the store price on a delivery order\?"\}/);
  assert.match(page, /export const dynamic = "force-dynamic"/);
  assert.match(page, /(?:getLiveMenu|fetchLiveProducts)/);
  assert.match(home, /storeTierRange\((?:initialFlowers|__menu\.flowers|liveFlowers)/);
  assert.match(faq, /title: "Prices"/);
  assert.doesNotMatch(read("app/lib/tierPriceRanges.ts"), /deliveryTierRanges/);
  for (const file of ["app/page.tsx", "app/menu/page.tsx", "app/[tier]/page.tsx"]) assert.doesNotMatch(read(file), /Delivery has its own prices/);
});
