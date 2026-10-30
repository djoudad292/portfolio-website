import { NextRequest, NextResponse } from "next/server"

const leadSystemUrl = process.env.LEAD_SYSTEM_URL || "https://jlead-dhu2v5hx.manus.space"
const requiredFields = ["name", "email", "companyType", "serviceInterest", "problem", "budget", "timeline"] as const

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    for (const field of requiredFields) {
      if (typeof body[field] !== "string" || body[field].trim().length === 0) {
        return NextResponse.json({ message: `Please provide ${field}.` }, { status: 400 })
      }
    }

    const response = await fetch(`${leadSystemUrl}/api/leads`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-integration-source": "portfolio-website",
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        company: body.company || "",
        companyType: body.companyType,
        serviceInterest: body.serviceInterest,
        problem: body.problem,
        budget: body.budget,
        timeline: body.timeline,
        source: "portfolio-website",
        medium: body.medium || "organic",
        campaign: body.campaign || "",
        ref: body.ref || "portfolio-website",
        referrer: request.headers.get("referer") || "",
        landingPage: request.headers.get("origin") || "https://djaouad.is-a.dev",
      }),
      cache: "no-store",
    })

    const result = await response.json().catch(() => ({}))
    if (!response.ok) {
      return NextResponse.json({ message: result.message || "We could not save your request." }, { status: response.status })
    }
    return NextResponse.json({ ok: true, id: result.id })
  } catch (error) {
    console.error("Portfolio lead proxy failed", error)
    return NextResponse.json({ message: "The form is temporarily unavailable. Please email contact@djaouad.is-a.dev." }, { status: 502 })
  }
}
