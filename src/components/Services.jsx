import { motion } from 'framer-motion'
import { SiWhatsapp } from 'react-icons/si'
import { TbTarget, TbSettings2, TbHeadset, TbPhoneCall } from 'react-icons/tb'

const SERVICES = [
  {
    Icon: SiWhatsapp,
    color: '#25D366',
    title: 'WhatsApp Automation',
    desc: 'Your customers text, your business responds instantly. We build intelligent WhatsApp bots using either pre-programmed logic or Claude AI for fully human-like conversations that close leads while you sleep.',
    tags: ['Preprogrammed Flows', 'Claude AI Conversations', '24/7 Response'],
  },
  {
    Icon: TbTarget,
    color: '#7BAFC4',
    title: 'Lead Follow-Up & Nurture',
    desc: 'Never lose a hot lead to slow response times again. Automated follow up sequences that reach out at the perfect moment, personalised, timely, and consistent, without you lifting a finger.',
    tags: ['Instant Response', 'Multi Touch Sequences', 'CRM Integration'],
  },
  {
    Icon: TbSettings2,
    color: '#7BAFC4',
    title: 'Custom Process Automation',
    desc: 'Appointment booking, data entry, reporting, invoicing, onboarding. If a human is doing it on repeat, we can automate it. Fully integrated with your existing tools: Google Calendar, CRMs, spreadsheets and more.',
    tags: ['Booking Systems', 'Data Pipelines', 'Tool Integrations'],
  },
  {
    Icon: TbHeadset,
    color: '#7BAFC4',
    title: 'Inbound AI Receptionist',
    desc: 'Never miss a lead or a query again. Our AI receptionist handles inbound calls and messages 24/7, answering FAQs, qualifying prospects, booking appointments, and routing to the right person, all without human involvement.',
    tags: ['24/7 Availability', 'Call Handling', 'Appointment Booking'],
  },
  {
    Icon: TbPhoneCall,
    color: '#7BAFC4',
    title: 'Outbound Sales Agent',
    desc: 'Scale your outreach without scaling your headcount. Our AI sales agent contacts leads, follows up on quotes, reengages cold prospects, and books meetings, running personalised outbound campaigns around the clock.',
    tags: ['Automated Outreach', 'Lead Qualification', 'Meeting Booking'],
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
          <div className="section-tag">What We Build</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
            If It's Repetitive,{' '}
            <span className="text-accent-text">We Automate It.</span>
          </h2>
          <p className="text-muted text-[15px] max-w-[520px] leading-relaxed">
            Every solution is custom coded for your exact workflow. No templates. No one size fits all. Just automation that actually works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              className="dark-card group relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[20px]"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04), transparent)' }}
              />

              <div
                className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-4"
                style={{
                  background: `${svc.color}15`,
                  border: `1px solid ${svc.color}30`,
                }}
              >
                <svc.Icon size={22} color={svc.color} />
              </div>

              <h3 className="text-[17px] font-bold mb-2">{svc.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{svc.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {svc.tags.map(t => (
                  <span
                    key={t}
                    className="text-accent text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a href="#cta-banner" className="text-accent-text text-sm font-semibold no-underline inline-flex items-center gap-1.5 transition-all duration-200 hover:gap-3">
                Start automating →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
