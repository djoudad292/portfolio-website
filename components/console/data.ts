// Shared content for the Client Console views.
export const COMPANY_ID = "e207c632-ca30-48d2-a41b-87c76f3bc3fb";
export const WS_URL = `wss://ai-customer-support-backend-ldbf.onrender.com/ws?company=${COMPANY_ID}`;
export const CALENDLY_URL = "https://calendly.com/oufr29/30min";
export const WHATSAPP = "https://wa.me/213780688125";
export const EMAIL = "oufr29@gmail.com";

export const PRODUCTS = [
  { name: "AI Receptionist", url: "https://chat.djaouad.tech" },
  { name: "PDF Workspace", url: "https://docs.djaouad.tech" },
  {
    name: "Support Agent",
    url: "https://customer.djaouad.tech",
    ping: "https://ai-customer-support-backend-ldbf.onrender.com/health",
  },
  {
    name: "HireMe MCP",
    url: "https://mcp.djaouad.tech",
    ping: "https://hireme-mcp-backend.onrender.com/health",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discuss",
    desc: "You fill the intake or talk to my agent. I reply with a fixed quote and start date within 24 hours.",
  },
  {
    step: "02",
    title: "Scope",
    desc: "We agree on deliverables, milestones, and success criteria before any code is written.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Weekly demos on a live URL from day one — you watch it grow, no black box.",
  },
  {
    step: "04",
    title: "Deploy",
    desc: "Deployed to your domain, monitored, documented. Handover call + source code is yours.",
  },
  {
    step: "05",
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
      "Businesses lose leads after hours and spend hours answering repetitive questions. This AI receptionist handles customer conversations 24/7 — answers questions from the business's own knowledge base, books appointments, captures leads, routes to the right department, and hands off to a human when it should.",
    metrics: ["<1s first response time", "24/7 unattended", "Android app published"],
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
      "Teams waste hours searching through documents for answers. Upload any PDF and get cited, AI-powered answers in seconds — summaries, Q&A, and an embeddable widget you can add to any website. Multi-tenant, secure, and self-hosted.",
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
      "Customer support teams handle the same questions hundreds of times. This AI agent resolves common issues automatically — creates tickets, checks orders, searches the knowledge base, and escalates to humans with full context when needed. One line to embed on any website.",
    metrics: ["5 tools wired to the agent", "Live admin analytics", "One-line embed"],
    demo: { label: "customer.djaouad.tech", href: "https://customer.djaouad.tech" },
    github: "https://github.com/djoudad292/ai-customer-support-agent",
    apk: "https://github.com/djoudad292/ai-customer-support-agent/releases/download/latest-apk/ai-support.apk",
  },
  {
    id: "hireme-mcp",
    title: "HireMe MCP",
    year: "2026",
    stack: "MCP · TypeScript · Express · Netlify · Render",
    image: "/hireme-mcp-hero.png",
    alt: "HireMe MCP console",
    description:
      "An AI agent that can vet me, check my pricing, and file a project brief on a client's behalf — through the MCP protocol. It's the first portfolio that AI assistants can hire from directly, demonstrating the kind of automation I build for clients.",
    metrics: ["5 tools over MCP", "Works in Claude & Cursor", "Brief intake → fixed quote"],
    demo: { label: "mcp.djaouad.tech", href: "https://mcp.djaouad.tech" },
    github: "https://github.com/djoudad292/hireme-mcp",
    apk: "https://github.com/djoudad292/hireme-mcp/releases/download/latest-apk/hireme-mcp.apk",
  },
];

export const SERVICES = [
  {
    title: "Starter — AI chatbot or agent",
    desc: "A chatbot that knows your business. Answers customers, books jobs, sends you the leads. Lives on your website. Fixed price, no surprises.",
    price: "From $2,000",
    eta: "~1–2 weeks",
  },
  {
    title: "Professional — production AI system",
    desc: "Full build: chatbot + document search + team dashboard + analytics. Same tech that powers my own products. Source code is yours.",
    price: "From $5,000",
    eta: "2–4 weeks",
  },
  {
    title: "Custom — SaaS & multi-service products",
    desc: "Full products: SaaS platforms, payments, mobile apps, integrations. We plan it together on a free call. You own everything.",
    price: "From $10,000+",
    eta: "2–8 weeks",
  },
];

export const BUILD_STACK = [
  {
    title: "AI Models",
    detail: "Gemini, OpenAI, OpenRouter — I choose the right model per task for latency, cost, and quality. You can swap providers without rewriting anything.",
  },
  {
    title: "Knowledge & Retrieval (RAG)",
    detail: "PostgreSQL + pgvector: your documents are chunked, embedded, and searched. Every AI answer cites its source — no hallucinated information.",
  },
  {
    title: "Frameworks & Code",
    detail: "Next.js, NestJS, LangGraph, WebSocket, React Native. One developer, one codebase, one invoice — full-stack from database to UI.",
  },
  {
    title: "Delivery & Ownership",
    detail: "Render, Vercel, Docker, GitHub Actions CI. You get the source code, your domains, your deployment. Monitored from day one.",
  },
];


export const GITHUB = "https://github.com/djoudad292"
export const LINKEDIN = "https://linkedin.com/in/djaouad-frih-16ab7323a"
