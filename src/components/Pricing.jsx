import { motion } from 'framer-motion'
import PricingSlider from './PricingSlider'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-[1060px] mx-auto px-6">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>Pricing</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
            Simple, Transparent{' '}
            <span className="text-accent-text">Monthly Retainers</span>
          </h2>
          <p className="text-muted text-[15px] max-w-[520px] mx-auto leading-relaxed">
            No hidden fees. No lock-in contracts. Just automation that pays for itself, usually within the first week.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <PricingSlider />
        </motion.div>

        <p className="text-center text-muted text-xs mt-8">
          All plans include a free discovery call and initial workflow audit. Pricing in South African Rand.
        </p>
      </div>
    </section>
  )
}
