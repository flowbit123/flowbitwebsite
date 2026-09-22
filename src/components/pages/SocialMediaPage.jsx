import { motion } from 'framer-motion'
import { LuSearch, LuWrench, LuRocket } from 'react-icons/lu'
import Navbar                from '../Navbar'
import ServiceHero          from '../ServiceHero'
import ContentCalendar      from '../ContentCalendar'
import Process               from '../Process'
import CTABanner             from '../CTABanner'
import Contact                from '../Contact'
import Footer                 from '../Footer'
import WhatsAppButton        from '../WhatsAppButton'
import PageSEO                from '../PageSEO'

// TODO: All copy below is placeholder — confirm which platforms are
// actually covered (Instagram/Facebook/TikTok/LinkedIn?), posting
// frequency, whether content is filmed/designed in-house or client-supplied,
// and pricing before this page goes live.
const STEPS = [
  { num: '01', Icon: LuSearch, title: 'Discovery',          desc: 'We audit your current brand voice, audience, and content pillars to define what should actually be posted and why.' },
  { num: '02', Icon: LuWrench, title: 'Build',               desc: 'A content calendar and creative production pipeline set up around your goals and the platforms that matter for your business.' },
  { num: '03', Icon: LuRocket, title: 'Publish & Optimise',  desc: 'Consistent posting and engagement, with monthly reporting so you can see what is actually driving growth.' },
]

export default function SocialMediaPage() {
  return (
    <div className="font-sans overflow-x-hidden">
      <PageSEO
        title="Social Media Management | Flowbit"
        description="Done-for-you social media content and posting from Flowbit, so your brand shows up consistently without you lifting a finger."
        path="/services/social-media"
      />
      <Navbar />

      <ServiceHero
        eyebrow="Social Media Management"
        title={<>Consistent content, <span className="text-accent-text">without it becoming your job.</span></>}
        subtitle="Done-for-you content, posting, and engagement, so your brand shows up every week without it eating into time you don't have."
      />

      {/* Content calendar mockup */}
      <section className="section-light py-20">
        <div className="max-w-[1060px] mx-auto px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag on-light mx-auto">The Full Content Engine</div>
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mt-5 mb-3">
              Planned, produced,{' '}
              <span className="text-accent-text">and posted for you.</span>
            </h2>
            <p className="text-ink-muted text-[15px] max-w-[560px] mx-auto leading-relaxed">
              From planning to posting to reporting, one team handles the content so you don't have to think about it.
            </p>
          </motion.div>

          <ContentCalendar />
        </div>
      </section>

      {/* Cross-sell: connect DMs/enquiries to AI Automation */}
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
              <p className="text-ink font-bold text-base mb-1.5">Good content brings the DMs. What happens next matters more.</p>
              <p className="text-ink-muted text-sm leading-relaxed max-w-[560px]">
                A post that gets people messaging you is only worth it if someone actually answers. Our{' '}
                <a href="/services/ai-automation" className="text-accent-text no-underline hover:underline">AI Automation</a>{' '}
                can reply to Instagram and Facebook DMs instantly, qualify the enquiry, and book it straight into your calendar.
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
        titleStart="From blank calendar to"
        titleAccent="consistent posting"
        subtitle="No generic content mills. Every post is planned around your brand and your actual audience."
        steps={STEPS}
      />

      <CTABanner
        eyebrow="Free Content Audit"
        titleStart="Consistency compounds."
        titleAccent="Inconsistency doesn't."
        subtitle="Book a free 30-minute audit and we'll show you exactly what's missing from your current content, and what consistent posting could do for your brand." // TODO: confirm audit scope with Charl
      />

      <Contact defaultService="Social Media Management" />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
