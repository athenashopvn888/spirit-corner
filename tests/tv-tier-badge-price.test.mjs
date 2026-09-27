import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const { gramsForField, tierPerGramLabel } = require("../app/lib/tierBadgePrice.js");

function flower(prices) {
  return {
    price3g: null,
    price5g: null,
    price14g: null,
    price28g: null,
    ...prices,
  };
}

test("tier badge uses the most common real per-gram price", () => {
  assert.equal(gramsForField("EXOTIC", "price5g"), 6);
  assert.equal(gramsForField("AA", "price5g"), 5);
  assert.equal(gramsForField("AAA+", "price3g"), 3);

  const exotic = [
    flower({ price3g: { regular: 40, sale: 30 }, price5g: { regular: 60, sale: null } }),
    flower({ price3g: { regular: 40, sale: null } }),
    flower({ price3g: { regular: 30, sale: null } }),
  ];
  assert.equal(tierPerGramLabel("EXOTIC", exotic), "$13.33/g");

  const aa = [
    flower({ price5g: { regular: 20, sale: null } }),
    flower({ price5g: { regular: 20, sale: null }, price14g: { regular: 45, sale: null } }),
  ];
  assert.equal(tierPerGramLabel("AA", aa), "$4/g");

  const premiumSixOnly = [flower({ price5g: { regular: 45, sale: null } })];
  assert.equal(tierPerGramLabel("PREMIUM", premiumSixOnly), "$7.50/g");
});

test("missing prices hide the per-gram badge instead of showing a dash", () => {
  assert.equal(tierPerGramLabel("EXOTIC", []), null);
  assert.equal(
    tierPerGramLabel("BUDGET", [flower({ price3g: { regular: null, sale: null } })]),
    null,
  );
  assert.equal(tierPerGramLabel("AA", [flower({})]), null);

  const saleOnly = [flower({ price3g: { regular: null, sale: 10 } })];
  assert.equal(tierPerGramLabel("BUDGET", saleOnly), "$3.33/g");

  const page = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  assert.match(page, /tierPerGramLabel\(tier, flowers\)/);
  assert.match(page, /unitLabel \? <span>\{unitLabel\}<\/span> : null/);
  assert.doesNotMatch(page, /-\/g/);
  assert.doesNotMatch(page, /TIER_UNIT/);
});
