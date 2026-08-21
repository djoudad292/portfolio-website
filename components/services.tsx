import { SectionHeading } from "@/components/section-heading"
import { Bot, FileSearch, Layers, Smartphone } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "AI agents & chatbots",
    text: "Customer-facing agents trained on your own content — they answer, book, qualify leads, and hand off to humans when it matters. Never invent answers.",
    price: "From $500",
  },
  {
    icon: FileSearch,
    title: "Document intelligence (RAG)",
    text: "Your PDFs and docs become a cited, searchable knowledge base — for your team or embedded into your product as an ask-your-docs widget.",
    price: "From $500",
  },
  {
    icon: Layers,
    title: "Full-stack SaaS builds",
    text: "Multi-tenant products end-to-end: auth, payments, dashboards, real-time features. Next.js + NestJS + PostgreSQL, deployed and handed over.",
    price: "Fixed quote",
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    text: "One React Native codebase shipped to both app stores — connected to your backend, push-ready, built to update fast.",
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
