import { useState, useEffect } from 'react'

const LINKS = ['services', 'process', 'pricing', 'faq']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/[0.07] transition-colors duration-300 ${
        scrolled ? 'bg-bg-primary/95' : 'bg-bg-primary/70'
      }`}
    >
      <div className="flex items-center justify-between h-[68px] max-w-[1060px] mx-auto px-6">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 no-underline select-none">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <defs>
              <radialGradient id="ng-c" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7BAFC4" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#7BAFC4" stopOpacity="0"/>
              </radialGradient>
            </defs>
            {/* Outer glow halo */}
            <circle cx="19" cy="19" r="18" fill="url(#ng-c)"/>
            {/* Connection lines */}
            <path d="M19 19 Q16 12 19 6"   stroke="#7BAFC4" strokeWidth="1.1" strokeOpacity="0.55" fill="none" strokeLinecap="round"/>
            <path d="M19 19 Q10 22 8 28"   stroke="#7BAFC4" strokeWidth="1.1" strokeOpacity="0.55" fill="none" strokeLinecap="round"/>
            <path d="M19 19 Q28 22 30 28"  stroke="#7BAFC4" strokeWidth="1.1" strokeOpacity="0.55" fill="none" strokeLinecap="round"/>
            {/* Outer ring arcs */}
            <path d="M19 6 Q5 17 8 28"    stroke="#7BAFC4" strokeWidth="0.8" strokeOpacity="0.28" fill="none"/>
            <path d="M19 6 Q33 17 30 28"  stroke="#7BAFC4" strokeWidth="0.8" strokeOpacity="0.28" fill="none"/>
            <path d="M8 28 Q19 34 30 28"  stroke="#7BAFC4" strokeWidth="0.8" strokeOpacity="0.28" fill="none"/>
            {/* Node glow */}
            <circle cx="19" cy="6"  r="3.5" fill="#7BAFC4" fillOpacity="0.12"/>
            <circle cx="8"  cy="28" r="3.5" fill="#7BAFC4" fillOpacity="0.12"/>
            <circle cx="30" cy="28" r="3.5" fill="#7BAFC4" fillOpacity="0.12"/>
            <circle cx="19" cy="19" r="5"   fill="#7BAFC4" fillOpacity="0.15"/>
            {/* Outer nodes */}
            <circle cx="19" cy="6"  r="2"   fill="#7BAFC4"/>
            <circle cx="8"  cy="28" r="2"   fill="#7BAFC4"/>
            <circle cx="30" cy="28" r="2"   fill="#7BAFC4"/>
            {/* Central node */}
            <circle cx="19" cy="19" r="3.2" fill="#7BAFC4"/>
            <circle cx="19" cy="19" r="1.5" fill="#ffffff"/>
          </svg>
          <span style={{ fontWeight: 800, fontSize: '17px', letterSpacing: '-0.02em', lineHeight: 1 }}>
            <span style={{ color: '#ffffff' }}>FLOW</span><span style={{ color: '#7BAFC4' }}>BIT</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
          {LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${l}`}
                className="text-sm font-medium hover:text-white transition-colors capitalize no-underline" style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
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
        <div className="md:hidden bg-bg-secondary border-b border-white/[0.07] px-6 py-6 flex flex-col gap-5">
          {LINKS.map(l => (
            <a
              key={l}
              href={`#${l}`}
              onClick={() => setOpen(false)}
              className="text-muted text-base font-medium hover:text-accent transition-colors capitalize no-underline"
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">
            Get Started →
          </a>
        </div>
      )}
    </nav>
  )
}
