import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
})
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  verification: {
    google: "2-f-fZA5ktbCA2ZxyVF2aZE0unAd1EsHsMbW7MO1XEc",
    other: {
      "msvalidate.01": "C51CDA99ED5014CBAB8480F6E66FC408",
    },
  },
  title: 'Djaouad Frih | AI Systems Engineer · Agents, Retrieval, Production Builds',
  description:
    'I build production AI systems: tool-calling agents, vector retrieval with source citations, MCP servers, and the application around them. Live on real domains, open source. Retrieval benchmarked on the AI Virtual Receptionist knowledge base (dental clinic KB, 15 chunks, 18 queries) at 93.8% F1 with an offline embedder.',
  openGraph: {
    title: 'Djaouad Frih | AI Systems Engineer · Agents, Retrieval, Production Builds',
    description:
      'Production AI systems: LangGraph agents with tool-calling loops, pgvector retrieval with citations, MCP servers, multi-tenant apps. Four live systems with public repositories. Fixed-price, milestone-based.',
    url: 'https://djaouad.is-a.dev',
    siteName: 'Djaouad Frih',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://djaouad.is-a.dev/og-image',
        width: 1200,
        height: 630,
        alt: 'Djaouad Frih, AI Systems Engineer: agents, retrieval, MCP servers, production builds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Djaouad Frih | AI Systems Engineer · Agents, Retrieval, Production Builds',
    description:
      'Production AI systems: tool-calling agents, vector retrieval with citations, MCP servers. Live, open source, benchmarked.',
    images: ['https://djaouad.is-a.dev/og-image'],
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0c10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${plexMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Djaouad Frih',
              jobTitle: 'AI Systems Engineer',
              url: 'https://djaouad.is-a.dev',
              email: 'mailto:contact@djaouad.is-a.dev',
              telephone: '+213780688125',
              address: { '@type': 'PostalAddress', addressRegion: 'Remote, worldwide' },
              knowsAbout: ['AI agent development', 'LangGraph', 'tool calling', 'RAG', 'vector search', 'pgvector', 'MCP server development', 'LLM evaluation', 'multi-tenant SaaS', 'Next.js', 'NestJS', 'React Native', 'PostgreSQL'],
              sameAs: [
                'https://github.com/djoudad292',
                'https://linkedin.com/in/djaouad-frih',
              ],
            }),
          }}
        />
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "9320c98188e747f0ad98120cbbba7351"}' />
      </body>
    </html>
  )
}
