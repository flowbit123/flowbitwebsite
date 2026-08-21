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

// TODO: All copy below is placeholder — confirm whether link building is
// included, typical timeline to see ranking movement, tools used for
// tracking/reporting, and pricing before this page goes live.
const FEATURES = [
  'Full technical SEO audit and fixes across your site',
  'Keyword research and a content strategy built around real search intent',
  'On-page optimization across every page that matters',
  'Local SEO and Google Business Profile optimization', // TODO: confirm if local SEO is included by default or an add-on
  'Monthly rank tracking and reporting',
  'Link building', // TODO: confirm if link building is included, and if so, what approach
]

const STEPS = [
  { num: '01', icon: '🔍', title: 'Discovery',      desc: 'A full technical and content audit, keyword research, and a look at where competitors are beating you.' },
  { num: '02', icon: '🛠️', title: 'Build',           desc: 'On-page fixes, a content plan, and technical SEO implementation across your site.' },
  { num: '03', icon: '🚀', title: 'Grow & Report',   desc: 'Ongoing content and optimization work, with monthly rank tracking and reporting so you can see real movement.' },
]

export default function SeoPage() {
  return (
    <div className="bg-bg-primary text-white font-sans overflow-x-hidden">
      <PageSEO
        title="SEO & Google Visibility | Flowbit"
        description="Flowbit builds and runs SEO strategy to get your business found on Google by the people already searching for what you do."
        path="/services/seo"
      />
      <ParticleBackground />
      <AmbientGlow />
      <div className="relative z-10">
        <Navbar />

        <ServiceHero
          eyebrow="SEO & Google Visibility"
          title={<>Get found by people <span className="text-accent-text">already searching for you.</span></>}
          subtitle="Technical SEO, content, and on-page optimization built to get your business ranking for the searches that actually turn into customers."
        />

        <ServiceFeatureList
          tag="What's Included"
          title="SEO handled properly,"
          titleAccent="not just a checklist."
          subtitle="No generic keyword stuffing. Every recommendation is based on your actual site, audience, and competitors."
          features={FEATURES}
        />

        <Process
          tag="How We Work"
          titleStart="From audit to"
          titleAccent="ranking movement"
          subtitle="SEO is a compounding effort. We stay hands-on and report on real movement every month." // TODO: confirm realistic timeline language before launch (SEO results are slow, avoid overpromising)
          steps={STEPS}
        />

        <CTABanner
          eyebrow="Free SEO Audit"
          titleStart="Ready to get"
          titleAccent="found on Google?"
          subtitle="Book a free 30-minute audit and we'll show you exactly where your site is losing visibility, and what to fix first." // TODO: confirm audit scope with Charl
        />

        <Contact defaultService="SEO & Google Visibility" />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}
