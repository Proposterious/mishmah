import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './_components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. G-Mishmah',
  description: 'Discover the literary works of Doctor G-Mishmah (Elwood Gene Edwards)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
