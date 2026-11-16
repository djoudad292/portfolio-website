/**
 * Single source of truth for the site's positioning and commercial anchor.
 *
 * Change these values and the whole site follows. Everything that repeats the
 * positioning line or a price band imports from here so there is no second
 * copy to drift.
 *
 * 2026-11-06: POSITIONING, AGENCY_OFFER, CASE_STUDY_PATHWAY, BOOKING_LABEL and
 * NO_PRICE_NOTE were pruned. They were only consumed by components that have
 * since been deleted (the site renders its content inline per page, and the
 * shared-component versions of these sections were dead code). The remaining
 * exports are all still imported by live pages.
 */

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

// White-label / agency capacity floor. A separate tier from PRICE_ANCHOR on
// purpose: a scoped build at $3,500 and someone else's client at $8,000 are
// different products, and collapsing them onto one number would mislead both
// buyers. Declared here so the two page files cannot drift apart.
export const AGENCY_ANCHOR = "From $8,000 per project"
export const AGENCY_ANCHOR_META = "or from $12,000 / month · minimum three weeks · NDA before the first call"

// Entry offer — always free, always the same anchor on every surface including
// the MCP backend. A buyer can act without first evaluating a supplier.
//
// The turnaround is a target, not a guarantee, and it says so on the page.
// Building a goldset from a client's corpus is the variable part: a 20-page
// FAQ and a 400-page knowledge base are different jobs, and promising a fixed
// number of days for both would be the kind of claim this site exists to avoid.
// What is fixed is what's in scope and that it costs nothing.
export const AUDIT_OFFER = {
  price: "Free",
  duration: "one week, target",
  durationDetail:
    "Turnaround is a target, not a guarantee — it depends on how much of your corpus I have to turn into a goldset. A short FAQ and a 400-page knowledge base are different jobs, and I would rather say that up front than promise a day count I can't keep.",
  summary:
    "Retrieval and authorization audit on your own documents. Precision/recall/F1 against a goldset built from your corpus, refusal rate on out-of-scope questions, citation correctness, p50/p95 latency and token cost, and a server-side authorization review.",
  terms:
    "Failures are published alongside the scores. Credited in full against any build that follows, so the audit costs nothing whether or not you go ahead.",
} as const

// Honest availability claim. UTC+1 gives ~3-4h of US-East overlap, not a full
// US day — claiming "overlaps US hours" is a verifiable falsehood on a page
// whose whole pitch is that its claims are checkable.
export const TIMEZONE_CLAIM = "Remote · serves EU and US-East clients during overlapping business hours."

// Booking link for the free scope call offered on the pricing and contact
// sections.
//
// Switched from Calendly to a Google Calendar appointment schedule
// ("Free 30-min scope call") on 2026-10-18: it is free, and every booking
// auto-generates a Google Meet link. Verified 2026-10-18 — the schedule URL
// returns HTTP 200 and the public booking page renders with 30-minute slots.
// If the schedule is recreated, change this constant only; every call site
// imports it.
export const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1-n7EF-5CUR8I8eEuE6pebfNUKrKUrpWYc5dvXsj37YZL2EOFZeLSpCN9zRfXz20tZZcfyA2UJ"
