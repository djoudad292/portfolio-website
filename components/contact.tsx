"use client"

import { SectionHeading } from "./section-heading"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { socials, email, whatsappUrl } from "@/lib/socials"

/**
 * lucide-react dropped its brand icons, so the WhatsApp glyph is inlined here
 * rather than pulled in as a dependency. Sized and coloured to match the
 * lucide icons in the same rows (h-4 w-4, currentColor via fill).
 */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

const contactLinks = [
  { label: "E-mail", href: `mailto:${email}`, icon: Mail },
  { label: "WhatsApp", href: whatsappUrl, icon: WhatsAppIcon },
  { label: "GitHub", href: socials.find(s => s.label === "GitHub")?.href || "https://github.com/djoudad292", icon: Github },
  { label: "LinkedIn", href: socials.find(s => s.label === "LinkedIn")?.href || "https://www.linkedin.com/in/djaouad-frih", icon: Linkedin },
]

const guarantees = [
  "Fixed price",
  "Weekly demos",
  "You own the code",
  "Usage and latency reporting included",
  "30-day bug-fix window",
]

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl border border-border bg-card p-8 sm:p-10">
          <SectionHeading index="10" label="Get in touch" title="Ready to start your project?" />
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Tell me what you&apos;re building and I&apos;ll get back to you with next steps,
            including an honest read on whether this is worth building at all.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a project
            </a>
            <a
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary"
            >
              Book a free 15-min scope call
            </a>
          </div>

          <div className="mt-8 grid max-w-md gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="focus-visible-ring flex items-center justify-between rounded-xl border border-border bg-background px-5 py-3.5 text-sm transition-colors hover:border-primary"
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