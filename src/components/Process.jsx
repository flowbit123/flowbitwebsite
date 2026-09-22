import { motion } from 'framer-motion'
import { LuSearch, LuWrench, LuRocket } from 'react-icons/lu'
import ParticleBackground from './ParticleBackground'
import AmbientGlow from './AmbientGlow'

const DEFAULT_STEPS = [
  {
    num: '01',
    Icon: LuSearch,
    title: 'Discovery',
    desc: "We map your exact workflow, identify the highest-impact bottlenecks, and define what we'll automate first. No assumptions, just clarity.",
  },
  {
    num: '02',
    Icon: LuWrench,
    title: 'Build',
    desc: 'Custom coded solution built specifically for you. We choose between structured logic or AI powered conversation depending on your needs.',
  },
  {
    num: '03',
    Icon: LuRocket,
    title: 'Deploy & Optimise',
    desc: 'We launch, monitor, and continuously improve your automation. You get monthly reports and we iterate based on real results.',
  },
]

export default function Process({
  tag = 'How We Work',
  titleStart = 'Behind Every Great Result Is a',
  titleAccent = 'Process That Just Works',
  subtitle = "We don't do templates. Every automation is built from scratch for your specific business.",
  steps = DEFAULT_STEPS,
}) {
  return (
    <section id="process" className="section-dark py-20 overflow-hidden">
      <ParticleBackground />
      <AmbientGlow />
      <div className="relative z-10 max-w-[1060px] mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>{tag}</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
            {titleStart}{' '}
            <span className="text-accent-text">{titleAccent}</span>
          </h2>
          <p className="text-muted text-[15px] max-w-[520px] mx-auto leading-relaxed">
            {subtitle}
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
              background: 'linear-gradient(90deg, var(--accent-text), rgba(255,255,255,0.25), var(--accent-text))',
            }}
          />

          {steps.map((step, i) => (
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
                className="w-16 h-16 rounded-full flex items-center justify-center text-[22px] font-black relative z-10 mb-5"
                style={{
                  background: 'var(--bg2)',
                  border: '2px solid var(--accent-text)',
                  color: 'var(--accent-text)',
                  boxShadow: '0 0 24px rgba(74,95,168,0.45)',
                }}
              >
                {step.num}
              </div>

              <div className="mb-3" style={{ color: 'var(--accent-text)' }}>
                <step.Icon size={26} strokeWidth={2} />
              </div>
              <h3 className="text-[18px] font-bold mb-2.5 text-white">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
