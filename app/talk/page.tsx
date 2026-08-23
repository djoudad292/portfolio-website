import type { Metadata } from "next";
import TalkAgent from "@/components/TalkAgent";

export const metadata: Metadata = { title: "Live AI Agent Demo — djaouad.tech" };

export const runtime = "nodejs";

type LeadRow = { slug: string; company: string; site: string };

let pool: ReturnType<typeof import("pg").Pool> | null = null;
function db() {
  if (!process.env.DATABASE_URL) return null;
  if (!pool) {
    const { Pool } = require("pg");
    pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 3 });
  }
  return pool;
}

async function findLead(slug: string): Promise<LeadRow | null> {
  const conn = db();
  if (!conn) return null;
  try {
    const res = await conn.query(
      "SELECT slug, company, site FROM chat_leads WHERE slug = $1",
      [slug]
    );
    return (res.rows[0] as LeadRow) ?? null;
  } catch {
    return null;
  }
}

export default async function TalkPage({
  searchParams,
}: {
  searchParams?: Promise<{ l?: string; s?: string; c?: string }>;
}) {
  const sp = (await searchParams) ?? {};

  // Direct mode: /talk?l=<slug>&s=<https site>&c=<company>
  if (sp.l && sp.s && /^https?:\/\//i.test(sp.s)) {
    let host = sp.s;
    try {
      host = new URL(sp.s).host;
    } catch {}
    return <TalkAgent lead={sp.l} site={sp.s} company={sp.c || host} />;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        display: "grid",
        placeItems: "center",
        padding: 24,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 520, textAlign: "center", color: "#e8e8ef" }}>
        <div style={{ fontSize: 13, color: "#5b5b6b", marginBottom: 10, letterSpacing: 1 }}>
          DJAOUAD.TECH · FULL-STACK AI ENGINEER
        </div>
        <h1 style={{ fontSize: 22, marginBottom: 12 }}>This demo link is not active</h1>
        <p style={{ color: "#a5a5b4", lineHeight: 1.6, fontSize: 14, marginBottom: 24 }}>
          Every prospect gets a personal AI agent trained on their own website.
          Meanwhile, try the products running live right now:
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            ["AI Receptionist", "https://chat.djaouad.tech"],
            ["PDF Workspace", "https://docs.djaouad.tech"],
            ["Support Agent", "https://customer.djaouad.tech"],
          ].map(([name, url]) => (
            <a
              key={url}
              href={url}
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                border: "1px solid #26262f",
                background: "#181820",
                color: "#e8e8ef",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {name} →
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
