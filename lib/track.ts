import { Pool } from "pg";

let pool: Pool | null = null;

function getPool(): Pool | null {
  if (!process.env.DATABASE_URL) return null;
  if (!pool) pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 3 });
  return pool;
}

export type TrackEvent = {
  lead: string;
  kind: "open" | "click";
  link?: string | null;
  target?: string | null;
  ua?: string | null;
  ip?: string | null;
};

export async function trackEvent(ev: TrackEvent): Promise<boolean> {
  const db = getPool();
  try {
    if (db) {
      await db.query(
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
      await db.query(
        "INSERT INTO email_track_events (lead, kind, link, target, ua) VALUES ($1,$2,$3,$4,$5)",
        [ev.lead, ev.kind, ev.link ?? null, ev.target ?? null, ev.ua ?? null]
      );
    }
  } catch (err) {
    console.error(JSON.stringify({ evt: "track_error", error: String(err), lead: ev.lead }));
  }
  // Always log to stdout so events are visible in Vercel logs even without DATABASE_URL
  console.log(JSON.stringify({ evt: ev.kind, lead: ev.lead, link: ev.link, ts: Date.now() }));
  return true;
}
