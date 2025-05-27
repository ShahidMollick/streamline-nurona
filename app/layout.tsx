import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nurona - AI-Powered Field Tracking',
  description: 'AI-powered time and attendance tracking for staffing firms through SMS and WhatsApp. No apps, no paper, just smarter field tracking.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
