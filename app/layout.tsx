import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Millennials Corporate Services Limited | Corporate Advisory Tanzania',
  description: 'Millennials Corporate Services Limited provides HR advisory, regulatory compliance, corporate structuring, outsourcing strategy, and institutional advisory services for organizations operating in complex environments.',
  keywords: 'corporate advisory, HR consulting, regulatory compliance, Tanzania, business consulting, corporate governance',
  icons: {
    icon: '/Millenials favicon.png',
    shortcut: '/Millenials favicon.png',
    apple: '/Millenials favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#114E84',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-body antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
