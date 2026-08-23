import { NextRequest } from "next/server";
import { trackEvent } from "@/lib/track";

export const runtime = "nodejs";
export const maxDuration = 45;

const ALLOWED_HOSTS = new Set([
  "https://djaouad.tech",
  "https://www.djaouad.tech",
  "https://mail.google.com",
  "https://mail.yahoo.com",
  "https://outlook.live.com",
  "https://outlook.office.com",
]);

type Chunk = { url: string; text: string };
type SiteCache = { host: string; chunks: Chunk[]; fetchedAt: number; pages: number };
const siteCache = new Map<string, SiteCache>();
const SITE_TTL_MS = 1000 * 60 * 30;

function cors(origin: string | null, sourceOrigin: string | null): Record<string, string> {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Origin": origin && ALLOWED_HOSTS.has(origin) ? origin : "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Cache-Control": "no-store",
  };
  if (sourceOrigin && /^https?:\/\/[^\s]+$/.test(sourceOrigin)) {
    headers["AMP-Access-Control-Allow-Source-Origin"] = sourceOrigin;
  }
  return headers;
}

export async function OPTIONS(req: NextRequest) {
  const url = new URL(req.url);
  return new Response(null, {
    status: 204,
    headers: cors(req.headers.get("origin"), url.searchParams.get("__amp_source_origin")),
  });
}

// ---------- site crawling ----------

function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchText(url: string, timeoutMs = 9000): Promise<string | null> {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(timeoutMs),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; LiveAgentDemo/1.0)" },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const text = htmlToText(html);
    return text.length > 80 ? text : null;
  } catch {
    return null;
  }
}

function chunkText(text: string, size = 700): string[] {
  const out: string[] = [];
  for (let i = 0; i < text.length; i += size) out.push(text.slice(i, i + size));
  return out.slice(0, 40);
}

async function ensureSite(siteUrl: string): Promise<SiteCache | null> {
  let parsed: URL;
  try {
    parsed = new URL(siteUrl);
    if (!/^https?:$/.test(parsed.protocol)) return null;
  } catch {
    return null;
  }
  const key = parsed.host;
  const cached = siteCache.get(key);
  if (cached && Date.now() - cached.fetchedAt < SITE_TTL_MS) return cached;

  const home = await fetchText(parsed.origin + "/");
  if (!home) return null;
  const chunks: Chunk[] = chunkText(home).map((t) => ({ url: parsed.origin + "/", text: t }));

  // follow up to 4 same-host links for services/about/pricing depth
  try {
    const res = await fetch(parsed.origin + "/", { signal: AbortSignal.timeout(9000) });
    const html = await res.text();
    const links = [...html.matchAll(/href="([^"#]+)"/g)]
      .map((m) => m[1])
      .filter((h) => /^https?:\/\//i.test(h) ? new URL(h).host === parsed.host : h.startsWith("/"))
      .filter((h) => /(about|service|price|pricing|plan|product|course|program|contact|team)/i.test(h))
      .slice(0, 4);
    const uniq = [...new Set(links)].slice(0, 4);
    const extra = await Promise.all(
      uniq.map(async (l) => {
        const abs = l.startsWith("/") ? parsed.origin + l : l;
        const t = await fetchText(abs);
        return t ? { abs, t } : null;
      })
    );
    for (const e of extra) {
      if (!e) continue;
      chunks.push(...chunkText(e.t).map((text) => ({ url: e.abs, text })));
    }
  } catch {}

  const cacheEntry: SiteCache = { host: parsed.host, chunks, fetchedAt: Date.now(), pages: chunks.length ? 1 + Math.min(4, Math.floor(chunks.length / 8)) : 1 };
  siteCache.set(key, cacheEntry);
  return cacheEntry;
}

// ---------- relevance + reasoning ----------

const STOP = new Set(["the","a","an","is","are","do","does","what","how","your","you","we","of","and","to","in","for","on","can","with","this","that","it","i","my"]);

function rankChunks(chunks: Chunk[], question: string): Chunk[] {
  const terms = question.toLowerCase().split(/\W+/).filter((w) => w.length > 2 && !STOP.has(w));
  const scored = chunks.map((c) => {
    const lower = c.text.toLowerCase();
    let score = 0;
    for (const t of terms) {
      const hits = lower.split(t).length - 1;
      score += hits;
    }
    return { c, score };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, 6).map((s) => s.c);
}

async function reason(host: string, question: string, context: Chunk[]): Promise<{ answer: string; provider: string }> {
  const baseUrl = process.env.LLM_BASE_URL || "https://generativelanguage.googleapis.com/v1beta/openai";
  const apiKey = process.env.GEMINI_API_KEY || process.env.LLM_API_KEY;
  const model = process.env.LLM_MODEL || "gemini-2.5-flash";
  if (!apiKey) {
    // Extractive fallback so the demo never dead-ends
    const best = context.slice(0, 2).map((c) => `“${c.text.slice(0, 220)}…”`).join("\n");
    return {
      answer: `Here's what ${host} says that's most relevant:\n${best}`,
      provider: "extractive",
    };
  }
  const res = await fetch(baseUrl.replace(/\/$/, "") + "/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      stream: false,
      max_tokens: 300,
      messages: [
        {
          role: "system",
          content:
            `You are the live AI agent of the website ${host}, deployed as a demo by Djaouad Frih (full-stack AI engineer). ` +
            "Answer the user's question using ONLY the website content provided. Be helpful, concrete and under 120 words. " +
            "If the content does not cover it, say so briefly and suggest booking a call with the team.",
        },
        {
          role: "user",
          content: `WEBSITE CONTENT:\n${context.map((c, i) => `[${i + 1}] (${c.url})\n${c.text}`).join("\n\n")}\n\nQUESTION: ${question}`,
        },
      ],
    }),
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) throw new Error(`llm ${res.status}`);
  const data = await res.json();
  const answer =
    data?.choices?.[0]?.message?.content ??
    data?.choices?.[0]?.delta?.content ??
    "";
  if (!answer) throw new Error("empty llm answer");
  return { answer: String(answer).trim(), provider: model };
}

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const headers = cors(req.headers.get("origin"), url.searchParams.get("__amp_source_origin"));
  try {
    const body = await req.json().catch(() => ({}));
    const question = typeof body?.question === "string" ? body.question.slice(0, 500) : "";
    const lead = typeof body?.l === "string" ? body.l : url.searchParams.get("l") ?? "unknown";
    const site = typeof body?.s === "string" && body.s ? body.s : url.searchParams.get("s") ?? "";

    if (!question.trim()) {
      return Response.json({ error: "Type a question first." }, { status: 400, headers });
    }

    const siteCacheEntry = await ensureSite(site);
    if (!siteCacheEntry || !siteCacheEntry.chunks.length) {
      return Response.json(
        { error: "I could not reach the website right now — use any button below to test on the live page." },
        { status: 502, headers }
      );
    }

    const top = rankChunks(siteCacheEntry.chunks, question);
    const trace = [
      `Browsed ${siteCacheEntry.host} (${siteCacheEntry.pages}+ pages)`,
      `Matched ${top.length} relevant sections`,
    ];

    let answer: string;
    try {
      const r = await reason(siteCacheEntry.host, question, top);
      answer = r.answer;
      trace.push(`Reasoned via ${r.provider}`);
    } catch {
      const best = top[0];
      answer = `From ${siteCacheEntry.host}: “${best.text.slice(0, 260)}…”`;
      trace.push("LLM busy — returned direct excerpt");
    }

    await trackEvent({ lead, kind: "chat", link: "in-email-agent-test", target: question.slice(0, 200) });

    return Response.json({ answer, trace, sources: [...new Set(top.map((c) => c.url))].slice(0, 3) }, { headers });
  } catch {
    return Response.json(
      { error: "The agent is warming up — try again in a moment, or use the buttons below." },
      { status: 502, headers }
    );
  }
}
