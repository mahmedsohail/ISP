'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Factory, 
  Wrench, 
  Cpu, 
  Settings, 
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const categories = [
  {
    id: 'all',
    name: 'All Projects',
    count: 500,
    description: 'Complete portfolio of our work',
    icon: CheckCircle,
    color: 'from-slate-500 to-slate-600'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    count: 180,
    description: 'Production optimization and automation',
    icon: Factory,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'engineering',
    name: 'Engineering',
    count: 120,
    description: 'System design and technical solutions',
    icon: Wrench,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'automation',
    name: 'Automation',
    count: 150,
    description: 'Smart systems and IoT solutions',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    count: 80,
    description: 'Support and maintenance services',
    icon: Settings,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    count: 70,
    description: 'Strategic planning and analysis',
    icon: Lightbulb,
    color: 'from-indigo-500 to-blue-500'
  }
]

const featuredProjects = [
  {
    title: 'Smart Manufacturing System',
    category: 'Automation',
    client: 'AutoCorp Industries',
    year: 2023,
    description: 'Implemented AI-powered automation system increasing efficiency by 40%',
    image: '/api/placeholder/400/300',
    technologies: ['AI/ML', 'IoT', 'PLC', 'SCADA'],
    results: ['40% efficiency increase', '30% cost reduction', '99.5% uptime']
  },
  {
    title: 'Industrial IoT Platform',
    category: 'Engineering',
    client: 'ChemTech Solutions',
    year: 2023,
    description: 'Developed comprehensive IoT monitoring platform for chemical processing',
    image: '/api/placeholder/400/300',
    technologies: ['IoT', 'Cloud', 'React', 'Node.js'],
    results: ['Real-time monitoring', 'Predictive maintenance', '50% faster response']
  },
  {
    title: 'Process Optimization',
    category: 'Manufacturing',
    client: 'FoodPro Inc',
    year: 2022,
    description: 'Optimized production line reducing waste by 25%',
    image: '/api/placeholder/400/300',
    technologies: ['Lean Manufacturing', 'Six Sigma', 'Data Analytics'],
    results: ['25% waste reduction', '15% cost savings', 'Improved quality']
  }
]

export function ProjectCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('all')

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
            Project Categories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Browse our projects by category to find solutions similar to your needs.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                activeCategory === category.id
                  ? 'bg-white/20'
                  : `bg-gradient-to-br ${category.color}`
              }`}>
                <category.icon className={`w-5 h-5 ${
                  activeCategory === category.id ? 'text-white' : 'text-white'
                }`} />
              </div>
              <div className="text-left">
                <div className="font-semibold">{category.name}</div>
                <div className="text-sm opacity-75">{category.count} projects</div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Some of our most successful and innovative projects that showcase 
              our expertise and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 group-hover:scale-105">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-slate-400 opacity-50">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-slate-700 text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Completed
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Client & Year */}
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="space-y-2 mb-6">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>

                    {/* Learn More */}
                    <button className="w-full flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700 font-medium group/link">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
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
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with 
              your industrial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </button>
              <button className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-300">
                Download Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


