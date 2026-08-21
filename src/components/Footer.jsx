import { SiGmail, SiWhatsapp, SiLinkedin } from 'react-icons/si'

const SERVICES = [
  { label: 'AI Automation',            href: '/services/ai-automation' },
  { label: 'Paid Advertising',         href: '/services/paid-advertising' },
  { label: 'Websites & Landing Pages', href: '/services/websites' },
  { label: 'Social Media Management',  href: '/services/social-media' },
  { label: 'SEO & Google Visibility',  href: '/services/seo' },
]
const COMPANY  = [
  { label: 'How We Work', href: '/#process' },
  { label: 'Pricing',     href: '/services/ai-automation' },
  { label: 'FAQ',         href: '/#faq' },
  { label: 'Contact',     href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="pt-14 pb-8" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[1060px] mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <a href="/" className="flex items-center no-underline select-none mb-4">
              <img src="/flowbit-logo.png" alt="Flowbit" className="h-9 w-auto" />
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-[260px] mb-6">
              Custom built automation systems for ambitious businesses worldwide. If it's repetitive, we automate it.
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: SiGmail,    color: '#EA4335', href: 'mailto:charl@flowbit.co.za', title: 'Email' },
                { Icon: SiWhatsapp, color: '#25D366', href: 'https://wa.me/27615056071',  title: 'WhatsApp' },
                { Icon: SiLinkedin, color: '#0A66C2', href: '#',                           title: 'LinkedIn' },
              ].map(s => (
                <a
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-[250ms] no-underline hover:scale-105"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                >
                  <s.Icon size={16} color={s.color} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-white mb-5">Services</p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {SERVICES.map(s => (
                <li key={s.href}>
                  <a href={s.href} className="text-muted text-sm hover:text-accent transition-colors no-underline">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-white mb-5">Company</p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {COMPANY.map(c => (
                <li key={c.label}>
                  <a href={c.href} className="text-muted text-sm hover:text-accent transition-colors no-underline">{c.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-white mb-5">Contact</p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              <li><a href="mailto:charl@flowbit.co.za" className="text-muted text-sm hover:text-accent transition-colors no-underline">charl@flowbit.co.za</a></li>
              <li><a href="tel:+27729036399" className="text-muted text-sm hover:text-accent transition-colors no-underline">Call: 072 903 6399</a></li>
              <li><a href="https://wa.me/27615056071" target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-accent transition-colors no-underline">WhatsApp: +27 61 505 6071</a></li>
              <li><a href="#contact" className="text-muted text-sm hover:text-accent transition-colors no-underline">Book a Free Audit</a></li>
              <li><a href="#contact" className="text-muted text-sm hover:text-accent transition-colors no-underline">Start a Project</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-7"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-muted text-xs">© 2025 Flowbit. All rights reserved. Built for ambitious businesses worldwide.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-muted text-xs hover:text-accent transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="text-muted text-xs hover:text-accent transition-colors no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
