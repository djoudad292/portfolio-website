import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "Notes on Building AI Agents | Djaouad Frih",
  description: "Build-in-public notes from a solo AI engineer shipping production agents, RAG systems and MCP servers.",
};

const posts = [
  {
    slug: "pilot-to-production",
    date: "2026-08-24",
    readMin: 5,
    title: "Why 80% of AI agent projects die in pilot — and how I ship in weeks",
    excerpt:
      "Most enterprises want AI agents; only a third have shipped one. The gap isn't model quality — it's deployment discipline. Here's the checklist I use to take agents from demo to production in 1–3 weeks.",
  },
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
      <SectionWrapper>
        <div className="mx-auto max-w-[var(--container-lg)] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link href="/" className="font-mono text-[var(--text-xs)] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">
            &larr; djaouad.is-a.dev
          </Link>
          <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-[var(--text-xs)] uppercase tracking-[0.25em] text-primary">
            Notes <span aria-hidden className="h-px flex-1 bg-border" />
          </p>
          <h1 className="font-display text-[var(--text-4xl)] sm:text-[var(--text-5xl)] tracking-tight">Build-in-public</h1>
          <div className="mt-10 space-y-6">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block rounded-2xl border border-border bg-card p-7 sm:p-8 transition-colors hover:border-primary">
                <p className="font-mono text-[var(--text-xs)] text-muted-foreground">{p.date} · {p.readMin} min read</p>
                <h2 className="mt-3 font-display text-[var(--text-xl)] sm:text-[var(--text-2xl)] leading-snug tracking-tight group-hover:text-primary">{p.title}</h2>
                <p className="mt-2 text-[var(--text-xs)] sm:text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
