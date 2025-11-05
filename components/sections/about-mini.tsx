'use client'

import { motion } from 'framer-motion'

export function AboutMini() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 text-secondary-800">Who We Are</h3>
          <p className="prose-custom text-lg">
            Advanced Idea Company (AICO) is a trusted partner for end-to-end industrial solutions—including construction, engineering, automation, and long-term maintenance. We serve manufacturers and asset operators across the Middle East and globally, blending local experience with global standards. Our approach is centered on safety, performance, and value—for every client, every project, every time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMini


