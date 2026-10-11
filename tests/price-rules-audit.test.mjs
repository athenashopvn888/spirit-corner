import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

test("audited FAQ deep link and server-rendered homepage ranges stay wired", () => {
  const faq = read("app/faq/page.tsx");
  const page = read("app/page.tsx");
  const home = read("app/page.tsx");
  assert.match(faq, /a: "Delivery is coming soon\. In-store prices are for purchases made in the store, and delivery orders will have their own prices\."/);
  assert.doesNotMatch(faq, /a: "No\. In-store prices/);
  assert.match(faq, /open=\{faq\.q === "Can I get the store price on a delivery order\?"\}/);
  assert.match(page, /export const dynamic = "force-dynamic"/);
  assert.match(page, /(?:getLiveMenu|fetchLiveProducts)/);
  assert.match(home, /storeTierRange\((?:initialFlowers|__menu\.flowers|liveFlowers)/);
  assert.match(faq, /title: "Prices"/);
  assert.doesNotMatch(read("app/lib/tierPriceRanges.ts"), /deliveryTierRanges/);
  for (const file of ["app/page.tsx", "app/menu/page.tsx", "app/[tier]/page.tsx"]) {
    assert.match(read(file), /IN-STORE PRICES ONLY\./);
    assert.match(read(file), /Delivery coming soon\./);
    assert.doesNotMatch(read(file), /DELIVERY PRICES ONLY|Delivery has its own prices/);
  }
});
