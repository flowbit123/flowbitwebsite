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
import PageSEO            from '../PageSEO'

// TODO: All copy below is placeholder — confirm which platforms are
// actually covered (Instagram/Facebook/TikTok/LinkedIn?), posting
// frequency, whether content is filmed/designed in-house or client-supplied,
// and pricing before this page goes live.
const FEATURES = [
  'Content calendar planned around your business goals, not just trends',
  'Done-for-you content creation and posting', // TODO: confirm if content is filmed/designed by Flowbit or requires client footage/assets
  "Consistent brand voice across every platform you're active on",
  'Community management, replies and engagement handled for you',
  'Monthly performance reporting on reach, engagement and growth',
  'Platforms covered: Instagram, Facebook, TikTok', // TODO: confirm exact platform list
]

const STEPS = [
  { num: '01', icon: '🔍', title: 'Discovery',          desc: 'We audit your current brand voice, audience, and content pillars to define what should actually be posted.' },
  { num: '02', icon: '🛠️', title: 'Build',               desc: 'A content calendar and creative production pipeline set up around your goals and platforms.' },
  { num: '03', icon: '🚀', title: 'Publish & Optimise',  desc: 'Consistent posting and engagement, with monthly reporting so you can see what is actually working.' },
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
          title={<>Consistent content, <span className="text-accent-text">zero effort from you.</span></>}
          subtitle="Done-for-you content and posting so your brand shows up consistently, without it becoming another thing on your to-do list."
        />

        <ServiceFeatureList
          tag="What's Included"
          title="Content handled end to end,"
          titleAccent="so you don't have to."
          subtitle="From planning to posting to reporting, we run the full content engine for your brand."
          features={FEATURES}
        />

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
