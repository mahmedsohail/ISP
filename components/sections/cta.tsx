'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Ready to discuss your industrial goals?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8">
            Let’s start a conversation about how Apex Industrial Group can accelerate your project and boost your operations.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-white to-accent-200 hover:to-accent-300" style={{ color: 'black' }}>
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

