"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, CalendarPlus, Check, Mail, MessageCircle } from "lucide-react"
import { CALENDLY_URL, EMAIL, WHATSAPP } from "./data"

type Answers = {
  type: string
  features: string[]
  timeline: string
  budget: string
  name: string
  contact: string
  notes: string
}

const STEPS = ["Project", "Features", "Timeline", "Budget", "You"] as const

const TYPES = [
  { label: "AI agent / chatbot", hint: "answers customers 24/7" },
  { label: "Document AI (RAG)", hint: "chat with your files" },
  { label: "Full-stack SaaS", hint: "multi-tenant product" },
  { label: "Mobile app", hint: "iOS + Android" },
  { label: "Not sure yet", hint: "help me decide" },
]

const FEATURES = [
  "Bookings / appointments",
  "Payments",
  "Knowledge base",
  "Embeddable widget",
  "Admin dashboard",
  "Mobile app",
  "Third-party integrations",
  "Human handoff",
]

const TIMELINES = ["ASAP", "2–4 weeks", "1–3 months", "Flexible"]
const BUDGETS = ["< $500", "$500 – $2k", "$2k – $5k", "$5k+", "Not sure"]

function Chip({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-2.5 text-left text-sm transition-colors ${
        selected
          ? "border-primary bg-primary/10 text-foreground"
          : "border-border text-muted-foreground hover:border-muted-foreground/50 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  )
}

export function IntakeWizard() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [a, setA] = useState<Answers>({
    type: "",
    features: [],
    timeline: "",
    budget: "",
    name: "",
    contact: "",
    notes: "",
  })

  const canNext =
    (step === 0 && !!a.type) ||
    step === 1 ||
    (step === 2 && !!a.timeline) ||
    (step === 3 && !!a.budget) ||
    (step === 4 && a.name.trim().length > 1 && a.contact.trim().length > 4)

  const brief = useMemo(
    () =>
      [
        `PROJECT BRIEF — generated on djaouad.tech`,
        ``,
        `Build: ${a.type}`,
        `Features: ${a.features.length ? a.features.join(", ") : "open to suggestions"}`,
        `Timeline: ${a.timeline}`,
        `Budget: ${a.budget}`,
        a.notes ? `Notes: ${a.notes}` : ``,
        ``,
        `Contact: ${a.name} — ${a.contact}`,
      ]
        .filter(Boolean)
        .join("\n"),
    [a],
  )

  const waHref = `${WHATSAPP}?text=${encodeURIComponent("Hi Djaouad! Here is my project brief:\n\n" + brief)}`
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Project brief — " + a.type)}&body=${encodeURIComponent(brief)}`

  const toggleFeature = (f: string) =>
    setA((s) => ({
      ...s,
      features: s.features.includes(f) ? s.features.filter((x) => x !== f) : [...s.features, f],
    }))

  if (done) {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-primary/30 bg-card p-6 sm:p-8">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
          <Check className="h-4 w-4" /> Brief ready
        </p>
        <pre className="mt-5 whitespace-pre-wrap rounded-xl border border-border bg-background/60 p-5 font-mono text-xs leading-relaxed text-muted-foreground">
          {brief}
        </pre>
        <p className="mt-4 text-sm text-muted-foreground">
          Send it however you prefer — you&apos;ll get a fixed quote and start date back within 24 hours.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> WhatsApp it
          </a>
          <a href={mailHref} className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-foreground">
            <Mail className="h-4 w-4" /> Email it
          </a>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-foreground">
            <CalendarPlus className="h-4 w-4" /> Book a call
          </a>
        </div>
        <button onClick={() => { setDone(false); setStep(0); setA({ type: "", features: [], timeline: "", budget: "", name: "", contact: "", notes: "" }) }} className="mt-5 text-xs text-muted-underline text-muted-foreground underline-offset-4 hover:underline">
          Start another brief
        </button>
      </motion.div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      {/* progress */}
      <div className="mb-7 flex items-center gap-2">
        {STEPS.map((s, i) => (
          <div key={s} className="flex flex-1 flex-col gap-2">
            <div className={`h-1 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`} />
            <span className={`font-mono text-[10px] uppercase tracking-wider ${i === step ? "text-foreground" : "text-muted-foreground/50"}`}>
              {s}
            </span>
          </div>
        ))}
      </div>

      {step === 0 && (
        <div>
          <h3 className="font-display text-2xl text-foreground">What are we building?</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {TYPES.map((t) => (
              <Chip key={t.label} selected={a.type === t.label} onClick={() => setA((s) => ({ ...s, type: t.label }))}>
                <span className="block">{t.label}</span>
                <span className="block text-xs opacity-60">{t.hint}</span>
              </Chip>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3 className="font-display text-2xl text-foreground">What should it do?</h3>
          <p className="mt-1 text-sm text-muted-foreground">Select everything that applies.</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {FEATURES.map((f) => (
              <Chip key={f} selected={a.features.includes(f)} onClick={() => toggleFeature(f)}>
                <span className="flex items-center gap-2">
                  {a.features.includes(f) && <Check className="h-3.5 w-3.5 text-primary" />} {f}
                </span>
              </Chip>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="font-display text-2xl text-foreground">When do you need it live?</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {TIMELINES.map((t) => (
              <Chip key={t} selected={a.timeline === t} onClick={() => setA((s) => ({ ...s, timeline: t }))}>
                {t}
              </Chip>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="font-display text-2xl text-foreground">Budget range</h3>
          <p className="mt-1 text-sm text-muted-foreground">Honest ranges get honest scopes — I tailor the build to fit.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {BUDGETS.map((b) => (
              <Chip key={b} selected={a.budget === b} onClick={() => setA((s) => ({ ...s, budget: b }))}>
                {b}
              </Chip>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="font-display text-2xl text-foreground">Where do I send the quote?</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <input
              value={a.name}
              onChange={(e) => setA((s) => ({ ...s, name: e.target.value }))}
              placeholder="Your name"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-primary"
            />
            <input
              value={a.contact}
              onChange={(e) => setA((s) => ({ ...s, contact: e.target.value }))}
              placeholder="Email or WhatsApp number"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-primary"
            />
            <textarea
              value={a.notes}
              onChange={(e) => setA((s) => ({ ...s, notes: e.target.value }))}
              placeholder="Anything else? (optional)"
              rows={3}
              className="sm:col-span-2 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-primary"
            />
          </div>
        </div>
      )}

      {/* controls */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
        >
          <ArrowLeft className="h-3 w-3" /> Back
        </button>
        {step < STEPS.length - 1 ? (
          <button
            onClick={() => canNext && setStep((s) => s + 1)}
            disabled={!canNext}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-30"
          >
            Continue <ArrowRight className="h-3 w-3" />
          </button>
        ) : (
          <button
            onClick={() => canNext && setDone(true)}
            disabled={!canNext}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-30"
          >
            Generate my brief <Check className="h-3 w-3" />
          </button>
        )}
      </div>
    </div>
  )
}
