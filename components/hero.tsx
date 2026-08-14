"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const meta = [
  { label: "Status", value: "Available for projects" },
  { label: "Location", value: "Remote, worldwide" },
  { label: "Projects", value: "Web · Mobile · AI" },
  { label: "Clients", value: "UK, Cyprus & beyond" },
]

export function Hero() {
  return (
    <section id="top" className="relative px-6 pb-20 pt-36 lg:pt-44">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          Djaouad Frih — Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          I build web &amp; mobile products — and add{" "}
          <span className="text-primary">AI where it actually helps</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          I'm a full-stack developer who helps businesses ship complete products: React web apps,
          React Native mobile apps, and AI features like chatbots and knowledge bases — grounded
          in your own documents, never invented answers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View the project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            Start a project
          </a>
          <a
            href="https://github.com/djoudad292"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub ↗
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4"
        >
          {meta.map((item) => (
            <div key={item.label} className="bg-card px-5 py-4">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{item.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}