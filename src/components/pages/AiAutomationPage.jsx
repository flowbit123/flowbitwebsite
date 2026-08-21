import { motion } from 'framer-motion'
import ParticleBackground from '../ParticleBackground'
import AmbientGlow        from '../AmbientGlow'
import Navbar             from '../Navbar'
import PricingSlider      from '../PricingSlider'
import Process            from '../Process'
import WhatsApp           from '../WhatsApp'
import CaseStudy          from '../CaseStudy'
import FAQ                from '../FAQ'
import CTABanner          from '../CTABanner'
import Contact            from '../Contact'
import Footer             from '../Footer'
import WhatsAppButton     from '../WhatsAppButton'
import PageSEO         from '../PageSEO'

export default function AiAutomationPage() {
  return (
    <div className="bg-bg-primary text-white font-sans overflow-x-hidden">
      <PageSEO
        title="AI Automation | Flowbit"
        description="Lead qualification, booking automation, and a full AI receptionist across WhatsApp, Instagram and web chat. Custom-built AI systems that never miss a lead."
        path="/services/ai-automation"
      />
      <ParticleBackground />
      <AmbientGlow />
      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-[140px] pb-16 overflow-hidden bg-transparent">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.07) 0%, transparent 65%)' }}
          />
          <div className="relative z-10 max-w-[760px] mx-auto px-6 text-center">
            <motion.div
              className="section-tag mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              AI Automation
            </motion.div>
            <motion.h1
              className="text-[clamp(30px,5vw,52px)] font-black leading-[1.05] tracking-tight mt-5 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              One assistant. <span className="text-accent-text">Every channel. Never off.</span>
            </motion.h1>
            <motion.p
              className="text-muted text-[16px] leading-relaxed max-w-[560px] mx-auto mb-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Lead qualification, booking automation, and a full AI receptionist, all custom built for your
              business and running across WhatsApp, Instagram, SMS and your website. Pick the level of
              automation that fits, upgrade any time.
            </motion.p>
            <motion.div
              className="flex items-center justify-center gap-3 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#contact" className="btn-primary">Book a Free Audit →</a>
              <a href="#process" className="btn-ghost">See How It Works</a>
            </motion.div>
          </div>
        </section>

        {/* Consolidated: Lead Qualification Bot / Booking Automation / Full AI Receptionist */}
        <section id="ai-tiers" className="py-10">
          <div className="max-w-[1060px] mx-auto px-6">
            <motion.div
              className="mb-14"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag">What We Build</div>
              <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
                Three levels of automation,{' '}
                <span className="text-accent-text">one system underneath.</span>
              </h2>
              <p className="text-muted text-[15px] max-w-[520px] leading-relaxed">
                Every solution is custom coded for your exact workflow. No templates. No one size fits all. Just automation that actually works.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <PricingSlider />
            </motion.div>
          </div>
        </section>

        <Process />
        <WhatsApp />
        <CaseStudy />
        <FAQ />
        <CTABanner />
        <Contact defaultService="AI Automation" />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}
