import { lazy, Suspense } from 'react'
import ParticleBackground from './components/ParticleBackground'
import AmbientGlow        from './components/AmbientGlow'
import Navbar             from './components/Navbar'
import Hero               from './components/Hero'

// Below-the-fold sections loaded lazily
const TrustedBy    = lazy(() => import('./components/TrustedBy'))
const Services     = lazy(() => import('./components/Services'))
const Process      = lazy(() => import('./components/Process'))
const WhatsApp     = lazy(() => import('./components/WhatsApp'))
const Integrations = lazy(() => import('./components/Integrations'))
const Pricing      = lazy(() => import('./components/Pricing'))
const FAQ          = lazy(() => import('./components/FAQ'))
const CTABanner    = lazy(() => import('./components/CTABanner'))
const Contact      = lazy(() => import('./components/Contact'))
const Footer       = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <div className="bg-bg-primary text-white font-sans overflow-x-hidden">
      <ParticleBackground />
      <AmbientGlow />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Suspense fallback={null}>
          <TrustedBy />
          <Services />
          <Process />
          <WhatsApp />
          <Integrations />
          <Pricing />
          <FAQ />
          <CTABanner />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}
