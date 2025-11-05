'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Navigation, Clock, Phone } from 'lucide-react'

export function MapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Find Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Visit our headquarters or get directions to our office. 
            We're conveniently located in the heart of the industrial district.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-50"></div>
              
              {/* Map Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 h-full">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="border border-slate-300"></div>
                  ))}
                </div>
              </div>

              {/* Map Pin */}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg animate-pulse">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Location</h3>
                <p className="text-slate-600">123 Industrial Blvd, Tech City, TC 12345</p>
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 space-y-2">
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-200">
                  <Navigation className="w-5 h-5 text-slate-600" />
                </button>
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-200">
                  <span className="text-slate-600 font-bold">+</span>
                </button>
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-200">
                  <span className="text-slate-600 font-bold">-</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Address</h3>
              </div>
              <div className="space-y-2 text-slate-600">
                <p>123 Industrial Blvd</p>
                <p>Tech City, TC 12345</p>
                <p>United States</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <div className="flex justify-between text-sm">
                    <span>Emergency Support</span>
                    <span className="text-green-600 font-medium">24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Contact</h3>
              </div>
              <div className="space-y-3 text-slate-600">
                <div>
                  <p className="font-medium">Main Office</p>
                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="font-medium">Support</p>
                  <p className="text-sm">+1 (555) 123-4568</p>
                </div>
                <div>
                  <p className="font-medium">Emergency</p>
                  <p className="text-sm text-red-600">+1 (555) 123-4569</p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <button className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg py-3 px-6 font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <Navigation className="w-5 h-5" />
              <span>Get Directions</span>
            </button>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Parking & Accessibility
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-600">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Parking</h4>
                <p className="text-sm">Free parking available in our dedicated lot. Visitor spaces are clearly marked.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Accessibility</h4>
                <p className="text-sm">Our building is fully accessible with wheelchair ramps and elevators.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Public Transit</h4>
                <p className="text-sm">Convenient access via bus routes 15, 23, and 45. Metro station 2 blocks away.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


