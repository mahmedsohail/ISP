'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Search, 
  Lightbulb, 
  Cog, 
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Target
} from 'lucide-react'

const processSteps = [
  {
    step: 1,
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'We begin by understanding your current operations, challenges, and goals through comprehensive analysis.',
    details: [
      'Current state assessment',
      'Process mapping and documentation',
      'Gap analysis and opportunity identification',
      'Stakeholder interviews and requirements gathering',
      'Technology audit and evaluation'
    ],
    duration: '1-2 weeks',
    team: '2-4 experts',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    step: 2,
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description: 'Based on our analysis, we develop a customized strategy and detailed implementation plan.',
    details: [
      'Solution design and architecture',
      'Technology selection and recommendations',
      'Implementation roadmap and timeline',
      'Resource planning and allocation',
      'Risk assessment and mitigation strategies'
    ],
    duration: '1-3 weeks',
    team: '3-6 experts',
    color: 'from-green-500 to-emerald-500'
  },
  {
    step: 3,
    icon: Cog,
    title: 'Implementation',
    description: 'Our expert team implements the solution with careful attention to detail and quality.',
    details: [
      'System development and configuration',
      'Integration with existing systems',
      'Testing and quality assurance',
      'User training and documentation',
      'Pilot testing and validation'
    ],
    duration: '2-12 weeks',
    team: '4-15 experts',
    color: 'from-purple-500 to-pink-500'
  },
  {
    step: 4,
    icon: CheckCircle,
    title: 'Deployment & Support',
    description: 'We ensure smooth deployment and provide ongoing support to maximize your success.',
    details: [
      'Production deployment and go-live',
      'Performance monitoring and optimization',
      'User support and troubleshooting',
      'Continuous improvement and updates',
      'Knowledge transfer and training'
    ],
    duration: 'Ongoing',
    team: '2-8 experts',
    color: 'from-orange-500 to-red-500'
  }
]

const benefits = [
  {
    icon: Clock,
    title: 'Faster Time to Market',
    description: 'Streamlined processes reduce implementation time by up to 40%'
  },
  {
    icon: Target,
    title: 'Higher Success Rate',
    description: 'Our proven methodology ensures 98.5% project success rate'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Access to specialized expertise across multiple domains'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Rigorous testing and validation at every step'
  }
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We follow a systematic approach that ensures successful project delivery 
            and maximum value for our clients.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200 transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-white/20 group-hover:scale-105">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-slate-300">0{step.step}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 mb-6">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
                        <ArrowRight className="w-3 h-3 text-primary-600 flex-shrink-0 mt-1" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Meta Info */}
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {step.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {step.team}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Why Choose Our Process?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our systematic approach delivers consistent results and ensures 
              your project's success from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and see how our proven process 
              can help you achieve your industrial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-300">
                Download Process Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


