"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

interface CaptureImage {
  src: string
  alt: string
}

interface CaptureVideo {
  src: string
  label: string
}

interface DemoGroup {
  title: string
  label: string
  images: CaptureImage[]
  videos: CaptureVideo[]
}

const demoGroups: DemoGroup[] = [
  {
    title: "AI Virtual Receptionist",
    label: "2025",
    images: [
      { src: "/captures/receptionist/receptionist-landing.png", alt: "AI Virtual Receptionist landing page with the chat welcome screen" },
      { src: "/captures/receptionist/receptionist-try.png", alt: "Live chat demo with a visitor asking a question" },
      { src: "/captures/receptionist/receptionist-dashboard.png", alt: "Admin dashboard showing conversation analytics" },
      { src: "/captures/receptionist/receptionist-inbox.png", alt: "Inbox with routed messages from visitors" },
    ],
    videos: [
      { src: "/captures/receptionist/receptionist-flow.webm", label: "flow" },
      { src: "/captures/receptionist/receptionist-dashboard.webm", label: "dashboard tour" },
    ],
  },
  {
    title: "Smart PDF Workspace",
    label: "2025",
    images: [
      { src: "/captures/pdf/pdf-landing.png", alt: "Smart PDF Workspace landing page showing the upload area" },
      { src: "/captures/pdf/pdf-try.png", alt: "Ask-a-question demo over an uploaded PDF" },
    ],
    videos: [
      { src: "/captures/pdf/pdf-flow.webm", label: "flow" },
    ],
  },
  {
    title: "AI Customer Support Agent",
    label: "2026",
    images: [
      { src: "/captures/support/support-landing.png", alt: "AI Customer Support Agent landing page with the chat widget preview" },
      { src: "/captures/support/support-try.png", alt: "Live support conversation with a customer" },
      { src: "/captures/support/support-dashboard.png", alt: "Admin dashboard with live support analytics" },
      { src: "/captures/support/support-tickets.png", alt: "Ticket list showing open and resolved support cases" },
    ],
    videos: [
      { src: "/captures/support/support-flow.webm", label: "flow" },
      { src: "/captures/support/support-dashboard.webm", label: "dashboard tour" },
    ],
  },
  {
    title: "HireMe MCP Server",
    label: "2026",
    images: [
      { src: "/captures/mcp/mcp-landing.png", alt: "HireMe MCP Server landing page with the endpoint details" },
      { src: "/captures/mcp/mcp-playground.png", alt: "Live playground calling MCP tools" },
    ],
    videos: [
      { src: "/captures/mcp/mcp-flow.webm", label: "flow" },
    ],
  },
]

export function DemoCaptures() {
  return (
    <section id="captures" className="px-6 py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label="Demo captures"
          title="Real screens and flows, recorded live."
          description="Screenshots and short flow videos for each system below. These are the actual interfaces customers and agents interact with."
        />

        <div className="mt-12 space-y-16">
          {demoGroups.map((demo, i) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span>{demo.label}</span>
                <span className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
                  {demo.title}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {demo.images.map((img) => (
                  <div key={img.src} className="overflow-hidden rounded-xl border border-border bg-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>

              {demo.videos.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {demo.videos.map((vid) => (
                    <div key={vid.src} className="overflow-hidden rounded-xl border border-border bg-card">
                      <video
                        controls
                        preload="none"
                        className="aspect-[16/9] w-full object-cover object-top"
                      >
                        <source src={vid.src} type="video/webm" />
                      </video>
                      <div className="border-t border-border px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {vid.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
