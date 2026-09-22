import { motion } from 'framer-motion'

const FUNNEL = [
  { label: 'Ad Spend', value: 100, sub: 'R25,000 / mo' },
  { label: 'Clicks',   value: 68,  sub: '1,240 clicks' },
  { label: 'Leads',    value: 34,  sub: '210 leads' },
  { label: 'Booked',   value: 16,  sub: '96 booked' },
]

const CPL_TREND = [42, 39, 34, 31, 27, 22]

function DesktopFunnel() {
  const maxW = 100
  return (
    <div className="hidden sm:flex flex-col gap-3">
      {FUNNEL.map((stage, i) => {
        const width = maxW - (maxW - stage.value) * 0
        return (
          <div key={stage.label} className="flex items-center gap-4">
            <div className="w-[92px] text-right flex-shrink-0">
              <p className="text-ink text-sm font-semibold">{stage.label}</p>
              <p className="text-ink-muted text-xs">{stage.sub}</p>
            </div>
            <div className="flex-1 h-9 rounded-lg overflow-hidden" style={{ background: 'rgba(20,30,50,0.06)' }}>
              <motion.div
                className="h-full rounded-lg flex items-center justify-end pr-3"
                style={{ background: `linear-gradient(90deg, var(--accent-h), var(--accent))` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${stage.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
              >
                <span className="text-white text-xs font-bold">{stage.value}%</span>
              </motion.div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function MobileFunnel() {
  return (
    <div className="flex sm:hidden flex-col gap-2.5">
      {FUNNEL.map((stage, i) => (
        <motion.div
          key={stage.label}
          className="w-full rounded-xl px-4 py-3 flex items-center justify-between"
          style={{
            background: `rgba(43,58,103,${0.06 + i * 0.06})`,
            border: '1px solid var(--border-light)',
          }}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <div>
            <p className="text-ink text-sm font-semibold">{stage.label}</p>
            <p className="text-ink-muted text-xs">{stage.sub}</p>
          </div>
          <span className="text-accent-text text-lg font-extrabold">{stage.value}%</span>
        </motion.div>
      ))}
    </div>
  )
}

function CplTrend() {
  const w = 320, h = 90, pad = 10
  const max = Math.max(...CPL_TREND), min = Math.min(...CPL_TREND)
  const points = CPL_TREND.map((v, i) => {
    const x = pad + (i / (CPL_TREND.length - 1)) * (w - pad * 2)
    const y = pad + (1 - (v - min) / (max - min)) * (h - pad * 2)
    return [x, y]
  })
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')
  const areaPath = `${path} L${points[points.length - 1][0]},${h - pad} L${points[0][0]},${h - pad} Z`

  return (
    <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--border-light)' }}>
      <p className="text-ink text-sm font-semibold mb-1">Cost per lead, trending down</p>
      <p className="text-ink-muted text-xs mb-4">Illustrative — actual numbers reported monthly per account</p>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-sm" style={{ height: h }}>
        <defs>
          <linearGradient id="cplFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#cplFill)" />
        <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={i === points.length - 1 ? 4 : 2.5} fill="var(--accent)" />
        ))}
      </svg>
    </div>
  )
}

export default function FunnelChart() {
  return (
    <div className="card-light">
      <DesktopFunnel />
      <MobileFunnel />
      <CplTrend />
    </div>
  )
}
