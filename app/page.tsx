'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/app/components/Navigation'
import { JourneyTab } from '@/app/components/JourneyTab'
import { WorkTab } from '@/app/components/WorkTab'
import { ConnectTab } from '@/app/components/ConnectTab'
import { AnimatedBackground } from '@/app/components/AnimatedBackground'

export default function Home() {
  const [activeTab, setActiveTab] = useState('journey')
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null)

  // Listen for skill click events from WorkTab
  useEffect(() => {
    const handleSkillClick = (e: CustomEvent) => {
      setHighlightedSkill(e.detail)
    }

    window.addEventListener('skillClick', handleSkillClick)
    return () => window.removeEventListener('skillClick', handleSkillClick)
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
              initial={{ rotateY: 90, opacity: 0.5 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0.5 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full absolute"
              style={{ transformStyle: 'preserve-3d' as any }}
            >
              <JourneyTab highlightedSkill={highlightedSkill} />
            </motion.div>
          )}
          {activeTab === 'work' && (
            <motion.div
              key="work"
              initial={{ rotateY: 90, opacity: 0.5 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0.5 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full absolute"
              style={{ transformStyle: 'preserve-3d' as any }}
            >
              <WorkTab highlightedSkill={highlightedSkill} onSkillHighlight={setHighlightedSkill} />
            </motion.div>
          )}
          {activeTab === 'connect' && (
            <motion.div
              key="connect"
              initial={{ rotateY: 90, opacity: 0.5 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0.5 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full absolute"
              style={{ transformStyle: 'preserve-3d' as any }}
            >
              <ConnectTab />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
