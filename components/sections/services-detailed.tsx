'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Factory, 
  Wrench, 
  Cpu, 
  Settings, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing Solutions',
    description: 'Complete manufacturing process optimization with cutting-edge technology and automation.',
    longDescription: 'We specialize in transforming traditional manufacturing processes through advanced automation, lean manufacturing principles, and smart factory technologies. Our solutions help companies achieve higher efficiency, better quality control, and reduced operational costs.',
    features: [
      'Process Optimization & Lean Manufacturing',
      'Quality Control Systems & Six Sigma',
      'Production Planning & Scheduling',
      'Supply Chain Management',
      'Equipment Integration & Upgrades',
      'Performance Monitoring & Analytics'
    ],
    benefits: [
      'Increase production efficiency by up to 40%',
      'Reduce waste and operational costs',
      'Improve product quality and consistency',
      'Enhance supply chain visibility',
      'Enable predictive maintenance'
    ],
    technologies: ['ERP Systems', 'MES', 'SCADA', 'IoT Sensors', 'AI/ML', 'Robotics'],
    color: 'from-blue-500 to-cyan-500',
    duration: '2-6 months',
    team: '5-15 experts'
  },
  {
    id: 'engineering',
    icon: Wrench,
    title: 'Engineering Services',
    description: 'Expert engineering solutions for complex industrial challenges and system design.',
    longDescription: 'Our engineering team provides comprehensive design, analysis, and implementation services for complex industrial systems. We combine deep technical expertise with innovative approaches to solve the most challenging engineering problems.',
    features: [
      'System Design & Architecture',
      'Technical Consulting & Analysis',
      'Project Management & Coordination',
      'Compliance & Safety Standards',
      'Performance Testing & Validation',
      'Documentation & Training'
    ],
    benefits: [
      'Optimized system performance',
      'Reduced design and implementation risks',
      'Compliance with industry standards',
      'Comprehensive technical documentation',
      'Expert guidance throughout the project'
    ],
    technologies: ['CAD/CAE', 'Simulation Software', '3D Modeling', 'FEA Analysis', 'CFD Analysis'],
    color: 'from-green-500 to-emerald-500',
    duration: '1-12 months',
    team: '3-10 experts'
  },
  {
    id: 'automation',
    icon: Cpu,
    title: 'Automation Systems',
    description: 'Advanced automation solutions to streamline operations and increase efficiency.',
    longDescription: 'We design and implement state-of-the-art automation systems that integrate seamlessly with existing infrastructure. Our solutions range from simple PLC programming to complex AI-powered automation platforms.',
    features: [
      'PLC Programming & Integration',
      'SCADA System Development',
      'IoT Platform Implementation',
      'Machine Learning Integration',
      'Robotic Process Automation',
      'System Integration & Testing'
    ],
    benefits: [
      'Automate repetitive tasks and processes',
      'Improve operational efficiency',
      'Reduce human error and safety risks',
      'Enable real-time monitoring and control',
      'Support data-driven decision making'
    ],
    technologies: ['PLC', 'SCADA', 'HMI', 'IoT', 'AI/ML', 'Robotics', 'Edge Computing'],
    color: 'from-purple-500 to-pink-500',
    duration: '1-8 months',
    team: '4-12 experts'
  },
  {
    id: 'maintenance',
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Comprehensive maintenance services to keep your systems running optimally.',
    longDescription: 'Our maintenance services ensure your industrial systems operate at peak performance with minimal downtime. We offer both preventive and reactive maintenance solutions tailored to your specific needs.',
    features: [
      'Preventive Maintenance Programs',
      'Emergency Repair Services',
      'System Updates & Upgrades',
      'Performance Monitoring',
      'Staff Training & Support',
      'Spare Parts Management'
    ],
    benefits: [
      'Minimize unplanned downtime',
      'Extend equipment lifespan',
      'Reduce maintenance costs',
      'Improve system reliability',
      'Ensure compliance and safety'
    ],
    technologies: ['CMMS', 'Predictive Analytics', 'Remote Monitoring', 'AR/VR Training'],
    color: 'from-orange-500 to-red-500',
    duration: 'Ongoing',
    team: '2-8 experts'
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Consulting',
    description: 'Strategic consulting to help you make informed decisions about your industrial operations.',
    longDescription: 'Our consulting services help organizations make strategic decisions about technology adoption, process improvement, and operational optimization. We provide expert guidance based on industry best practices and emerging technologies.',
    features: [
      'Process Analysis & Optimization',
      'Technology Assessment & Selection',
      'Strategic Planning & Roadmapping',
      'ROI Analysis & Business Case Development',
      'Change Management Support',
      'Industry Benchmarking'
    ],
    benefits: [
      'Informed decision making',
      'Reduced implementation risks',
      'Optimized technology investments',
      'Improved operational efficiency',
      'Strategic competitive advantage'
    ],
    technologies: ['Data Analytics', 'Process Mining', 'Simulation', 'Benchmarking Tools'],
    color: 'from-indigo-500 to-blue-500',
    duration: '1-6 months',
    team: '2-6 experts'
  }
]

export function ServicesDetailed() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            Our Service Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of industrial services designed to meet 
            your specific needs and drive measurable results.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {service.team}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center space-x-2 text-sm text-slate-600">
                          <ArrowRight className="w-3 h-3 text-primary-600 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="gradient" className="group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-white/20">
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl mb-4`}>
                          <service.icon className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                        <p className="text-slate-600">{service.description}</p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-white/80 rounded-lg">
                          <div className="text-2xl font-bold text-slate-900 mb-1">98%</div>
                          <div className="text-sm text-slate-600">Success Rate</div>
                        </div>
                        <div className="text-center p-4 bg-white/80 rounded-lg">
                          <div className="text-2xl font-bold text-slate-900 mb-1">500+</div>
                          <div className="text-sm text-slate-600">Projects</div>
                        </div>
                      </div>

                      {/* Process Steps */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-primary-600">1</span>
                          </div>
                          <span className="text-sm text-slate-600">Analysis & Planning</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-primary-600">2</span>
                          </div>
                          <span className="text-sm text-slate-600">Design & Development</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-primary-600">3</span>
                          </div>
                          <span className="text-sm text-slate-600">Implementation</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-primary-600">4</span>
                          </div>
                          <span className="text-sm text-slate-600">Support & Maintenance</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse-slow">
                      <Award className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


