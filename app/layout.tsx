import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ErrorBoundary } from '@/components/error-boundary'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Apex Industrial Group - Leading Industrial Services Provider',
  description: 'Leading provider of comprehensive industrial services including manufacturing, engineering, automation, construction, and plant maintenance solutions.',
  keywords: 'industrial services, engineering, manufacturing, automation, plant maintenance, Apex Industrial Group',
  authors: [{ name: 'Apex Industrial Group' }],
  creator: 'Apex Industrial Group',
  publisher: 'Apex Industrial Group',
  icons: {
    icon: '/images/brand/favicon.svg',
    shortcut: '/images/brand/favicon.svg',
    apple: '/images/brand/Logo.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://apexindustrial.com'),
  openGraph: {
    title: 'Apex Industrial Group - Leading Industrial Services Provider',
    description: 'Leading provider of comprehensive industrial services including manufacturing, engineering, automation, construction, and plant maintenance solutions.',
    url: 'https://apexindustrial.com',
    siteName: 'Apex Industrial Group',
    images: [
      {
        url: '/images/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Apex Industrial Group',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Industrial Group - Leading Industrial Services Provider',
    description: 'Leading provider of comprehensive industrial services including manufacturing, engineering, automation, construction, and plant maintenance solutions.',
    images: ['/images/brand/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen`}>
        <ErrorBoundary>
          <Navigation />
          <main className="relative">
            {children}
          </main>
          <Footer />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </ErrorBoundary>
      </body>
    </html>
  )
}
