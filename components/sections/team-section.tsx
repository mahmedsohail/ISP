'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Linkedin, 
  Mail, 
  Award, 
  Users, 
  Briefcase,
  GraduationCap,
  MapPin
} from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Chief Executive Officer',
    bio: 'Sarah leads our strategic vision and has over 20 years of experience in industrial automation and business transformation.',
    image: '/api/placeholder/300/300',
    email: 'sarah.johnson@advancedideacompany.com',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    expertise: ['Strategic Planning', 'Business Development', 'Leadership'],
    education: 'MBA, Industrial Engineering',
    location: 'Tech City, TC',
    experience: '20+ years'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Chief Technology Officer',
    bio: 'Michael drives our technology innovation and oversees the development of cutting-edge industrial solutions.',
    image: '/api/placeholder/300/300',
    email: 'michael.chen@advancedideacompany.com',
    linkedin: 'https://linkedin.com/in/michaelchen',
    expertise: ['AI/ML', 'IoT', 'System Architecture', 'R&D'],
    education: 'PhD, Computer Science',
    location: 'Tech City, TC',
    experience: '15+ years'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Head of Engineering',
    bio: 'Emily leads our engineering team and ensures the highest quality standards in all our technical solutions.',
    image: '/api/placeholder/300/300',
    email: 'emily.rodriguez@advancedideacompany.com',
    linkedin: 'https://linkedin.com/in/emilyrodriguez',
    expertise: ['System Design', 'Project Management', 'Quality Assurance'],
    education: 'MS, Mechanical Engineering',
    location: 'Tech City, TC',
    experience: '18+ years'
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'Director of Operations',
    bio: 'David manages our day-to-day operations and ensures smooth project delivery across all client engagements.',
    image: '/api/placeholder/300/300',
    email: 'david.thompson@advancedideacompany.com',
    linkedin: 'https://linkedin.com/in/davidthompson',
    expertise: ['Operations Management', 'Process Optimization', 'Client Relations'],
    education: 'MBA, Operations Management',
    location: 'Tech City, TC',
    experience: '12+ years'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    position: 'Head of Innovation',
    bio: 'Lisa leads our innovation initiatives and explores emerging technologies to enhance our service offerings.',
    image: '/api/placeholder/300/300',
    email: 'lisa.wang@advancedideacompany.com',
    linkedin: 'https://linkedin.com/in/lisawang',
    expertise: ['Innovation Strategy', 'Technology Research', 'Digital Transformation'],
    education: 'PhD, Industrial Engineering',
    location: 'Tech City, TC',
    experience: '14+ years'
  },
  {
    id: 6,
    name: 'James Wilson',
    position: 'Senior Solutions Architect',
    bio: 'James designs complex industrial solutions and ensures seamless integration with existing systems.',
    image: '/api/placeholder/300/300',
    email: 'james.wilson@advancedideacompany.com',
    linkedin: 'https://linkedin.com/in/jameswilson',
    expertise: ['Solution Architecture', 'System Integration', 'Technical Consulting'],
    education: 'MS, Electrical Engineering',
    location: 'Tech City, TC',
    experience: '16+ years'
  }
]

const departments = [
  {
    name: 'Engineering',
    count: 25,
    description: 'Expert engineers specializing in various industrial technologies',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Consulting',
    count: 15,
    description: 'Strategic consultants helping clients make informed decisions',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Project Management',
    count: 12,
    description: 'Dedicated project managers ensuring successful delivery',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Support',
    count: 18,
    description: 'Technical support specialists providing ongoing assistance',
    color: 'from-orange-500 to-red-500'
  }
]

export function TeamSection() {
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
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of engineers, consultants, and specialists brings together 
            decades of experience and expertise to deliver exceptional results.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-white/20 group-hover:scale-105">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Meta Info */}
                <div className="space-y-2 mb-6 text-sm text-slate-500">
                  <div className="flex items-center justify-center space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{member.education}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{member.experience}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{member.location}</span>
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-slate-200">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                    aria-label={`LinkedIn profile for ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Departments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Departments</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our team is organized into specialized departments, each focused on 
              delivering excellence in their respective areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group-hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${dept.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{dept.count}</div>
                  <h4 className="font-semibold text-slate-900 mb-2">{dept.name}</h4>
                  <p className="text-sm text-slate-600">{dept.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for 
              innovation and excellence. Explore career opportunities with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                View Open Positions
              </button>
              <button className="px-8 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


