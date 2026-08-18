import { SiWhatsapp } from 'react-icons/si'

const WHATSAPP_NUMBER = '27615056071' // +27 61 505 6071

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full no-underline transition-transform duration-200 hover:scale-110"
      style={{
        width: 58,
        height: 58,
        background: '#25D366',
        boxShadow: '0 8px 28px rgba(37,211,102,0.45)',
      }}
    >
      <SiWhatsapp size={28} color="#ffffff" />
    </a>
  )
}
