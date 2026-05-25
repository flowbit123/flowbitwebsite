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
        this.r     = Math.random() * 1.5 + 0.3
        this.vx    = (Math.random() - 0.5) * 0.25
        this.vy    = (Math.random() - 0.5) * 0.25
        this.alpha = Math.random() * 0.45 + 0.1
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
      // Fixed to viewport only — not full page height
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
      init()
    }

    function init() {
      particles = []
      // Cap at 60 particles max — enough for visual, not O(n²) expensive
      const count = Math.min(60, Math.floor((W * H) / 18000))
      for (let i = 0; i < count; i++) particles.push(new Particle())
    }

    function animate() {
      // Pause when tab is hidden
      if (document.hidden) {
        animId = requestAnimationFrame(animate)
        return
      }
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }

    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    resize()
    animate()

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
