import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const content = readFileSync(new URL("../app/lib/tierSeoContent.ts", import.meta.url), "utf8");
const page = readFileSync(new URL("../app/[tier]/page.tsx", import.meta.url), "utf8");

test("SCC01 tier copy is complete and keeps the broad Weed owner", () => {
  for (const tier of ["Exotic", "Premium", "AAA+", "AA", "Budget"]) {
    assert.match(content, new RegExp(`${tier.replace("+", "\\+")} Weed & Cannabis Flower in Ottawa`));
  }
  assert.match(content, /\/weed-dispensary-ottawa\//);
  assert.match(page, /TIER_COMPARE/);
  assert.match(page, /metaDescription/);
});

test("SCC01 campaign copy excludes unsupported factual and manager-lane changes", () => {
  assert.doesNotMatch(content, /\b(?:THC|terpene|medical|in stock|hours|Dalhousie|\$\d|\d+g)\b/i);
  assert.doesNotMatch(content, /delivery|nicotine|Tony|MasterAdmin/i);
});
