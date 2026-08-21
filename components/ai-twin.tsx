import { SectionHeading } from "@/components/section-heading"

const SUGGESTED = [
  "What does Djaouad charge?",
  "What has he built before?",
  "Which stack does he use?",
  "Is he available right now?",
]

const WIDGET_URL =
  "https://ai-customer-support-backend-ldbf.onrender.com/widget?company=ee76df35-7e1b-4a3f-91ff-f90389ee7822"

export function AiTwin() {
  return (
    <section id="ask" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label="The portfolio that talks back"
          title="Don't take my word for it. Ask it."
          description="I sell AI agents — so this site runs on one. It's trained on my real projects, pricing, and availability. Every answer you get is the same experience your customers would get."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              src={WIDGET_URL}
              title="AI assistant trained on Djaouad's portfolio"
              className="h-[560px] w-full border-0"
              loading="lazy"
            />
          </div>

          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Try asking
            </p>
            {SUGGESTED.map((q) => (
              <div
                key={q}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
              >
                “{q}”
              </div>
            ))}
            <p className="pt-2 text-xs leading-relaxed text-muted-foreground/70">
              This is the exact agent I deploy for clients — multi-tenant,
              grounded in your own content, with human handoff when it matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
