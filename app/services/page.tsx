import { ServicesHero } from '@/components/sections/services-hero'
import Link from 'next/link'
import { services } from '@/data/services'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`} className="group block rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-secondary-700">{s.title}</h3>
                <p className="text-neutral-600 mt-2">{s.summary}</p>
                <span className="mt-4 inline-block text-secondary-700 group-hover:underline">View details</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


