'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/app/components/Navigation'
import { JourneyTab } from '@/app/components/JourneyTab'
import { WorkTab } from '@/app/components/WorkTab'
import { ConnectTab } from '@/app/components/ConnectTab'
import { AnimatedBackground } from '@/app/components/AnimatedBackground'
import { useReducedMotion } from './hooks/useReducedMotion'

export default function Home() {
  const [activeTab, setActiveTab] = useState('journey')
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()

  // Listen for skill click events from WorkTab
  useEffect(() => {
    const handleSkillClick = (e: Event) => {
      const customEvent = e as CustomEvent<string>
      setHighlightedSkill(customEvent.detail)
    }

    window.addEventListener('skillClick', handleSkillClick as EventListener)
    return () => window.removeEventListener('skillClick', handleSkillClick as EventListener)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="perspective-container">
        <AnimatePresence mode="wait" initial={false}>
          {activeTab === 'journey' && (
            <motion.div
              key="journey"
              initial={prefersReducedMotion ? { opacity: 0 } : { rotateY: 90, opacity: 0.5 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { rotateY: 0, opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { rotateY: -90, opacity: 0.5 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full absolute"
              style={{ transformStyle: 'preserve-3d' } as React.CSSProperties}
            >
              <JourneyTab highlightedSkill={highlightedSkill} />
            </motion.div>
          )}
          {activeTab === 'work' && (
            <motion.div
              key="work"
              initial={prefersReducedMotion ? { opacity: 0 } : { rotateY: 90, opacity: 0.5 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { rotateY: 0, opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { rotateY: -90, opacity: 0.5 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full absolute"
              style={{ transformStyle: 'preserve-3d' } as React.CSSProperties}
            >
              <WorkTab onSkillHighlight={setHighlightedSkill} />
            </motion.div>
          )}
          {activeTab === 'connect' && (
            <motion.div
              key="connect"
              initial={prefersReducedMotion ? { opacity: 0 } : { rotateY: 90, opacity: 0.5 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { rotateY: 0, opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { rotateY: -90, opacity: 0.5 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full absolute"
              style={{ transformStyle: 'preserve-3d' } as React.CSSProperties}
            >
              <ConnectTab />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
