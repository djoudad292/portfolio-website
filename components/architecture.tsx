"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import {
  Layers,
  GitBranch,
  Database,
  Shield,
  Workflow,
  Container,
} from "lucide-react"

const principles = [
  {
    icon: Layers,
    title: "Microservices Architecture",
    description:
      "Decomposing monoliths into independently deployable services with clear domain boundaries and API contracts.",
  },
  {
    icon: GitBranch,
    title: "Event-Driven Design",
    description:
      "Leveraging message queues and event sourcing for loose coupling and asynchronous communication between services.",
  },
  {
    icon: Database,
    title: "Database Per Service",
    description:
      "Each microservice owns its data with isolated databases, ensuring autonomy and independent scaling.",
  },
  {
    icon: Shield,
    title: "API Gateway Pattern",
    description:
      "Centralized entry point handling routing, authentication, rate limiting, and request aggregation.",
  },
  {
    icon: Workflow,
    title: "CI/CD Pipelines",
    description:
      "Automated build, test, and deployment workflows using GitHub Actions and Docker for consistent releases.",
  },
  {
    icon: Container,
    title: "Containerization",
    description:
      "Docker-based development and deployment ensuring environment consistency from local to production.",
  },
]

export function Architecture() {
  return (
    <section id="architecture" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="ARCHITECTURE"
          title="Engineering Philosophy"
          description="Core architectural principles and patterns I follow when designing distributed systems."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
