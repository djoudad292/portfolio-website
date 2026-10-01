"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { SectionHeading } from "./section-heading"
import { Check, ArrowRight, ArrowUpRight } from "lucide-react"

interface Segment {
  title: string
  description: string
  demo: string
  href: string
  external: boolean
}

const segments: Segment[] = [
  {
    title: "E-commerce businesses",
    description: "Customer support, order enquiries and automation.",
    demo: "Support Agent",
    href: "https://ai-support-frontend-livid.vercel.app/",
    external: true,
  },
  {
    title: "Clinics & service businesses",
    description: "AI receptionist, appointments and customer enquiries.",
    demo: "AI Receptionist",
    href: "https://chat.djaouad.is-a.dev/",
    external: true,
  },
  {
    title: "Startups & SaaS companies",
    description: "Custom AI systems, apps and integrations.",
    demo: "Custom AI integration",
    href: "#contact",
    external: false,
  },
  {
    title: "Growing companies",
    description: "Internal tools and automation to reduce manual work.",
    demo: "Internal automation tool",
    href: "#contact",
    external: false,
  },
  {
    title: "Agencies and professional firms",
    description: "Document management and AI automation.",
    demo: "PDF Workspace",
    href: "https://docs.djaouad.is-a.dev/",
    external: true,
  },
]

const reasons = [
  { text: "Custom-built solutions" },
  { text: "AI + full-stack expertise" },
  { text: "Fixed-price, milestone-based" },
  { text: "One team from development to deployment" },
  { text: "Real production projects and demos", href: "#work" },
]

export function WhoThisIsFor() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label="Who this is for"
          title="This works best if you…"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {segments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <Check className="mb-3 h-5 w-5 text-primary" />
              <h3 className="font-display text-xl text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-4 flex items-center gap-2 border-t border-border pt-3 text-sm">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">Best demo:</span>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  >
                    {item.demo}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  >
                    {item.demo}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          Not sure about the technical approach?{" "}
          <a href="#contact" className="text-primary hover:underline">
            Describe the problem
          </a>{" "}
          and I&apos;ll help you figure out the right path.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Why us
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-foreground">
            {reasons.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-muted-foreground">·</span>}
                {item.href ? (
                  <Link href={item.href} className="text-primary hover:underline">
                    {item.text} (see #work)
                  </Link>
                ) : (
                  item.text
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
