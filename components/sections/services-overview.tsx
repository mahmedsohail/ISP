'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  Factory, 
  Wrench, 
  Cpu, 
  Settings, 
  Lightbulb, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Factory,
    title: 'Manufacturing Solutions',
    description: 'Complete manufacturing process optimization with cutting-edge technology and automation.',
    features: ['Process Optimization', 'Quality Control', 'Production Planning', 'Supply Chain Management'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Wrench,
    title: 'Engineering Services',
    description: 'Expert engineering solutions for complex industrial challenges and system design.',
    features: ['System Design', 'Technical Consulting', 'Project Management', 'Compliance'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Cpu,
    title: 'Automation Systems',
    description: 'Advanced automation solutions to streamline operations and increase efficiency.',
    features: ['PLC Programming', 'SCADA Systems', 'IoT Integration', 'Machine Learning'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Comprehensive maintenance services to keep your systems running optimally.',
    features: ['Preventive Maintenance', 'Emergency Repairs', 'System Updates', 'Training'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Lightbulb,
    title: 'Consulting',
    description: 'Strategic consulting to help you make informed decisions about your industrial operations.',
    features: ['Process Analysis', 'Technology Assessment', 'Strategic Planning', 'ROI Analysis'],
    color: 'from-indigo-500 to-blue-500'
  }
]

export function ServicesOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Our Services
          </div>
          
          <h2 className="heading-lg mb-6">
            Comprehensive Industrial Solutions
          </h2>
          
          <p className="text-lg sm:text-xl prose-custom max-w-3xl mx-auto">
            We provide end-to-end industrial services that transform your operations, 
            boost efficiency, and drive sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-neutral-200 card-hover">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="prose-custom mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-neutral-200">
            <h3 className="heading-md mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="prose-custom mb-6 max-w-2xl mx-auto">
              Let our experts analyze your current setup and recommend the best solutions 
              for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="gradient">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
