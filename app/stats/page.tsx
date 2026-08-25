

export const dynamic = "force-dynamic";
export const metadata = { title: "Stats", robots: { index: false } };

const KEY = process.env.STATS_KEY ?? "dj-2026-private";

type Row = { lead: string; kind: string; link: string | null; created_at: string; ua?: string };

async function getRows(): Promise<Row[] | null> {
  if (!process.env.DATABASE_URL) return null;
  const { Pool } = await import("pg");
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 3 });
  try {
    const r = await pool.query(
      "SELECT lead, kind, link, created_at FROM email_track_events ORDER BY created_at DESC LIMIT 60"
    );
    return r.rows;
  } catch {
    return null;
  } finally {
    await pool.end();
  }
}

export default async function StatsPage({ searchParams }: { searchParams: Promise<{ k?: string }> }) {
  const { k } = await searchParams;
  if (k !== KEY) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="font-mono text-sm text-muted-foreground">404</p>
      </main>
    );
  }
  const rows = await getRows();
  return (
    <main className="min-h-screen bg-background text-foreground px-5 py-12">
      <div className="mx-auto max-w-xl">
        <h1 className="font-display text-3xl tracking-tight">Email tracker</h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Most recent events</p>
        {!rows ? (
          <p className="mt-6 text-sm text-destructive">DATABASE_URL missing in this environment.</p>
        ) : rows.length === 0 ? (
          <p className="mt-6 text-sm text-muted-foreground">No events yet.</p>
        ) : (
          <div className="mt-8 space-y-2 font-mono text-xs">
            {rows.map((r, i) => (
              <div key={i} className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3">
                <span className={r.kind === "click" ? "text-primary font-bold" : ""}>
                  {new Date(r.created_at).toISOString().slice(5, 16).replace("T", " ")} · {r.kind.toUpperCase()} · {r.lead}
                  {r.link ? ` · ${r.link}` : ""}
                </span>
              </div>
            ))}
          </div>
        )}
        <p className="mt-8 font-mono text-[10px] text-muted-foreground">refresh = latest · keep this URL private</p>
      </div>
    </main>
  );
}
