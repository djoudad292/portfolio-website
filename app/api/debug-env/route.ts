import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET(_req: NextRequest) {
  return Response.json({
    hasDatabaseUrl: Boolean(process.env.DATABASE_URL),
    host: process.env.URL ?? null,
    time: new Date().toISOString(),
  });
}
