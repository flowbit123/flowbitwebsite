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

// TODO: All copy below is placeholder — confirm exact platforms run, real
// results/case studies, minimum ad spend, and pricing/retainer structure
// before this page goes live.
const FEATURES = [
  'Campaign strategy and structure built around your actual sales process, not a generic template',
  'Conversion tracking and pixel/tag setup done properly from day one, so every rand spent is measurable',
  'Creative testing across multiple angles to find what converts, not just what looks good',
  'Weekly optimization based on cost per lead and return on ad spend, not vanity metrics like reach',
  'Monthly reporting that ties spend directly to revenue',
  'Every lead your ads generate can be routed straight into your AI Automation system for an instant reply, so campaigns stop leaking leads after the click', // TODO: confirm platforms and whether landing pages are bundled or an add-on
]

const STEPS = [
  { num: '01', icon: '🔍', title: 'Discovery',        desc: 'We audit your current spend and channels, define your target audience, and set clear targets for cost per lead and return on ad spend.' },
  { num: '02', icon: '🛠️', title: 'Build',             desc: 'Campaign structure, creative, and tracking set up across the platforms that fit your business, before a single rand goes live.' },
  { num: '03', icon: '🚀', title: 'Launch & Optimise', desc: 'We manage spend day to day, test creative and targeting, and report on results monthly, not just clicks and impressions.' },
]

export default function PaidAdvertisingPage() {
  return (
    <div className="bg-bg-primary text-white font-sans overflow-x-hidden">
      <PageSEO
        title="Paid Advertising | Flowbit"
        description="Google, Facebook, Instagram and TikTok ads managed by Flowbit, built to turn ad spend into booked revenue, not just clicks."
        path="/services/paid-advertising"
      />
      <ParticleBackground />
      <AmbientGlow />
      <div className="relative z-10">
        <Navbar />

        <ServiceHero
          eyebrow="Paid Advertising"
          title={<>Ad spend that turns into <span className="text-accent-text">booked revenue.</span></>}
          subtitle="Campaigns built and actively managed by one team, so every rand you spend is tracked back to cost per lead and actual return, not just clicks." // TODO: confirm exact platform list to advertise (Google/Meta/TikTok/LinkedIn?)
        />

        <ServiceFeatureList
          tag="What's Included"
          title="Managed properly,"
          titleAccent="reported on honestly."
          subtitle="No set-and-forget campaigns. Every account is actively managed and tied back to real numbers."
          features={FEATURES}
        />

        {/* Cross-sell: connect ad leads to AI Automation */}
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
                <p className="text-white font-bold text-base mb-1.5">The click is only half the job.</p>
                <p className="text-muted text-sm leading-relaxed max-w-[560px]">
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
          titleStart="Ready to stop"
          titleAccent="wasting ad spend?"
          subtitle="Book a free 30-minute audit and we'll show you exactly where your ad spend is leaking, and what a properly run account could do instead." // TODO: confirm audit scope/guarantee language with Charl
        />

        <Contact defaultService="Paid Advertising" />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}
