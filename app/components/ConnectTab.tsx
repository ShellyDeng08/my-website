'use client'

import { useRef, useState } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

export function ConnectTab() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedEmail, setSelectedEmail] = useState('huangshelly123@gmail.com')

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>

      {/* Availability Card */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="glass rounded-2xl border border-slate-200/8 p-12 max-w-md mx-auto cursor-pointer hover:-translate-y-1 transition-all duration-300"
      >
        <div className="text-3xl font-bold mb-2 text-cyan-500">
          🟢 Open to Opportunities
        </div>
        <div className="text-slate-400">Click to see availability details</div>
        {isOpen && (
          <div className="mt-6 pt-6 border-t border-slate-200/30 space-y-4">
            <div className="flex justify-between text-slate-400">
              <span>Preferred Contact</span>
              <strong className="text-slate-900">Email</strong>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Response Time</span>
              <strong className="text-slate-900">Usually within 24h</strong>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Timezone</span>
              <strong className="text-slate-900">CST (China Standard Time)</strong>
            </div>
          </div>
        )}
      </div>

      {/* Magnetic Buttons */}
      <div className="flex gap-4 mt-8 justify-center flex-wrap">
        <MagneticButton color="#8b5cf6" icon={<Mail />} href="mailto:huangshelly123@gmail.com" />
        <MagneticButton color="#ec4899" icon={<Linkedin />} href="https://linkedin.com/in/shelly-deng" />
        <MagneticButton color="#06b6d4" icon={<Github />} href="https://github.com/shellydeng" />
      </div>
    </div>
  )
}

function MagneticButton({ children, icon, color, href }: { children: React.ReactNode; icon: React.ReactNode; color: string; href?: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [burst, setBurst] = useState<{ x: number; y: number } | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    buttonRef.current!.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`
  }

  const handleMouseLeave = () => {
    buttonRef.current!.style.transform = 'translate(0, 0)'
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      window.open(href, '_blank')
    }
    setBurst({ x: e.clientX, y: e.clientY })
    setTimeout(() => setBurst(null), 600)
  }

  return (
    <>
      <button
        ref={buttonRef}
        className={`glass px-8 py-4 rounded-2xl border border-slate-200/8 flex items-center gap-4 transition-all duration-300 cursor-pointer`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ borderColor: color }}
      >
        {icon}
        <span>{children}</span>
      </button>
      {burst && (
        <ParticleBurst
          x={burst.x}
          y={burst.y}
          color={color}
        />
      )}
    </>
  )
}

function ParticleBurst({ x, y, color }: { x: number; y: number; color: string }) {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: (i / 12) * Math.PI * 2,
    distance: 50 + Math.random() * 50
  }))

  return (
    <div className="particles-container" style={{ left: x, top: y }}>
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            '--tx': `${Math.cos(p.angle) * p.distance}px`,
            '--ty': `${Math.sin(p.angle) * p.distance}px`
          }}
        />
      ))}
    </div>
  )
}
