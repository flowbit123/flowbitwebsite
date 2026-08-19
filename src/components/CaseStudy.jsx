import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const STATS = [
  { value: 'R700,000', label: 'Total sales',         sub: 'closed inside WhatsApp' },
  { value: '163',      label: 'Orders',               sub: 'placed and paid' },
  { value: '6,000',    label: 'Unique conversations', sub: 'handled by the bot' },
  { value: '32,000',   label: 'Lines of conversation', sub: 'processed' },
]

const CASE = {
  client:   'Wiggle Wear',
  industry: "Children's Clothing & Diaper Reseller",
  website:  'https://www.wigglewear.co.za',
  logo:     '/Wiggle Wear Logo.jpeg',
  problem:
    "Wiggle Wear was running Facebook ads driving a high volume of enquiries directly to WhatsApp. Every lead had to be handled manually. Answering the same questions, qualifying buyers, confirming orders, one message at a time. The owner could not keep up. Leads were going cold, response times were slow, and ad spend was being wasted on enquiries that never converted.",
  solution: [
    'Instant auto-response to every Facebook ad lead landing on WhatsApp',
    'AI powered conversation handling. Answers questions, qualifies buyers, and processes orders',
    'Filters out time wasters so the owner only deals with real, interested buyers',
    'Customer state tracked across conversations',
    '24/7 coverage. Customers are handled instantly at any hour',
  ],
  result:
    'The bot has closed over R700,000 in sales entirely inside WhatsApp, no cold leads from slow reply times, and the owner stopped being the bottleneck. The ads finally started paying off.',
  video:  '/wiggle-wear-testimonial.mp4',
  poster: '/wiggle-wear-video-poster.png',
}

export default function CaseStudy() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function handlePlayClick() {
    videoRef.current?.play()
    setPlaying(true)
  }

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-[1060px] mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag mx-auto mb-5">Case Study</div>
          <h2 className="text-[clamp(28px,4vw,46px)] font-extrabold leading-tight tracking-tight mb-4">
            Real Results for{' '}
            <span className="text-accent-text">Real Businesses</span>
          </h2>
          <p className="text-muted text-[15px] max-w-[480px] mx-auto leading-relaxed">
            See how Flowbit helped Wiggle Wear turn ad spend into actual sales with a fully automated WhatsApp system.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="rounded-[24px] overflow-hidden"
          style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Top bar */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-8 py-6"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-5">
              {/* Logo badge */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-white p-1.5">
                <img src={CASE.logo} alt={CASE.client} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">{CASE.client}</p>
                <p className="text-muted text-sm mt-0.5">{CASE.industry}</p>
              </div>
            </div>
            <a
              href={CASE.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs px-4 py-2"
              style={{ fontSize: '12px', padding: '8px 18px' }}
            >
              Visit Website →
            </a>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

            {/* Problem */}
            <div className="p-7" style={{ borderRight: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base">⚡</span>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">The Problem</p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{CASE.problem}</p>
            </div>

            {/* Solution */}
            <div className="p-7" style={{ borderRight: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base">🤖</span>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">What We Built</p>
              </div>
              <ul className="flex flex-col gap-3">
                {CASE.solution.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Result */}
            <div className="p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base">✅</span>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">The Result</p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{CASE.result}</p>
              <div
                className="mt-6 rounded-xl px-4 py-3 text-xs font-medium"
                style={{ background: 'rgba(123,175,196,0.08)', border: '1px solid rgba(123,175,196,0.2)', color: 'var(--accent-text)' }}
              >
                Live since June 2026
              </div>
            </div>

          </div>

          {/* Stats row */}
          <div style={{ borderTop: '1px solid var(--border)' }}>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="px-8 py-5"
                  style={{ borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none' }}
                >
                  <p className="text-2xl font-extrabold text-white tracking-tight">{s.value}</p>
                  <p className="text-sm font-medium text-white/70 mt-0.5">{s.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video testimonial */}
          <div className="p-8 flex flex-col items-center" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="mb-5 self-start">
              <div className="flex items-center gap-2">
                <span className="text-base">🎥</span>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Hear It From The Owner</p>
              </div>
              <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>Recorded after Month 1</p>
            </div>
            <div
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '16 / 9',
                border: '1px solid var(--border)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
                background: '#000',
              }}
            >
              <video
                ref={videoRef}
                src={CASE.video}
                poster={CASE.poster}
                controls={playing}
                playsInline
                preload="metadata"
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
                className="case-video w-full h-full"
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
              />

              {!playing && (
                <button
                  onClick={handlePlayClick}
                  aria-label="Play video"
                  className="absolute inset-0 flex items-center justify-center cursor-pointer border-none"
                  style={{ background: 'rgba(0,0,0,0.15)' }}
                >
                  <span
                    className="flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
                    style={{
                      width: 72,
                      height: 72,
                      background: 'rgba(255,255,255,0.95)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                    }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5.5v13l11-6.5-11-6.5z" fill="#0A0A0A" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
