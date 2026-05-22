import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    icon: '🔍',
    title: 'Discovery',
    desc: "We map your exact workflow, identify the highest-impact bottlenecks, and define what we'll automate first. No assumptions, just clarity.",
  },
  {
    num: '02',
    icon: '🛠️',
    title: 'Build',
    desc: 'Custom coded solution built specifically for you. We choose between structured logic or AI powered conversation depending on your needs.',
  },
  {
    num: '03',
    icon: '🚀',
    title: 'Deploy & Optimise',
    desc: 'We launch, monitor, and continuously improve your automation. You get monthly reports and we iterate based on real results.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-[1060px] mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>How We Work</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
            Behind Every Great Result Is a{' '}
            <span className="text-accent-text">Process That Just Works</span>
          </h2>
          <p className="text-muted text-[15px] max-w-[520px] mx-auto leading-relaxed">
            We don't do templates. Every automation is built from scratch for your specific business.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-10 pointer-events-none"
            style={{
              left: 'calc(16.66% + 20px)',
              right: 'calc(16.66% + 20px)',
              height: '1px',
              background: 'linear-gradient(90deg, var(--accent), rgba(255,255,255,0.2), var(--accent))',
            }}
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex flex-col items-center text-center px-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Number badge */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-[22px] font-black text-accent relative z-10 mb-5"
                style={{
                  background: 'var(--bg2)',
                  border: '2px solid var(--accent)',
                  boxShadow: '0 0 24px rgba(255,255,255,0.25)',
                }}
              >
                {step.num}
              </div>

              <div className="text-[26px] mb-3">{step.icon}</div>
              <h3 className="text-[17px] font-bold mb-2.5">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
