import { motion } from 'framer-motion'

const CATEGORIES = [
  {
    icon: '🤖',
    title: 'AI Automation',
    desc: 'Lead qualification, booking automation, and a full AI receptionist across WhatsApp, Instagram, SMS and web chat.',
    href: '/services/ai-automation',
  },
  {
    icon: '📈',
    title: 'Paid Advertising',
    desc: 'Google, Facebook, Instagram & TikTok ads built to turn ad spend into booked revenue.',
    href: '/services/paid-advertising',
  },
  {
    icon: '💻',
    title: 'Websites & Landing Pages',
    desc: 'Sites and funnels built to convert, custom coded, not templated.',
    href: '/services/websites',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    desc: 'Done-for-you content and posting so your brand shows up consistently.',
    href: '/services/social-media',
  },
]

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
          <div className="section-tag">What We Do</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
            One Team.{' '}
            <span className="text-accent-text">Five Ways We Grow Your Business.</span>
          </h2>
          <p className="text-muted text-[15px] max-w-[520px] leading-relaxed">
            Every solution is custom built for your business. No templates. No one size fits all. Just work that actually moves the needle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CATEGORIES.map((c, i) => (
            <motion.a
              key={c.href}
              href={c.href}
              className="dark-card no-underline text-white flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="text-[28px] mb-4">{c.icon}</div>
              <h3 className="text-[17px] font-bold mb-2">{c.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{c.desc}</p>
              <span className="text-sm font-semibold text-accent-text mt-auto">Learn more →</span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
