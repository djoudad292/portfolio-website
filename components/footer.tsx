import type { ComponentType } from "react"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { socials, WhatsAppIcon } from "@/lib/socials"

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
              Full-Stack AI Engineer — AI agents, knowledge bases, and production products. Remote worldwide.
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
          <p>© 2026 Djaouad Frih — Full-Stack AI Engineer</p>
          <div className="flex items-center gap-5">
            <a href="/cv" className="transition-colors hover:text-primary">CV</a>
            <p>Built with Next.js &amp; deployed to production.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}