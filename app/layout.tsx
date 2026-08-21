import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Benjamin Lindeen — Sales Engineer & CS Graduate',
  description:
    'Personal portfolio of Benjamin Lindeen — Junior Sales Engineer at Kiteworks and Computer Science graduate from the University of Minnesota.',
  authors: [{ name: 'Benjamin Lindeen' }],
  openGraph: {
    title: 'Benjamin Lindeen',
    description: 'Junior Sales Engineer & CS Graduate',
    url: 'https://benjaminlindeen.com',
    siteName: 'Benjamin Lindeen',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benjamin Lindeen',
    description: 'Junior Sales Engineer & CS Graduate',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  )
}
