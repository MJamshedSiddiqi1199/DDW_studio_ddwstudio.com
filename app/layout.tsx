import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DDW Studio - AI Automation Platform for Enterprise Operations | Voice AI, HR Automation & Fleet Management',
  description: 'Transform your business operations with DDW Studio\'s AI automation platform. AI voice assistants, HR automation software, Fleet-OS fleet management, and automated proposal generation. Reduce response times by 95% and boost conversions by 47%.',
  keywords: 'AI automation platform, enterprise AI software, AI voice assistant for business, HR automation software, fleet management software, automated proposal generator',
  openGraph: {
    title: 'DDW Studio - AI Automation Platform for Enterprise Operations',
    description: 'Transform your business operations with DDW Studio\'s AI automation platform. AI voice assistants, HR automation software, Fleet-OS fleet management, and automated proposal generation.',
    type: 'website',
    siteName: 'DDW Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DDW Studio - AI Automation Platform for Enterprise Operations',
    description: 'Transform your business operations with DDW Studio\'s AI automation platform. Reduce response times by 95% and boost conversions by 47%.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="keywords" content="AI automation platform, enterprise AI software, AI voice assistant for business, HR automation software, fleet management software, automated proposal generator" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}