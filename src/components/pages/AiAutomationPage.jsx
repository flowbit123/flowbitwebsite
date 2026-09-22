import { motion } from 'framer-motion'
import Navbar             from '../Navbar'
import ServiceHero        from '../ServiceHero'
import PricingSlider      from '../PricingSlider'
import WhatsApp           from '../WhatsApp'
import FAQ                from '../FAQ'
import CTABanner          from '../CTABanner'
import Contact            from '../Contact'
import Footer             from '../Footer'
import WhatsAppButton     from '../WhatsAppButton'
import PageSEO         from '../PageSEO'

export default function AiAutomationPage() {
  return (
    <div className="font-sans overflow-x-hidden">
      <PageSEO
        title="AI Automation | Flowbit"
        description="Lead qualification, booking automation, and a full AI receptionist across WhatsApp, Instagram and web chat. Custom-built AI systems that never miss a lead."
        path="/services/ai-automation"
      />
      <Navbar />

      <ServiceHero
        eyebrow="AI Automation"
        title={<>One assistant. <span className="text-accent-text">Every channel. Never off.</span></>}
        subtitle="Lead qualification, booking automation, and a full AI receptionist, all custom built for your business and running across WhatsApp, Instagram, SMS and your website. Pick the level of automation that fits, upgrade any time."
      />

      {/* Three-tier breakdown */}
      <section id="ai-tiers" className="section-light py-20">
        <div className="max-w-[1060px] mx-auto px-6">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag on-light">What We Build</div>
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
              Three levels of automation,{' '}
              <span className="text-accent-text">one system underneath.</span>
            </h2>
            <p className="text-ink-muted text-[15px] max-w-[520px] leading-relaxed">
              Every solution is custom coded for your exact workflow. No templates. No one size fits all. Just automation that actually works.
            </p>
          </motion.div>

          <PricingSlider />
        </div>
      </section>

      <WhatsApp />
      <FAQ />

      <CTABanner
        eyebrow="Free Audit, No Commitment"
        titleStart="Your customers are messaging"
        titleAccent="right now."
        subtitle="Book a free 30-minute audit and we'll map out exactly which tier fits your business, and the ROI you can expect."
      />
      <Contact defaultService="AI Automation" />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
