"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Check } from "lucide-react"
import { whatsappHref, email } from "@/lib/socials"

const tiers = [
  {
    name: "AI Feature",
    price: "$500",
    priceNote: "starting at",
    description:
      "One focused AI capability dropped into your existing product — a chatbot, a document assistant, or a smart form. AI-assisted build means faster delivery at lower cost.",
    features: [
      "One AI feature (chat, RAG, or automation)",
      "Grounded in your own data & documents",
      "Deployed to your existing stack",
      "1 week delivery · weekly demos",
      "7 days of post-launch support",
    ],
    cta: "Start here",
    featured: false,
  },
  {
    name: "Product Sprint",
    price: "$2,000",
    priceNote: "typical",
    description:
      "A complete web or mobile product with one AI feature woven in — built, launched, and ready for real customers. AI tools cut the timeline in half without cutting corners.",
    features: [
      "Full web or mobile app build",
      "AI integration + document grounding",
      "Auth, payments, admin, dashboard",
      "2–3 weeks delivery · weekly demos",
      "14 days of post-launch support",
      "Source code + handover docs",
    ],
    cta: "Book a free call",
    featured: true,
  },
  {
    name: "AI Transformation",
    price: "$5,000",
    priceNote: "project-based",
    description:
      "A multi-feature AI product — receptionist, knowledge base, and integrations — built end-to-end. AI-assisted development lets me ship in weeks, not months.",
    features: [
      "Multi-feature AI product (e.g. AI receptionist)",
      "Knowledge base + human handoff flows",
      "Integrations, analytics, roles",
      "4–6 weeks delivery · weekly demos",
      "30 days of post-launch support",
      "Priority support + training",
    ],
    cta: "Let's talk",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label="Pricing"
          title="Fixed prices. No surprises."
          description="Every project gets a fixed quote before we start — the price you see is the price you pay. Milestone payments mean you only pay as you see working software."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex min-w-0 flex-col rounded-2xl border p-8 ${
                tier.featured
                  ? "border-primary bg-card shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl tracking-tight text-foreground">
                {tier.name}
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl tracking-tight text-foreground">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">{tier.priceNote}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.featured ? whatsappHref : `mailto:${email}?subject=${encodeURIComponent(`Project inquiry: ${tier.name}`)}`}
                target={tier.featured ? "_blank" : undefined}
                rel={tier.featured ? "noopener noreferrer" : undefined}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                  tier.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:border-foreground"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Every project is different — tell me about yours and get a{" "}
          <a
            href={`mailto:${email}?subject=${encodeURIComponent("Project inquiry")}`}
            className="underline decoration-primary underline-offset-4 hover:text-foreground"
          >
            free, no-obligation quote within 48 hours
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
