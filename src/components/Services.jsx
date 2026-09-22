import { motion } from 'framer-motion'
import { LuTrendingUp, LuBot, LuMonitor, LuShare2 } from 'react-icons/lu'

const CATEGORIES = [
  {
    Icon: LuTrendingUp,
    title: 'Paid Advertising & Lead Generation',
    desc: 'Google, Facebook, Instagram & TikTok campaigns that hand off every lead into automated follow-up instead of a spreadsheet.',
    href: '/services/paid-advertising',
  },
  {
    Icon: LuBot,
    title: 'AI Automation',
    desc: 'Every enquiry qualified, booked, or answered within seconds, across WhatsApp, Instagram, SMS and web chat, day or night.',
    href: '/services/ai-automation',
  },
  {
    Icon: LuMonitor,
    title: 'Websites & Landing Pages',
    desc: 'Custom coded sites and funnels built to convert visitors, wired straight into your automation from day one.',
    href: '/services/websites',
  },
  {
    Icon: LuShare2,
    title: 'Social Media Management',
    desc: 'Content planned, produced and posted on a consistent schedule, so your brand shows up whether or not you have time for it.',
    href: '/services/social-media',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-light py-20">
      <div className="max-w-[1060px] mx-auto px-6">

        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag on-light">What We Do</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
            One Team.{' '}
            <span className="text-accent-text">Every Way We Grow Your Business.</span>
          </h2>
          <p className="text-ink-muted text-[15px] max-w-[520px] leading-relaxed">
            Every solution is custom built for your business. No templates. No one size fits all. Just work that actually moves the needle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CATEGORIES.map((c, i) => (
            <motion.a
              key={c.href}
              href={c.href}
              className="card-light no-underline flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="mb-4" style={{ color: 'var(--accent)' }}>
                <c.Icon size={26} strokeWidth={1.75} />
              </div>
              <h3 className="text-[17px] font-bold mb-2 text-ink">{c.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-5">{c.desc}</p>
              <span className="text-sm font-semibold text-accent-text mt-auto">Learn more →</span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
