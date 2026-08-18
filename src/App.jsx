import ParticleBackground from './components/ParticleBackground'
import AmbientGlow        from './components/AmbientGlow'
import Navbar             from './components/Navbar'
import Hero               from './components/Hero'
import TrustedBy          from './components/TrustedBy'
import Services           from './components/Services'
import Process            from './components/Process'
import WhatsApp           from './components/WhatsApp'
import CaseStudy         from './components/CaseStudy'
import FAQ                from './components/FAQ'
import CTABanner          from './components/CTABanner'
import Contact            from './components/Contact'
import Footer             from './components/Footer'
import WhatsAppButton      from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="bg-bg-primary text-white font-sans overflow-x-hidden">
      <ParticleBackground />
      <AmbientGlow />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Services />
        <Process />
        <WhatsApp />
        <CaseStudy />
<FAQ />
        <CTABanner />
        <Contact />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}
