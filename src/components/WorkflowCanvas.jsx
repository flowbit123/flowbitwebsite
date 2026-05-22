import { useRef, useEffect } from 'react'

export default function WorkflowCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const dpr = Math.max(window.devicePixelRatio || 1, 2) // force min 2x for sharpness
    const W = 700, H = 640
    canvas.width  = W * dpr
    canvas.height = H * dpr
    canvas.style.width  = W + 'px'
    canvas.style.height = H + 'px'
    ctx.scale(dpr, dpr)

    const ACCENT = '#7BAFC4'
    const OCX = 350, OCY = 320, ORB = 96

    const RINGS = [
      { rx: 182, ry: 62 },
      { rx: 296, ry: 102 },
    ]

    const orbitals = [
      { icon: '💬', label: 'WhatsApp', slug: 'whatsapp',      color: '25D366', a: 0.0,  ring: 0, spd: 0.009  },
      { icon: '📧', label: 'Gmail',    slug: 'gmail',          color: 'EA4335', a: 2.1,  ring: 0, spd: 0.0075 },
      { icon: '📅', label: 'Calendar', slug: 'googlecalendar', color: '4285F4', a: 4.3,  ring: 0, spd: 0.0095 },
      { icon: '💼', label: 'Slack',    slug: 'slack',          color: 'ECB22E', a: 0.5,  ring: 1, spd: 0.0048 },
      { icon: '🤝', label: 'HubSpot',  slug: 'hubspot',        color: 'FF7A59', a: 2.3,  ring: 1, spd: 0.0055 },
      { icon: '📊', label: 'Sheets',   slug: 'googlesheets',   color: '34A853', a: 3.9,  ring: 1, spd: 0.0043 },
      { icon: '📝', label: 'Notion',   slug: 'notion',         color: 'ffffff', a: 5.5,  ring: 1, spd: 0.0051 },
    ]

    orbitals.forEach(o => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.src = o.src || `https://cdn.simpleicons.org/${o.slug}/${o.color}`
      o.img = img
    })

    let tick = 0

    function getPos(o) {
      const r = RINGS[o.ring]
      return {
        x:     OCX + Math.cos(o.a) * r.rx,
        y:     OCY + Math.sin(o.a) * r.ry,
        depth: Math.sin(o.a),
      }
    }

    function drawTracks() {
      RINGS.forEach((r, ri) => {
        ctx.save()
        ctx.setLineDash([4, 10])
        ctx.beginPath()
        ctx.ellipse(OCX, OCY, r.rx, r.ry, 0, 0, Math.PI * 2)
        ctx.strokeStyle = ri === 0 ? 'rgba(123,175,196,0.14)' : 'rgba(255,255,255,0.06)'
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.restore()
      })
    }

    function drawConnection(o) {
      const p   = getPos(o)
      const dx  = p.x - OCX, dy = p.y - OCY
      const len = Math.sqrt(dx * dx + dy * dy) || 1
      const ex  = OCX + (dx / len) * (ORB + 4)
      const ey  = OCY + (dy / len) * (ORB + 4)
      const a   = ((p.depth + 1) * 0.5) * 0.30 + 0.05

      ctx.beginPath()
      ctx.moveTo(ex, ey)
      ctx.lineTo(p.x, p.y)
      ctx.strokeStyle = `rgba(123,175,196,${a * 0.7})`
      ctx.lineWidth = 1
      ctx.stroke()

      // Travelling pulse dot
      const t  = Math.sin(tick * 0.042 + o.a * 2) * 0.5 + 0.5
      const px = ex + (p.x - ex) * t
      const py = ey + (p.y - ey) * t
      ctx.save()
      ctx.shadowBlur  = 12
      ctx.shadowColor = ACCENT
      ctx.beginPath()
      ctx.arc(px, py, 2.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(123,175,196,${a * 4})`
      ctx.fill()
      ctx.restore()
    }

    function drawOrbital(o) {
      const p = getPos(o)
      if (p.depth < -0.72) return

      const scale = 0.58 + (p.depth + 1) * 0.5 * 0.56
      const alpha = 0.38 + (p.depth + 1) * 0.5 * 0.62
      const r     = 33 * scale

      ctx.save()
      ctx.globalAlpha = alpha

      // Halo glow behind foreground nodes
      if (p.depth > 0.1) {
        const halo = ctx.createRadialGradient(p.x, p.y, r * 0.5, p.x, p.y, r * 2.6)
        halo.addColorStop(0, 'rgba(255,255,255,0.08)')
        halo.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 2.6, 0, Math.PI * 2)
        ctx.fillStyle = halo
        ctx.fill()
      }

      // Node circle
      ctx.save()
      ctx.shadowBlur   = p.depth > 0 ? 18 : 5
      ctx.shadowColor  = 'rgba(255,255,255,0.3)'
      ctx.beginPath()
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(8,12,18,0.97)'
      ctx.fill()
      ctx.strokeStyle = `rgba(255,255,255,${0.24 + p.depth * 0.42})`
      ctx.lineWidth   = 1.3
      ctx.stroke()
      ctx.restore()

      // Brand icon
      const iSize = r * 1.2
      if (o.img?.complete && o.img.naturalWidth > 0) {
        ctx.drawImage(o.img, p.x - iSize / 2, p.y - iSize / 2, iSize, iSize)
      } else {
        ctx.font         = `${Math.round(16 * scale)}px sans-serif`
        ctx.textAlign    = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(o.icon, p.x, p.y + 1)
      }

      // Label
      if (p.depth > 0.2) {
        ctx.font         = `600 ${Math.round(11 * scale)}px Inter,sans-serif`
        ctx.fillStyle    = `rgba(255,255,255,${alpha * 0.72})`
        ctx.textAlign    = 'center'
        ctx.textBaseline = 'top'
        ctx.fillText(o.label, p.x, p.y + r + 4)
      }

      ctx.restore()
    }

    function drawOrb() {
      const pulse = Math.sin(tick * 0.026) * 0.5 + 0.5

      // Multi-layer outer glow
      ;[200, 154, 116].forEach((gr, i) => {
        const a = [0.022, 0.048, 0.092][i]
        const g = ctx.createRadialGradient(OCX, OCY, 0, OCX, OCY, gr)
        g.addColorStop(0, `rgba(123,175,196,${a})`)
        g.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(OCX, OCY, gr, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })

      // Orb background (deep dark navy)
      const bg = ctx.createRadialGradient(OCX - 22, OCY - 22, 7, OCX, OCY, ORB)
      bg.addColorStop(0,   'rgba(22,36,48,0.99)')
      bg.addColorStop(0.5, 'rgba(10,18,26,0.99)')
      bg.addColorStop(1,   'rgba(4,8,12,0.99)')
      ctx.beginPath()
      ctx.arc(OCX, OCY, ORB, 0, Math.PI * 2)
      ctx.fillStyle = bg
      ctx.fill()

      // Glowing border
      ctx.save()
      ctx.shadowBlur  = 28 + pulse * 20
      ctx.shadowColor = ACCENT
      ctx.beginPath()
      ctx.arc(OCX, OCY, ORB, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(123,175,196,${0.6 + pulse * 0.35})`
      ctx.lineWidth   = 2
      ctx.stroke()
      ctx.restore()

      // Spinning arc rings around orb
      ctx.save()
      ctx.translate(OCX, OCY)

      ctx.beginPath()
      ctx.arc(0, 0, ORB + 18, tick * 0.020, tick * 0.020 + Math.PI * 1.55)
      ctx.strokeStyle = `rgba(123,175,196,${0.22 + pulse * 0.16})`
      ctx.lineWidth   = 1.4
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(0, 0, ORB + 32, -tick * 0.016, -tick * 0.016 + Math.PI * 0.8)
      ctx.strokeStyle = `rgba(123,175,196,${0.13 + pulse * 0.09})`
      ctx.lineWidth   = 0.9
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(0, 0, ORB + 9, tick * 0.032, tick * 0.032 + Math.PI * 0.55)
      ctx.strokeStyle = `rgba(123,175,196,${0.32 + pulse * 0.20})`
      ctx.lineWidth   = 1.8
      ctx.stroke()

      ctx.restore()

      // FLOWBIT wordmark — split color, centered
      ctx.save()
      ctx.textAlign    = 'center'
      ctx.textBaseline = 'middle'
      ctx.font         = 'bold 18px Inter,sans-serif'

      // Measure both halves to split perfectly
      const flowW = ctx.measureText('FLOW').width
      const bitW  = ctx.measureText('BIT').width
      const totalW = flowW + bitW
      const startX = OCX - totalW / 2

      ctx.shadowBlur  = 14
      ctx.shadowColor = 'rgba(255,255,255,0.4)'
      ctx.fillStyle   = 'rgba(255,255,255,0.96)'
      ctx.textAlign   = 'left'
      ctx.fillText('FLOW', startX, OCY)

      ctx.shadowColor = ACCENT
      ctx.fillStyle   = ACCENT
      ctx.fillText('BIT', startX + flowW, OCY)
      ctx.restore()
    }

    let animId
    function draw() {
      ctx.clearRect(0, 0, W, H)
      drawTracks()

      const sorted = orbitals.slice().sort((a, b) => getPos(a).depth - getPos(b).depth)
      const behind = sorted.filter(o => getPos(o).depth <  0)
      const front  = sorted.filter(o => getPos(o).depth >= 0)

      orbitals.forEach(drawConnection)
      behind.forEach(drawOrbital)
      drawOrb()
      front.forEach(drawOrbital)

      orbitals.forEach(o => { o.a += o.spd })
      tick++
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="block animate-float"
    />
  )
}
