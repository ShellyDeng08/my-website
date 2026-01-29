'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="orb orb-1"
        animate={{
          x: [0, 30, -20, 20, -10, 0],
          y: [0, -30, 20, 30, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-2"
        animate={{
          x: [0, -30, 20, -20, 30, 0],
          y: [0, 30, -20, 30, -20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-3"
        animate={{
          x: [0, 20, -30, 10, 30, -10, 0],
          y: [0, -20, 30, -30, 10, -20, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
