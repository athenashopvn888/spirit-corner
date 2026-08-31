import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(new URL("../app/nicotine-pouches-ottawa/page.tsx", import.meta.url), "utf8");

test("Ottawa nicotine pouch page consistently presents the verified $10 sale", () => {
  assert.match(page, /Nicotine Pouches in Ottawa — \$10 Sale Tins/);
  assert.match(page, /\$10 Nicotine Pouch Sale Tins/);
  assert.match(page, /currently listed on sale for \$10 each/);
  assert.doesNotMatch(page, /\$20/);
});

test("temporary sale language points shoppers to current verification", () => {
  assert.match(page, /href="\/items\/cigarettes"/);
  assert.match(page, /sale pricing can change/i);
});
