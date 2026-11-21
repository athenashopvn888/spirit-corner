import test from "node:test";
import assert from "node:assert/strict";
import { isCigaretteScheduleActive } from "../app/lib/cigaretteSchedule.ts";

test("Toronto cigarette schedule follows the approved weekly windows", () => {
  assert.equal(isCigaretteScheduleActive(new Date("2026-11-20T21:59:00Z")), false);
  assert.equal(isCigaretteScheduleActive(new Date("2026-11-20T22:00:00Z")), true);
  assert.equal(isCigaretteScheduleActive(new Date("2026-11-21T17:00:00Z")), true);
  assert.equal(isCigaretteScheduleActive(new Date("2026-11-23T12:59:00Z")), true);
  assert.equal(isCigaretteScheduleActive(new Date("2026-11-23T13:00:00Z")), false);
  assert.equal(isCigaretteScheduleActive(new Date("2026-11-24T00:59:00Z")), false);
  assert.equal(isCigaretteScheduleActive(new Date("2026-11-24T01:00:00Z")), true);
});
