import { useRef, useEffect } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W, H, particles = [], animId

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x     = Math.random() * W
        this.y     = Math.random() * H
        this.r     = Math.random() * 1.8 + 0.4
        this.vx    = (Math.random() - 0.5) * 0.3
        this.vy    = (Math.random() - 0.5) * 0.3
        this.alpha = Math.random() * 0.55 + 0.15
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`
        ctx.fill()
      }
    }

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = document.documentElement.scrollHeight
    }

    function init() {
      particles = []
      const count = Math.floor((W * H) / 9000)
      for (let i = 0; i < count; i++) particles.push(new Particle())
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255,255,255,${0.12 * (1 - dist / 100)})`
            ctx.lineWidth   = 0.5
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      drawConnections()
      animId = requestAnimationFrame(animate)
    }

    const onResize = () => { resize(); init() }
    window.addEventListener('resize', onResize)
    resize(); init(); animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
