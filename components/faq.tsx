"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Plus } from "lucide-react"
import { whatsappHref, email } from "@/lib/socials"

const faqs = [
  {
    question: "How do you handle payments?",
    answer:
      "Milestone-based. You pay per agreed stage — typically 30% to start, then per milestone as you see and approve working software. You never pay the full amount upfront, and you only pay for what you've seen working.",
  },
  {
    question: "What if I don't like the first milestone?",
    answer:
      "Then you don't pay for it — simple. Every milestone comes with a review window. If what I've built isn't what you asked for, we adjust before you commit to the next stage. That's the risk removal built into the process.",
  },
  {
    question: "How long does a project take?",
    answer:
      "AI-assisted development cuts timelines significantly. A single AI feature ships in about 1 week. A full product sprint runs 2–3 weeks. A multi-feature AI product takes 4–6 weeks. You get weekly demos so you always know exactly where things stand.",
  },
  {
    question: "Do you work with my existing code?",
    answer:
      "Yes. I integrate into your existing stack — Next.js, NestJS, React, mobile apps, or whatever you're running. No rewrites for the sake of it; the AI feature drops into what already works.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every package includes a post-launch support window (7–30 days depending on the tier) for fixes and tweaks. After that, you can extend support or hand everything over — full source code and documentation included.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Fully. Source code, docs, and everything built for your project is yours the moment you pay for each milestone. No lock-in, no hidden licensing.",
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-border bg-card transition-colors hover:border-foreground">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-display text-lg tracking-tight text-foreground">
          {question}
        </span>
        <Plus
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-45" : ""}`}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          index="04"
          label="FAQ"
          title="Questions clients ask before hiring."
          description="If yours isn't here, ask me directly — I reply within a day."
        />

        <div className="space-y-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Still unsure?{" "}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary underline-offset-4 hover:text-foreground"
          >
            Message me on WhatsApp
          </a>{" "}
          or{" "}
          <a
            href={`mailto:${email}?subject=${encodeURIComponent("Question about hiring you")}`}
            className="underline decoration-primary underline-offset-4 hover:text-foreground"
          >
            email me
          </a>
          .
        </p>
      </div>
    </section>
  )
}
