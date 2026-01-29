'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'

export function JourneyTab() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceTimeline />
    </>
  )
}

export function WorkTab() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold mb-4">Skills & Projects</h2>
      <p className="text-slate-400 mb-8">Click a skill to see where I've used it</p>

      {/* Skills Cloud - will add in next batch */}
      <div className="skills-cloud-placeholder glass rounded-2xl border-slate-200/8 p-12 text-center">
        <p className="text-slate-400">Skills cloud loading...</p>
      </div>

      {/* Projects Grid - will add in next batch */}
      <h3 className="text-2xl font-bold mb-6 mt-12">Featured Projects</h3>
      <div className="projects-placeholder">
        <p className="text-slate-400">Projects loading...</p>
      </div>
    </div>
  )
}

export function ConnectTab() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <div className="glass rounded-2xl border-slate-200/8 p-12 text-center">
        <p className="text-slate-400">Contact section loading...</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('journey')

  return (
    <div className="min-h-screen bg-background text-foreground">
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
              <JourneyTab />
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
              <WorkTab />
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
