import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACCENT      = '#48BCDA'
const ACCENT_DIM  = 'rgba(123,175,196,0.22)'

const TIERS = [
  {
    label: 'Lead Qualification Bot',
    desc: 'Every lead that messages you gets an instant reply, day or night, weekend or holiday. No more losing a potential client because you were busy or missed the message. Every enquiry is answered within seconds, automatically.',
    features: [
      'Every message gets an instant reply with no lead left waiting',
      'Works 24/7 so you never miss an enquiry after hours',
      'Gathers the client\'s name, number and what they need before you speak to them',
      'Sends you a WhatsApp or email alert the moment someone is ready to buy',
    ],
  },
  {
    label: 'Booking Automation',
    desc: 'A client messages you, gets an instant reply, and walks away with a confirmed booking, all without you lifting a finger. No missed messages, no delays, no leads going cold because you were tied up.',
    features: [
      'Everything in Lead Qualification Bot',
      'Instantly checks your calendar and offers available times to the client',
      'Confirms the booking automatically so the client gets a confirmation straight away',
      'No double bookings and no back-and-forth about what time works',
      'Handles rescheduling and cancellations so you don\'t have to',
    ],
  },
  {
    label: 'Outbound Sales Agent',
    desc: 'Your AI agent doesn\'t just wait for leads to come in. It actively reaches out, follows up, and makes sure no potential client falls through the cracks. Every lead gets contacted, every quote gets chased, without you having to remember.',
    features: [
      'Everything in Booking Automation',
      'Follows up with every lead who hasn\'t responded yet, automatically',
      'Chases unpaid or unopened quotes so you don\'t lose the sale',
      'Contacts clients who went quiet and brings them back into conversation',
      'Books meetings and logs everything so nothing gets forgotten',
    ],
  },
  {
    label: 'Full AI Receptionist',
    desc: 'A fully intelligent AI that answers every single message the moment it comes in, across WhatsApp, Instagram, and your website. Every client feels like they\'re your top priority, even when you\'re sleeping, in a meeting, or fully booked.',
    features: [
      'Everything in Outbound Sales Agent',
      'Instant human-like replies powered by Claude AI, not robotic scripts',
      'Handles WhatsApp, Instagram DM and website chat all at once',
      'Speaks to clients in English or Afrikaans naturally',
      'Monthly report so you can see every lead, response time and booking',
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
