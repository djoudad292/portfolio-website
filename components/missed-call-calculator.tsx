"use client"

import * as React from "react"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const CURRENCIES = {
  AUD: { symbol: "A$", label: "AUD" },
  GBP: { symbol: "£", label: "GBP" },
  USD: { symbol: "$", label: "USD" },
  EUR: { symbol: "€", label: "EUR" },
} as const

type CurrencyCode = keyof typeof CURRENCIES

const WEEKS_PER_MONTH = 4.33

function formatMoney(value: number, code: CurrencyCode) {
  const rounded = Math.round(value)
  return `${CURRENCIES[code].symbol}${new Intl.NumberFormat("en-US").format(rounded)}`
}

function InputsRow({
  id,
  label,
  hint,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  id: string
  label: string
  hint?: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (next: number) => void
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between gap-4">
        <Label htmlFor={id} className="text-sm text-foreground">
          {label}
        </Label>
        <span className="font-mono text-sm text-primary">{display}</span>
      </div>
      <Slider
        id={id}
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(next) => onChange(next[0] ?? min)}
        aria-label={label}
      />
      {hint ? <p className="text-xs leading-relaxed text-muted-foreground">{hint}</p> : null}
    </div>
  )
}

export function MissedCallCalculator() {
  const [currency, setCurrency] = React.useState<CurrencyCode>("AUD")
  const [missedPerWeek, setMissedPerWeek] = React.useState(12)
  const [avgValue, setAvgValue] = React.useState(400)
  const [recoveryRate, setRecoveryRate] = React.useState(30)

  const result = React.useMemo(() => {
    const missedPerMonth = missedPerWeek * WEEKS_PER_MONTH
    const recoverable = Math.round(missedPerMonth * (recoveryRate / 100))
    const lostPerMonth = missedPerMonth * avgValue
    const recoveredPerMonth = recoverable * avgValue
    const recoveredPerYear = recoveredPerMonth * 12
    return { missedPerMonth, recoverable, lostPerMonth, recoveredPerMonth, recoveredPerYear }
  }, [missedPerWeek, avgValue, recoveryRate])

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b border-border">
        <CardTitle className="font-display text-xl tracking-tight">
          Your numbers
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-8 pt-2">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Currency">
          {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
            const active = code === currency
            return (
              <button
                key={code}
                type="button"
                onClick={() => setCurrency(code)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  active
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {CURRENCIES[code].label}
              </button>
            )
          })}
        </div>

        <InputsRow
          id="missed-per-week"
          label="Unanswered enquiries per week"
          hint="Calls and messages that arrive after hours, during lunch, or while the front desk is busy."
          value={missedPerWeek}
          display={`${missedPerWeek}/week`}
          min={0}
          max={60}
          step={1}
          onChange={setMissedPerWeek}
        />

        <InputsRow
          id="avg-value"
          label="Average value of a booking"
          hint="A single accepted treatment or new-patient course, whichever you prefer to track."
          value={avgValue}
          display={formatMoney(avgValue, currency)}
          min={0}
          max={5000}
          step={50}
          onChange={setAvgValue}
        />

        <InputsRow
          id="recovery-rate"
          label="Share an AI receptionist recovers"
          hint="Deliberately conservative. It only counts enquiries that would otherwise be lost — the ones a human never reaches in time."
          value={recoveryRate}
          display={`${recoveryRate}%`}
          min={0}
          max={90}
          step={5}
          onChange={setRecoveryRate}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-background/40 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Lost today
            </p>
            <p className="mt-3 font-display text-2xl tracking-tight text-foreground">
              {formatMoney(result.lostPerMonth, currency)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              per month, at full booking value
            </p>
          </div>
          <div className="rounded-xl border border-primary bg-primary/5 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Recoverable
            </p>
            <p className="mt-3 font-display text-2xl tracking-tight text-primary">
              {formatMoney(result.recoveredPerMonth, currency)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              per month · {formatMoney(result.recoveredPerYear, currency)} per year
            </p>
          </div>
        </div>

        <div className="space-y-1 text-sm text-muted-foreground">
          <p>
            That is about <span className="text-foreground">{result.recoverable} extra bookings a month</span>{" "}
            from {Math.round(result.missedPerMonth)} unanswered enquiries.
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href="/contact">Request the free reliability audit</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/dental-clinics">See it running for clinics</Link>
          </Button>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          This is an estimate from the numbers you entered, not a promise of revenue.
          It assumes no enquiry is worth answering twice, and it counts only the
          share you told it to. The point is not the exact figure — it is that a
          missed enquiry has a price, and almost nobody counts it.
        </p>
      </CardContent>
    </Card>
  )
}
