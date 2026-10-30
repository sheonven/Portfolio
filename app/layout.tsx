import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sheon Venrick Samaniego — Web & Mobile developer',
  description: 'The portfolio of Sheon Venrick Samaniego, an aspiring web and mobile developer specialized in creating fun and fresh expereinces for users.',
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
