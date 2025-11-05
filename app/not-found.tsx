import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Wrench } from 'lucide-react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 min-h-screen flex flex-col justify-center">
      {/* BG gradient */}
      <div className="absolute inset-x-0 top-0 h-[380px] bg-gradient-to-r from-secondary-800 via-secondary-700 to-secondary-600" />
      <div className="absolute inset-x-0 top-0 h-[53vh] bg-gradient-to-b from-secondary-900/55 to-transparent" />
      {/* Subtle logo/badge watermark */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 opacity-5 z-0 select-none pointer-events-none">
        <Image src="/images/brand/Logo.png" alt="AICO Logo" width={200} height={200} priority />
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-md p-10 text-center flex flex-col items-center">
          <span className="text-[68px] sm:text-[90px] font-black bg-gradient-to-r from-secondary-700 to-accent-400 inline-block text-transparent bg-clip-text leading-none mb-2">404</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-2">Sorry, we couldn&apos;t find that page</h1>
          <p className="text-neutral-600 mb-6">The page you requested doesn’t exist or was moved. Let us help you get back to business.</p>
          <div className="flex flex-row justify-center gap-3">
            <Link href="/">
              <Button variant="gold">
                <Home className="w-4 h-4 mr-2" /> Go Home
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="gold">
                <Wrench className="w-4 h-4 mr-2" /> Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
