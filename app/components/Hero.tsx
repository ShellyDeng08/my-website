'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useReducedMotion } from '../hooks/useReducedMotion'

const keywords = [
  'Full-Stack Engineer', '8+ Years Exp', 'Shanghai',
  'Coffee Lover', 'Building for Scale', 'TikTok Alumni'
]

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const prefersReducedMotion = useReducedMotion()
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 60
      const y = (window.innerHeight / 2 - e.clientY) / 60
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) return
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.2)
    }, 16)
    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-[#0f0f1a]">
      {/* Avatar with circular keywords */}
      <div className="relative flex justify-center items-center mb-8">
        {/* Circular keywords around avatar */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              rotate: `${rotation}deg`,
            }}
          >
            {keywords.map((keyword, index) => {
              const angle = (index / keywords.length) * 2 * Math.PI - Math.PI / 2
              const radius = 220
              const x = Math.cos(angle) * radius + 250
              const y = Math.sin(angle) * radius + 250
              return (
                <div
                  key={keyword}
                  className="absolute text-sm font-medium text-cyan-400/70 whitespace-nowrap"
                  style={{
                    left: x,
                    top: y,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {keyword}
                </div>
              )
            })}
          </motion.div>
        )}

        {/* Avatar in center */}
        <motion.div
          animate={prefersReducedMotion ? { x: 0, y: 0 } : { x: mousePos.x, y: mousePos.y }}
          className="relative z-10 w-[220px] h-[220px] rounded-full overflow-hidden"
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(139, 92, 246, 0.3)',
                '0 0 40px rgba(236, 72, 153, 0.4)',
                '0 0 20px rgba(6, 182, 212, 0.3)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full rounded-full p-1 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500"
          >
            <Image
              src="/avatar.jpg"
              alt="Shelly Deng"
              width={218}
              height={218}
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold leading-none mb-4">
        Shelly Deng
      </h1>

      <div className="h-10 flex items-center justify-center text-cyan-500 text-[1.3rem]">
        <span className="inline-block animate-pulse">
          <TypingTaglines />
        </span>
      </div>

      <div className="flex gap-5 mt-10 flex-wrap justify-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/15 transition-all duration-200">
          <span className="text-3xl font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            8+
          </span>
          <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">
            Years Experience
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/15 transition-all duration-200">
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

const taglines = [
  'Software Engineer with 8+ years experience',
  'Full-Stack Engineer @ Blitz',
  'Previously @ TikTok & Trip.com Group',
  'Building scalable systems'
]

function TypingTaglines() {
  const [displayedText, setDisplayedText] = useState('')
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

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
