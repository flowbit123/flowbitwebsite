import { useState, useEffect, useRef } from 'react'

const SERVICES_MENU = [
  { label: 'AI Automation',              desc: 'Lead qualification, booking, AI receptionist & WhatsApp', href: '/services/ai-automation' },
  { label: 'Paid Advertising',           desc: 'Google, Facebook, Instagram & TikTok ads',                 href: '/services/paid-advertising' },
  { label: 'Websites & Landing Pages',   desc: 'Sites and funnels built to convert',                       href: '/services/websites' },
  { label: 'Social Media Management',    desc: 'Done-for-you content and posting',                         href: '/services/social-media' },
]

const LINKS = [
  { label: 'Process',      href: '/#process' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ',          href: '/#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const desktopServicesRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (desktopServicesRef.current && !desktopServicesRef.current.contains(e.target)) {
        setDesktopServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/[0.07] transition-colors duration-300 ${
        scrolled ? 'bg-bg-primary/95' : 'bg-bg-primary/70'
      }`}
    >
      <div className="flex items-center justify-between h-[68px] max-w-[1060px] mx-auto px-6">

        {/* Logo */}
        <a href="/" className="flex items-center no-underline select-none">
          <img src="/flowbit-logo.png" alt="Flowbit" className="h-14 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
          {/* Services dropdown */}
          <li className="relative" ref={desktopServicesRef}>
            <button
              onClick={() => setDesktopServicesOpen(o => !o)}
              className="flex items-center gap-1.5 text-sm font-medium hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Services
              <svg
                width="10" height="10" viewBox="0 0 12 12" fill="none"
                style={{ transform: desktopServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms' }}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {desktopServicesOpen && (
              <div
                className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 rounded-2xl overflow-hidden"
                style={{ width: 320, background: 'var(--bg2)', border: '1px solid var(--border)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
              >
                {SERVICES_MENU.map(s => (
                  <a
                    key={s.href}
                    href={s.href}
                    onClick={() => setDesktopServicesOpen(false)}
                    className="block px-5 py-3.5 no-underline transition-colors"
                    style={{ borderBottom: '1px solid var(--border)' }}
                  >
                    <p className="text-white text-sm font-semibold mb-0.5">{s.label}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{s.desc}</p>
                  </a>
                ))}
              </div>
            )}
          </li>

          {LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium hover:text-white transition-colors no-underline"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-ghost" style={{ padding: '10px 20px', fontSize: '14px' }}>Contact</a>
          <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }}>Get Started →</a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
          <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
          <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-secondary border-b border-white/[0.07] px-6 py-6 flex flex-col gap-1">

          {/* Services — tap to expand */}
          <button
            onClick={() => setMobileServicesOpen(o => !o)}
            className="flex items-center justify-between w-full text-muted text-base font-medium py-2.5 bg-transparent border-none cursor-pointer text-left"
          >
            Services
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms' }}
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {mobileServicesOpen && (
            <div className="flex flex-col gap-1 pl-4 pb-2">
              {SERVICES_MENU.map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="text-muted text-sm font-medium py-2 no-underline hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}

          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted text-base font-medium py-2.5 hover:text-accent transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}

          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center mt-3">
            Get Started →
          </a>
        </div>
      )}
    </nav>
  )
}
