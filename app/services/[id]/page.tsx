import { notFound } from 'next/navigation'
import { getServiceById } from '@/data/services'
import Image from 'next/image'

type Params = { params: { id: string } }

export default function ServiceDetailsPage({ params }: Params) {
  const service = getServiceById(params.id)
  if (!service) return notFound()

  return (
    <>
      {/* Hero band - only heading, summary, CTA */}
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="absolute inset-x-0 top-0 h-[460px] bg-gradient-to-r from-secondary-800 via-secondary-700 to-secondary-600" />
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-secondary-900/55 to-transparent" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-24 left-10 w-20 h-20 rounded-full bg-white/10 ring-1 ring-white/20" />
          <div className="absolute top-44 right-16 w-16 h-16 rounded-full bg-white/10 ring-1 ring-white/20 animate-float" />
          <div className="absolute bottom-28 left-24 w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/20 animate-float" style={{ animationDelay: '1.2s' }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">{service.title}</h1>
            <p className="text-base sm:text-lg text-white/90 mb-8">{service.summary}</p>
            <div className="flex flex-row gap-3 mb-0">
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-white to-accent-200 text-black hover:to-accent-300 font-medium shadow w-full sm:w-auto">Request a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Details section - body, features, images, etc. */}
      <section className="container-custom max-w-5xl mx-auto py-6">
        {service.body && (
          <p className="mb-6 text-base sm:text-lg leading-relaxed text-neutral-800 bg-neutral-50 rounded-xl px-4 py-4 border border-neutral-200">
            {service.body}
          </p>
        )}
        {service.features && service.features.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm mb-8">
            <h2 className="text-xl font-semibold mb-4">Key deliverables</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((f) => (
                <li key={f} className="text-neutral-700">• {f}</li>
              ))}
            </ul>
          </div>
        )}
        {service.images && service.images.length > 0 && (
          <div className="flex flex-row gap-4 overflow-x-auto snap-x my-3 pb-1 custom-scrollbar">
            {service.images.map((img, i) => (
              <div key={i} className="w-72 min-w-[18rem] aspect-video rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-100 border border-neutral-200 snap-center relative">
                <Image src={img} alt={service.title + ' project ' + (i+1)} fill style={{objectFit: 'cover'}} sizes="(max-width: 820px) 95vw, 320px" priority={i === 0} />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}


