import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why 80% of AI agent projects die in pilot — and how I ship in weeks | Djaouad Frih",
  description:
    "Most enterprises want AI agents; only a third have shipped one. The gap isn't model quality — it's deployment discipline. Here's the checklist I use to take agents from demo to production in 1–3 weeks.",
};

export default function Post() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-2xl px-6 py-16 lg:py-24">
        <Link href="/blog" className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">← All notes</Link>
        <p className="mb-4 mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Build-in-public / <span aria-hidden className="h-px flex-1 bg-border" />
        </p>
        <h1 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
          Why 80% of AI agent projects die in pilot — and how I ship in weeks
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">2026-08-24 · 5 min read</p>

        <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-foreground [&_strong]:text-foreground [&_li::marker]:text-primary">
          <p>
            The research is consistent this year: roughly <strong>80% of enterprises are embedding
            AI agents somewhere</strong>, but only about a third have anything fully deployed. The market
            is projected to nearly double again into 2026 ($7.6B → ~$11B). Everyone wants agents;
            almost nobody can finish them.
          </p>

          <h2>What actually kills pilots</h2>
          <p>
            It&apos;s almost never model quality. The repeated killers, in order: security and access
            concerns, integration complexity with legacy systems, unclear business value, and the
            absence of anyone who owns the boring last mile — auth, logging, rate limiting,
            escalation paths, dashboards. Demos are easy because demos don&apos;t touch production data
            or real customers.
          </p>

          <h2>The checklist that gets me to production</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Read-only first.</strong> Ship the version that answers questions before the version that takes actions. Trust compounds from correct answers.</li>
            <li><strong>One gated write maximum</strong> in v1 — behind rate limits, audit logs and a human review loop. This mirrors what analysts recommend for enterprise MCP deployments.</li>
            <li><strong>Grounding over cleverness.</strong> Agents answer strictly from the client&apos;s own data with citations. Invented answers aren&apos;t a feature bug; they&apos;re a launch blocker.</li>
            <li><strong>Escalation as a first-class feature.</strong> Knowing when to hand off to a human is worth more than three extra IQ points.</li>
            <li><strong>Ship on boring infrastructure.</strong> Managed Postgres, managed hosting, CI on every push. The exciting part is the agent; the reliable part is everything around it.</li>
          </ul>

          <h2>Proof over promises</h2>
          <p>
            My own portfolio agent (<Link href="/?view=connect">mcp.djaouad.tech/mcp</Link>) follows
            exactly this pattern — four open read tools, one rate-limited gated write, human review of
            every submission — which is why it survived listing in public registries where anyone can
            probe it.
          </p>

          <p>
            If your org has an agent pilot that&apos;s been &ldquo;almost ready&rdquo; for two months, this is
            solvable in weeks. <a href="https://calendly.com/oufr29/30min">Bring me the demo</a>; I&apos;ll bring
            the checklist.
          </p>
        </div>
      </article>
    </main>
  );
}
