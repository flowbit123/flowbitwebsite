import { useState } from 'react'
import { motion } from 'framer-motion'

// Sign up free at https://formspree.io → create a form → paste your form ID here
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvznabqq'

const SERVICES = [
  'Lead Qualification Bot',
  'Booking Automation',
  'Outbound Sales Agent',
  'Full AI Receptionist',
  'Not sure yet',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1060px] mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag mx-auto mb-5">Get In Touch</div>
          <h2 className="text-[clamp(28px,4vw,46px)] font-extrabold leading-tight tracking-tight mb-4">
            Let's Build Something{' '}
            <span className="text-accent-text">That Works For You</span>
          </h2>
          <p className="text-muted text-[15px] max-w-[500px] mx-auto leading-relaxed">
            Tell us about your business and we'll map out exactly what to automate, free, no commitment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-white/60">Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                  className="contact-input"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-white/60">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@company.com"
                  className="contact-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-white/60">I'm interested in</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="contact-input"
              >
                <option value="">Select a service…</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-white/60">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us what's taking up your time. The more detail the better."
                className="contact-input resize-none"
              />
            </div>

            {status === 'success' && (
              <div
                className="rounded-xl px-5 py-4 text-sm font-medium"
                style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80' }}
              >
                Message sent! We'll be in touch within 24 hours.
              </div>
            )}

            {status === 'error' && (
              <div
                className="rounded-xl px-5 py-4 text-sm font-medium"
                style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}
              >
                Something went wrong. Email us directly at{' '}
                <a href="mailto:charl@flowbit.co.za" className="underline">charl@flowbit.co.za</a>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary self-start"
              style={{ fontSize: '15px', padding: '13px 32px', opacity: status === 'loading' ? 0.7 : 1 }}
            >
              {status === 'loading' ? 'Sending…' : 'Send Message →'}
            </button>
          </motion.form>

          {/* Side info */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              {
                icon: '📧',
                label: 'Email',
                value: 'charl@flowbit.co.za',
                href: 'mailto:charl@flowbit.co.za',
              },
              {
                icon: '⚡',
                label: 'Response time',
                value: 'Within 24 hours',
                href: null,
              },
              {
                icon: '🌍',
                label: 'We work with',
                value: 'Businesses worldwide',
                href: null,
              },
            ].map(item => (
              <div
                key={item.label}
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
              >
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-1">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="text-white text-sm font-medium hover:text-accent transition-colors no-underline">{item.value}</a>
                    : <p className="text-white text-sm font-medium">{item.value}</p>
                  }
                </div>
              </div>
            ))}

            <div
              className="rounded-2xl p-6 mt-1"
              style={{ background: 'var(--bg3)', border: '1px solid rgba(123,175,196,0.2)' }}
            >
              <p className="text-accent-text font-semibold text-sm mb-2">Free Automation Audit</p>
              <p className="text-muted text-sm leading-relaxed">
                Not sure where to start? Fill in the form and we'll send you a custom automation plan, no obligation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
