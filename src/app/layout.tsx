import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Argus - Revolutionary AI Detection Tool',
  description: 'Experience the future of AI content detection with Argus. Advanced OCR technology meets cutting-edge AI analysis.',
  keywords: 'AI detection, OCR, content analysis, AI content, text analysis, machine learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
