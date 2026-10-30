import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Sheon Venrick Samaniego — Web & Mobile developer',
  description: 'The portfolio of Sheon Venrick Samaniego, an Information Technology student specialized in creating fun and fresh experiences for users.',
  openGraph: {
    title: 'Sheon Venrick Samaniego — Web & Mobile developer',
    description: 'The portfolio of Sheon Venrick Samaniego, an Information Technology student specialized in creating fun and fresh experiences for users.',
    type: 'website',
    siteName: 'Sheon Venrick Samaniego',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2f7ef' },
    { media: '(prefers-color-scheme: dark)', color: '#0b100d' },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
