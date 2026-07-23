import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import { services } from '@/data/services'

export function Footer() {
  const serviceLinks = services.slice(0, 8) // keep it concise
  return (
    <footer className="bg-secondary-900 text-white">
      {/* Top Grid */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center rounded-full bg-white shadow border border-neutral-200 w-12 h-12">
                <Image src="/images/brand/Logo.png" alt="Apex Industrial Group" width={36} height={36} className="h-9 w-auto" />
              </span>
              <div>
                <h3 className="text-base font-semibold">Apex Industrial Group</h3>
                <p className="text-xs text-white/70">Industrial Solutions</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Trusted partner for construction, engineering, automation and maintenance.
              We help asset owners improve safety, reliability and performance.
            </p>
            {/* Contact compact */}
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent-300" /> +966 13 363 2232</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent-300" /> info@apexindustrial.com</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-300" />
                <span className="">Apex Industrial Plaza, King Fahd Road, Riyadh, Saudi Arabia</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="text-white/70 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-accent-300 hover:text-white transition-colors">View all services →</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/70 hover:text-white">About</Link></li>
              <li><Link href="/projects" className="text-white/70 hover:text-white">Projects</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="text-white/70 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/70 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">Stay Updated</h4>
            <p className="text-sm text-white/70 mb-4">Industry insights and company news directly to your inbox.</p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-accent-300"
                aria-label="Email address"
              />
              <button type="button" className="px-4 py-2 rounded-lg bg-gradient-to-r from-white to-accent-200 text-black hover:to-accent-300 text-sm font-semibold">
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"><Linkedin className="w-4 h-4" /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"><Twitter className="w-4 h-4" /></a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"><Facebook className="w-4 h-4" /></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} Apex Industrial Group. All rights reserved.</div>
          <div className="text-white/60 text-xs">
            Made with ❤️ by ·
            <a
              href="https://ahmedsohail.me"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-accent-300 hover:text-white transition-colors"
            >
              Ahmed Sohail
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

