"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { toast } from "sonner"

interface FormData {
  name: string
  email: string
  whatShouldItDo: string
}

// Persisted brief backend: HireMe MCP REST (rate-limited, persisted, email notify).
// Override with NEXT_PUBLIC_BRIEF_URL if the endpoint ever moves.
const BRIEF_URL =
  process.env.NEXT_PUBLIC_BRIEF_URL ??
  "https://mcp.djaouad.is-a.dev/api/tools/submit_project_brief"

export function ProjectIntake() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatShouldItDo: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.whatShouldItDo.trim()) {
      toast.error("Please fill in all fields.")
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch(BRIEF_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim().slice(0, 80),
          contact: formData.email.trim().slice(0, 160),
          project_type: "Website project brief",
          notes: formData.whatShouldItDo.trim().slice(0, 1000),
        }),
      })

      if (res.status === 429) {
        toast.error("Too many briefs just now — please try again in a bit, or email me directly.")
        return
      }

      if (!res.ok) {
        throw new Error(`Brief rejected (${res.status})`)
      }

      setSubmitted(true)
    } catch {
      toast.error("Couldn't send just now — email me directly instead.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="project-intake" className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            index="08"
            label="Project intake"
            title="Tell me what you need built."
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-primary/25 bg-primary/5 p-10 text-center"
          >
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
            <h3 className="mt-4 font-display text-2xl text-foreground">
              Project brief received.
            </h3>
            <p className="mt-3 text-muted-foreground">
              I&apos;ll review the requirements and get back to you with the next step — usually within a few hours.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="project-intake" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          index="08"
          label="Project intake"
          title="Tell me what you need built."
          description="Share the basics. I'll review the scope and get back to you with a clear plan — or questions if anything needs clarification."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="intake-name" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  id="intake-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="intake-email" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="intake-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="intake-what" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                What should it do? <span className="text-primary">*</span>
              </label>
              <textarea
                id="intake-what"
                rows={5}
                required
                value={formData.whatShouldItDo}
                onChange={(e) => setFormData({ ...formData, whatShouldItDo: e.target.value })}
                placeholder="Describe the problem, the workflow, or what you're trying to achieve. Even a rough idea helps."
                className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Send project brief"}
            </button>
            <p className="pt-1 text-center text-xs text-muted-foreground">
              Prefer email? Write to{" "}
              <a href="mailto:contact@djaouad.is-a.dev" className="underline underline-offset-2 hover:text-foreground">
                contact@djaouad.is-a.dev
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
