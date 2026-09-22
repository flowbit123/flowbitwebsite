import { motion } from 'framer-motion'
import { LuCheck } from 'react-icons/lu'

const TIERS = [
  {
    label: 'Lead Qualification Bot',
    desc: 'Every lead that messages your WhatsApp gets an instant reply, day or night, weekend or holiday. No more losing a potential client because you were busy or missed the message.',
    features: [
      'Every WhatsApp message gets an instant reply with no lead left waiting',
      'Works 24/7 so you never miss an enquiry after hours',
      'Gathers the client\'s name, number and what they need before you speak to them',
      'Sends you a WhatsApp or email alert the moment someone is ready to buy',
      'Not locked to WhatsApp, runs on SMS or website chat too if that suits your business better',
    ],
  },
  {
    label: 'Booking Automation',
    featured: true,
    desc: 'A client messages your WhatsApp, gets an instant reply, and walks away with a confirmed booking, all without you lifting a finger. No missed messages, no delays, no leads going cold.',
    features: [
      'Everything in Lead Qualification Bot',
      'Instantly checks your calendar and offers available times to the client over WhatsApp',
      'Confirms the booking automatically so the client gets a WhatsApp confirmation straight away',
      'No double bookings and no back-and-forth about what time works',
      'Handles rescheduling and cancellations so you don\'t have to',
    ],
  },
  {
    label: 'Full AI Receptionist',
    desc: 'A fully intelligent AI that answers every single message the moment it comes in, across WhatsApp, Instagram, SMS and your website. Every client feels like they\'re your top priority.',
    features: [
      'Everything in Booking Automation',
      'Instant human-like replies powered by Claude AI, not robotic scripts',
      'Handles WhatsApp, Instagram DM, SMS and website chat all at once',
      'Speaks to clients in English or Afrikaans naturally',
      'Monthly report so you can see every lead, response time and booking',
    ],
  },
]

export default function PricingSlider() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      {TIERS.map((t, i) => (
        <motion.div
          key={t.label}
          className="flex flex-col rounded-[20px] p-7"
          style={
            t.featured
              ? { background: 'var(--bg3)', border: '1px solid rgba(43,58,103,0.4)', boxShadow: '0 20px 60px rgba(16,25,46,0.12)' }
              : { background: 'var(--bg-light-2)', border: '1px solid var(--border-light)' }
          }
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {t.featured && (
            <span
              className="self-start text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-4"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Most popular
            </span>
          )}

          <h3
            className="text-[20px] font-extrabold tracking-tight mb-3"
            style={{ color: t.featured ? '#fff' : 'var(--ink)' }}
          >
            {t.label}
          </h3>

          <p
            className="text-[14px] leading-relaxed mb-6"
            style={{ color: t.featured ? 'rgba(255,255,255,0.65)' : 'var(--ink-muted)' }}
          >
            {t.desc}
          </p>

          <ul className="flex flex-col gap-2.5 mb-8 list-none p-0 m-0">
            {t.features.map(f => (
              <li
                key={f}
                className="flex items-start gap-2.5 text-sm leading-relaxed"
                style={{ color: t.featured ? 'rgba(255,255,255,0.8)' : 'var(--ink-muted)' }}
              >
                <LuCheck size={16} strokeWidth={2.5} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-text)' }} />
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className={t.featured ? 'btn-primary inline-flex justify-center mt-auto' : 'btn-ghost inline-flex justify-center mt-auto'}
            style={{ padding: '12px 20px', fontSize: '14px' }}
          >
            Enquire about this tier →
          </a>
        </motion.div>
      ))}
    </div>
  )
}
