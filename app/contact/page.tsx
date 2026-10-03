"use client"

import { useState } from "react"
import { Mail, Send, Check, Loader2, AlertCircle } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { email } from "@/lib/socials"
import { PRICE_ANCHOR } from "@/lib/positioning"

type FormStatus = "idle" | "submitting" | "success" | "error"

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    project: "",
    timeline: "",
    budget: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    const body = [
      `Name: ${formData.name}`,
      `Company: ${formData.company || "—"}`,
      `Email: ${formData.email}`,
      `Project: ${formData.project}`,
      `Timeline: ${formData.timeline || "—"}`,
      `Budget: ${formData.budget || "—"}`,
      "",
      formData.message,
    ].join("\n")

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      `Project inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(body)}`

    try {
      // Open mailto in a new tab/window
      window.open(mailtoLink, "_blank")
      setStatus("success")
      setFormData({
        name: "",
        company: "",
        email: "",
        project: "",
        timeline: "",
        budget: "",
        message: "",
      })
    } catch {
      setStatus("error")
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading
          index="0"
          label="Contact"
          title="Start a project"
          description="Tell me what you're building. I read every brief and reply with a plan, or honest questions if the scope needs clarifying."
        />

        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Company
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Company name (optional)"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="project"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              What are you building? *
            </label>
            <textarea
              id="project"
              required
              rows={3}
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
              placeholder="Describe the product, feature, or problem you want solved"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Timeline
              </label>
              <input
                id="timeline"
                type="text"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder={`e.g., "Need to start in 2 weeks"`}
              />
            </div>
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Budget range
              </label>
              <input
                id="budget"
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder={`e.g., ${PRICE_ANCHOR} or "not sure yet"`}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Anything else worth knowing?
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
              placeholder="Constraints, tech preferences, compliance needs, etc."
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status !== "submitting" && <Send className="h-4 w-4" />}
            {status === "submitting"
              ? "Opening your email app…"
              : "Send brief via email"}
          </button>

          {status === "success" && (
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-700 dark:text-green-300">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0" />
                Your email app opened with the brief pre-filled. Just hit send.
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-700 dark:text-red-300">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                Could not open email app. Please email{" "}
                <a href={`mailto:${email}`} className="underline">
                  {email}
                </a>{" "}
                directly with your brief.
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground text-center">
            This form opens your email app with everything pre-filled. No data leaves
            this page until you hit send in your mail client.
          </p>
        </form>

        {/* Alternative contact methods */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8">
          <h3 className="font-display text-xl">Other ways to reach me</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-primary hover:bg-muted/30"
            >
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground break-all">{email}</p>
              </div>
            </a>
            <a
              href="https://github.com/djoudad292"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-primary hover:bg-muted/30"
            >
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm text-muted-foreground">djoudad292</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/djaouad-frih"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-primary hover:bg-muted/30"
            >
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-muted-foreground">djaouad-frih</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}