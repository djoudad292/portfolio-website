import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

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
  title: 'Djaouad Frih | Full-Stack AI Engineer — AI Agents, RAG & Product Builds',
  description:
    'Full-Stack AI Engineer. I build production AI agents, RAG systems, and the web/mobile products around them — Next.js, NestJS, React Native, pgvector. Fixed-price, remote worldwide.',
  openGraph: {
    title: 'Djaouad Frih | Full-Stack AI Engineer',
    description:
      'Production AI agents, RAG systems, and the products around them — shipped, not demoed. Fixed-price, milestone-based, remote worldwide.',
    url: 'https://djaouad.tech',
    siteName: 'Djaouad Frih',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://djaouad.tech/og-image',
        width: 1200,
        height: 630,
        alt: 'Djaouad Frih — Full-Stack AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Djaouad Frih | Full-Stack AI Engineer',
    description:
      'Production AI agents, RAG systems, and the products around them — shipped, not demoed.',
    images: ['https://djaouad.tech/og-image'],
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
  themeColor: '#faf8f4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${plexMono.variable} font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Djaouad Frih',
              jobTitle: 'Full-Stack AI Engineer',
              url: 'https://djaouad.tech',
              email: 'mailto:djaouad.frih@gmail.com',
              telephone: '+213780688125',
              address: { '@type': 'PostalAddress', addressCountry: 'DZ' },
              knowsAbout: ['AI agents', 'RAG', 'LLM integration', 'Next.js', 'NestJS', 'React Native', 'PostgreSQL', 'pgvector'],
              sameAs: [
                'https://github.com/djoudad292',
                'https://linkedin.com/in/djaouad-frih',
              ],
            }),
          }}
        />
        <script src="https://ai-customer-support-backend-ldbf.onrender.com/widget.js" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: "window.AI_SUPPORT_CONFIG = { companyId: 'ee76df35-7e1b-4a3f-91ff-f90389ee7822', theme: 'light' };",
          }}
        />
      </body>
    </html>
  )
}
