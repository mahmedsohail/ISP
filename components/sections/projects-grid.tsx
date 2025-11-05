'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle,
  Search
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Smart Manufacturing System',
    description: 'Implemented AI-powered automation system for automotive manufacturer, increasing efficiency by 40%.',
    image: '/api/placeholder/600/400',
    category: 'Automation',
    technologies: ['AI/ML', 'IoT', 'PLC', 'SCADA'],
    client: 'AutoCorp Industries',
    year: 2023,
    status: 'completed',
    results: ['40% efficiency increase', '30% cost reduction', '99.5% uptime'],
    duration: '6 months',
    team: '12 experts'
  },
  {
    id: 2,
    title: 'Industrial IoT Platform',
    description: 'Developed comprehensive IoT monitoring platform for chemical processing plant.',
    image: '/api/placeholder/600/400',
    category: 'Engineering',
    technologies: ['IoT', 'Cloud', 'React', 'Node.js'],
    client: 'ChemTech Solutions',
    year: 2023,
    status: 'completed',
    results: ['Real-time monitoring', 'Predictive maintenance', '50% faster response'],
    duration: '4 months',
    team: '8 experts'
  },
  {
    id: 3,
    title: 'Process Optimization',
    description: 'Optimized production line for food processing company, reducing waste by 25%.',
    image: '/api/placeholder/600/400',
    category: 'Manufacturing',
    technologies: ['Lean Manufacturing', 'Six Sigma', 'Data Analytics'],
    client: 'FoodPro Inc',
    year: 2022,
    status: 'completed',
    results: ['25% waste reduction', '15% cost savings', 'Improved quality'],
    duration: '3 months',
    team: '6 experts'
  },
  {
    id: 4,
    title: 'Automated Quality Control',
    description: 'Implemented computer vision system for real-time quality inspection in electronics manufacturing.',
    image: '/api/placeholder/600/400',
    category: 'Automation',
    technologies: ['Computer Vision', 'AI', 'Robotics', 'Python'],
    client: 'ElectroTech Ltd',
    year: 2023,
    status: 'completed',
    results: ['99.8% accuracy', '60% faster inspection', 'Zero defects'],
    duration: '5 months',
    team: '10 experts'
  },
  {
    id: 5,
    title: 'Energy Management System',
    description: 'Developed smart energy monitoring and optimization system for industrial facility.',
    image: '/api/placeholder/600/400',
    category: 'Engineering',
    technologies: ['IoT', 'Energy Analytics', 'Machine Learning', 'Dashboard'],
    client: 'PowerCorp Energy',
    year: 2022,
    status: 'completed',
    results: ['20% energy savings', 'Real-time monitoring', 'Predictive maintenance'],
    duration: '7 months',
    team: '9 experts'
  },
  {
    id: 6,
    title: 'Supply Chain Optimization',
    description: 'Implemented advanced analytics and automation for supply chain management.',
    image: '/api/placeholder/600/400',
    category: 'Consulting',
    technologies: ['Data Analytics', 'AI', 'ERP Integration', 'Forecasting'],
    client: 'Global Manufacturing Co',
    year: 2022,
    status: 'completed',
    results: ['30% cost reduction', 'Improved visibility', 'Faster delivery'],
    duration: '8 months',
    team: '15 experts'
  },
  {
    id: 7,
    title: 'Predictive Maintenance Platform',
    description: 'Built AI-powered predictive maintenance system for heavy machinery.',
    image: '/api/placeholder/600/400',
    category: 'Maintenance',
    technologies: ['Machine Learning', 'IoT Sensors', 'Cloud Platform', 'Analytics'],
    client: 'HeavyMach Industries',
    year: 2023,
    status: 'completed',
    results: ['50% reduction in downtime', 'Predictive alerts', 'Cost savings'],
    duration: '6 months',
    team: '11 experts'
  },
  {
    id: 8,
    title: 'Digital Twin Implementation',
    description: 'Created digital twin for manufacturing process optimization and simulation.',
    image: '/api/placeholder/600/400',
    category: 'Engineering',
    technologies: ['Digital Twin', 'Simulation', '3D Modeling', 'Real-time Data'],
    client: 'Advanced Manufacturing',
    year: 2023,
    status: 'completed',
    results: ['Virtual testing', 'Process optimization', 'Risk reduction'],
    duration: '9 months',
    team: '13 experts'
  },
  {
    id: 9,
    title: 'Robotic Process Automation',
    description: 'Implemented RPA solutions for repetitive manufacturing tasks.',
    image: '/api/placeholder/600/400',
    category: 'Automation',
    technologies: ['RPA', 'Robotics', 'AI', 'Process Mining'],
    client: 'Precision Parts Inc',
    year: 2022,
    status: 'completed',
    results: ['80% task automation', 'Error reduction', '24/7 operation'],
    duration: '4 months',
    team: '7 experts'
  }
]

const filters = {
  category: ['All', 'Automation', 'Engineering', 'Manufacturing', 'Maintenance', 'Consulting'],
  year: ['All', '2023', '2022', '2021', '2020'],
  status: ['All', 'Completed', 'In Progress', 'Upcoming']
}

export function ProjectsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilters, setActiveFilters] = useState({
    category: 'All',
    year: 'All',
    status: 'All'
  })
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilters.category === 'All' || project.category === activeFilters.category
    const matchesYear = activeFilters.year === 'All' || project.year.toString() === activeFilters.year
    const matchesStatus = activeFilters.status === 'All' || 
      (activeFilters.status === 'Completed' && project.status === 'completed') ||
      (activeFilters.status === 'In Progress' && project.status === 'in-progress') ||
      (activeFilters.status === 'Upcoming' && project.status === 'upcoming')
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCategory && matchesYear && matchesStatus && matchesSearch
  })

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
            All Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our complete portfolio of successful industrial projects 
            across various sectors and technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
              />
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                <select
                  value={activeFilters.category}
                  onChange={(e) => setActiveFilters(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {filters.category.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Year</label>
                <select
                  value={activeFilters.year}
                  onChange={(e) => setActiveFilters(prev => ({ ...prev, year: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {filters.year.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                <select
                  value={activeFilters.status}
                  onChange={(e) => setActiveFilters(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {filters.status.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-slate-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-white/20 group-hover:scale-105">
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
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Client & Year */}
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </div>
                    <span>{project.client}</span>
                  </div>

                  {/* Duration & Team */}
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span>Duration: {project.duration}</span>
                    <span>Team: {project.team}</span>
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

        {/* Load More */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-white text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-300 border border-slate-300">
              Load More Projects
            </button>
          </motion.div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No projects found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your filters or search terms</p>
            <button 
              onClick={() => {
                setActiveFilters({ category: 'All', year: 'All', status: 'All' })
                setSearchTerm('')
              }}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

