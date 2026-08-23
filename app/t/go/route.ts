import { NextRequest, NextResponse } from "next/server";
import { trackEvent } from "@/lib/track";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const lead = params.get("l") ?? "unknown";
  const link = params.get("k");
  const target = params.get("to");

  if (!target || !/^https?:\/\//i.test(target)) {
    return NextResponse.redirect("https://djaouad.tech", 302);
  }

  await trackEvent({ lead, kind: "click", link, target, ua: req.headers.get("user-agent") });

  const res = NextResponse.redirect(target, 302);
  res.headers.set("Cache-Control", "no-store");
  return res;
}
