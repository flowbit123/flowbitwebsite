import { motion } from 'framer-motion'
import {
  SiWhatsapp,
  SiGooglecalendar,
  SiGooglesheets,
  SiGmail,
  SiHubspot,
  SiZapier,
  SiSlack,
  SiNotion,
} from 'react-icons/si'

const INTEGRATIONS = [
  { Icon: SiWhatsapp,       name: 'WhatsApp',        color: '#25D366' },
  { Icon: SiGooglecalendar, name: 'Google Calendar',  color: '#4285F4' },
  { Icon: SiGooglesheets,   name: 'Google Sheets',    color: '#34A853' },
  { Icon: SiGmail,          name: 'Gmail',            color: '#EA4335' },
  { Icon: SiHubspot,        name: 'HubSpot',          color: '#FF7A59' },
  { Icon: SiZapier,         name: 'Zapier',           color: '#FF4A00' },
  { Icon: SiSlack,          name: 'Slack',            color: '#4A154B' },
  { Icon: SiNotion,         name: 'Notion',           color: '#ffffff' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="py-20">
      <div className="max-w-[1060px] mx-auto px-6">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>Integrations</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
            Works With Your <span className="text-accent-text">Existing Tools</span>
          </h2>
          <p className="text-muted text-[15px] max-w-[520px] mx-auto leading-relaxed">
            No need to change how you work. We plug into the tools you already use and make them work together automatically.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INTEGRATIONS.map(({ Icon, name, color }, i) => (
            <motion.div
              key={name}
              className="group flex flex-col items-center gap-3 py-7 px-5 rounded-xl cursor-default transition-all duration-[250ms]"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{
                borderColor: color,
                y: -4,
                boxShadow: `0 12px 40px ${color}22`,
              }}
            >
              {/* Icon circle with brand colour on hover */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-[250ms]"
                style={{ background: `${color}18`, border: `1px solid ${color}33` }}
              >
                <Icon size={26} color={color} />
              </div>
              <span className="text-xs font-semibold text-muted text-center leading-snug">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
