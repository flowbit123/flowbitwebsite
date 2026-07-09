import { useState, useEffect } from 'react'

const LINKS = ['services', 'process', 'testimonials', 'faq']

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
        <a href="#hero" className="flex items-center no-underline select-none">
          <img src="/flowbit-logo.png" alt="Flowbit" className="h-14 w-auto" />
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
