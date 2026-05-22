import { SiGmail, SiWhatsapp, SiLinkedin } from 'react-icons/si'

const SERVICES = ['WhatsApp Automation', 'Lead Follow-Up', 'Review & Retention', 'Custom Workflows']
const COMPANY  = [
  { label: 'How We Work', href: '#process' },
  { label: 'Pricing',     href: '#pricing' },
  { label: 'FAQ',         href: '#faq' },
  { label: 'Contact',     href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="pt-14 pb-8" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[1060px] mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-3 no-underline select-none mb-4">
              <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
                <defs>
                  <radialGradient id="ng-f" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#7BAFC4" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="#7BAFC4" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <circle cx="19" cy="19" r="18" fill="url(#ng-f)"/>
                <path d="M19 19 Q16 12 19 6"   stroke="#7BAFC4" strokeWidth="1.1" strokeOpacity="0.55" fill="none" strokeLinecap="round"/>
                <path d="M19 19 Q10 22 8 28"   stroke="#7BAFC4" strokeWidth="1.1" strokeOpacity="0.55" fill="none" strokeLinecap="round"/>
                <path d="M19 19 Q28 22 30 28"  stroke="#7BAFC4" strokeWidth="1.1" strokeOpacity="0.55" fill="none" strokeLinecap="round"/>
                <path d="M19 6 Q5 17 8 28"    stroke="#7BAFC4" strokeWidth="0.8" strokeOpacity="0.28" fill="none"/>
                <path d="M19 6 Q33 17 30 28"  stroke="#7BAFC4" strokeWidth="0.8" strokeOpacity="0.28" fill="none"/>
                <path d="M8 28 Q19 34 30 28"  stroke="#7BAFC4" strokeWidth="0.8" strokeOpacity="0.28" fill="none"/>
                <circle cx="19" cy="6"  r="3.5" fill="#7BAFC4" fillOpacity="0.12"/>
                <circle cx="8"  cy="28" r="3.5" fill="#7BAFC4" fillOpacity="0.12"/>
                <circle cx="30" cy="28" r="3.5" fill="#7BAFC4" fillOpacity="0.12"/>
                <circle cx="19" cy="19" r="5"   fill="#7BAFC4" fillOpacity="0.15"/>
                <circle cx="19" cy="6"  r="2"   fill="#7BAFC4"/>
                <circle cx="8"  cy="28" r="2"   fill="#7BAFC4"/>
                <circle cx="30" cy="28" r="2"   fill="#7BAFC4"/>
                <circle cx="19" cy="19" r="3.2" fill="#7BAFC4"/>
                <circle cx="19" cy="19" r="1.5" fill="#ffffff"/>
              </svg>
              <span style={{ fontWeight: 800, fontSize: '16px', letterSpacing: '-0.02em', lineHeight: 1 }}>
                <span style={{ color: '#ffffff' }}>FLOW</span><span style={{ color: '#7BAFC4' }}>BIT</span>
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-[260px] mb-6">
              Custom built automation systems for ambitious businesses worldwide. If it's repetitive, we automate it.
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: SiGmail,    color: '#EA4335', href: 'mailto:charl@flowbit.co.za', title: 'Email' },
                { Icon: SiWhatsapp, color: '#25D366', href: '#',                           title: 'WhatsApp' },
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
                <li key={s}>
                  <a href="#services" className="text-muted text-sm hover:text-accent transition-colors no-underline">{s}</a>
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
            <a href="#" className="text-muted text-xs hover:text-accent transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="text-muted text-xs hover:text-accent transition-colors no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
