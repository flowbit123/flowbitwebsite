import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import WorkflowCanvas from './WorkflowCanvas'

const PHRASES = [
  'Scale Without Limits.',
  'WhatsApp Automation.',
  'Close Leads 24/7.',
  'Retain More Clients.',
  'Eliminate Manual Work.',
]

function useTypewriter(phrases) {
  const [text, setText] = useState('')
  useEffect(() => {
    let phraseIdx = 0, charIdx = 0, deleting = false, timer
    const tick = () => {
      const phrase = phrases[phraseIdx]
      if (!deleting) {
        setText(phrase.slice(0, ++charIdx))
        if (charIdx === phrase.length) {
          deleting = true; timer = setTimeout(tick, 2000); return
        }
      } else {
        setText(phrase.slice(0, --charIdx))
        if (charIdx === 0) {
          deleting = false
          phraseIdx = (phraseIdx + 1) % phrases.length
          timer = setTimeout(tick, 400); return
        }
      }
      timer = setTimeout(tick, deleting ? 45 : 80)
    }
    timer = setTimeout(tick, 800)
    return () => clearTimeout(timer)
  }, [])
  return text
}

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const step = Math.ceil(target / (duration / 30))
    const timer = setInterval(() => {
      setCount(c => {
        if (c + step >= target) { clearInterval(timer); return target }
        return c + step
      })
    }, 30)
    return () => clearInterval(timer)
  }, [target, duration])
  return count
}

export default function Hero() {
  const typeText = useTypewriter(PHRASES)


  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[68px] overflow-hidden bg-transparent"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16 w-full max-w-[1060px] mx-auto px-6 py-16">

        {/* ── Left: copy ── */}
        <div>
          <motion.div
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full mb-6"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border:     '1px solid rgba(255,255,255,0.2)',
              color:      'var(--accent)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
            AI Automation Agency
          </motion.div>

          <motion.h1
            className="text-[clamp(32px,5vw,58px)] font-black leading-none tracking-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Automate Everything.
            <br />
            <span
              className="text-accent-text block"
              style={{ minHeight: '2.2em' }}
            >
              {typeText}
              <span className="tw-cursor" />
            </span>
          </motion.h1>

          <motion.p
            className="text-muted text-[15px] leading-relaxed max-w-[440px] mb-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Custom built automation systems that eliminate repetitive work so your business runs 24/7 without extra headcount.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 flex-wrap mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#cta-banner" className="btn-primary">Book a Free Audit →</a>
            <a href="#process"    className="btn-ghost">See How It Works</a>
          </motion.div>

          <motion.div
            className="flex gap-7 pt-6"
            style={{ borderTop: '1px solid var(--border)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { num: '24/7',  label: 'Runs While You Sleep'              },
              { num: '20h+',  label: 'Saved Per Week Per Business'       },
              { num: '<60s',  label: 'Average Automation Response Time'     },
            ].map(s => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="text-[22px] font-extrabold text-accent-text">{s.num}</span>
                <span className="text-xs text-muted">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: orbital canvas ── */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <WorkflowCanvas />
        </motion.div>

      </div>
    </section>
  )
}
