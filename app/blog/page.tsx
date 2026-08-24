import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes on Building AI Agents | Djaouad Frih",
  description: "Build-in-public notes from a solo AI engineer shipping production agents, RAG systems and MCP servers.",
};

const posts = [
  {
    slug: "portfolio-mcp-server",
    date: "2026-08-24",
    readMin: 6,
    title: "I turned my portfolio into an MCP server — so AI agents can hire me",
    excerpt:
      "Instead of hoping clients find my website, their AI assistants now inspect my work, check my prices and file project briefs themselves. Here's exactly how it works and what it taught me about agent-native business.",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16 lg:py-24">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">← djaouad.tech</Link>
        <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Notes / <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">Build-in-public</h1>
        <div className="mt-10 space-y-6">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary">
              <p className="font-mono text-xs text-muted-foreground">{p.date} · {p.readMin} min read</p>
              <h2 className="mt-3 font-display text-xl leading-snug tracking-tight group-hover:text-primary">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
