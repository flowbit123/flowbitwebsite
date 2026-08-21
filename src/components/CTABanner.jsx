import { motion } from 'framer-motion'

export default function CTABanner({
  eyebrow    = 'Free Audit, No Commitment',
  titleStart = 'Ready to Stop',
  titleAccent = 'Doing It Manually?',
  subtitle   = "Book a free 30-minute audit and we'll map out exactly what to automate first, and the ROI you can expect.",
}) {
  return (
    <section id="cta-banner" className="py-20">
      <div className="max-w-[1060px] mx-auto px-6">
        <motion.div
          className="relative rounded-[24px] px-12 py-16 text-center overflow-hidden"
          style={{ background: 'var(--bg3)', border: '1px solid rgba(255,255,255,0.2)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)',
            }}
          />

          <div className="section-tag relative" style={{ margin: '0 auto 24px' }}>
            {eyebrow}
          </div>

          <h2 className="relative text-[clamp(26px,4vw,44px)] font-extrabold leading-tight tracking-tight mb-3">
            {titleStart}{' '}
            <span className="text-accent-text">{titleAccent}</span>
          </h2>

          <p className="relative text-muted text-[15px] max-w-[520px] mx-auto leading-relaxed mb-9">
            {subtitle}
          </p>

          <div className="relative flex justify-center gap-3.5 flex-wrap">
            <a
              href="#contact"
              className="btn-primary"
              style={{ fontSize: '15px', padding: '13px 28px' }}
            >
              Book Free Audit →
            </a>
            <a
              href="#contact"
              className="btn-ghost"
              style={{ fontSize: '15px', padding: '13px 28px' }}
            >
              Contact Us
            </a>
          </div>

          <p className="relative mt-5 text-xs text-muted">
            No commitment · Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
