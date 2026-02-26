"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Server, Globe, Zap, Smartphone } from "lucide-react"

const highlights = [
  {
    icon: Server,
    title: "Scalable Backends",
    description: "Building robust, distributed systems with microservices, event-driven architecture, and intelligent API design.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Creating fast, responsive web experiences with React, Next.js, and modern performance optimization.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Shipping production-quality iOS and Android apps with React Native and seamless user experiences.",
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    description: "Building WebSocket-powered communication, live notifications, and collaborative features at scale.",
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="ABOUT ME"
          title="Full-Stack Developer"
          description="I craft end-to-end solutions for web and mobile platforms. From React Native apps to NestJS backends, I focus on building scalable, performant, and user-centric experiences with clean, maintainable code."
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
