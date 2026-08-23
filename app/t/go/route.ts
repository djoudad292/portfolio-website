import { NextRequest } from "next/server";
import { trackEvent } from "@/lib/track";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const lead = params.get("l") ?? "unknown";
  const link = params.get("k");
  const target = params.get("to");

  if (!target || !/^https?:\/\//i.test(target)) {
    return new Response(null, { status: 302, headers: { Location: "https://djaouad.tech" } });
  }

  await trackEvent({ lead, kind: "click", link, target, ua: req.headers.get("user-agent") });

  // Raw Response avoids search-param merging some platforms apply to NextResponse.redirect
  return new Response(null, {
    status: 302,
    headers: { Location: target, "Cache-Control": "no-store" },
  });
}
