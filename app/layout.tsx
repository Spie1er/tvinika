import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'ტვინიკა',
  description: 'გამოიცანი სიტყვა 6 ცდაში',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='ka' className='dark'>
      <body
        className='flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900'
        suppressHydrationWarning
      >
        <Header />
        <main className='flex-1 flex  justify-center container mx-auto px-4 py-6 dark:text-white'>
          {children}
        </main>
      </body>
    </html>
  )
}
