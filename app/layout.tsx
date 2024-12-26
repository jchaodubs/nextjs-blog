"use client"
import './global.css'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { OrbitSpace } from 'orbit-space'


const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-rose-100 '
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto"><OrbitSpace>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main></OrbitSpace>
      </body>
    </html>
  )
}

