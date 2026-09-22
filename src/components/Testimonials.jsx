import { motion } from 'framer-motion'
import { LuStar } from 'react-icons/lu'

const TESTIMONIAL = {
  name: 'Wiggle Wear',
  role: "Children's Clothing & Diaper Reseller",
  logo: '/Wiggle Wear Logo.jpeg',
  rating: 5,
  label: 'Results summary',
  quote:
    'R700,000 in sales closed entirely inside WhatsApp, 163 orders placed and paid, from roughly 6,000 automated conversations handled by the bot.',
}

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-4 justify-center" style={{ color: 'var(--accent)' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <LuStar key={i} size={16} fill={i < count ? 'currentColor' : 'none'} strokeWidth={1.75} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-light py-20">
      <div className="max-w-[1060px] mx-auto px-6">

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag on-light mx-auto">What Clients Say</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
            Real Businesses.{' '}
            <span className="text-accent-text">Real Results.</span>
          </h2>
        </motion.div>

        <motion.div
          className="card-light flex flex-col items-center text-center max-w-[560px] mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Stars count={TESTIMONIAL.rating} />

          <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--accent)' }}>
            {TESTIMONIAL.label}
          </p>
          <p className="text-ink text-[15px] leading-relaxed mb-6">{TESTIMONIAL.quote}</p>

          <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid var(--border-light)' }}>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white" style={{ border: '1px solid var(--border-light)' }}>
              <img src={TESTIMONIAL.logo} alt={TESTIMONIAL.name} className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <p className="text-ink text-sm font-semibold leading-tight">{TESTIMONIAL.name}</p>
              <p className="text-ink-muted text-xs">{TESTIMONIAL.role}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
