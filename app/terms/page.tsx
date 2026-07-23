import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Apex Industrial Group',
  description: 'Terms of Service governing the use of Apex Industrial Group website and services.',
}

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 bg-neutral-50 min-h-screen">
      <div className="container-custom max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-neutral-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 mb-6">Terms of Service</h1>
        <p className="text-sm text-neutral-500 mb-8">Effective Date: January 1, 2026</p>

        <div className="space-y-6 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-secondary-800 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website and digital portals operated by Apex Industrial Group (&quot;Company,&quot; &quot;we,&quot; or &quot;us&quot;), you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary-800 mb-3">2. Industrial Services & Proposals</h2>
            <p>
              All descriptions, specifications, project timelines, and technical summaries provided on this site are for informational purposes. Formal commercial engagements, engineering FEED contracts, construction agreements, and material procurement orders are governed by written contracts signed by authorized representatives of Apex Industrial Group.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary-800 mb-3">3. Intellectual Property</h2>
            <p>
              All proprietary content, branding, logos, technical designs, and code assets displayed on this site are the exclusive property of Apex Industrial Group. Unauthorized duplication, modification, or distribution is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary-800 mb-3">4. Limitation of Liability</h2>
            <p>
              In no event shall Apex Industrial Group be liable for indirect, incidental, or consequential damages resulting from website downtime, server latency, or unauthorized third-party access beyond reasonable security controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary-800 mb-3">5. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with applicable commercial and industrial laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary-800 mb-3">6. Inquiries</h2>
            <p>
              Questions regarding these Terms of Service should be directed to: <a href="mailto:info@apexindustrial.com" className="text-accent-600 hover:underline">info@apexindustrial.com</a>
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
