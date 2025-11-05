'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Smart Manufacturing System',
    description:
      'AI-powered automation for automotive manufacturing, delivering 40% efficiency gains.',
    image: '/api/placeholder/600/400',
    category: 'Automation',
    technologies: ['AI/ML', 'IoT', 'PLC', 'SCADA'],
    client: 'AutoCorp Industries',
    year: 2023,
    status: 'completed',
    results: ['40% efficiency increase', '30% cost reduction', '99.5% uptime'],
  },
  {
    id: 2,
    title: 'Industrial IoT Platform',
    description: 'End-to-end IoT monitoring for chemical processing with predictive maintenance.',
    image: '/api/placeholder/600/400',
    category: 'Engineering',
    technologies: ['IoT', 'Cloud', 'React', 'Node.js'],
    client: 'ChemTech Solutions',
    year: 2023,
    status: 'completed',
    results: ['Real-time monitoring', 'Predictive maintenance', '50% faster response'],
  },
  {
    id: 3,
    title: 'Process Optimization',
    description: 'Lean process optimization reducing waste by 25% for food processing.',
    image: '/api/placeholder/600/400',
    category: 'Manufacturing',
    technologies: ['Lean', 'Six Sigma', 'Analytics'],
    client: 'FoodPro Inc',
    year: 2022,
    status: 'completed',
    results: ['25% waste reduction', '15% cost savings', 'Improved quality'],
  },
]

const categories = ['All', 'Automation', 'Engineering', 'Manufacturing', 'Maintenance']

export function ProjectsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section ref={ref} className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-lg mb-4">Recent Projects</h2>
          <p className="prose-custom max-w-3xl mx-auto">
            A selection of engagements delivering measurable industrial outcomes.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === category
                  ? 'bg-secondary-600 text-white border-secondary-600'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
                {/* Image Placeholder */}
                <div className="relative h-40 bg-neutral-100 flex items-center justify-center">
                  <div className="text-5xl font-bold text-neutral-300">
                    {project.title.charAt(0)}
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white text-neutral-700 text-xs font-medium rounded-full border border-neutral-200">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="prose-custom mb-4">{project.description}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> {project.year}
                    </div>
                    <span>{project.client}</span>
                  </div>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium"
                  >
                    View details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
