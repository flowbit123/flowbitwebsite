import { motion } from 'framer-motion'

export default function ServiceHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative pt-[140px] pb-20 overflow-hidden bg-transparent">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.07) 0%, transparent 65%)' }}
      />
      <div className="relative z-10 max-w-[760px] mx-auto px-6 text-center">
        <motion.div
          className="section-tag mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.div>

        <motion.h1
          className="text-[clamp(30px,5vw,52px)] font-black leading-[1.05] tracking-tight mt-5 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-muted text-[16px] leading-relaxed max-w-[560px] mx-auto mb-9"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#contact" className="btn-primary">Book a Free Audit →</a>
          <a href="#process" className="btn-ghost">See How It Works</a>
        </motion.div>
      </div>
    </section>
  )
}
