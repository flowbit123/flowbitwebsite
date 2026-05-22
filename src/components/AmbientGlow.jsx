export default function AmbientGlow() {
  const blobs = [
    { top: '4%',  left: '-8%',  w: 650, h: 520, color: 'rgba(255,255,255,0.045)', delay: '0s',   dur: '9s'  },
    { top: '2%',  left: '62%',  w: 550, h: 440, color: 'rgba(255,255,255,0.035)', delay: '3s',   dur: '12s' },
    { top: '28%', left: '-12%', w: 600, h: 480, color: 'rgba(255,255,255,0.038)', delay: '1.5s', dur: '10s' },
    { top: '38%', left: '70%',  w: 520, h: 420, color: 'rgba(220,220,235,0.032)', delay: '5s',   dur: '14s' },
    { top: '52%', left: '25%',  w: 750, h: 380, color: 'rgba(255,255,255,0.028)', delay: '2s',   dur: '11s' },
    { top: '68%', left: '-5%',  w: 580, h: 460, color: 'rgba(255,255,255,0.042)', delay: '4s',   dur: '13s' },
    { top: '78%', left: '65%',  w: 500, h: 400, color: 'rgba(220,225,235,0.032)', delay: '0.5s', dur: '8s'  },
    { top: '90%', left: '20%',  w: 650, h: 380, color: 'rgba(255,255,255,0.035)', delay: '6s',   dur: '15s' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {blobs.map((b, i) => (
        <div
          key={i}
          style={{
            position:     'absolute',
            top:          b.top,
            left:         b.left,
            width:        b.w,
            height:       b.h,
            background:   `radial-gradient(ellipse at center, ${b.color} 0%, transparent 70%)`,
            borderRadius: '50%',
            filter:       'blur(50px)',
            animation:    `ambientPulse ${b.dur} ease-in-out ${b.delay} infinite alternate`,
          }}
        />
      ))}

      <style>{`
        @keyframes ambientPulse {
          0%   { opacity: 0.5; transform: scale(1)    translateY(0px); }
          50%  { opacity: 1;   transform: scale(1.15) translateY(-20px); }
          100% { opacity: 0.6; transform: scale(0.95) translateY(10px); }
        }
      `}</style>
    </div>
  )
}
