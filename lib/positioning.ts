/**
 * Single source of truth for the site's positioning and commercial anchor.
 *
 * Change these two values and the whole site follows. Everything else that
 * repeats the positioning line or the price band should import from here so
 * there is no second copy to drift.
 */

// The positioning statement. Used verbatim on the homepage hero, the page
// metadata and the OG copy.
export const POSITIONING =
  "Full-Stack + AI Engineer. I build the orchestration loop, the retrieval layer that feeds it, and the production application around it."

// ---------------------------------------------------------------------------
// THE PRICE ANCHOR — one floor, published identically on every surface.
// ---------------------------------------------------------------------------
// 2026-10-14: The site previously published NO price number at all, while the
// HireMe MCP exposed $900 for the audit (contradicting the site's free audit)
// and $3,500 as a floor for builds. Three different price signals on one
// supplier reads as "will take anything", and a buyer who cannot see a floor
// has to guess whether $5k or $50k is the real range.
//
// Resolution per the assessment: publish exactly ONE number — the floor for a
// full build. The audit stays free (it is the entry offer a buyer can act on
// without evaluating a supplier). The floor ($3,500) is the minimum for a
// scoped production build, which keeps commodity chatbot buyers out and
// serious buyers self-selecting. This must stay byte-identical to the MCP
// backend's SERVICES floor (hireme-mcp/backend/src/content.ts).
export const PRICE_ANCHOR = "Full builds start at $3,500"
export const PRICE_ANCHOR_NOTE =
  "Quoted after a free reliability audit, once the scope is real. No hourly surprises."
export const NO_PRICE_NOTE: string | undefined = undefined

// Entry offer — always free, always the same anchor on every surface including
// the MCP backend. A buyer can act without first evaluating a supplier.
export const AUDIT_OFFER = {
  price: "Free",
  duration: "five working days",
  summary:
    "Retrieval and authorization audit on your own documents. Precision/recall/F1 against a goldset built from your corpus, refusal rate on out-of-scope questions, citation correctness, p50/p95 latency and token cost, and a server-side authorization review.",
  terms:
    "Failures are published alongside the scores. Credited in full against any build that follows.",
} as const

// White-label / agency capacity offer. Targets digital and product agencies in
// EU + US-East timezones. You have the client, the scope and the deadline; I
// own the build end to end as your delivery capacity.
export const AGENCY_OFFER = {
  title: "White-label build capacity for agencies",
  summary:
    "I work as your delivery layer: scoped, fixed-price, end-to-end builds that you take to the client under your brand. You keep the relationship and the margin; I bring production engineering and retrieval benchmarking to every delivery.",
  deliverables: [
    "Production-ready code in your repo or mine, with documentation",
    "Retrieval benchmarked against a goldset you approve",
    "Source handed over with a handover call",
    "Weeklies at your cadence, not mine",
  ],
} as const

// Case-study pathway — 2-3 scoped builds at reduced rates in exchange for a
// testimonial and a published case study with real numbers. This is how the
// "zero client work" gap closes.
export const CASE_STUDY_PATHWAY = {
  title: "Case-study builds",
  summary:
    "I take 2–3 scoped vertical slices at intentionally reduced rates ($3,500–$6,500) in exchange for a testimonial and a published case study. Real deflector-rate / hours-saved / latency numbers, agreed up front. This is the fastest way to close the gap between my own systems and paying-client proof.",
  entryPoint: "Free reliability audit first, then a scoped slice scoped to your problem.",
} as const

// Honest availability claim. UTC+1 gives ~3-4h of US-East overlap, not a full
// US day — claiming "overlaps US hours" is a verifiable falsehood on a page
// whose whole pitch is that its claims are checkable.
export const TIMEZONE_CLAIM = "UTC+1 — overlaps EU business hours; 13:00–17:00 UTC US-East overlap"

// Booking link for the free scope call offered on the pricing and contact
// sections.
//
// VERIFIED 2026-10-04 by fetching both candidates: https://cal.com/djaouad/30min
// returns HTTP 404 — that Cal.com handle was never created, so every
// "Book a free 15-min scope call" button on the site was a dead link.
// https://calendly.com/oufr29/30min returns HTTP 200 and is the scheduler
// that actually exists, so that is the canonical value here. If the Cal.com
// handle is created later, change this constant only.
export const BOOKING_URL = "https://calendly.com/oufr29/30min"
export const BOOKING_LABEL = "Book a free 15-min scope call"
