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

// TODO: All copy below is placeholder — confirm tech stack details worth
// naming publicly, turnaround time, pricing/retainer, and whether hosting
// is included before this page goes live.
const FEATURES = [
  'Custom-coded site or funnel, no bloated page-builder templates',
  'Mobile-first design built for speed and conversion, not just looks',
  'Integrated with your CRM, calendar, and automation systems from day one',
  'Clear conversion paths on every page, not just pretty design',
  'SEO-friendly foundation built in from the first line of code',
  'Ongoing hosting, updates, and support included', // TODO: confirm what's actually included in the retainer vs one-off build fee
]

const STEPS = [
  { num: '01', icon: '🔍', title: 'Discovery',        desc: 'We map your conversion goal, content, and brand requirements before writing a single line of code.' },
  { num: '02', icon: '🛠️', title: 'Build',             desc: 'A custom-coded site or funnel, mobile-optimised and connected to the tools you already use.' },
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
          title={<>Sites and funnels built to <span className="text-accent-text">convert.</span></>}
          subtitle="A custom-coded website or landing page designed around one goal: turning visitors into booked calls and paying customers, not just looking nice."
        />

        <ServiceFeatureList
          tag="What's Included"
          title="A site built to do a job,"
          titleAccent="not just sit there."
          subtitle="Every page is custom coded around your offer, your audience, and how they actually browse."
          features={FEATURES}
        />

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
