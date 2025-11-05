'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Filter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ProjectsHero() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium ring-1 ring-white/20 mb-6">
            <ArrowRight className="w-4 h-4 mr-2" />
            Our Portfolio
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
            Success Stories & Case Studies
          </h1>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have transformed industrial operations across sectors.
          </p>

          <div className="flex flex-row gap-3 justify-center mt-8 sm:mt-10">
            <Link href="/contact">
              <Button size="lg" variant="gold">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Button size="lg" variant="gold">
              <Filter className="w-4 h-4 mr-2" />
              Filter Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

