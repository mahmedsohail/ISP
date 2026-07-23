'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// cleaned up: no unused variables

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12">
      <div className="absolute inset-x-0 top-0 h-[460px] bg-gradient-to-r from-secondary-800 via-secondary-700 to-secondary-600" />
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-secondary-900/55 to-transparent" />

      {/* Floating Bubbles */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full mix-blend-overlay animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full mix-blend-overlay animate-float delay-1000" />
      <div className="absolute top-1/2 right-1/2 w-20 h-20 bg-white/10 rounded-full mix-blend-overlay animate-float delay-500" />
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-white/10 rounded-full mix-blend-overlay animate-float delay-1500" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium ring-1 ring-white/20"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                About Apex Industrial Group
              </motion.div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Pioneering Industrial Excellence
              </h1>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                For over 25 years, we've been at the forefront of industrial innovation, helping businesses transform operations with technology and expert execution.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-row gap-3 justify-center mt-8 sm:mt-10"
            >
              <Link href="/contact">
                <Button size="lg" variant="gold">
                  Work With Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <Link href="/about#story">
                <Button size="lg" variant="gold">
                  Our Story
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

