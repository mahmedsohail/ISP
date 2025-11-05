import { AboutHero } from '@/components/sections/about-hero'
import { AboutMini } from '@/components/sections/about-mini'
import { ValuesSection } from '@/components/sections/values-section'
import { Testimonials } from '@/components/sections/testimonials'
import { CTA } from '@/components/sections/cta'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutMini />
      <ValuesSection />
      <Testimonials />
      <CTA />
    </div>
  )
}


