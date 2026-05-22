import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'What exactly is a custom automation?',
    a: "A custom automation is code we build specifically for your business that handles a repetitive task without any human involvement. Unlike off the shelf tools like Zapier (which just connect apps), we write the actual logic, intelligence, and workflows tailored to how YOUR business operates. The result feels purpose built, because it is.",
  },
  {
    q: 'How long does it take to build and go live?',
    a: 'Most automations are live within 5–10 business days after our discovery call. Simpler flows (like a WhatsApp lead capture) can be done in 2–3 days. More complex systems with AI integration and multiple tool connections typically take 1–2 weeks. We give you a clear timeline after the initial audit.',
  },
  {
    q: 'Do I need to be technical to work with Flowbit?',
    a: "Not at all. You just need to know your business and its pain points. We handle all the technical implementation. You'll never need to look at a line of code. We explain everything in plain language and train your team on how to use the system we build.",
  },
  {
    q: 'What if I want changes after the automation is live?',
    a: 'Your monthly retainer includes ongoing support and iterations. As your business evolves, we update your automations. Minor tweaks (wording changes, new responses) are handled within 24–48 hours. Larger feature additions are scoped and priced transparently before we build.',
  },
  {
    q: 'Do you use AI or preprogrammed logic?',
    a: "Both, and we help you choose the right approach. Preprogrammed logic is faster, cheaper, and more predictable (great for structured workflows like bookings or FAQs). AI integration (using the Claude API) is better when you need natural, dynamic conversations that handle anything a customer might say. Many clients use a combination of both.",
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="rounded-xl overflow-hidden transition-colors duration-[250ms]"
      style={{
        background: 'var(--bg3)',
        border: `1px solid ${open ? 'rgba(255,255,255,0.25)' : 'var(--border)'}`,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold bg-transparent border-none cursor-pointer text-white"
      >
        {item.q}
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 transition-all duration-300"
          style={{
            background: open ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
            color: open ? 'var(--accent)' : 'white',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-muted text-[15px] leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-[1060px] mx-auto px-6">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>FAQ</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
            Questions You're{' '}
            <span className="text-accent-text">Probably Thinking</span>
          </h2>
          <p className="text-muted text-[15px] max-w-[520px] mx-auto leading-relaxed">
            Everything you need to know before we start automating your business.
          </p>
        </motion.div>

        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
