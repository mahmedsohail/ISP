'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, TrendingUp, Users, Award, Globe, Lightbulb } from 'lucide-react'

const milestones = [
  {
    year: 1998,
    title: 'Company Founded',
    description: 'Advanced Idea Company was established with a vision to revolutionize industrial operations through innovative technology solutions.',
    icon: Lightbulb,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: 2005,
    title: 'First Major Contract',
    description: 'Secured our first major manufacturing automation project, establishing our reputation in the industry.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  },
  {
    year: 2010,
    title: 'International Expansion',
    description: 'Expanded operations internationally, serving clients across multiple countries and continents.',
    icon: Globe,
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: 2015,
    title: 'AI Integration',
    description: 'Pioneered the integration of artificial intelligence and machine learning in industrial automation systems.',
    icon: Award,
    color: 'from-orange-500 to-red-500'
  },
  {
    year: 2020,
    title: 'Digital Transformation',
    description: 'Launched comprehensive digital transformation services, helping companies adapt to Industry 4.0.',
    icon: Users,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    year: 2023,
    title: '500+ Projects Milestone',
    description: 'Reached the milestone of 500+ successful projects, solidifying our position as an industry leader.',
    icon: Award,
    color: 'from-teal-500 to-green-500'
  }
]

const stats = [
  { number: '25+', label: 'Years of Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Expert Engineers' },
  { number: '15+', label: 'Countries Served' },
  { number: '98.5%', label: 'Success Rate' },
  { number: '24/7', label: 'Support Available' }
]

export function CompanyHistory() {
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
            Our Journey Through Innovation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to industry leadership, discover the milestones 
            that have shaped our company and our commitment to excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-primary-200 transform -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-xl flex items-center justify-center`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-slate-900">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-1/2 justify-center">
                  <div className={`w-6 h-6 bg-gradient-to-br ${milestone.color} rounded-full border-4 border-white shadow-lg`} />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These numbers reflect our commitment to excellence and the trust 
              our clients place in us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-8">
              "To transform industrial operations through innovative technology solutions, 
              empowering businesses to achieve sustainable growth, operational excellence, 
              and competitive advantage in an ever-evolving marketplace."
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Est. 1998</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Industry Leader</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


