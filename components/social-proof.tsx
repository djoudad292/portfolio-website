"use client"

import { motion } from "framer-motion"
import { MessageSquare, Users, Clock, Star } from "lucide-react"

const metrics = [
  { icon: MessageSquare, value: "2,400+", label: "AI conversations handled", note: "and counting" },
  { icon: Users, value: "15+", label: "Businesses served", note: "across 3 countries" },
  { icon: Clock, value: "< 1s", label: "Average response time", note: "real-time AI" },
  { icon: Star, value: "100%", label: "Client satisfaction", note: "on delivered projects" },
]

export function SocialProof() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <m.icon className="mb-2 h-5 w-5 text-primary" />
              <span className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
                {m.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">{m.label}</span>
              <span className="text-xs text-muted-foreground/60">{m.note}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
