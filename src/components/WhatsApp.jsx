import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiPhone, FiVideo, FiMoreVertical, FiSmile, FiMic } from 'react-icons/fi'
import { BsCheckAll } from 'react-icons/bs'
import { SiWhatsapp } from 'react-icons/si'

const TABS = {
  programmed: [
    { text: <><strong>Structured decision trees</strong> that guide customers through menus, bookings, and FAQs with zero human involvement</> },
    { text: <><strong>Predictable and reliable.</strong> Perfect for bookings, order status, support tickets, and lead capture forms</> },
    { text: <><strong>Fast to deploy.</strong> Built and live in days, not weeks</> },
  ],
  ai: [
    { text: <><strong>Claude API integration</strong> for human like, context aware responses that adapt to any question your customers ask</> },
    { text: <><strong>Trained on your business.</strong> Knows your products, pricing, policies, and tone of voice</> },
    { text: <><strong>Closes deals autonomously.</strong> Qualifies leads, overcomes objections, and books appointments without you</> },
  ],
}

const MESSAGES = [
  { type: 'received', text: "Hi! 👋 Thanks for reaching out. I'm the Flowbit assistant. How can I help you today?", time: '9:41 AM' },
  { type: 'sent',     text: "Hi, I'm interested in automating my client follow-ups. We're losing leads because we respond too slowly.", time: '9:42 AM' },
  { type: 'typing' },
  { type: 'received', text: "That's a very common problem, one we fix all the time! 🚀\n\nWith our automation, new enquiries get a personalised reply in under 60 seconds, 24/7.\n\nWould you like a free 30-min audit?", time: '9:42 AM' },
  { type: 'sent',     text: 'Yes, that sounds great!', time: '9:43 AM', read: true },
  { type: 'received', text: "Perfect! Here's my calendar, pick a time that works 👇\n\n📅 flowbit.co/book", time: '9:43 AM' },
]

function PhoneMockup() {
  return (
    /* ── Phone outer shell ── */
    <div style={{
      width: 340,
      background: '#1A1A1A',
      borderRadius: 40,
      padding: '8px 8px 12px',
      boxShadow: '0 0 0 1px #333, 0 0 0 2px #111, 0 40px 120px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)',
      position: 'relative',
      flexShrink: 0,
    }}>

      {/* Side buttons */}
      <div style={{ position:'absolute', left:-3, top:80, width:3, height:32, background:'#2a2a2a', borderRadius:'2px 0 0 2px' }} />
      <div style={{ position:'absolute', left:-3, top:122, width:3, height:32, background:'#2a2a2a', borderRadius:'2px 0 0 2px' }} />
      <div style={{ position:'absolute', right:-3, top:100, width:3, height:48, background:'#2a2a2a', borderRadius:'0 2px 2px 0' }} />

      {/* Screen */}
      <div style={{
        background: '#0D1418',
        borderRadius: 36,
        overflow: 'hidden',
        position: 'relative',
      }}>

        {/* Status bar */}
        <div style={{
          background: '#1F2C34',
          padding: '8px 18px 6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{ color: '#fff', fontSize: 12, fontWeight: 600 }}>9:41</span>
          {/* Dynamic island */}
          <div style={{
            width: 90, height: 26,
            background: '#000',
            borderRadius: 20,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <div style={{ width: 8, height: 8, background: '#1a1a1a', borderRadius: '50%', border: '1.5px solid #333' }} />
            <div style={{ width: 16, height: 16, background: '#1a1a1a', borderRadius: '50%', border: '1.5px solid #333' }} />
          </div>
          {/* Signal / battery */}
          <div style={{ display:'flex', alignItems:'center', gap:5 }}>
            <svg width="15" height="10" viewBox="0 0 15 10" fill="white" opacity="0.9">
              <rect x="0" y="6" width="3" height="4" rx="0.5"/>
              <rect x="4" y="4" width="3" height="6" rx="0.5"/>
              <rect x="8" y="2" width="3" height="8" rx="0.5"/>
              <rect x="12" y="0" width="3" height="10" rx="0.5"/>
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0.5" y="0.5" width="13" height="11" rx="2.5" stroke="white" strokeOpacity="0.5"/>
              <rect x="2" y="2" width="9" height="8" rx="1.5" fill="white"/>
              <rect x="14" y="4" width="2" height="4" rx="1" fill="white" fillOpacity="0.5"/>
            </svg>
          </div>
        </div>

        {/* WhatsApp header */}
        <div style={{
          background: '#1F2C34',
          padding: '6px 12px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <FiArrowLeft size={18} color="rgba(255,255,255,0.7)" style={{ flexShrink:0 }} />
          <div style={{
            width: 36, height: 36,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <SiWhatsapp size={18} color="#fff" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: '#fff', fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>Flowbit Assistant</p>
            <p style={{ color: '#25D366', fontSize: 10, lineHeight: 1.4 }}>online</p>
          </div>
          <div style={{ display:'flex', gap:14, color:'rgba(255,255,255,0.65)' }}>
            <FiVideo size={16} />
            <FiPhone size={16} />
            <FiMoreVertical size={16} />
          </div>
        </div>

        {/* Chat background + messages */}
        <div style={{
          background: '#0D1418',
          padding: '6px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          minHeight: 240,
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(37,211,102,0.02) 0%, transparent 70%)',
        }}>

          {/* Date separator */}
          <div style={{ display:'flex', justifyContent:'center', margin:'4px 0 6px' }}>
            <span style={{
              background: '#1F2C34',
              color: 'rgba(255,255,255,0.5)',
              fontSize: 10,
              padding: '3px 10px',
              borderRadius: 8,
            }}>Today</span>
          </div>

          {MESSAGES.map((msg, i) => {
            if (msg.type === 'typing') return (
              <div key={i} style={{ display:'flex', alignItems:'flex-end', gap:4 }}>
                <div style={{
                  background: '#1F2C34',
                  borderRadius: '12px 12px 12px 3px',
                  padding: '8px 12px',
                  display: 'flex', gap: 4, alignItems: 'center',
                }}>
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                </div>
              </div>
            )

            const isSent = msg.type === 'sent'
            return (
              <div key={i} style={{ display:'flex', justifyContent: isSent ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '78%',
                  background: isSent ? '#005C4B' : '#1F2C34',
                  borderRadius: isSent ? '12px 12px 3px 12px' : '12px 12px 12px 3px',
                  padding: '6px 9px 4px',
                  position: 'relative',
                }}>
                  <p style={{
                    color: '#E9EDEF',
                    fontSize: 11.5,
                    lineHeight: 1.45,
                    whiteSpace: 'pre-line',
                    margin: 0,
                  }}>{msg.text}</p>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', gap: 3, marginTop: 2 }}>
                    <span style={{ color:'rgba(255,255,255,0.45)', fontSize:9 }}>{msg.time}</span>
                    {isSent && (
                      <BsCheckAll size={13} color={msg.read ? '#53BDEB' : 'rgba(255,255,255,0.45)'} />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Input bar */}
        <div style={{
          background: '#1F2C34',
          padding: '6px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <FiSmile size={20} color="rgba(255,255,255,0.5)" style={{ flexShrink:0 }} />
          <div style={{
            flex: 1,
            background: '#2A3942',
            borderRadius: 20,
            padding: '7px 14px',
          }}>
            <span style={{ color:'rgba(255,255,255,0.3)', fontSize:12 }}>Message</span>
          </div>
          <FiMic size={20} color="rgba(255,255,255,0.5)" style={{ flexShrink:0 }} />
        </div>

        {/* Home bar */}
        <div style={{ background:'#1F2C34', padding:'8px 0 6px', display:'flex', justifyContent:'center' }}>
          <div style={{ width:80, height:4, background:'rgba(255,255,255,0.25)', borderRadius:2 }} />
        </div>

      </div>
    </div>
  )
}

export default function WhatsApp() {
  const [activeTab, setActiveTab] = useState('ai')

  return (
    <section id="whatsapp" className="py-20">
      <div className="max-w-[1060px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">WhatsApp Automation</div>
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight tracking-tight mb-3">
              Your Customers Text.{' '}
              <span className="text-accent-text">Flowbit Answers.</span>
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-7">
              Intelligently. Instantly. Around the clock. We build WhatsApp systems that feel like talking to your best salesperson, without the salary.
            </p>

            <div className="flex gap-2 flex-wrap mb-7">
              {[
                { key: 'ai',         label: 'AI-Powered Conversations' },
                { key: 'programmed', label: 'Pre-programmed Flows' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="px-4 py-2 rounded-full text-[13px] font-semibold cursor-pointer transition-all duration-[250ms] border"
                  style={{
                    background:  activeTab === tab.key ? 'var(--accent)' : 'var(--bg3)',
                    color:       activeTab === tab.key ? '#000'          : 'var(--muted)',
                    borderColor: activeTab === tab.key ? 'var(--accent)' : 'var(--border)',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4 mb-7">
              {TABS[activeTab].map((f, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div
                    className="w-[22px] h-[22px] rounded-md flex items-center justify-center flex-shrink-0 text-[13px] mt-0.5"
                    style={{ background: 'rgba(123,175,196,0.1)', border: '1px solid rgba(123,175,196,0.3)' }}
                  >
                    ✓
                  </div>
                  <p className="text-muted text-[15px] leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>

            <a href="#cta-banner" className="btn-primary">
              Build My WhatsApp Bot →
            </a>
          </motion.div>

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
            style={{ transformOrigin: 'top center' }}
          >
            <div style={{ transform: 'scale(0.88)', transformOrigin: 'top center' }}>
              <PhoneMockup />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
