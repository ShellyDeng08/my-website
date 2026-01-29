'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40
      const y = (window.innerHeight / 2 - e.clientY) / 40
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const taglines = [
    'Fullstack Engineer @ TikTok',
    'React/Next.js Specialist',
    'Frontend & Backend',
    'Building for millions'
  ]

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative">
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1"
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center font-bold text-4xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
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
        <div className="glass px-8 py-4 rounded-2xl border-slate-200/8 hover:-translate-y-1 transition-all duration-300">
          <span className="text-3xl font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            5+
          </span>
          <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">
            Years Experience
          </div>
        </div>
        <div className="glass px-8 py-4 rounded-2xl border-slate-200/8 hover:-translate-y-1 transition-all duration-300">
          <span className="text-3xl font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            10+
          </span>
          <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">
            Projects
          </div>
        </div>
        <div className="glass px-8 py-4 rounded-2xl border-slate-200/8 hover:-translate-y-1 transition-all duration-300">
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
    'Fullstack Engineer @ TikTok',
    'React/Next.js Specialist',
    'Frontend & Backend',
    'Building for millions'
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
