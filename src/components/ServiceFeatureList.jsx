import { motion } from 'framer-motion'

export default function ServiceFeatureList({ tag, title, titleAccent, subtitle, features }) {
  return (
    <section className="py-20">
      <div className="max-w-[1060px] mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto">{tag}</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mt-5 mb-3">
            {title} {titleAccent && <span className="text-accent-text">{titleAccent}</span>}
          </h2>
          {subtitle && (
            <p className="text-muted text-[15px] max-w-[560px] mx-auto leading-relaxed">{subtitle}</p>
          )}
        </motion.div>

        <motion.div
          className="dark-card grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {features.map(f => (
            <div key={f} className="flex items-start gap-3">
              <span className="text-base flex-shrink-0 font-bold mt-0.5" style={{ color: 'var(--accent)' }}>✓</span>
              <p className="text-sm text-white/80 leading-relaxed">{f}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
