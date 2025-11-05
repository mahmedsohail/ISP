'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Wrench, Factory, PanelLeft, ShieldCheck, Lightbulb, Building2 } from 'lucide-react'

type ServiceItem = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const serviceItems: ServiceItem[] = [
  {
    icon: Building2,
    title: 'General Construction',
    description:
      'Diverse construction services, showcasing excellence in the construction industry.',
  },
  {
    icon: PanelLeft,
    title: 'Cladding and Aluminum work',
    description:
      'Expertise in cladding and aluminum work services for modern facades.',
  },
  {
    icon: Factory,
    title: 'Industrial Maintenance',
    description:
      'Comprehensive preventive and corrective maintenance to maximize uptime.',
  },
  {
    icon: Lightbulb,
    title: 'Engineering Design',
    description:
      'Pioneering engineering designs that deliver creativity and innovation.',
  },
  {
    icon: ShieldCheck,
    title: 'Car Showroom Construct',
    description:
      'State‑of‑the‑art car showrooms constructed to premium standards.',
  },
  {
    icon: Wrench,
    title: 'Mechanical & Electrical',
    description:
      'MEP services covering installation, commissioning and testing.',
  },
]

export function ServicesMatrix() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left headline column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest font-semibold text-secondary-600 uppercase mb-4">
              What we do
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-secondary-800">
              Building
              <br />
              Everything
              <br />
              You
              <br />
              Needed
            </h2>
          </motion.div>

          {/* Services grid (2 columns on desktop) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {serviceItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="space-y-3"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-50">
                  <item.icon className="w-7 h-7 text-accent-500" />
                </div>
                <p className="text-[11px] tracking-wider uppercase font-semibold text-neutral-500">
                  Explore the features
                </p>
                <h3 className="text-xl font-bold text-secondary-800">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesMatrix


