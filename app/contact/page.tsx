import { ContactHero } from '@/components/sections/contact-hero'
import { ContactForm } from '@/components/sections/contact-form'
import { FAQ } from '@/components/sections/faq'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <FAQ />
    </div>
  )
}


