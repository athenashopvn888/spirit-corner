import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
const finder = readFileSync(new URL("../app/components/MenuFinder.tsx", import.meta.url), "utf8");
const flowers = readFileSync(new URL("../app/lib/flowers.json", import.meta.url), "utf8");

test("protected tiers display 6g while AA continues to display 5g", () => {
  assert.match(tv, /isTop3 \? "6g" : "5g"/);
  assert.match(finder, /\["EXOTIC", "PREMIUM", "AAA\+"\]/);
  assert.match(finder, /isSixGramTier \? "6g" : "5g"/);
  assert.match(tv, /\$20 5g AA/);
});

test("the correction preserves the backend price5g field", () => {
  assert.match(tv, /hi\.price5g/);
  assert.match(finder, /product\.price5g/);
  assert.match(flowers, /"price5g"/);
});
