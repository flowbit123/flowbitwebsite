import { motion } from 'framer-motion'
import PricingSlider from './PricingSlider'

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-[1060px] mx-auto px-6">

        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">What We Build</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
            If It's Repetitive,{' '}
            <span className="text-accent-text">We Automate It.</span>
          </h2>
          <p className="text-muted text-[15px] max-w-[520px] leading-relaxed">
            Every solution is custom coded for your exact workflow. No templates. No one size fits all. Just automation that actually works.
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

      </div>
    </section>
  )
}
