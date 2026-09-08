import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { formatPerGram, getPrice5gDisplay } from "../app/lib/flowerDisplayWeight.ts";

const card = readFileSync(new URL("../app/components/FlowerCard.tsx", import.meta.url), "utf8");

test("normal storefront FlowerCard maps protected tiers to 6g and preserves AA at 5g", () => {
  for (const tier of ["EXOTIC", "PREMIUM", "AAA+"]) {
    assert.deepEqual(getPrice5gDisplay(tier), { label: "6g", grams: 6 });
  }
  assert.deepEqual(getPrice5gDisplay("AA"), { label: "5g", grams: 5 });
  assert.deepEqual(getPrice5gDisplay("BUDGET"), { label: "5g", grams: 5 });
  assert.match(card, /getPrice5gDisplay\(tierKey\)/);
  assert.match(card, /price: flower\.price5g/);
});

test("normal storefront FlowerCard computes per-gram math from displayed grams", () => {
  assert.equal(formatPerGram(60, 6), "10.00");
  assert.equal(formatPerGram(45, 6), "7.50");
  assert.equal(formatPerGram(30, 6), "5.00");
  assert.equal(formatPerGram(20, 5), "4.00");
  assert.doesNotMatch(card, /grams:\s*5,\s*\n\s*price:\s*flower\.price5g/);
});
