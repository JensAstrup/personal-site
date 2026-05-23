import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'


const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jens Astrup - Fullstack Developer',
  description: 'Fullstack developer in NYC specializing in systems and design',
  generator: 'v0.app',
}

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactNode {
  return (
    <html lang="en">
      <body className={'font-sans antialiased'}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
