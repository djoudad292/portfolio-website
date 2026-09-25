"use client"

import { SectionHeading } from "./section-heading"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { socials, email } from "@/lib/socials"

const contactLinks = [
  { label: "E-mail", href: `mailto:${email}`, icon: Mail },
  { label: "GitHub", href: socials.find(s => s.label === "GitHub")?.href || "https://github.com/djoudad292", icon: Github },
  { label: "LinkedIn", href: socials.find(s => s.label === "LinkedIn")?.href || "https://www.linkedin.com/in/djaouad-frih", icon: Linkedin },
]

const guarantees = [
  "Fixed price",
  "Weekly demos",
  "You own the code",
  "14-day bug-fix window",
]

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl border border-border bg-card p-8 sm:p-10">
          <SectionHeading index="09" label="Get in touch" title="Have a project you need built?" />
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Tell me what you&apos;re building and I&apos;ll get back to you within a few hours with next steps.
          </p>

          <div className="mt-8 grid max-w-md gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-3.5 text-sm transition-colors hover:border-primary"
              >
                <span className="inline-flex items-center gap-2">
                  <link.icon className="h-4 w-4 text-muted-foreground" />
                  {link.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* How I work guarantee strip */}
        <div className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">How I work</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-foreground">
            {guarantees.map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span className="text-muted-foreground">·</span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}