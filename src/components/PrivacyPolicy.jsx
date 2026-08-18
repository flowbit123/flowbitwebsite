import WhatsAppButton from './WhatsAppButton'

const SECTIONS = [
  {
    title: 'Who we are',
    body: (
      <>
        <p>
          Flowbit is a business automation agency based in Centurion, South Africa. We build custom
          WhatsApp lead qualification and booking systems for businesses. If you have any questions
          about this policy or your data, contact us at{' '}
          <a href="mailto:charl@flowbit.co.za" className="text-accent-text no-underline hover:underline">
            charl@flowbit.co.za
          </a>.
        </p>
      </>
    ),
  },
  {
    title: 'What personal data we collect',
    body: (
      <>
        <p>We collect:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
          <li>Your name</li>
          <li>Your phone number</li>
          <li>Your email address</li>
          <li>The content of your WhatsApp conversations with our bot</li>
        </ul>
        <p className="mt-3">
          We only collect this when you message us on WhatsApp (whether that's by clicking an ad,
          messaging us from our website, or contacting us directly) or when you fill out the contact
          form on flowbit.co.za.
        </p>
      </>
    ),
  },
  {
    title: 'Why we collect it',
    body: (
      <p>
        We use your data to qualify your enquiry, answer your questions about our services, and book
        a free automation audit call on our calendar. That's it, we don't use it for anything beyond
        running our business relationship with you.
      </p>
    ),
  },
  {
    title: 'Third-party services we use',
    body: (
      <>
        <p>To run our WhatsApp automation, your data passes through a small number of trusted services:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-2">
          <li><strong className="text-white">Meta / WhatsApp Business Platform</strong> — to send and receive your WhatsApp messages</li>
          <li><strong className="text-white">Anthropic (Claude AI)</strong> — to generate the conversational replies our bot sends you</li>
          <li><strong className="text-white">Google (Sheets and Calendar)</strong> — to keep a record of leads and conversations, and to manage bookings</li>
          <li><strong className="text-white">Railway</strong> — hosts our database (PostgreSQL), which is the primary storage for this data</li>
          <li><strong className="text-white">Resend</strong> — sends transactional emails, for example internal notifications when a new lead comes in</li>
        </ul>
        <p className="mt-3">
          Each of these providers only receives the data needed for them to do their specific job, none of them
          are given access beyond what's necessary to run our service.
        </p>
      </>
    ),
  },
  {
    title: 'Data retention',
    body: (
      <p>
        We keep your data for as long as needed to manage our business relationship with you. If you'd
        like your data deleted at any time, just email us at{' '}
        <a href="mailto:charl@flowbit.co.za" className="text-accent-text no-underline hover:underline">
          charl@flowbit.co.za
        </a>{' '}
        and we'll take care of it.
      </p>
    ),
  },
  {
    title: 'Your rights under POPIA',
    body: (
      <p>
        As a South African business, we comply with the Protection of Personal Information Act
        (POPIA). This means you have the right to access the personal data we hold about you, request
        that we correct it if it's wrong, or ask us to delete it entirely. To exercise any of these
        rights, email{' '}
        <a href="mailto:charl@flowbit.co.za" className="text-accent-text no-underline hover:underline">
          charl@flowbit.co.za
        </a>.
      </p>
    ),
  },
  {
    title: 'We don’t sell your data',
    body: (
      <p>
        We never sell your personal data to third parties. The only places your data goes are the
        service providers listed above, and only because they're part of how our automation actually works.
      </p>
    ),
  },
  {
    title: 'Security',
    body: (
      <p>
        We use reasonable technical measures to keep your data safe, including encrypted storage and
        access-controlled services. No system is 100% risk-free, but we take reasonable steps to
        protect your information at every point it passes through our systems.
      </p>
    ),
  },
]

export default function PrivacyPolicy() {
  const effectiveDate = new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="bg-bg-primary text-white font-sans min-h-screen">
      {/* Simple header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/[0.07] bg-bg-primary/90"
      >
        <div className="flex items-center justify-between h-[68px] max-w-[1060px] mx-auto px-6">
          <a href="/" className="flex items-center no-underline select-none">
            <img src="/flowbit-logo.png" alt="Flowbit" className="h-14 w-auto" />
          </a>
          <a href="/" className="btn-ghost" style={{ padding: '10px 20px', fontSize: '14px' }}>
            ← Back to home
          </a>
        </div>
      </header>

      <main className="pt-[68px]">
        <div className="max-w-[720px] mx-auto px-6 py-16">
          <div className="section-tag">Legal</div>
          <h1 className="text-[clamp(30px,5vw,44px)] font-extrabold leading-tight tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm mb-14">Effective date: {effectiveDate}</p>

          <div className="flex flex-col gap-10">
            {SECTIONS.map(section => (
              <section key={section.title}>
                <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                <div className="text-white/70 text-[15px] leading-relaxed">{section.body}</div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-[1060px] mx-auto px-6 py-8 text-center">
          <p className="text-muted text-xs">© 2025 Flowbit. All rights reserved.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}
