export type EvidenceArtifact = {
  title: string
  body: string
  links: { label: string; href: string }[]
}

export const EVIDENCE_ARTIFACTS: EvidenceArtifact[] = [
  {
    title: "CI on every push, run history public",
    body: "The receptionist backend builds and runs its test suite in GitHub Actions on every push, and both agent repositories build in CI on every push. The run history — green and red — is open.",
    links: [
      {
        label: "receptionist/actions",
        href: "https://github.com/djoudad292/ai-virtual-receptionist/actions",
      },
      {
        label: "support-agent/actions",
        href: "https://github.com/djoudad292/ai-customer-support-agent/actions",
      },
    ],
  },
  {
    title: "13 committed test files",
    body: "11 in the receptionist backend and 2 in the support agent backend (both on main; the support agent&apos;s default branch, master, has 0). Both suites run with npm test, and the receptionist one runs in CI on every push — the files are in the repositories, not in a screenshot.",
    links: [{ label: "github.com/djoudad292", href: "https://github.com/djoudad292" }],
  },
  {
    title: "A published 69-case golden set",
    body: "The demo conversation is scored against a versioned dataset: 69 curated cases, 97 turn assertions across 15 categories, with severity tags that gate a deploy.",
    links: [
      {
        label: "frontend/evals/demo-conversation.dataset.json",
        href: "https://github.com/djoudad292/ai-virtual-receptionist/blob/main/frontend/evals/demo-conversation.dataset.json",
      },
    ],
  },
  {
    title: "A public commit history",
    body: "104 commits on the receptionist, 80 on the support agent (main; the default branch master has 56), 30 on the MCP server. The work is a trail you can read, not a claim you have to take.",
    links: [
      {
        label: "ai-virtual-receptionist",
        href: "https://github.com/djoudad292/ai-virtual-receptionist",
      },
      {
        label: "ai-customer-support-agent",
        href: "https://github.com/djoudad292/ai-customer-support-agent",
      },
      { label: "hireme-mcp", href: "https://github.com/djoudad292/hireme-mcp" },
    ],
  },
]

export const EVIDENCE_NO_QUOTES_LINE =
  "No client quotes on this page — a review link that does not open a review is worse than none."

export const EVIDENCE_TEASER_LINE =
  "Public CI on every push, 13 committed test files, and a 69-case golden set versioned in the repository."
