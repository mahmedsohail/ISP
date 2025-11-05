'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'
import { 
  Send, 
  AlertCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address').max(200, 'Email is too long'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .max(30, 'Phone number is too long')
    .regex(/^[+\d\s().-]{7,}$/, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters').max(150, 'Company name is too long'),
  service: z.string().min(1, 'Please select a service').max(120, 'Service value is too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message is too long'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  website: z.string().optional(), // honeypot (should be empty)
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'Manufacturing Solutions',
  'Engineering Services',
  'Automation Systems',
  'Maintenance & Support',
  'Consulting',
  'Other'
]

const budgetRanges = [
  'Under $50,000',
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000 - $500,000',
  'Over $500,000',
  'Not sure'
]

const timelines = [
  'ASAP',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Flexible'
]

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (form: ContactFormData) => {
    setIsSubmitting(true)

    // Trim values before sending
    const payload = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      service: form.service.trim(),
      message: form.message.trim(),
      budget: form.budget?.trim() || '',
      timeline: form.timeline?.trim() || '',
      website: form.website?.trim() || '',
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error || 'Submission failed')
      }

      toast.success('Thank you! Your message has been sent successfully.')
      reset()
    } catch (error: any) {
      toast.error(error?.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours. 
                We're here to help you achieve your industrial goals.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Do not fill this field
                  <input {...register('website')} type="text" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      {...register('name')}
                      type="text"
                      maxLength={100}
                      autoComplete="name"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      {...register('email')}
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      maxLength={200}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      {...register('phone')}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={30}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <div className="relative">
                    <input
                      {...register('company')}
                      type="text"
                      autoComplete="organization"
                      maxLength={150}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your company name"
                    />
                    {errors.company && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Service Interested In *
                </label>
                <select
                  {...register('service')}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                )}
              </div>

              {/* Budget and Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text sm font-medium text-slate-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    {...register('timeline')}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  {...register('message')}
                  rows={6}
                  maxLength={2000}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project, challenges, and goals..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                variant="gradient"
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-dots mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Right-side contact info removed per request */}
        </div>
      </div>
    </section>
  )
}

