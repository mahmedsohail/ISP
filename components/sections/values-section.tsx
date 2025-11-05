'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Globe } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We set the benchmark for quality, safety, and measurable improvement in every project.'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Clients trust us for on-time, on-budget delivery and transparent, accountable service.'
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We combine proven engineering and new technologies to solve industry challenges.'
  }
]

export function ValuesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-800 mb-3">
            Our Core Values
          </h2>
        </motion.div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 overflow-x-auto pb-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 + i * 0.06 }}
              className="flex-1 min-w-[230px] max-w-sm bg-neutral-50 rounded-2xl p-6 border border-neutral-200 shadow-sm text-left"
            >
              <div className="flex items-center mb-2">
                <value.icon className="w-8 h-8 text-accent-500 mr-3" />
                <span className="font-semibold text-lg text-secondary-800">{value.title}</span>
              </div>
              <div className="text-neutral-700 text-base leading-snug">{value.description}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-sm text-neutral-600">
          <span className="inline-flex items-center gap-2"><Shield className="w-4 h-4 text-green-600" /> Certified & Compliant</span>
          <span className="inline-flex items-center gap-2"><Target className="w-4 h-4 text-blue-600" /> Client-focused</span>
          <span className="inline-flex items-center gap-2"><Globe className="w-4 h-4 text-accent-500" /> Global Standards</span>
        </div>
      </div>
    </section>
  )
}

