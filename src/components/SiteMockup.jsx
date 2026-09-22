import { motion } from 'framer-motion'
import { LuLayoutGrid, LuType, LuImage } from 'react-icons/lu'

// v1 placeholder — pass screenshotUrl to drop in a real site screenshot without
// restructuring this component.
function BrowserFrame({ screenshotUrl, url = 'yourbusiness.co.za' }) {
  return (
    <div
      className="rounded-2xl overflow-hidden w-full max-w-[560px]"
      style={{ background: 'var(--bg-light-2)', border: '1px solid var(--border-light)', boxShadow: '0 20px 60px rgba(16,25,46,0.1)' }}
    >
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'rgba(20,30,50,0.04)', borderBottom: '1px solid var(--border-light)' }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#E5645C' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#E5B85C' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#5CB85C' }} />
        <div className="flex-1 mx-3 rounded-md px-3 py-1 text-xs" style={{ background: 'var(--bg-light)', color: 'var(--ink-muted)' }}>
          {url}
        </div>
      </div>

      {screenshotUrl ? (
        <img src={screenshotUrl} alt="Site preview" className="w-full h-auto block" />
      ) : (
        <div className="p-5">
          <div className="rounded-lg h-24 mb-4 flex items-center justify-center" style={{ background: 'rgba(43,58,103,0.08)' }}>
            <LuImage size={26} style={{ color: 'var(--accent)' }} />
          </div>
          <div className="h-3 rounded-full w-2/3 mb-2.5" style={{ background: 'rgba(20,30,50,0.1)' }} />
          <div className="h-2.5 rounded-full w-full mb-2" style={{ background: 'rgba(20,30,50,0.06)' }} />
          <div className="h-2.5 rounded-full w-4/5 mb-4" style={{ background: 'rgba(20,30,50,0.06)' }} />
          <div className="h-8 rounded-full w-32" style={{ background: 'var(--accent)' }} />
        </div>
      )}
    </div>
  )
}

function PhoneFrame() {
  return (
    <div
      className="rounded-[28px] overflow-hidden w-[140px] flex-shrink-0"
      style={{ background: 'var(--bg-light-2)', border: '1px solid var(--border-light)', boxShadow: '0 20px 60px rgba(16,25,46,0.12)' }}
    >
      <div className="flex justify-center pt-2.5 pb-1.5">
        <div className="w-10 h-2 rounded-full" style={{ background: 'rgba(20,30,50,0.15)' }} />
      </div>
      <div className="px-3 pb-4">
        <div className="rounded-md h-14 mb-2.5 flex items-center justify-center" style={{ background: 'rgba(43,58,103,0.08)' }}>
          <LuLayoutGrid size={16} style={{ color: 'var(--accent)' }} />
        </div>
        <div className="h-2 rounded-full w-4/5 mb-1.5" style={{ background: 'rgba(20,30,50,0.1)' }} />
        <div className="h-1.5 rounded-full w-full mb-1" style={{ background: 'rgba(20,30,50,0.06)' }} />
        <div className="h-1.5 rounded-full w-3/5 mb-3" style={{ background: 'rgba(20,30,50,0.06)' }} />
        <div className="h-5 rounded-full w-full" style={{ background: 'var(--accent)' }} />
      </div>
    </div>
  )
}

export default function SiteMockup({ screenshotUrl, phoneOnly } = {}) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <BrowserFrame screenshotUrl={screenshotUrl} />
      <PhoneFrame />
    </motion.div>
  )
}

export function SiteMockupNote() {
  return (
    <p className="flex items-center gap-2 text-xs text-ink-muted justify-center mt-5">
      <LuType size={14} /> Placeholder preview — swap in a real project screenshot any time
    </p>
  )
}
