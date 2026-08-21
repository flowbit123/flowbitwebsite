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

// TODO: All copy below is placeholder — confirm which platforms are
// actually covered (Instagram/Facebook/TikTok/LinkedIn?), posting
// frequency, whether content is filmed/designed in-house or client-supplied,
// and pricing before this page goes live.
const FEATURES = [
  'Content calendar planned around your business goals, not just what\'s trending this week',
  'Done-for-you content creation and posting', // TODO: confirm if content is filmed/designed by Flowbit or requires client footage/assets
  "A consistent brand voice across every platform you're active on",
  "Community management, so replies and DMs don't sit unanswered for days",
  'Every DM asking about pricing or booking can be picked up instantly by our AI Automation instead of going cold overnight',
  'Monthly performance reporting on reach, engagement, and growth',
]

const STEPS = [
  { num: '01', icon: '🔍', title: 'Discovery',          desc: 'We audit your current brand voice, audience, and content pillars to define what should actually be posted and why.' },
  { num: '02', icon: '🛠️', title: 'Build',               desc: 'A content calendar and creative production pipeline set up around your goals and the platforms that matter for your business.' },
  { num: '03', icon: '🚀', title: 'Publish & Optimise',  desc: 'Consistent posting and engagement, with monthly reporting so you can see what is actually driving growth.' },
]

export default function SocialMediaPage() {
  return (
    <div className="bg-bg-primary text-white font-sans overflow-x-hidden">
      <PageSEO
        title="Social Media Management | Flowbit"
        description="Done-for-you social media content and posting from Flowbit, so your brand shows up consistently without you lifting a finger."
        path="/services/social-media"
      />
      <ParticleBackground />
      <AmbientGlow />
      <div className="relative z-10">
        <Navbar />

        <ServiceHero
          eyebrow="Social Media Management"
          title={<>Consistent content, <span className="text-accent-text">without it becoming your job.</span></>}
          subtitle="Done-for-you content, posting, and engagement, so your brand shows up every week without it eating into time you don't have."
        />

        <ServiceFeatureList
          tag="What's Included"
          title="The full content engine,"
          titleAccent="run for you."
          subtitle="From planning to posting to reporting, one team handles the content so you don't have to think about it."
          features={FEATURES}
        />

        {/* Cross-sell: connect DMs/enquiries to AI Automation */}
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
                <p className="text-white font-bold text-base mb-1.5">Good content brings the DMs. What happens next matters more.</p>
                <p className="text-muted text-sm leading-relaxed max-w-[560px]">
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
          titleStart="Ready to stop"
          titleAccent="posting inconsistently?"
          subtitle="Book a free 30-minute audit and we'll show you exactly what's missing from your current content, and what consistent posting could do for your brand." // TODO: confirm audit scope with Charl
        />

        <Contact defaultService="Social Media Management" />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}
