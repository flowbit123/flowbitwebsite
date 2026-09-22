import { motion } from 'framer-motion'
import { LuSearch, LuWrench, LuRocket } from 'react-icons/lu'
import Navbar                from '../Navbar'
import ServiceHero          from '../ServiceHero'
import FunnelChart          from '../FunnelChart'
import Process               from '../Process'
import CTABanner             from '../CTABanner'
import Contact                from '../Contact'
import Footer                 from '../Footer'
import WhatsAppButton        from '../WhatsAppButton'
import PageSEO                from '../PageSEO'

// TODO: All copy below is placeholder — confirm exact platforms run, real
// results/case studies, minimum ad spend, and pricing/retainer structure
// before this page goes live.
const STEPS = [
  { num: '01', Icon: LuSearch, title: 'Discovery',        desc: 'We audit your current spend and channels, define your target audience, and set clear targets for cost per lead and return on ad spend.' },
  { num: '02', Icon: LuWrench, title: 'Build',             desc: 'Campaign structure, creative, and tracking set up across the platforms that fit your business, before a single rand goes live.' },
  { num: '03', Icon: LuRocket, title: 'Launch & Optimise', desc: 'We manage spend day to day, test creative and targeting, and report on results monthly, not just clicks and impressions.' },
]

export default function PaidAdvertisingPage() {
  return (
    <div className="font-sans overflow-x-hidden">
      <PageSEO
        title="Paid Advertising & Lead Generation | Flowbit"
        description="Google, Facebook, Instagram and TikTok ads managed by Flowbit, built to turn ad spend into booked revenue, not just clicks."
        path="/services/paid-advertising"
      />
      <Navbar />

      <ServiceHero
        eyebrow="Paid Advertising & Lead Generation"
        title={<>Ad spend that turns into <span className="text-accent-text">booked revenue.</span></>}
        subtitle="Campaigns built and actively managed by one team, so every rand you spend is tracked back to cost per lead and actual return, not just clicks." // TODO: confirm exact platform list to advertise (Google/Meta/TikTok/LinkedIn?)
      />

      {/* Funnel / cost-per-lead visualization */}
      <section className="section-light py-20">
        <div className="max-w-[1060px] mx-auto px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag on-light mx-auto">Where Your Spend Goes</div>
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mt-5 mb-3">
              Tracked from{' '}
              <span className="text-accent-text">click to booking.</span>
            </h2>
            <p className="text-ink-muted text-[15px] max-w-[560px] mx-auto leading-relaxed">
              No set-and-forget campaigns. Every account is actively managed and tied back to real numbers, not vanity metrics.
            </p>
          </motion.div>

          <FunnelChart />
        </div>
      </section>

      {/* Cross-sell: connect ad leads to AI Automation */}
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
              <p className="text-ink font-bold text-base mb-1.5">The click is only half the job.</p>
              <p className="text-ink-muted text-sm leading-relaxed max-w-[560px]">
                A great ad still loses the sale if the lead sits unanswered for hours. Pair your campaigns with our{' '}
                <a href="/services/ai-automation" className="text-accent-text no-underline hover:underline">AI Automation</a>{' '}
                so every enquiry gets an instant reply and a booked slot on your calendar, automatically.
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
        titleStart="From audit to"
        titleAccent="ads that actually perform"
        subtitle="We don't hand you a dashboard and disappear. Every campaign is actively managed and reported on."
        steps={STEPS}
      />

      <CTABanner
        eyebrow="Free Ad Account Audit"
        titleStart="Your ad spend"
        titleAccent="deserves a return."
        subtitle="Book a free 30-minute audit and we'll show you exactly where your ad spend is leaking, and what a properly run account could do instead." // TODO: confirm audit scope/guarantee language with Charl
      />

      <Contact defaultService="Paid Advertising & Lead Generation" />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
