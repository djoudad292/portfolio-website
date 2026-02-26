"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import {
  Layers,
  GitBranch,
  Database,
  Shield,
  Monitor,
} from "lucide-react"

const principles = [
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Designing modular systems from microservices to monoliths, with clear domain boundaries and clean API contracts.",
  },
  {
    icon: Monitor,
    title: "Responsive Web Apps",
    description:
      "Building performant, accessible web applications with server-side rendering, code splitting, and progressive enhancement.",
  },
  {
    icon: GitBranch,
    title: "Event-Driven Design",
    description:
      "Leveraging message queues, real-time WebSockets, and event sourcing for responsive, loosely-coupled systems.",
  },
  {
    icon: Database,
    title: "Data Layer Mastery",
    description:
      "Designing efficient database schemas, ORMs, caching strategies, and optimized queries for high-performance applications.",
  },
  {
    icon: Shield,
    title: "Security & Auth",
    description:
      "Implementing production-grade authentication, role-based access, token rotation, rate limiting, and secure API gateways.",
  },
]

export function Architecture() {
  return (
    <section id="architecture" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="ARCHITECTURE"
          title="Engineering Philosophy"
          description="Core principles and patterns I follow when building scalable web applications and distributed systems."
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
