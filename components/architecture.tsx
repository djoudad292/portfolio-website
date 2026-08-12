"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import {
  Layers,
  GitBranch,
  Database,
  Shield,
  Smartphone,
  Bot,
} from "lucide-react"

const principles = [
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Designing modular systems from monoliths to microservices, with clear domain boundaries and clean API contracts that grow with the product.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Products",
    description:
      "Building performant, accessible web apps and cross-platform mobile experiences with shared components and consistent UX across devices.",
  },
  {
    icon: Bot,
    title: "AI-First Features",
    description:
      "Integrating LLMs, RAG knowledge bases, embeddings, and intelligent automation into real products — grounded, observable, and production-ready.",
  },
  {
    icon: GitBranch,
    title: "Event-Driven & Real-Time",
    description:
      "Leveraging real-time WebSockets, live notifications, and event-driven flows for responsive, loosely-coupled systems.",
  },
  {
    icon: Database,
    title: "Security & Performance",
    description:
      "Implementing production-grade authentication, role-based access, rate limiting, caching, and optimized queries for high-performance apps.",
  },
]

export function Architecture() {
  return (
    <section id="architecture" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="ENGINEERING PHILOSOPHY"
          title="How I Build"
          description="Core principles and patterns I follow when building web, mobile, and AI-powered products."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
