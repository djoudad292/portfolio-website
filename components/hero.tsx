"use client"

import { motion } from "framer-motion"
import { WhatsAppIcon, whatsappHref } from "@/lib/socials"
import { ArrowUpRight, Download } from "lucide-react"
const CALENDLY_URL = "https://calendly.com/oufr29/30min"

const meta = [
  { label: "Status", value: "Booking Q3 projects" },
  { label: "Location", value: "Remote, worldwide" },
  { label: "Projects", value: "Web · Mobile · AI · Documents" },
  { label: "Clients", value: "UK, Cyprus & beyond" },
]

export function Hero() {
  return (
    <section id="top" className="relative px-6 pb-16 pt-36 lg:pt-44">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          Djaouad Frih — Full Stack Web &amp; Mobile Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl font-display text-[3rem] font-normal leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]"
        >
          I build web &amp; mobile products —{" "}
          <em className="text-primary">and make AI feel human.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Web apps, native mobile apps, and AI features grounded in your own documents — never
          invented answers. Delivered on scope, on schedule, and easy to talk to, for clients
          worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a free 15-min call
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="w-full mt-1 text-xs text-muted-foreground/60">
              Only 2 spots left for Q3 2026
            </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            See pricing
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            See the work <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="/Djaouad_Frih_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            Download CV <Download className="h-4 w-4" />
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