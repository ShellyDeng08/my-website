'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface ParticleBurstProps {
  x: number
  y: number
  color: string
  onComplete: () => void
}

export function ParticleBurst({ x, y, color, onComplete }: ParticleBurstProps) {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: (i / 12) * Math.PI * 2,
    distance: 50 + Math.random() * 50,
  }))

  useEffect(() => {
    const timer = setTimeout(onComplete, 600)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed pointer-events-none z-50"
        style={{ left: x, top: y }}
      >
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{
              x: Math.cos(p.angle) * p.distance,
              y: Math.sin(p.angle) * p.distance,
              scale: 0,
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute w-2 h-2 rounded-full"
            style={{ background: color }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
