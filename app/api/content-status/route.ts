import { NextResponse } from "next/server";
import { isCigaretteScheduleActive } from "../../lib/cigaretteSchedule";

export const dynamic = "force-dynamic";

export function GET() {
  const active = isCigaretteScheduleActive();
  return NextResponse.json({ storeCode: "SCC01", renderedAt: new Date().toISOString(), cig: { web: active, tv: active, guides: active } }, { headers: { "Cache-Control": "no-store" } });
}
