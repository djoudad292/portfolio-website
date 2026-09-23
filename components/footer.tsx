import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { socials, email } from "@/lib/socials"

const contactLinks = [
  { label: "E-mail", href: `mailto:${email}`, icon: Mail },
  { label: "GitHub", href: socials.find(s => s.label === "GitHub")?.href || "https://github.com/djoudad292", icon: Github },
  { label: "LinkedIn", href: socials.find(s => s.label === "LinkedIn")?.href || "https://www.linkedin.com/in/djaouad-frih", icon: Linkedin },
]

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

          <ul className="flex flex-col gap-3">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center justify-between gap-4 rounded-xl border border-background/20 px-4 py-2.5 text-sm text-background/80 transition-colors hover:border-primary hover:text-primary"
                >
                  <span className="inline-flex items-center gap-2">
                    <link.icon className="h-4 w-4 text-primary" />
                    {link.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-background/15 pt-6 font-mono text-xs text-background/50 sm:flex-row sm:items-center">
          <p>&copy; 2026 Djaouad Frih — AI Developer</p>
          <div className="flex items-center gap-5">
            <a href="/cv" className="transition-colors hover:text-primary">CV</a>
            <p>Built with Next.js & deployed to production.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}