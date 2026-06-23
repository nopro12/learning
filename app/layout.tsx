import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Classup - The Learning App',
  description: 'Create meetings, collaborate with multiple languages, and share with others',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
