'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    // description: 'Speak directly with our experts',
    action: '+966 13 363 2232',
    href: 'tel:+966133632232'
  },
  {
    icon: Mail,
    title: 'Email Us',
    // description: 'Send us your project details',
    action: 'info@aigroup.co',
    href: 'mailto:info@aigroup.co'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    // description: 'Come to our headquarters',
    action: 'Office 706, 101 BT, KSA',
    href: '#map'
  }
]

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      <div className="absolute inset-x-0 top-0 h-[460px] bg-gradient-to-r from-secondary-800 via-secondary-700 to-secondary-600" />
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-secondary-900/55 to-transparent" />
      {/* bubbles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-10 w-20 h-20 rounded-full bg-white/10 ring-1 ring-white/20" />
        <div className="absolute top-44 right-16 w-16 h-16 rounded-full bg-white/10 ring-1 ring-white/20 animate-float" />
        <div className="absolute bottom-28 left-24 w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/20 animate-float" style={{ animationDelay: '1.2s' }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 ring-1 ring-white/20">
            <CheckCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
            Let's Start Your Project Together
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            Ready to transform your industrial operations? Our team is here to help. Get in touch for a free consultation.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 mb-1">{method.title}</h3>
                    {/* <p className="text-sm text-slate-600 mb-1">{method.description}</p> */}
                    <span className="text-primary-600 font-medium text-sm">{method.action}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTAs removed per request */}
        </motion.div>
      </div>
    </section>
  )
}

