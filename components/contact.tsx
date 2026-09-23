"use client"

import { type ComponentType } from "react"
import { SectionHeading } from "./section-heading"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { socials, email } from "@/lib/socials"

const iconFor: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
}

export function Contact() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <SectionHeading index="09" label="Get in touch" title="Have a project you need built?" />
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Tell me what you&apos;re building and I&apos;ll get back to you within a few hours with next steps.
          </p>

          <div className="mt-8 grid max-w-md gap-3">
            <a
              href="#project-intake"
              className="flex items-center justify-between rounded-xl border border-primary bg-primary/10 px-5 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
            >
              Describe your project <ArrowUpRight className="h-4 w-4" />
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
