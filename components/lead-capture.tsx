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
    <section id="lead-capture" className="pb-24">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Free audit intake</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">Tell me what should work better.</h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Share the workflow, documents, or AI product you want to improve. I will reply within one business day with the most useful next step — including when an audit is not the right answer.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary">→</span> Measured against your real constraints</li>
              <li className="flex gap-3"><span className="text-primary">→</span> Fixed-scope engineering work</li>
              <li className="flex gap-3"><span className="text-primary">→</span> No mailing list or automated pitch sequence</li>
            </ul>
          </div>

          {status === "success" ? (
            <div className="flex min-h-80 flex-col justify-center rounded-xl border border-primary/30 bg-primary/5 p-8">
              <Check className="h-6 w-6 text-primary" />
              <h3 className="mt-5 font-display text-2xl tracking-tight">Request received.</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">Your request is in the lead desk. I will review it and reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm">Full name *<input required minLength={2} value={form.name} onChange={event => update("name", event.target.value)} className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary" placeholder="Your name" /></label>
                <label className="grid gap-1.5 text-sm">Work email *<input required type="email" value={form.email} onChange={event => update("email", event.target.value)} className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary" placeholder="you@company.com" /></label>
                <label className="grid gap-1.5 text-sm">Company<input value={form.company} onChange={event => update("company", event.target.value)} className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary" placeholder="Company or project" /></label>
                <label className="grid gap-1.5 text-sm">Company type *<select required value={form.companyType} onChange={event => update("companyType", event.target.value)} className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"><option value="">Select one</option><option>Startup / scale-up</option><option>Software company</option><option>Agency</option><option>Enterprise team</option><option>Founder-led business</option></select></label>
                <label className="grid gap-1.5 text-sm">What do you need? *<select required value={form.serviceInterest} onChange={event => update("serviceInterest", event.target.value)} className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"><option>AI Reliability Audit</option><option>RAG or Agent Build</option><option>Production AI System</option><option>White-Label Delivery</option><option>Not sure yet</option></select></label>
                <label className="grid gap-1.5 text-sm">Budget range *<select required value={form.budget} onChange={event => update("budget", event.target.value)} className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"><option value="">Select one</option><option>Audit first / deciding</option><option>$3.5k–$7.5k</option><option>$7.5k–$15k</option><option>$15k+</option><option>Agency milestone budget</option></select></label>
                <label className="grid gap-1.5 text-sm sm:col-span-2">Timeline *<select required value={form.timeline} onChange={event => update("timeline", event.target.value)} className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"><option value="">Select one</option><option>Exploring</option><option>Within 30 days</option><option>1–3 months</option><option>Already in production</option></select></label>
              </div>
              <label className="grid gap-1.5 text-sm">What should the system do, and where does it fail today? *<textarea required minLength={20} value={form.problem} onChange={event => update("problem", event.target.value)} className="min-h-32 resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary" placeholder="A few concrete details are better than a polished brief." /></label>
              <button disabled={status === "sending"} type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60">
                {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUpRight className="h-4 w-4" />}
                {status === "sending" ? "Saving your request…" : "Request the free audit"}
              </button>
              {status === "error" && <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">{error}</p>}
              <p className="text-xs text-muted-foreground">Your information is used to reply to this request. You can also email <a className="underline underline-offset-4 hover:text-primary" href="mailto:contact@djaouad.is-a.dev">contact@djaouad.is-a.dev</a> directly.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
