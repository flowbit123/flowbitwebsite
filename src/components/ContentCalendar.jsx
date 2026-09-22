import { motion } from 'framer-motion'
import { LuPackage, LuVideo, LuMessageCircle, LuTrendingUp, LuStar, LuCalendarDays, LuImage, LuUsers } from 'react-icons/lu'

const POSTS = [
  { Icon: LuPackage,       label: 'Product Feature' },
  { Icon: LuVideo,         label: 'Behind the Scenes' },
  { Icon: LuStar,          label: 'Client Result' },
  { Icon: LuMessageCircle, label: 'Q&A / Reply' },
  { Icon: LuTrendingUp,    label: 'Promo Push' },
  { Icon: LuUsers,         label: 'Team Spotlight' },
  { Icon: LuImage,         label: 'Brand Photo' },
  { Icon: LuCalendarDays,  label: 'Weekly Recap' },
  { Icon: LuStar,          label: 'Testimonial' },
]

export default function ContentCalendar() {
  return (
    <div className="card-light">
      <div className="flex items-center gap-2 mb-6">
        <LuCalendarDays size={18} style={{ color: 'var(--accent)' }} />
        <p className="text-ink text-sm font-semibold">This month's content plan</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {POSTS.map((p, i) => (
          <motion.div
            key={i}
            className="aspect-square rounded-xl flex flex-col items-center justify-center gap-2 text-center px-2"
            style={{ background: 'rgba(43,58,103,0.06)', border: '1px solid var(--border-light)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <p.Icon size={20} style={{ color: 'var(--accent)' }} />
            <span className="text-[11px] font-medium text-ink-muted leading-tight">{p.label}</span>
          </motion.div>
        ))}
      </div>

      <p className="text-ink-muted text-xs mt-5 text-center">
        Illustrative content plan — real posts are scheduled around your brand and calendar
      </p>
    </div>
  )
}
