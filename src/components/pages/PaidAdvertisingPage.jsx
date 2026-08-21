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

// TODO: All copy below is placeholder — confirm exact platforms run, real
// results/case studies, minimum ad spend, and pricing/retainer structure
// before this page goes live.
const FEATURES = [
  'Full-funnel campaign strategy across Google, Meta, and TikTok',
  'Conversion tracking and pixel/tag setup done right from day one',
  'Creative testing to find what actually converts, not just what looks good',
  'Weekly optimization based on real performance data, not guesswork',
  'Monthly reporting tied to revenue and cost per lead, not just clicks',
  'Landing pages and offers built to match ad intent so traffic actually converts', // TODO: confirm if landing pages are bundled or a separate add-on
]

const STEPS = [
  { num: '01', icon: '🔍', title: 'Discovery',          desc: 'We audit your current spend and channels, define your target audience, and set clear goals for cost per lead and return on ad spend.' },
  { num: '02', icon: '🛠️', title: 'Build',               desc: 'Campaign structure, creative, and tracking set up across the platforms that fit your business, before a single rand is spent.' },
  { num: '03', icon: '🚀', title: 'Launch & Optimise',   desc: 'We manage spend day to day, test creative and targeting, and send you monthly reporting tied to results, not vanity metrics.' },
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
          title={<>Ads that turn budget into <span className="text-accent-text">booked revenue.</span></>}
          subtitle="Google, Facebook, Instagram and TikTok campaigns built, managed, and optimised by one team, so your ad spend actually turns into paying customers." // TODO: confirm exact platform list to advertise (Google/Meta/TikTok/LinkedIn?)
        />

        <ServiceFeatureList
          tag="What's Included"
          title="Everything your campaigns need,"
          titleAccent="under one roof."
          subtitle="No templated funnels. Every campaign is built and managed around your specific offer and audience."
          features={FEATURES}
        />

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
