'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const keywords = [
  'Full-Stack Engineer', '8+ Years Exp', 'Shanghai',
  'Coffee Lover', 'Building for Scale', 'TikTok Alumni'
]

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0)

  const taglines = [
    'Software Engineer with 8+ years experience',
    'Full-Stack Engineer @ Blitz',
    'Previously @ TikTok & Trip.com Group',
    'Building scalable systems'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-[#fafafa] py-12 px-4">
      <div className="relative flex justify-center items-center mb-6 sm:mb-8">
        <div className="relative rounded-full pointer-events-none" style={{ width: 'clamp(280px, 50vw, 500px)', height: 'clamp(280px, 50vw, 500px)' }}>
          <div
            className="absolute text-xs sm:text-sm font-medium text-violet-600/70 whitespace-nowrap"
            style={{ left: '50%', top: '6%', transform: 'translate(-50%, -50%)' }}
          >
            Full-Stack Engineer
          </div>
          <div
            className="absolute text-xs sm:text-sm font-medium text-violet-600/70 whitespace-nowrap"
            style={{ left: '88%', top: '28%', transform: 'translate(-50%, -50%)' }}
          >
            8+ Years Exp
          </div>
          <div
            className="absolute text-xs sm:text-sm font-medium text-violet-600/70 whitespace-nowrap"
            style={{ left: '6%', top: '72%', transform: 'translate(-50%, -50%)' }}
          >
            Shanghai
          </div>
          <div
            className="absolute text-xs sm:text-sm font-medium text-violet-600/70 whitespace-nowrap"
            style={{ left: '12%', top: '50%', transform: 'translate(-50%, -50%)' }}
          >
            Coffee Lover
          </div>
          <div
            className="absolute text-xs sm:text-sm font-medium text-violet-600/70 whitespace-nowrap"
            style={{ left: '50%', top: '28%', transform: 'translate(-50%, -50%)' }}
          >
            Building for Scale
          </div>
          <div
            className="absolute text-xs sm:text-sm font-medium text-violet-600/70 whitespace-nowrap"
            style={{ left: '94%', top: '72%', transform: 'translate(-50%, -50%)' }}
          >
            TikTok Alumni
          </div>
        </div>

        <div className="relative z-10 rounded-full overflow-hidden" style={{ width: 'clamp(160px, 25vw, 220px)', height: 'clamp(160px, 25vw, 220px)' }}>
          <div className="w-full h-full rounded-full p-1 bg-gradient-to-br from-violet-600 via-pink-600 to-cyan-600">
            <Image
              src="/avatar.jpg"
              alt="Shelly Deng"
              width={218}
              height={218}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <h1 className="text-[clamp(3.5rem,10vw,6rem)] font-bold leading-none mb-4 tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
        Shelly Deng
      </h1>

      <div className="h-10 flex items-center justify-center text-violet-600 text-[clamp(1rem,2.5vw,1.3rem)]">
        {taglines[taglineIndex]}<span className="animate-pulse">|</span>
      </div>

      <div className="flex gap-4 sm:gap-5 mt-8 sm:mt-10 flex-wrap justify-center px-4">
        <div className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white/80">
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-violet-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
            8+
          </span>
          <div className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">
            Years Experience
          </div>
        </div>
        <div className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white/80">
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-violet-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
            3
          </span>
          <div className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">
            Major Companies
          </div>
        </div>
      </div>
    </section>
  )
}
