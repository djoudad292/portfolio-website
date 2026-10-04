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
  "AI systems engineer. I build the agent, the retrieval layer that feeds it, and the production application around it."

// ---------------------------------------------------------------------------
// THE PRICE LADDER — one ladder, published identically on every surface.
// ---------------------------------------------------------------------------
// RATIONALE (do not "optimise" these numbers away without reading this):
// The site previously published $500 on GitHub and the MCP landing page while
// showing $4,000-$12,000 here. Three live prices on one supplier reads as
// "he will take anything", and an agent resolving the GitHub repo saw $500
// before it ever reached the real band.
//
// The floor was raised because $500 is the COMMODITY price: packaged AI
// receptionists sell for $14-$399/month, Upwork sells cited RAG for
// $150-$600 in three days, and a narrow MCP server is $300-$800 in 48h.
// Competing at $500 competes with tools.
//
// The ceiling was lowered because at $4,000-$12,000 with no paying AI client
// on record, the ask sat above what the proof supports. $3,500-$9,000 sits
// inside the Gulf/MENA agency band (AED 8,000-80,000) rather than above it.
//
// The AUDIT is the entry offer on purpose: it is the one thing in this ladder
// a buyer can buy before trusting a supplier, it needs no case study to
// evaluate, and it converts directly into a build (credited in full).
export const AUDIT_OFFER = {
  price: "$900",
  duration: "five working days",
  summary:
    "Retrieval and authorization audit on your own documents. Precision/recall/F1 against a goldset built from your corpus, refusal rate on out-of-scope questions, citation correctness, p50/p95 latency and token cost, and a server-side authorization review.",
  terms:
    "Failures are published alongside the scores. Credited in full against any build that follows.",
} as const

export const STARTER_PRICE = "From $3,500"
export const PROFESSIONAL_PRICE = "From $6,500"
export const CUSTOM_PRICE = "From $9,000"
export const MONITORING_PRICE = "$300/month"

// Public price band for a full AI system build. This is the number prospects
// see above the fold on the pricing section.
export const PRICE_ANCHOR = "$3,500 - $9,000"

export const PRICE_ANCHOR_NOTE =
  "depending on scope. Retrieval quality, agent tooling, and the application around it all move the number."

// Honest availability claim. UTC+1 gives ~3-4h of US-East overlap, not a full
// US day — claiming "overlaps US hours" is a verifiable falsehood on a page
// whose whole pitch is that its claims are checkable.
export const TIMEZONE_CLAIM = "UTC+1 — overlaps EU business hours; 13:00–17:00 UTC US-East overlap"

// Booking link for the free scope call offered on the pricing and contact
// sections. Cal.com is the canonical scheduler. VERIFY this handle resolves —
// if you revert to a different provider, change this constant only.
export const BOOKING_URL = "https://cal.com/djaouad/30min"
export const BOOKING_LABEL = "Book a free 15-min scope call"
