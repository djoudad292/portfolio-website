import { NextRequest } from "next/server";
import { getDatabaseUrl } from "@/lib/track";
import { Pool } from "pg";

export const runtime = "nodejs";

export async function GET(_req: NextRequest) {
  const url = getDatabaseUrl();
  const base = {
    rawPresent: Boolean(process.env.DATABASE_URL),
    sanitized: Boolean(url),
    dbHostPart: url ? (() => { try { return new URL(url).host; } catch { return "unparseable"; } })() : null,
    time: new Date().toISOString(),
  };
  if (!url) return Response.json({ ...base, writeTest: "skipped — no clean DATABASE_URL" });
  const pool = new Pool({ connectionString: url, max: 1, ssl: { rejectUnauthorized: false } });
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS email_track_events (
         id serial PRIMARY KEY,
         lead text NOT NULL,
         kind text NOT NULL,
         link text,
         target text,
         ua text,
         created_at timestamptz NOT NULL DEFAULT now()
       )`
    );
    const ins = await pool.query(
      "INSERT INTO email_track_events (lead, kind, link, target) VALUES ($1,$2,$3,$4) RETURNING id",
      ["debug-probe", "click", "debug", "env-write-test"]
    );
    return Response.json({ ...base, writeTest: "OK", insertedId: ins.rows[0].id });
  } catch (e) {
    return Response.json({ ...base, writeTest: `ERROR: ${String(e)}` });
  } finally {
    await pool.end().catch(() => {});
  }
}
