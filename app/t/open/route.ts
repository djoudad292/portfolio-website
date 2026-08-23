import { NextRequest, NextResponse } from "next/server";
import { trackEvent } from "@/lib/track";

export const runtime = "nodejs";

const TRANSPARENT_GIF = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

export async function GET(req: NextRequest) {
  const lead = req.nextUrl.searchParams.get("l") ?? "unknown";
  await trackEvent({ lead, kind: "open", ua: req.headers.get("user-agent") });

  return new NextResponse(new Uint8Array(TRANSPARENT_GIF), {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate, private",
      Pragma: "no-cache",
    },
  });
}
