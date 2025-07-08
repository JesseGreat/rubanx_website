import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WovenByte - Building Tomorrow\'s Smart Cities',
  description: 'WovenByte builds scalable solutions to real-life city problems through innovative technology and urban planning.',
  keywords: 'urban planning, smart cities, technology, transportation, housing, digital services',
  authors: [{ name: 'WovenByte Team' }],
 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}