import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ტვინიკა - გამოიცანი სიტყვა 6 ცდაში!',
  description:
    'ჩაფიქრებული სიტყვის გამოსაცნობად გაქვს ექვსი ცდა. ყველა ცდის შემდეგ კი მინიშნებებს მიიღებ.',
  keywords: [
    'Wordle',
    'Georgian',
    'Game',
    'Word Puzzle',
    'ტვინიკა',
    'თამაში',
    'სიტყვობანა',
    'სიტყვის გამოცნობა',
    'სიტყვების გამოცნობა'
  ],
  icons: {
    icon: '/favicon.png'
  },
  openGraph: {
    title: 'ტვინიკა - გამოიცანი სიტყვა 6 ცდაში!',
    description:
      'ჩაფიქრებული სიტყვის გამოსაცნობად გაქვს ექვსი ცდა. ყველა ცდის შემდეგ კი მინიშნებებს მიიღებ.',
    url: 'https://tvinika.ge',
    siteName: 'ტვინიკა',
    images: [
      {
        url: 'https://tvinika.ge/tvinika.png',
        width: 1200,
        height: 630,
        alt: 'ტვინიკა - გამოიცანი სიტყვა 6 ცდაში!'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ტვინიკა - გამოიცანი სიტყვა 6 ცდაში!',
    description:
      'ჩაფიქრებული სიტყვის გამოსაცნობად გაქვს ექვსი ცდა. ყველა ცდის შემდეგ კი მინიშნებებს მიიღებ.',
    images: ['https://tvinika.ge/tvinika.png'],
    creator: '@kberulava '
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
        {/* ✅ Google Analytics (keep it outside <head>) */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-5YLS4C4P9F'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5YLS4C4P9F');
          `}
        </Script>
        <Header />
        <main className='flex-1 flex  justify-center container mx-auto px-4 py-6 dark:text-white'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
