import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Space_Grotesk, Inter, JetBrains_Mono, Bebas_Neue } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Perfect Webcraft | Modern Web Design & Engineering Studio',
  description:
    'Bespoke digital product design, web applications, and high-performance digital platforms for thoughtful brands.',
  openGraph: {
    title: 'Perfect Webcraft | Modern Web Design & Engineering Studio',
    description:
      'Bespoke digital product design, web applications, and high-performance digital platforms for thoughtful brands.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased selection:bg-red-600 selection:text-white bg-white text-black">
        {children}
      </body>
    </html>
  )
}
