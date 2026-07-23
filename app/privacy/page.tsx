import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Apex Industrial Group',
  description: 'Privacy Policy and data handling practices for Apex Industrial Group.',
}

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 bg-neutral-50 min-h-screen">
      <div className="container-custom max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-neutral-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-neutral-500 mb-8">Effective Date: January 1, 2026</p>

        <div className="space-y-6 text-neutral-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-secondary-800 mb-3">1. Information We Collect</h2>
            <p>
              Apex Industrial Group (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects information that you provide directly to us when contacting us, requesting service proposals, or subscribing to industry communications. This includes contact details such as your full name, email address, business phone number, and company information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary-800 mb-3">2. How We Use Your Information</h2>
            <p>
              We utilize the collected information strictly for legitimate commercial purposes, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responding to project inquiries and engineering consultations.</li>
              <li>Fulfilling industrial service contracts, supply requests, and MRO operations.</li>
              <li>Ensuring platform security, system performance, and regulatory compliance.</li>
              <li>Sending essential operational updates and requested company news.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary-800 mb-3">3. Data Sharing & Security</h2>
            <p>
              We enforce strict administrative, technical, and physical security measures to safeguard your personal data. We do not sell, rent, or trade client information to third parties. Data is shared only with authorized personnel and compliance authorities when required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary-800 mb-3">4. Cookies & Tracking</h2>
            <p>
              Our website uses essential performance cookies to enhance navigation, verify form submission safety, and analyze site traffic patterns anonymously.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary-800 mb-3">5. Contact Us</h2>
            <p>
              For any privacy-related inquiries or data access requests, please contact our compliance officer at:
            </p>
            <p className="mt-2 font-medium">
              Email: <a href="mailto:info@apexindustrial.com" className="text-accent-600 hover:underline">info@apexindustrial.com</a><br />
              Apex Industrial Group — Apex Industrial Plaza, King Fahd Road, Riyadh, Saudi Arabia
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
