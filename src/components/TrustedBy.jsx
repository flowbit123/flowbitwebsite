const INDUSTRIES = [
  'Fitness Studios',
  'Med Spas',
  'Nail Studios',
  'Barbershops',
  'Wellness Centres',
  'Gyms',
  'Real Estate Agencies',
  'E-commerce Stores',
  'Dental Practices',
  'Hospitality Businesses',
  'Roofing Businesses',
  'Solar Companies',
  'Plumbing Companies',
  'Construction Companies',
]

export default function TrustedBy() {
  const items = [...INDUSTRIES, ...INDUSTRIES]

  return (
    <div
      className="py-5 overflow-hidden"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: 'ticker 28s linear infinite' }}
      >
        {items.map((label, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm font-medium px-6"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
            {label}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
