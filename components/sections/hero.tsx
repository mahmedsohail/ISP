'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* top ribbon for brand and contrast */}
      <div className="absolute inset-x-0 -top-48 h-[640px] -skew-y-6 bg-gradient-to-r from-secondary-800 via-secondary-700 to-secondary-600" />
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-gradient-to-b from-secondary-900/65 to-transparent" />

      {/* floating bubbles like Projects page */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-10 w-20 h-20 rounded-full bg-white/10 ring-1 ring-white/20 blur-[0.5px]" />
        <div className="absolute top-48 right-16 w-16 h-16 rounded-full bg-white/10 ring-1 ring-white/20 animate-float" />
        <div className="absolute bottom-24 left-24 w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/20 animate-float" style={{ animationDelay: '1.2s' }} />
      </div>

      <div className="container-custom relative pt-36 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-white/90 bg-white/10 ring-1 ring-white/20">
              Industrial Services • Saudi Arabia
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
              Reliable engineering, construction and maintenance partner
            </h1>
            <p className="mt-3 sm:mt-5 max-w-2xl text-white/95 text-base sm:text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
              One accountable team delivering safe execution, predictable schedules and measurable performance.
            </p>
            <div className="mt-8 flex flex-row gap-3">
              <Link href="/services">
                <Button size="lg" variant="gold">Explore Services</Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="gold">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* empty visual column reserved for future imagery */}
          <div className="lg:col-span-4 hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[length:24px_24px]" />
    </section>
  )
}
