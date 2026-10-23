import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tamrat Alalnkeel',
  description: 'Welcome to Tamrat Alalnkeel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
