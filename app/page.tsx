import { Hero } from '@/components/sections/hero'
import { ServicesMatrix } from '@/components/sections/services-matrix'
import { AboutMini } from '@/components/sections/about-mini'
// Inline Clients section to avoid module issues during build
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesMatrix />
      <AboutMini />
      <ClientsSection />
    </div>
  )
}

function ClientsSection() {
  const partners = [
    { src: '/images/partners/saudi-aramco-logo.png', alt: 'Saudi Aramco' },
    { src: '/images/partners/SABIC_logo.webp', alt: 'SABIC' },
    { src: '/images/partners/sadara-logo.png', alt: 'Sadara' },
    { src: "/images/partners/Ma'aden-logo.png", alt: 'Ma’aden' },
    { src: '/images/partners/STC-logo.png', alt: 'STC' },
    { src: '/images/partners/Neom-Logo.png', alt: 'NEOM' },
    { src: '/images/partners/Red_Sea_Global_Logo.png', alt: 'Red Sea Global' },
  ]
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex items-baseline justify-between mb-6">
          <h3 className="heading-md">Our Clients</h3>
          <p className="text-sm text-neutral-600">Trusted by leading organizations</p>
        </div>
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {partners.map((p) => (
            <li key={p.src} className="flex items-center justify-center">
              <Image
                src={p.src}
                alt={p.alt}
                width={140}
                height={48}
                className="h-8 sm:h-10 w-auto object-contain opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

