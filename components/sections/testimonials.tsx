'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Operations Director',
    company: 'AutoCorp Industries',
    logo: '/images/brand/Logo.png',
    content:
      'Apex Industrial Group transformed our manufacturing process. Their team was professional and delivered measurable results within the first quarter.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Plant Manager',
    company: 'ChemTech Solutions',
    logo: '/images/brand/Logo.png',
    content:
      'The IoT platform they implemented has improved our visibility and reduced downtime significantly. Highly recommend their services.',
    rating: 5,
  }
]

export function Testimonials() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-800 mb-2">Client Success Stories</h2>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="flex-1 max-w-md bg-white border border-accent-200 rounded-xl p-6 shadow group transition"
            >
              <div className="flex items-center mb-3" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent-500 fill-accent-300 mr-1" />
                ))}
              </div>
              <p className="text-neutral-800 mb-6">{t.content}</p>
              <div className="flex items-center gap-3 mt-3">
                <Image src={t.logo} alt={`${t.company} logo`} width={40} height={40} className="h-10 w-10 object-contain rounded-full bg-neutral-100 border border-neutral-200" />
                <div>
                  <div className="font-semibold text-neutral-800">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.position} &middot; {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
