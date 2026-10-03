"use client"

import { motion } from "framer-motion"
import { Mail, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { email } from "@/lib/socials"

/**
 * Intake is a prefilled mailto: rather than a hosted form.
 *
 * Why: tapping a mailto opens the visitor's own mail app, so their address is
 * already there and nothing depends on a third-party form endpoint or a
 * JavaScript POST. It also behaves correctly inside in-app browsers on iOS,
 * where a web form plus on-screen keyboard is the more fragile path.
 *
 * `id="project-intake"` must stay: the navbar CTA, the pricing CTA, the contact
 * CTA, the /hire-ai-developer CTAs and the command palette all link to it.
 */
const BRIEF_SUBJECT = "Project brief"

const BRIEF_BODY = [
  "Hi Djaouad,",
  "",
  "I'd like to talk about a project.",
  "",
  "What I'm building:",
  "What's not working today (or what's missing):",
  "Rough timeline — when I'd like to start:",
  "Budget range, if I have one in mind:",
  "",
  "Anything else worth knowing:",
].join("\n")

const mailto = `mailto:${email}?subject=${encodeURIComponent(
  BRIEF_SUBJECT
)}&body=${encodeURIComponent(BRIEF_BODY)}`

export function ProjectIntake() {
  return (
    <section id="project-intake" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          index="09"
          label="Project intake"
          title="Send me a brief by email."
          description="Opens your mail app with the details filled in — a few lines is plenty. I read every one and reply with a plan, or honest questions if the scope needs clarifying."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-8 sm:p-10"
        >
          <a
            href={mailto}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Write your brief
          </a>

          <p className="mt-4 text-center text-xs text-muted-foreground sm:text-left">
            Opens your email app addressed to{" "}
            <span className="text-foreground">{email}</span>
          </p>

          <div className="mt-8 border-t border-border pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              It helps to have
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                What you&apos;re building, and what&apos;s broken today
              </li>
              <li className="flex gap-3">
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                A rough timeline — when you&apos;d want to start
              </li>
              <li className="flex gap-3">
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                A budget range, if you have one in mind
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}