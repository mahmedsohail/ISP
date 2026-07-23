'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <section className="relative overflow-hidden pt-28 pb-20 min-h-screen flex flex-col justify-center">
          {/* BG gradient */}
          <div className="absolute inset-x-0 top-0 h-[380px] bg-gradient-to-r from-secondary-800 via-secondary-700 to-secondary-600" />
          <div className="absolute inset-x-0 top-0 h-[53vh] bg-gradient-to-b from-secondary-900/55 to-transparent" />
          {/* Subtle logo watermark */}
          <div className="absolute left-1/2 top-[30%] -translate-x-1/2 opacity-5 z-0 select-none pointer-events-none">
            <Image src="/images/brand/Logo.png" alt="Apex Industrial Group Logo" width={200} height={200} priority />
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-md p-10 text-center">
              <div className="mx-auto mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100">
                <AlertTriangle className="w-6 h-6 text-accent-600" />
              </div>
              <span className="text-[48px] sm:text-[64px] font-black bg-gradient-to-r from-secondary-700 to-accent-400 inline-block text-transparent bg-clip-text leading-none mb-1">Error</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-2">We encountered an issue</h1>
              <p className="text-neutral-600 mb-6">Our team has been notified. Please try again, or head back to the homepage.</p>
              <div className="flex flex-row justify-center gap-3">
                <Button variant="gold" onClick={() => reset()}>
                  <RefreshCw className="w-4 h-4 mr-2" /> Try Again
                </Button>
                <Link href="/">
                  <Button variant="gold"><Home className="w-4 h-4 mr-2" /> Home</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}
