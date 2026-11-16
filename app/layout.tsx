import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { ChatWidget } from '@/components/chat-widget'

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
  // metadataBase pins every relative URL below to the authoritative origin,
  // and './' resolves per-route against it — so each route declares its own
  // absolute URL on djaouad.is-a.dev.
  metadataBase: new URL('https://djaouad.is-a.dev'),
  alternates: {
    canonical: './',
  },
  verification: {
    google: "2-f-fZA5ktbCA2ZxyVF2aZE0unAd1EsHsMbW7MO1XEc",
    other: {
      "msvalidate.01": "C51CDA99ED5014CBAB8480F6E66FC408",
    },
  },
  title: 'Djaouad Frih | Measured AI Systems, Fixed Price',
  description:
    'I build retrieval layers and agent loops that run on your existing Postgres estate and monolith, scored against your own documents before a single prompt is written. Fixed price. Full builds start at $3,500.',
  openGraph: {
    title: 'Djaouad Frih | Measured AI Systems, Fixed Price',
    description:
      'Retrieval and agents that work on the systems you already have — with a measured recall floor and the failures published. Fixed price, source handed over.',
    url: 'https://djaouad.is-a.dev',
    siteName: 'Djaouad Frih',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://djaouad.is-a.dev/og-image',
        width: 1200,
        height: 630,
        alt: 'Djaouad Frih, measured AI systems, fixed price',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Djaouad Frih | Measured AI Systems · Agents, Retrieval, Production Builds',
    description:
      'Production AI systems: tool-calling agents, vector retrieval with citations. Live, open source, benchmarked.',
    images: ['https://djaouad.is-a.dev/og-image'],
  },
  icons: {
    icon: [
      {
        url: '/favicon-64.png',
        type: 'image/png',
        sizes: '64x64',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/favicon-256.png',
        type: 'image/png',
        sizes: '256x256',
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
          <Navbar />
          {children}
          <ChatWidget />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Djaouad Frih',
              jobTitle: 'AI systems builder — retrieval and agents on existing systems',
              url: 'https://djaouad.is-a.dev',
              email: 'mailto:contact@djaouad.is-a.dev',
              telephone: '+213780688125',
              address: { '@type': 'PostalAddress', addressRegion: 'Remote, worldwide' },
              knowsAbout: ['AI agent development', 'LangGraph', 'tool calling', 'RAG', 'vector search', 'pgvector', 'LLM evaluation', 'multi-tenant SaaS', 'Next.js', 'NestJS', 'PostgreSQL'],
              sameAs: [
                'https://github.com/djoudad292',
                'https://linkedin.com/in/djaouad-frih',
              ],
            }),
          }}
        />
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "9320c98188e747f0ad98120cbbba7351"}' />
        <script defer src="https://shown.io/metrics/On9xljgK9e" type="text/javascript"></script>
      </body>
    </html>
  )
}
