import type { ComponentType } from "react"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { socials } from "@/lib/socials"

const iconFor: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl tracking-tight">
              Djaouad Frih<span className="text-primary">.</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-background/70">
              AI Developer — custom AI systems, integrations, and production builds. Remote worldwide.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {socials.map((social) => {
              const Icon = iconFor[social.label] ?? ArrowUpRight
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-background/80 transition-colors hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-background/15 pt-6 font-mono text-xs text-background/50 sm:flex-row sm:items-center">
          <p>&copy; 2026 Djaouad Frih — AI Developer</p>
          <div className="flex items-center gap-5">
            <a href="/cv" className="transition-colors hover:text-primary">CV</a>
            <p>Built with Next.js &amp; deployed to production.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
