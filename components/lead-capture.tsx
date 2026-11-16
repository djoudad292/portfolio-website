"use client"

import { FormEvent, useState } from "react"
import { ArrowUpRight, Check, Loader2 } from "lucide-react"

const initialForm = {
  name: "",
  email: "",
  company: "",
  companyType: "",
  serviceInterest: "AI Reliability Audit",
  problem: "",
  budget: "",
  timeline: "",
}

function firstTouch() {
  const params = new URLSearchParams(window.location.search)
  const current = {
    source: params.get("utm_source") || params.get("source") || "direct",
    medium: params.get("utm_medium") || "",
    campaign: params.get("utm_campaign") || "",
    ref: params.get("ref") || "",
  }
  try {
    const saved = window.sessionStorage.getItem("portfolio-attribution")
    if (saved) return { ...current, ...JSON.parse(saved) }
    window.sessionStorage.setItem("portfolio-attribution", JSON.stringify(current))
  } catch {
    // Attribution should never block a lead submission.
  }
  return current
}

export function LeadCapture() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [error, setError] = useState("")

  function update(field: keyof typeof initialForm, value: string) {
    setForm(current => ({ ...current, [field]: value }))
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    setError("")
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, ...firstTouch() }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.message || "We could not save your request.")
      setStatus("success")
    } catch (submissionError) {
      setStatus("error")
      setError(submissionError instanceof Error ? submissionError.message : "Please email me directly instead.")
    }
  }

  return (
    <section id="lead-capture" className="pb-12 sm:pb-16">
      <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 sm:p-6">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Free audit intake</p>
            <h2 className="mt-2 sm:mt-3 font-display text-xl sm:text-2xl tracking-tight">Tell me what should work better.</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Share the workflow, documents, or AI product you want to improve. I will reply within one business day with the most useful next step — including when an audit is not the right answer.
            </p>
            <ul className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2 text-[11px] sm:text-sm text-muted-foreground">
              <li className="flex gap-1.5 sm:gap-2"><span className="text-primary">→</span> Measured against your real constraints</li>
              <li className="flex gap-1.5 sm:gap-2"><span className="text-primary">→</span> Fixed-scope engineering work</li>
              <li className="flex gap-1.5 sm:gap-2"><span className="text-primary">→</span> No mailing list or automated pitch sequence</li>
            </ul>
          </div>

          {status === "success" ? (
            <div className="flex min-h-48 sm:min-h-64 flex-col justify-center rounded-xl border border-primary/30 bg-primary/5 p-3 sm:p-4">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
              <h3 className="mt-2 sm:mt-3 font-display text-lg sm:text-xl tracking-tight">Request received.</h3>
              <p className="mt-1 sm:mt-2 leading-relaxed text-muted-foreground">Your request is in the lead desk. I will review it and reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-3 sm:gap-4" noValidate>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <label className="grid gap-1 sm:gap-1.5 text-[11px] sm:text-sm">Full name *<input required minLength={2} value={form.name} onChange={event => update("name", event.target.value)} className="rounded-xl border border-border bg-background px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-colors focus:border-primary" placeholder="Your name" /></label>
                <label className="grid gap-1 sm:gap-1.5 text-[11px] sm:text-sm">Work email *<input required type="email" value={form.email} onChange={event => update("email", event.target.value)} className="rounded-xl border border-border bg-background px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-colors focus:border-primary" placeholder="you@company.com" /></label>
                <label className="grid gap-1 sm:gap-1.5 text-[11px] sm:text-sm">Company<input value={form.company} onChange={event => update("company", event.target.value)} className="rounded-xl border border-border bg-background px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-colors focus:border-primary" placeholder="Company or project" /></label>
                <label className="grid gap-1 sm:gap-1.5 text-[11px] sm:text-sm">Company type *<select required value={form.companyType} onChange={event => update("companyType", event.target.value)} className="rounded-xl border border-border bg-background px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-colors focus:border-primary"><option value="">Select one</option><option>Startup / scale-up</option><option>Software company</option><option>Agency</option><option>Enterprise team</option><option>Founder-led business</option></select></label>
                <label className="grid gap-1 sm:gap-1.5 text-[11px] sm:text-sm">What do you need? *<select required value={form.serviceInterest} onChange={event => update("serviceInterest", event.target.value)} className="rounded-xl border border-border bg-background px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-colors focus:border-primary"><option>AI Reliability Audit</option><option>RAG or Agent Build</option><option>Production AI System</option><option>White-Label Delivery</option><option>Not sure yet</option></select></label>
                <label className="grid gap-1 sm:gap-1.5 text-[11px] sm:text-sm">Budget range *<select required value={form.budget} onChange={event => update("budget", event.target.value)} className="rounded-xl border border-border bg-background px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-colors focus:border-primary"><option value="">Select one</option><option>Audit first / deciding</option><option>$3.5k–$7.5k</option><option>$7.5k–$15k</option><option>$15k+</option><option>Agency milestone budget</option></select></label>
                <label className="grid gap-1 sm:gap-1.5 text-[11px] sm:text-sm sm:col-span-2">Timeline *<select required value={form.timeline} onChange={event => update("timeline", event.target.value)} className="rounded-xl border border-border bg-background px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-colors focus:border-primary"><option value="">Select one</option><option>Exploring</option><option>Within 30 days</option><option>1–3 months</option><option>Already in production</option></select></label>
              </div>
              <label className="grid gap-1 sm:gap-1.5 text-[11px] sm:text-sm">What should the system do, and where does it fail today? *<textarea required minLength={20} value={form.problem} onChange={event => update("problem", event.target.value)} className="min-h-20 sm:min-h-24 resize-y rounded-xl border border-border bg-background px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-colors focus:border-primary" placeholder="A few concrete details are better than a polished brief." /></label>
              <button disabled={status === "sending"} type="submit" className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 disabled:cursor-wait disabled:opacity-60">
                {status === "sending" ? <Loader2 className="h-3.5 sm:h-4 w-3.5 sm:w-4 animate-spin" /> : <ArrowUpRight className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
                {status === "sending" ? "Saving your request…" : "Request the free audit"}
              </button>
              {status === "error" && <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-2 sm:p-3 text-[11px] sm:text-sm text-destructive">{error}</p>}
              <p className="text-[10px] sm:text-xs text-muted-foreground">Your information is used to reply to this request. You can also email <a className="underline underline-offset-4 hover:text-primary" href="mailto:contact@djaouad.is-a.dev">contact@djaouad.is-a.dev</a> directly.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
