'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Check, Loader2 } from 'lucide-react'

import { controlClass } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/button'
import { Section } from '@/components/section'
import { SectionCard } from '@/components/section-card'
import { Eyebrow } from '@/components/eyebrow'
import { cn } from '@/lib/utils'

const initialForm = {
  name: '',
  email: '',
  company: '',
  companyType: '',
  serviceInterest: 'AI Reliability Audit',
  budget: '',
  timeline: '',
  problem: '',
}

const COMPANY_TYPES = [
  'Startup / scale-up',
  'Software company',
  'Agency',
  'Enterprise team',
  'Founder-led business',
] as const

const SERVICES = [
  'AI Reliability Audit',
  'RAG or Agent Build',
  'Production AI System',
  'White-Label Delivery',
  'Not sure yet',
] as const

const BUDGETS = [
  'Audit first / deciding',
  '$3.5k–$7.5k',
  '$7.5k–$15k',
  '$15k+',
  'Agency milestone budget',
] as const

const TIMELINES = [
  'Exploring',
  'Within 30 days',
  '1–3 months',
  'Already in production',
] as const

/** First-touch attribution, kept exactly as it was: campaign params are
 *  persisted to sessionStorage so a later page view still reports the
 *  original source. Attribution must never block a submission. */
function firstTouch() {
  const params = new URLSearchParams(window.location.search)
  const current = {
    source: params.get('utm_source') || params.get('source') || 'direct',
    medium: params.get('utm_medium') || '',
    campaign: params.get('utm_campaign') || '',
    ref: params.get('ref') || '',
  }
  try {
    const saved = window.sessionStorage.getItem('portfolio-attribution')
    if (saved) return { ...current, ...JSON.parse(saved) }
    window.sessionStorage.setItem('portfolio-attribution', JSON.stringify(current))
  } catch {
    // Attribution should never block a lead submission.
  }
  return current
}

function Field({
  label,
  htmlFor,
  required,
  children,
  className,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={htmlFor}>
        {label}
        {required && (
          <span className="text-primary" aria-hidden>
            *
          </span>
        )}
      </Label>
      {children}
    </div>
  )
}

function Select({
  id,
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  id: string
  value: string
  onChange: (v: string) => void
  options: readonly string[]
  placeholder?: string
  required?: boolean
}) {
  return (
    <select
      id={id}
      name={id}
      value={value}
      required={required}
      onChange={(e) => onChange(e.target.value)}
      className={controlClass}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  )
}

export function LeadCapture() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const update = (field: keyof typeof initialForm, value: string) =>
    setForm((current) => ({ ...current, [field]: value }))

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setError('')
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...form, ...firstTouch() }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(result.message || 'We could not save your request.')
      }
      setStatus('success')
      setForm(initialForm)
    } catch (submissionError) {
      setStatus('error')
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'Please email contact@djaouad.is-a.dev instead.',
      )
    }
  }

  return (
    <Section id="lead-capture">
      <SectionCard padding="lg" className="bg-accent/30">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Explainer */}
          <div>
            <Eyebrow tone="brand">Free audit intake</Eyebrow>
            <h2 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
              Tell me what should work better.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Share the workflow, documents or AI product you want to improve. I reply within
              one business day with the most useful next step — including when an audit is not
              the right answer.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                'Measured against your real constraints',
                'Fixed-scope engineering work',
                'No mailing list or automated pitch sequence',
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span aria-hidden className="mt-0.5 text-primary">
                    →
                  </span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form / success */}
          <div aria-live="polite">
            {status === 'success' ? (
              <div className="flex h-full min-h-48 flex-col justify-center rounded-lg border border-primary/30 bg-primary/[0.06] p-6">
                <Check aria-hidden className="size-5 text-primary" />
                <h3 className="mt-3 font-display text-xl tracking-tight">
                  Request received.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Your request is in the lead desk. I&rsquo;ll review it and reply within one
                  business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 self-start font-mono text-xs text-primary underline-offset-4 hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="lead-name" required>
                    <input
                      id="lead-name"
                      name="name"
                      required
                      minLength={2}
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={controlClass}
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Work email" htmlFor="lead-email" required>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={controlClass}
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Company" htmlFor="lead-company">
                    <input
                      id="lead-company"
                      name="company"
                      autoComplete="organization"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      className={controlClass}
                      placeholder="Company or project"
                    />
                  </Field>
                  <Field label="Company type" htmlFor="lead-companyType" required>
                    <Select
                      id="lead-companyType"
                      value={form.companyType}
                      onChange={(v) => update('companyType', v)}
                      options={COMPANY_TYPES}
                      placeholder="Select one"
                      required
                    />
                  </Field>
                  <Field label="What do you need?" htmlFor="lead-serviceInterest" required>
                    <Select
                      id="lead-serviceInterest"
                      value={form.serviceInterest}
                      onChange={(v) => update('serviceInterest', v)}
                      options={SERVICES}
                      required
                    />
                  </Field>
                  <Field label="Budget range" htmlFor="lead-budget" required>
                    <Select
                      id="lead-budget"
                      value={form.budget}
                      onChange={(v) => update('budget', v)}
                      options={BUDGETS}
                      placeholder="Select one"
                      required
                    />
                  </Field>
                  <Field
                    label="Timeline"
                    htmlFor="lead-timeline"
                    required
                    className="sm:col-span-2"
                  >
                    <Select
                      id="lead-timeline"
                      value={form.timeline}
                      onChange={(v) => update('timeline', v)}
                      options={TIMELINES}
                      placeholder="Select one"
                      required
                    />
                  </Field>
                </div>

                <Field
                  label="What should the system do, and where does it fail today?"
                  htmlFor="lead-problem"
                  required
                >
                  <textarea
                    id="lead-problem"
                    name="problem"
                    required
                    minLength={20}
                    rows={4}
                    value={form.problem}
                    onChange={(e) => update('problem', e.target.value)}
                    className={cn(controlClass, 'resize-y')}
                    placeholder="A few concrete details are better than a polished brief."
                  />
                </Field>

                <div className="flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto"
                  >
                    {status === 'sending' ? (
                      <Loader2 aria-hidden className="size-4 animate-spin" />
                    ) : (
                      <ArrowUpRight aria-hidden className="size-4" />
                    )}
                    {status === 'sending' ? 'Saving your request…' : 'Request the free audit'}
                  </Button>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Or email{' '}
                    <a
                      href="mailto:contact@djaouad.is-a.dev"
                      className="text-foreground underline underline-offset-4 hover:text-primary"
                    >
                      contact@djaouad.is-a.dev
                    </a>{' '}
                    directly.
                  </p>
                </div>

                {status === 'error' && (
                  <p
                    role="alert"
                    className="rounded-lg border border-destructive/30 bg-destructive/[0.07] p-3 text-sm text-destructive"
                  >
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </SectionCard>
    </Section>
  )
}