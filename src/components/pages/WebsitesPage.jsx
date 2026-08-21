import { motion } from 'framer-motion'
import ParticleBackground   from '../ParticleBackground'
import AmbientGlow          from '../AmbientGlow'
import Navbar                from '../Navbar'
import ServiceHero          from '../ServiceHero'
import ServiceFeatureList   from '../ServiceFeatureList'
import Process               from '../Process'
import CTABanner             from '../CTABanner'
import Contact                from '../Contact'
import Footer                 from '../Footer'
import WhatsAppButton        from '../WhatsAppButton'
import PageSEO                from '../PageSEO'

// TODO: All copy below is placeholder — confirm tech stack details worth
// naming publicly, turnaround time, pricing/retainer, and whether hosting
// is included before this page goes live.
const FEATURES = [
  'Custom-coded build, no drag-and-drop page builders slowing the site down',
  'Mobile-first design engineered for speed, since a slow site loses leads before they ever read your offer',
  'Clear conversion paths on every page, built around one goal per page, not ten competing calls to action',
  'SEO-friendly foundation from the first line of code, so the site is built to be found, not just to look good',
  'Connected directly to your booking calendar and AI Automation, so a form fill becomes an instant reply and a booked slot, not a lead sitting in an inbox',
  'Ongoing hosting, updates, and support included', // TODO: confirm what's actually included in the retainer vs one-off build fee
]

const STEPS = [
  { num: '01', icon: '🔍', title: 'Discovery',        desc: 'We map your conversion goal, content, and brand requirements before writing a single line of code.' },
  { num: '02', icon: '🛠️', title: 'Build',             desc: 'A custom-coded site or funnel, mobile-optimised and wired into your calendar, CRM and automation from day one.' },
  { num: '03', icon: '🚀', title: 'Launch & Optimise', desc: 'We go live, monitor how visitors actually convert, and iterate on copy and design based on real data.' },
]

export default function WebsitesPage() {
  return (
    <div className="bg-bg-primary text-white font-sans overflow-x-hidden">
      <PageSEO
        title="Websites & Landing Pages | Flowbit"
        description="Custom-coded websites and landing pages built by Flowbit to convert visitors into leads, not just look good."
        path="/services/websites"
      />
      <ParticleBackground />
      <AmbientGlow />
      <div className="relative z-10">
        <Navbar />

        <ServiceHero
          eyebrow="Websites & Landing Pages"
          title={<>A site built to <span className="text-accent-text">close, not just load.</span></>}
          subtitle="Custom-coded, mobile-first, and built around one job: turning visitors into booked calls and paying customers, not just looking presentable."
        />

        <ServiceFeatureList
          tag="What's Included"
          title="Engineered for conversion,"
          titleAccent="not just design."
          subtitle="Every page is planned around your offer and how your actual visitors browse and decide."
          features={FEATURES}
        />

        {/* Cross-sell: connect the site to AI Automation */}
        <section className="pb-4">
          <div className="max-w-[1060px] mx-auto px-6">
            <motion.div
              className="dark-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="text-white font-bold text-base mb-1.5">A form fill shouldn't sit in an inbox.</p>
                <p className="text-muted text-sm leading-relaxed max-w-[560px]">
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
          titleStart="Ready to stop"
          titleAccent="losing visitors?"
          subtitle="Book a free 30-minute audit and we'll show you exactly where your current site is losing leads, and what to fix first." // TODO: confirm audit scope for prospects who don't have a site yet
        />

        <Contact defaultService="Websites & Landing Pages" />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}
