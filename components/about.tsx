"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Server, Globe, Zap, Shield } from "lucide-react"

const highlights = [
  {
    icon: Server,
    title: "Backend Systems",
    description: "Designing robust, scalable server-side architectures with NestJS and Node.js.",
  },
  {
    icon: Globe,
    title: "Modern Frontends",
    description: "Creating responsive, performant user interfaces with React and Next.js.",
  },
  {
    icon: Zap,
    title: "Real-Time Apps",
    description: "Building real-time communication systems with WebSockets and WebRTC.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Implementing secure authentication, rate limiting, and data protection.",
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="ABOUT ME"
          title="Who I Am"
          description="I build scalable backend systems using NestJS and design modern frontends with React and Next.js. I enjoy working with microservices, real-time applications, and performance optimization."
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
