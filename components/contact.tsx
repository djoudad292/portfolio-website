"use client"

import { type ComponentType } from "react"
import { SectionHeading } from "./section-heading"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { socials, WhatsAppIcon, whatsappNumber, whatsappHref, email } from "@/lib/socials"

const iconFor: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  ),
  WhatsApp: WhatsAppIcon,
  Email: Mail,
}

export function Contact() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <SectionHeading index="07" label="Get in touch" title="Ready to start?" />
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            I reply fast — usually within an hour. Prefer a call? Grab any slot.
          </p>

          <div className="mt-8 grid max-w-md gap-3">
            <a
              href="https://calendly.com/oufr29/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-3.5 text-sm transition-colors hover:border-primary"
            >
              Book a call <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-3.5 text-sm transition-colors hover:border-primary"
            >
              WhatsApp {whatsappNumber} <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-3.5 text-sm transition-colors hover:border-primary"
            >
              {email} <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>

          <p className="mb-3 mt-10 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Elsewhere
          </p>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = iconFor[social.label] ?? ArrowUpRight
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                  {social.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
