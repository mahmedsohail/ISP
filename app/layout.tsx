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
  title: 'Advanced Idea Company Ltd - Industrial Services Provider',
  description: 'Leading provider of comprehensive industrial services including manufacturing, engineering, automation, and maintenance solutions.',
  keywords: 'industrial services, manufacturing, engineering, automation, maintenance, Advanced Idea Company',
  authors: [{ name: 'Advanced Idea Company Ltd' }],
  creator: 'Advanced Idea Company Ltd',
  publisher: 'Advanced Idea Company Ltd',
  icons: {
    icon: '/images/brand/Logo.png',
    shortcut: '/images/brand/Logo.png',
    apple: '/images/brand/Logo.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://advancedideacompany.com'),
  openGraph: {
    title: 'Advanced Idea Company Ltd - Industrial Services Provider',
    description: 'Leading provider of comprehensive industrial services including manufacturing, engineering, automation, and maintenance solutions.',
    url: 'https://advancedideacompany.com',
    siteName: 'Advanced Idea Company Ltd',
    images: [
      {
        url: '/images/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Advanced Idea Company Ltd',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Idea Company Ltd - Industrial Services Provider',
    description: 'Leading provider of comprehensive industrial services including manufacturing, engineering, automation, and maintenance solutions.',
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
