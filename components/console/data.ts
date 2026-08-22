// Shared content for the Client Console views.
export const COMPANY_ID = "e207c632-ca30-48d2-a41b-87c76f3bc3fb";
export const WS_URL = `wss://ai-customer-support-backend-ldbf.onrender.com/ws?company=${COMPANY_ID}`;
export const CALENDLY_URL = "https://calendly.com/oufr29/30min";
export const WHATSAPP = "https://wa.me/213780688125";
export const EMAIL = "djaouad.frih@gmail.com";

export const PRODUCTS = [
  { name: "AI Receptionist", url: "https://chat.djaouad.tech" },
  { name: "PDF Workspace", url: "https://docs.djaouad.tech" },
  {
    name: "Support Agent",
    url: "https://customer.djaouad.tech",
    ping: "https://ai-customer-support-backend-ldbf.onrender.com/health",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Brief",
    desc: "You fill the intake or talk to my agent. I reply with a fixed quote and start date within 24 hours.",
  },
  {
    step: "02",
    title: "Build",
    desc: "Weekly demos on a live URL from day one — you watch it grow, no black box.",
  },
  {
    step: "03",
    title: "Launch",
    desc: "Deployed to your domain, monitored, documented. Handover call + source code is yours.",
  },
  {
    step: "04",
    title: "Support",
    desc: "30 days of fixes included. Optional monthly retainer for iterations and new features.",
  },
];

export const PROJECTS = [
  {
    id: "receptionist",
    title: "AI Virtual Receptionist",
    year: "2025",
    stack: "Next.js · NestJS · pgvector · React Native · Gemini",
    image: "/receptionist-hero.png",
    alt: "AI Virtual Receptionist interface",
    description:
      "24/7 receptionist trained on a business's own content — answers customers in under a second, books appointments, captures leads, routes by department, hands off to humans when it should.",
    metrics: ["<1s first response", "24/7 unattended", "Android app published"],
    demo: { label: "chat.djaouad.tech", href: "https://chat.djaouad.tech" },
    github: "https://github.com/djoudad292/ai-virtual-receptionist",
    apk: "https://github.com/djoudad292/ai-virtual-receptionist/releases/download/latest-apk/ai-receptionist.apk",
  },
  {
    id: "pdf",
    title: "Smart PDF Workspace",
    year: "2025",
    stack: "Next.js · NestJS · pgvector · OpenRouter · JWT",
    image: "/pdf-workspace-hero.png",
    alt: "Smart PDF Workspace interface",
    description:
      "Upload documents, ask questions with cited answers, generate summaries, publish an ask-your-docs widget. Multi-tenant teams, token revocation, one-click embeds.",
    metrics: ["Cited RAG answers", "Multi-tenant teams", "Embeddable widget"],
    demo: { label: "docs.djaouad.tech", href: "https://docs.djaouad.tech" },
    github: "https://github.com/djoudad292/smart-pdf-workspace",
    apk: "https://github.com/djoudad292/smart-pdf-workspace/releases/download/latest-apk/smart-pdf.apk",
  },
  {
    id: "support",
    title: "AI Customer Support Agent",
    year: "2026",
    stack: "Next.js · NestJS · LangGraph · pgvector · WebSocket",
    image: "/support-agent-hero.png",
    alt: "AI Customer Support Agent dashboard",
    description:
      "Tool-calling support agent: creates tickets, checks orders, searches knowledge, escalates to humans with full context. Admin dashboard with live analytics; one-line embeddable widget.",
    metrics: ["5 tools wired to the agent", "Live admin analytics", "One-line embed"],
    demo: { label: "customer.djaouad.tech", href: "https://customer.djaouad.tech" },
    github: "https://github.com/djoudad292/ai-customer-support-agent",
    apk: "https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-support.apk",
  },
];

export const SERVICES = [
  { title: "AI agents & chatbots", desc: "Trained on your content — answer, book, qualify, escalate.", price: "From $500", eta: "~1–2 weeks" },
  { title: "Document intelligence (RAG)", desc: "Your docs become cited, searchable answers — internal or embedded.", price: "From $500", eta: "~1–2 weeks" },
  { title: "Full-stack SaaS builds", desc: "Multi-tenant products: auth, payments, dashboards, real-time.", price: "Fixed quote", eta: "2–6 weeks" },
  { title: "Mobile apps", desc: "One React Native codebase to both stores, push-ready.", price: "Fixed quote", eta: "2–4 weeks" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Great people, very good service. Made my website within 2 weeks in such a professional manner, very good communication skills would highly recommend!!",
    name: "Bilal Kadri",
    country: "United Kingdom",
  },
  {
    quote:
      "Huge shout-out to djaouad! Complete, fully functional full-stack build delivered right on schedule. That's how it's done! Star developer right here.",
    name: "Muhhamet Novruzov",
    country: "Cyprus",
  },
];
