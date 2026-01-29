'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ParticleBurst } from './ParticleBurst'

interface MagneticButtonProps {
  children: React.ReactNode
  icon: React.ReactNode
  color: string
  onClick?: () => void
  href?: string
}

export function MagneticButton({ children, icon, color, onClick, href }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [burst, setBurst] = useState<{ x: number, y: number } | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left - rect.width / 2) * 0.5
    const y = (e.clientY - rect.top - rect.height / 2) * 0.5
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  const handleClick = (e: React.MouseEvent) => {
    onClick?.()
    setBurst({ x: e.clientX, y: e.clientY })
    setTimeout(() => setBurst(null), 600)
  }

  const buttonContent = (
    <>
      <motion.div
        ref={buttonRef}
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className={`glass px-8 py-4 rounded-2xl border flex items-center gap-4 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-[${color}]`}
        style={{ borderColor: color }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {icon}
        <span>{children}</span>
      </motion.div>
      {burst && (
        <ParticleBurst
          x={burst.x - 8} // Center on cursor
          y={burst.y - 8}
          color={color}
          onComplete={() => {}}
        />
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {buttonContent}
      </a>
    )
  }

  return <div className="inline-block">{buttonContent}</div>
}
