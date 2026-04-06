import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cloud Keyboards | Experience Innovation',
  description: 'The ultimate mechanical keyboard experience. Uncompromising precision engineering, premium materials, and tactile perfection.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
