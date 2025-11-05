'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'What types of industrial services do you provide?',
    answer: 'We provide comprehensive industrial services including manufacturing solutions, engineering services, automation systems, maintenance and support, and strategic consulting. Our services cover everything from process optimization and system design to implementation and ongoing support.',
    category: 'General'
  },
  {
    id: 2,
    question: 'How long does a typical project take to complete?',
    answer: 'Project duration varies depending on the scope and complexity. Simple automation projects may take 1-3 months, while comprehensive manufacturing transformations can take 6-12 months. We provide detailed timelines during the planning phase and keep you updated throughout the project.',
    category: 'Timeline'
  },
  {
    id: 3,
    question: 'Do you work with existing systems and equipment?',
    answer: 'Yes, we specialize in integrating with existing systems and equipment. Our team conducts thorough assessments to understand your current infrastructure and designs solutions that work seamlessly with your existing setup, minimizing disruption to your operations.',
    category: 'Integration'
  },
  {
    id: 4,
    question: 'What is your approach to project management?',
    answer: 'We follow a structured project management approach using industry best practices. Each project has a dedicated project manager and follows our proven 4-step process: Discovery & Analysis, Strategy & Planning, Implementation, and Deployment & Support. We provide regular updates and maintain clear communication throughout.',
    category: 'Process'
  },
  {
    id: 5,
    question: 'Do you provide training for our staff?',
    answer: 'Absolutely! We provide comprehensive training for your team to ensure they can effectively operate and maintain the new systems. This includes hands-on training, documentation, and ongoing support. We also offer refresher training sessions as needed.',
    category: 'Training'
  },
  {
    id: 6,
    question: 'What kind of support do you offer after project completion?',
    answer: 'We offer comprehensive post-implementation support including 24/7 technical support, preventive maintenance programs, system updates, performance monitoring, and emergency repair services. Our support packages are tailored to your specific needs and can be customized based on your requirements.',
    category: 'Support'
  },
  {
    id: 7,
    question: 'How do you ensure data security and compliance?',
    answer: 'We follow strict security protocols and comply with industry standards including ISO 27001, SOC 2, and relevant industry regulations. All data is encrypted, access is controlled, and we conduct regular security audits. We also help you maintain compliance with relevant industry standards.',
    category: 'Security'
  },
  {
    id: 8,
    question: 'Can you help with ROI analysis and business case development?',
    answer: 'Yes, our consulting services include detailed ROI analysis and business case development. We help you understand the potential benefits, costs, and returns on investment for any proposed solution. This includes financial modeling, risk assessment, and implementation planning.',
    category: 'Consulting'
  },
  {
    id: 9,
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including automotive, chemical processing, food and beverage, pharmaceuticals, manufacturing, energy, and more. Our solutions are tailored to meet the specific requirements and regulations of each industry we serve.',
    category: 'Industries'
  },
  {
    id: 10,
    question: 'How do you handle project changes or scope modifications?',
    answer: 'We understand that project requirements may change during implementation. We have a structured change management process that includes impact analysis, cost evaluation, timeline adjustments, and client approval. All changes are documented and communicated clearly to ensure transparency.',
    category: 'Management'
  }
]

const categories = ['All', 'General', 'Timeline', 'Integration', 'Process', 'Training', 'Support', 'Security', 'Consulting', 'Industries', 'Management']

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openItems, setOpenItems] = useState<number[]>([])
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredFAQs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, processes, 
            and how we can help your business.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="mb-4"
            >
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(faq.id) ? (
                      <Minus className="w-5 h-5 text-primary-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Our team of experts is here to help. Contact us for personalized 
              answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
              <button className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


