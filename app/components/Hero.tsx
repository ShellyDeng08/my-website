'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40
      const y = (window.innerHeight / 2 - e.clientY) / 40
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [prefersReducedMotion])

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative">
      <motion.div
        animate={prefersReducedMotion ? { x: 0, y: 0 } : { x: mousePos.x, y: mousePos.y }}
        className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-cyan-500/30 p-1"
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{ zIndex: -1 }}
      >
        <div className="absolute inset-1 bg-background/60 rounded-full flex items-center justify-center font-bold text-4xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
          SD
        </div>
      </motion.div>

      <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold leading-none mb-4">
        Shelly Deng
      </h1>

      <div className="h-10 flex items-center justify-center text-cyan-500 text-[1.3rem]">
        <span className="inline-block animate-pulse">
          <TypingTaglines />
        </span>
      </div>

      <div className="flex gap-5 mt-10 flex-wrap justify-center">
        <div className="glass px-8 py-4 rounded-2xl border-slate-200/8 hover:bg-white/5 transition-all duration-200">
          <span className="text-3xl font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            8+
          </span>
          <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">
            Years Experience
          </div>
        </div>
        <div className="glass px-8 py-4 rounded-2xl border-slate-200/8 hover:bg-white/5 transition-all duration-200">
          <span className="text-3xl font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            3
          </span>
          <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">
            Major Companies
          </div>
        </div>
      </div>
    </section>
  )
}

function TypingTaglines() {
  const [displayedText, setDisplayedText] = useState('')
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const taglines = [
    'Software Engineer with 8+ years experience',
    'Full-Stack Engineer @ Blitz',
    'Previously @ TikTok & Trip.com Group',
    'Building scalable systems'
  ]

  useEffect(() => {
    const currentTagline = taglines[taglineIndex]
    let typeSpeed = isDeleting ? 30 : 80

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentTagline.substring(0, displayedText.length - 1))
        if (displayedText.length === 0) {
          setIsDeleting(false)
          setTaglineIndex((prev) => (prev + 1) % taglines.length)
          typeSpeed = 500
        }
      } else {
        setDisplayedText(currentTagline.substring(0, displayedText.length + 1))
        if (displayedText.length === currentTagline.length) {
          typeSpeed = 2000
          setIsDeleting(true)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, taglineIndex])

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
