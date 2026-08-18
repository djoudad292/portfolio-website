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
  title: 'Djaouad Frih | Full Stack Web & Mobile Developer with AI Integration',
  description:
    'Full Stack Web & Mobile Developer with AI Integration. I build React/Next.js web apps, React Native mobile apps, and AI-powered products — LLM chatbots, RAG knowledge bases, and intelligent automation.',
  openGraph: {
    title: 'Djaouad Frih | Web & Mobile Developer with AI Integration',
    description:
      'AI-powered web apps, native mobile apps, and document intelligence — grounded in your data. Fixed-price, milestone-based, remote worldwide.',
    url: 'https://djaouad.netlify.app',
    siteName: 'Djaouad Frih',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://djaouad.netlify.app/og-image',
        width: 1200,
        height: 630,
        alt: 'Djaouad Frih — Web & Mobile Developer with AI Integration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Djaouad Frih | Web & Mobile Developer with AI Integration',
    description:
      'AI-powered web apps, native mobile apps, and document intelligence — grounded in your data.',
    images: ['https://djaouad.netlify.app/og-image'],
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
          src="https://ai-receptionist-backend-h14q.onrender.com/widget/widget.js"
          data-company-id="66c5a08316c4f0b2f4833211"
          async
        ></script>
      </body>
    </html>
  )
}
