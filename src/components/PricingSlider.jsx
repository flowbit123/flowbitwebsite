import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACCENT      = '#48BCDA'
const ACCENT_DIM  = 'rgba(123,175,196,0.22)'

const TIERS = [
  {
    label: 'Lead Qualification Bot',
    desc: 'The bot asks the right questions, qualifies the lead and sends you a summary so you only spend time on serious prospects.',
    features: [
      'Instant reply to enquiries',
      'Qualifying questions flow',
      'Lead scoring and summary',
      'Notification to owner via WhatsApp or email',
    ],
  },
  {
    label: 'Booking Automation',
    desc: 'Full end to end booking automation. Client messages, bot qualifies, checks availability and books directly into your calendar. No human needed.',
    features: [
      'Everything in Lead Qualification',
      'Google Calendar integration',
      'Real-time availability checking',
      'Automatic booking confirmation',
      'Reschedule and cancel handling',
    ],
  },
  {
    label: 'Outbound Sales Agent',
    desc: 'Your AI sales agent reaches out to leads, follows up on quotes and books meetings without you. Runs personalised outbound campaigns around the clock.',
    features: [
      'Everything in Booking Automation',
      'Automated lead outreach via WhatsApp',
      'Follow up sequences on unpaid quotes',
      'Reengagement of cold prospects',
      'Meeting booking and CRM updates',
    ],
  },
  {
    label: 'Full AI Receptionist',
    desc: 'A Claude powered AI that handles the full client journey from first message to confirmed booking, across multiple channels, in any language, 24/7.',
    features: [
      'Everything in Booking Automation',
      'Powered by Claude AI',
      'Multi channel (WhatsApp, Instagram, Web)',
      'English and Afrikaans support',
      'Monthly performance report',
    ],
  },
]

const sliderStyles = `
  .fb-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 9999px;
    outline: none;
    cursor: pointer;
    transition: background 0.2s;
  }
  .fb-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #48BCDA;
    box-shadow: inset 0 0 0 7px #0A0A0A, 0 0 0 2px #48BCDA, 0 0 18px rgba(72,188,218,0.55);
    cursor: pointer;
    transition: box-shadow 0.2s, transform 0.15s;
  }
  .fb-slider::-webkit-slider-thumb:hover {
    transform: scale(1.12);
    box-shadow: inset 0 0 0 7px #0A0A0A, 0 0 0 2px #48BCDA, 0 0 28px rgba(72,188,218,0.8);
  }
  .fb-slider::-moz-range-thumb {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #48BCDA;
    box-shadow: inset 0 0 0 7px #0A0A0A, 0 0 0 2px #48BCDA, 0 0 18px rgba(72,188,218,0.55);
    border: none;
    cursor: pointer;
  }
  .fb-slider::-moz-range-track {
    height: 6px;
    border-radius: 9999px;
  }
`

export default function PricingSlider() {
  const [tier, setTier] = useState(0)
  const pct = (tier / (TIERS.length - 1)) * 100

  return (
    <>
      <style>{sliderStyles}</style>

      <div className="w-full max-w-4xl mx-auto">

        <p className="text-center text-muted text-sm mb-8">
          Explore our service packages — slide to see what's included.
        </p>

        {/* Slider track */}
        <div className="relative mb-3">
          <input
            type="range"
            min={0}
            max={TIERS.length - 1}
            step={1}
            value={tier}
            onChange={e => setTier(Number(e.target.value))}
            className="fb-slider"
            style={{
              background: `linear-gradient(to right, ${ACCENT} ${pct}%, ${ACCENT_DIM} ${pct}%)`,
            }}
          />
        </div>

        {/* Tier labels — absolutely positioned to match slider stop math */}
        <div className="relative mb-10" style={{ height: '44px' }}>
          {TIERS.map((t, i) => {
            const left = (i / (TIERS.length - 1)) * 100
            return (
              <button
                key={i}
                onClick={() => setTier(i)}
                className="absolute flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                style={{ left: `${left}%`, transform: 'translateX(-50%)' }}
              >
                <span
                  className="text-[11px] font-semibold text-center leading-tight transition-colors duration-200 whitespace-nowrap"
                  style={{ color: tier === i ? ACCENT : 'rgba(255,255,255,0.35)' }}
                >
                  {t.label}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full mt-0.5 transition-all duration-200"
                  style={{
                    background: tier === i ? ACCENT : 'rgba(255,255,255,0.18)',
                    boxShadow: tier === i ? `0 0 8px ${ACCENT}` : 'none',
                  }}
                />
              </button>
            )
          })}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tier}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="rounded-[20px] p-8"
            style={{
              background: 'linear-gradient(135deg, #111827, #0d1117)',
              border: `1px solid rgba(72,188,218,0.2)`,
              boxShadow: '0 0 60px rgba(72,188,218,0.06)',
            }}
          >
            {/* Tier name */}
            <h3 className="text-[clamp(22px,3.5vw,32px)] font-extrabold tracking-tight mb-3" style={{ color: '#fff' }}>
              {TIERS[tier].label}
            </h3>

            {/* Description */}
            <p className="text-[15px] leading-relaxed mb-6 max-w-lg" style={{ color: '#7BAFC4' }}>
              {TIERS[tier].desc}
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-2.5 mb-8 list-none p-0 m-0">
              {TIERS[tier].features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-base flex-shrink-0 font-bold" style={{ color: ACCENT }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="btn-primary inline-flex"
              style={{ padding: '12px 28px', fontSize: '15px', whiteSpace: 'nowrap' }}
            >
              Enquire about this service →
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
