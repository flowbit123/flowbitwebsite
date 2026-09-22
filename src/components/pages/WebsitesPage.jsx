import { motion } from 'framer-motion'
import { LuSearch, LuWrench, LuRocket } from 'react-icons/lu'
import Navbar                from '../Navbar'
import ServiceHero          from '../ServiceHero'
import SiteMockup, { SiteMockupNote } from '../SiteMockup'
import Process               from '../Process'
import CTABanner             from '../CTABanner'
import Contact                from '../Contact'
import Footer                 from '../Footer'
import WhatsAppButton        from '../WhatsAppButton'
import PageSEO                from '../PageSEO'

// TODO: All copy below is placeholder — confirm tech stack details worth
// naming publicly, turnaround time, pricing/retainer, and whether hosting
// is included before this page goes live.
const STEPS = [
  { num: '01', Icon: LuSearch, title: 'Discovery',        desc: 'We map your conversion goal, content, and brand requirements before writing a single line of code.' },
  { num: '02', Icon: LuWrench, title: 'Build',             desc: 'A custom-coded site or funnel, mobile-optimised and wired into your calendar, CRM and automation from day one.' },
  { num: '03', Icon: LuRocket, title: 'Launch & Optimise', desc: 'We go live, monitor how visitors actually convert, and iterate on copy and design based on real data.' },
]

export default function WebsitesPage() {
  return (
    <div className="font-sans overflow-x-hidden">
      <PageSEO
        title="Websites & Landing Pages | Flowbit"
        description="Custom-coded websites and landing pages built by Flowbit to convert visitors into leads, not just look good."
        path="/services/websites"
      />
      <Navbar />

      <ServiceHero
        eyebrow="Websites & Landing Pages"
        title={<>A site built to <span className="text-accent-text">close, not just load.</span></>}
        subtitle="Custom-coded, mobile-first, and built around one job: turning visitors into booked calls and paying customers, not just looking presentable."
      />

      {/* Site mockup */}
      <section className="section-light py-20">
        <div className="max-w-[1060px] mx-auto px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag on-light mx-auto">What We Build</div>
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mt-5 mb-3">
              Engineered for conversion,{' '}
              <span className="text-accent-text">not just design.</span>
            </h2>
            <p className="text-ink-muted text-[15px] max-w-[560px] mx-auto leading-relaxed">
              Every page is planned around your offer and how your actual visitors browse and decide, custom-coded, mobile-first, and connected straight into your AI Automation and calendar.
            </p>
          </motion.div>

          <SiteMockup />
          <SiteMockupNote />
        </div>
      </section>

      {/* Cross-sell: connect the site to AI Automation */}
      <section className="section-light pb-4">
        <div className="max-w-[1060px] mx-auto px-6">
          <motion.div
            className="card-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="text-ink font-bold text-base mb-1.5">A form fill shouldn't sit in an inbox.</p>
              <p className="text-ink-muted text-sm leading-relaxed max-w-[560px]">
                Every site we build can plug straight into our{' '}
                <a href="/services/ai-automation" className="text-accent-text no-underline hover:underline">AI Automation</a>{' '}
                system, so the moment someone submits a form or opens a chat, they get an instant reply and a live booking, not a "we'll be in touch."
              </p>
            </div>
            <a href="/services/ai-automation" className="btn-ghost flex-shrink-0" style={{ fontSize: '14px', padding: '10px 20px' }}>
              See AI Automation →
            </a>
          </motion.div>
        </div>
      </section>

      <Process
        tag="How We Work"
        titleStart="From blank page to"
        titleAccent="a site that converts"
        subtitle="No page-builder templates. Every site is planned, coded, and tested around your specific conversion goal."
        steps={STEPS}
      />

      <CTABanner
        eyebrow="Free Site Audit"
        titleStart="Your site should be"
        titleAccent="closing deals, not sitting there."
        subtitle="Book a free 30-minute audit and we'll show you exactly where your current site is losing leads, and what to fix first." // TODO: confirm audit scope for prospects who don't have a site yet
      />

      <Contact defaultService="Websites & Landing Pages" />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
