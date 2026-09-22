import Navbar             from './components/Navbar'
import Hero               from './components/Hero'
import TrustedBy          from './components/TrustedBy'
import Services           from './components/Services'
import Process            from './components/Process'
import WhatsApp           from './components/WhatsApp'
import Testimonials       from './components/Testimonials'
import CaseStudy          from './components/CaseStudy'
import FAQ                from './components/FAQ'
import CTABanner          from './components/CTABanner'
import Contact            from './components/Contact'
import Footer             from './components/Footer'
import WhatsAppButton     from './components/WhatsAppButton'
import PageSEO            from './components/PageSEO'

export default function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <PageSEO
        title="Flowbit — More Leads, More Bookings, Fully Automated"
        description="Flowbit helps businesses capture more leads, book more clients, and grow without lifting a finger. One team builds and runs your automation, start to finish."
        path="/"
      />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Process />
      <WhatsApp />
      <Testimonials />
      <CaseStudy />
      <FAQ />
      <CTABanner
        eyebrow="Free Audit, No Commitment"
        titleStart="More Leads Don't Help If"
        titleAccent="Nobody Answers Them."
        subtitle="Book a free 30-minute audit — we'll show you where leads are slipping through, and what automating the follow-up could be worth."
      />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
