"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Globe, Smartphone, Bot, Server } from "lucide-react"

const highlights = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Fast, accessible, SEO-friendly web apps with React, Next.js, TypeScript, and Tailwind — from landing pages to full SaaS dashboards.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS & Android apps with React Native and Expo, including EAS builds, over-the-air updates, and APK distribution.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "LLM-powered features built for production: chatbots, RAG knowledge bases with vector search, prompt engineering, and intelligent automation.",
  },
  {
    icon: Server,
    title: "Backend & Real-Time",
    description:
      "Scalable APIs and real-time systems with Node.js, NestJS, WebSockets, PostgreSQL, Redis, and Docker — secure and production-ready.",
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="ABOUT ME"
          title="Full Stack Web & Mobile Developer with AI Integration"
          description="I design and ship complete digital products — from the database to the browser, from the app store to the AI layer. I focus on clean architecture, great UX, and delivering real business value with modern technology."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-card/80"
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
