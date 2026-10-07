# Maintenance Orchestration Demo — Spec

**Status:** spec written 2026-10-07. Not yet built.
**Purpose:** a 90-second, end-to-end proof for property managers running 100–5,000 units.
**Companion:** the case-study entry in `components/projects.tsx` ("Maintenance Orchestration Layer").

## What this demo must prove

A tenant message becomes a dispatched, approved, closed work order — with the
lease consulted, the vendor matched, the owner approving, and the field crew
closing from a phone — with a human at the approval gate.

## What it must NOT claim

- No real PMS credentials, no real SMS/WhatsApp delivery. The tenant channel is
  simulated. Say so on screen during the recording.
- No client data. All leases, vendors, tenants and properties are fictional.
- No claim of production tenancy. This is a demo of a pattern, recorded once.

## Cast (fixed, minimal)

- **One property:** "Cedar Court", 12 units (fictional).
- **Three vendor types:** HVAC, plumbing, electrical — a mock directory with
  skills, territory, availability, rating.
- **One emergency path:** "heater stopped working, it's freezing" → priority
  escalation, same loop, shorter SLA.
- **One routine path:** dripping tap → standard SLA, owner approval required.
- **Four roles:** tenant (sends message), manager (oversees queue), owner
  (approves), field crew (closes with photo).

## Scene script (~90 seconds)

1. **0:00–0:10 — Intake.** Simulated tenant WhatsApp message lands in the
   queue: "The heater stopped working in 4B, it's freezing."
2. **0:10–0:25 — Triage + lease.** Agent classifies: HVAC, emergency. Reads
   the sample lease (RAG over the PDF) and surfaces §7.2: heating systems are
   the owner's responsibility. Ticket created with priority and SLA.
3. **0:25–0:40 — Vendor match.** Agent queries the vendor directory: HVAC,
   territory, on-call availability, rating. Drafts the work order with the
   estimate and the lease clause attached.
4. **0:40–0:55 — Owner approval.** Owner gets the request on the owner
   portal: quote, lease clause, vendor. Approves in two taps.
5. **0:55–1:10 — Dispatch + field close.** Vendor receives the structured
   work order. Field-crew mobile screen shows the job card; crew uploads a
   photo and closes.
6. **1:10–1:20 — Closeout.** Tenant and owner notified; ticket closed with
   photo evidence and timestamp on the manager dashboard.

## Architecture — reuse map

| Piece | Reuse from | Status |
|---|---|---|
| Tenant intake (multi-channel → queue) | AI Virtual Receptionist agent loop | exists, live |
| Tool-calling with Zod-validated args | AI Virtual Receptionist | exists, live |
| Lease RAG (PDF → chunks → pgvector + HNSW → cited answer) | Smart PDF Workspace pipeline | exists, live |
| Multi-tenant auth, roles, row isolation | shared backend scaffold | exists, live |
| Admin dashboard + live analytics | support agent dashboard | exists, live |
| React Native / Expo mobile shell | receptionist / PDF APKs | exists, live |
| **Orchestration state machine** (classify → lease-check → match → approve → dispatch → closeout) | LangGraph scaffold | **new** |
| **Vendor directory + matching tool** | — | **new (mock)** |
| **Owner-approval gate UI** | — | **new** |
| **Field-crew job card + photo closeout screen** | Expo shell | **new screen** |
| PMS connector (AppFolio/Buildium) | — | **stub only, for the demo** |

The new code is the orchestration states and three screens. Everything else
is already running under public repositories.

## Tech stack

NestJS + PostgreSQL + pgvector/HNSW · LangGraph state machine (conditional
routing: emergency vs routine, approval-required vs not) · Next.js admin +
owner portal · React Native/Expo field app · Twilio/WhatsApp Business API
(simulated in demo, real in production) · Stripe (out of demo scope).

## Acceptance criteria

- [ ] Emergency message classified and prioritized without human input
- [ ] Lease clause cited on the ticket, with the source passage shown
- [ ] Vendor match explains its reasoning (skill, territory, availability)
- [ ] Owner approval is a hard gate: no dispatch before it
- [ ] Field crew closes from the mobile app with a photo
- [ ] Full audit trail on the ticket; four roles see only their view
- [ ] Demo is recordable in one take, ≤90s, simulated-data disclosure on screen

## Out of scope (deliberately)

Billing, real vendor SMS delivery, multiple properties, rent-chasing,
renewals, real PMS write-back. Those are the MVP phase after an audit
converts — not the demo.

## Build order and timebox

1. Vendor directory mock + matching tool (half day)
2. LangGraph orchestration states over the existing scaffold (1–2 days)
3. Owner-approval gate on the existing portal pattern (half day)
4. Field-crew job card + photo closeout in Expo (1 day)
5. Record, cut to 90s, add to the case-study entry's captures (half day)

**Total: 3–4 days.** If it drags past a week, the scope has crept — cut a
scene, don't add a feature.

## Validation gate (do not skip)

The demo is supporting evidence, not the wedge. The real entry offer is the
$900 reliability audit (already published on the site). Sequence:

1. Build the stripped demo now (this spec).
2. Send outreach to 500–2,000-unit firms (Boom/NARPM lists, LinkedIn).
3. Target 3–5 discovery calls; show the demo on the call.
4. Convert 1 call into the $900 audit; 3 audits = niche validated.
5. Only then expand the demo into the MVP build.
