import { SectionHeading } from "@/components/section-heading"
import { Bot, LayoutDashboard, Plug, Smartphone } from "lucide-react"

const services = [
  {
    icon: Plug,
    title: "Rescue & takeover",
    text: "Developer gone? Half-built app? I take over your existing web or mobile codebase, stabilize it, and ship what is missing — starting with a written read of what exists and what it costs to fix.",
    price: "Fixed quote",
  },
  {
    icon: LayoutDashboard,
    title: "Internal tools & dashboards",
    text: "Replace spreadsheet chaos with tools your team actually uses — admin panels, operational dashboards, approval flows on your own live data. No per-seat tax, you own the code.",
    price: "From $500",
  },
  {
    icon: Bot,
    title: "System integrations + AI layer",
    text: "Connect the tools that don't talk — APIs, CRMs, payments, data sync — then add AI where it pays: cited answers from your docs, lead capture, and handoff to humans when it matters.",
    price: "Fixed quote",
  },
  {
    icon: Smartphone,
    title: "Mobile rescue & builds",
    text: "Finish a stalled React Native app or build once for both stores — connected to your backend, store submission handled, with post-release support.",
    price: "Fixed quote",
  },
]

export function Services() {
  return (
    <section id="services" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="What I do"
          title="Four things. Done properly."
          description="No agency menu of forty services. This is what I build, ship, and maintain — each one already live in production somewhere."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group bg-card p-8 transition-colors hover:bg-muted/40 sm:p-10">
              <div className="flex items-start justify-between">
                <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <span className="font-mono text-xs text-primary">{s.price}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
