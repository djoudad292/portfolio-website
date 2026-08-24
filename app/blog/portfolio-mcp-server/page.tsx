import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I turned my portfolio into an MCP server — so AI agents can hire me | Djaouad Frih",
  description:
    "How and why I exposed my freelance portfolio as a Model Context Protocol server: the tools, the security model, what happened after listing it in the official registry, and what agent-native business means for service providers.",
  keywords: ["MCP server portfolio", "Model Context Protocol business", "AI agents hiring", "agent-native marketing"],
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
          I turned my portfolio into an MCP server — so AI agents can hire me
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">2026-08-24 · 6 min read</p>

        <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-foreground [&_strong]:text-foreground">
          <p>
            My portfolio gets decent traffic. But lately, the first contact with a potential client
            increasingly isn&apos;t a person scrolling my site — it&apos;s their AI assistant, tasked with
            &ldquo;find me an AI engineer under $2,000.&rdquo; A normal portfolio is invisible to that flow.
            So I made mine visible on purpose.
          </p>

          <h2>The idea in one sentence</h2>
          <p>
            Expose my real professional profile — shipped products, fixed pricing, availability — as
            tools on a <a href="https://modelcontextprotocol.io">Model Context Protocol</a> server, plus one
            gated write tool that lets an agent file a project brief on the founder&apos;s behalf. The
            result lives at <a href="https://mcp.djaouad.tech">mcp.djaouad.tech</a>, and the code is{" "}
            <a href="https://github.com/djoudad292/hireme-mcp">open source</a>.
          </p>

          <h2>The five tools</h2>
          <p>
            Four read tools (<strong>get_profile</strong>, <strong>search_projects</strong>,{" "}
            <strong>get_pricing</strong>, <strong>get_next_slot</strong>) give any MCP client — Claude,
            Cursor, ChatGPT connectors — grounded answers about who I am and what I charge, with demo
            links instead of marketing claims. One write tool,{" "}
            <strong>submit_project_brief</strong>, converts the conversation into action: a structured
            brief lands in my intake pipeline and my inbox.
          </p>

          <h2>The security pattern analysts actually recommend</h2>
          <p>
            Enterprise research on MCP keeps repeating the same advice: start read-only, put every write
            behind explicit gates, log everything. That&apos;s exactly how HireMe is built — reads are open,
            the single write is rate-limited per IP, briefs are reviewed by a human before anything
            happens, and no secrets sit anywhere near the endpoint. When a CTO asks &ldquo;is this safe to
            connect?&rdquo; the honest answer is yes, and the architecture backs it up.
          </p>

          <h2>Distribution compounds</h2>
          <p>
            After building it, I published the server manifest to the official MCP Registry under{" "}
            <span className="font-mono text-sm text-foreground">io.github.djoudad292/hireme-mcp</span>,
            then to Smithery and Glama. Those listings feed each other — crawlers picked the listing up
            within a day. Every developer browsing those registries, and every agent platform reading
            them, now discovers a working demonstration of exactly the skill they&apos;d hire me for.
          </p>

          <h2>What it changed</h2>
          <p>
            Three things. First, cold outreach gained a killer line: <em>&ldquo;don&apos;t take my word for it —
            point your AI at this URL.&rdquo;</em> Second, the server became my strongest case study; anyone
            technical can inspect the transport, tool schemas and rate limiting as proof of craft.
            Third, and strangest: my pipeline started receiving briefs written by models, summarizing
            what their humans need — often clearer than what the humans would have typed.
          </p>

          <h2>If you sell services, think agent-native</h2>
          <p>
            Websites made businesses legible to search engines. Profiles made people legible to
            networks. The next legibility layer is being legible to <strong>agents</strong>: structured,
            verifiable, actionable data your clients&apos; AI can read and act on. You don&apos;t need my exact
            gimmick — you need your offer exposed somewhere machines can evaluate and act on it. The
            earlier you are, the less competition that layer has.
          </p>

          <p>
            Want yours? I build agent-presence systems for service businesses —{" "}
            <Link href="/industries" className="!no-underline">see the industry pages</Link> or{" "}
            <a href="https://calendly.com/oufr29/30min">grab a slot</a>.
          </p>
        </div>
      </article>
    </main>
  );
}
