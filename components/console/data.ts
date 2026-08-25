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
  {
    name: "HireMe MCP",
    url: "https://mcp.djaouad.tech",
    ping: "https://hireme-mcp-backend.onrender.com/health",
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
      "Answers customers in under a second, books appointments, captures leads and passes hard questions to your staff. Runs 24/7.",
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
      "Upload your documents, ask anything, get answers that show their source. Add it to your site with one line of code.",
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
      "Support agent that checks orders, finds answers in your help docs and opens tickets. Passes tricky cases to your team.",
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
      "My portfolio as an MCP server. AI assistants like Claude or Cursor can read my work, check prices and send me a project brief.",
    metrics: ["5 tools over MCP", "Works in Claude & Cursor", "Brief intake → fixed quote"],
    demo: { label: "mcp.djaouad.tech", href: "https://mcp.djaouad.tech" },
    github: "https://github.com/djoudad292/hireme-mcp",
    apk: "https://github.com/djoudad292/hireme-mcp/releases/download/latest-apk/hireme-mcp.apk",
  },
];

export const SERVICES = [
  {
    title: "Starter — AI chatbot or agent",
    desc: "A chatbot that knows your business. It answers customers, books jobs and sends you the leads. Lives on your website.",
    price: "From $500",
    eta: "~1–2 weeks",
  },
  {
    title: "Professional — production AI system",
    desc: "Bigger build: chatbot + document search + dashboard for your team + analytics. Same tech that powers my own site.",
    price: "From $2,500",
    eta: "2–4 weeks",
  },
  {
    title: "Custom — SaaS & multi-service products",
    desc: "Full products: SaaS platforms, payments, mobile apps, connections to other tools. We plan it together on a free call.",
    price: "Fixed quote",
    eta: "2–8 weeks",
  },
];

export const BUILD_STACK = [
  {
    title: "Models",
    detail: "Gemini · OpenAI · OpenRouter — chosen per task, latency and cost. Swappable without rewrites.",
  },
  {
    title: "Retrieval (RAG)",
    detail: "PostgreSQL + pgvector: ingestion → chunking → embeddings → cited answers. No hallucinated sources.",
  },
  {
    title: "Frameworks",
    detail: "Next.js · NestJS · LangGraph · WebSocket · React Native (Expo) for one codebase to both stores.",
  },
  {
    title: "Delivery",
    detail: "Render · Vercel · Docker · GitHub Actions CI. Your source code, your domains, monitored from day one.",
  },
];


export const GITHUB = "https://github.com/djoudad292"
export const LINKEDIN = "https://linkedin.com/in/djaouad-frih"
