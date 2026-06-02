import { motion } from 'framer-motion'
import PricingSlider from './PricingSlider'

export default function Pricing() {
  return (
    <section id="pricing" className="pb-20">
      <div className="max-w-[1060px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <PricingSlider />
        </motion.div>
      </div>
    </section>
  )
}
