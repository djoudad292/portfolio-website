"use client"

import { motion } from "framer-motion"
import { WhatsAppIcon, whatsappHref, email } from "@/lib/socials"

export function ClosingCTA() {
  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl bg-foreground px-8 py-16 text-center text-background sm:px-16 sm:py-24"
        >
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            Ready to build something that ships?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/70">
            Fixed-price projects, real milestones, and a developer who sticks around after launch.
            No scope creep, no surprise invoices.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book a free 15-min call
            </a>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent("Project inquiry")}`}
              className="inline-flex items-center gap-2 rounded-full border border-background/20 px-7 py-3.5 text-sm font-medium text-background transition-colors hover:border-background/50"
            >
              Send an email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
