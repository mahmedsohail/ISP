'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: '500+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects across various industries'
  },
  {
    icon: Users,
    value: '25+',
    label: 'Years Experience',
    description: 'Decades of expertise in industrial solutions'
  },
  {
    icon: Award,
    value: '98.5%',
    label: 'Success Rate',
    description: 'Client satisfaction and project success rate'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock technical support and maintenance'
  }
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary-100 to-accent-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-600" />
              </div>
              
              <motion.div
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              
              <h3 className="text-sm sm:text-lg font-semibold text-neutral-900 mb-2">
                {stat.label}
              </h3>
              
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
