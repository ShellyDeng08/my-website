'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { WorkTab } from '@/components/WorkTab'
import { ConnectTab } from '@/components/ConnectTab'

export function JourneyTab() {
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null)

  useEffect(() => {
    const handleSkillClick = (e: CustomEvent) => {
      setHighlightedSkill(e.detail)
    }
    window.addEventListener('skillClick', handleSkillClick)
    return () => window.removeEventListener('skillClick', handleSkillClick)
  }, [])

  return (
    <>
      <Hero />
      <About />
      <ExperienceTimeline highlightedSkill={highlightedSkill} />
    </>
  )
}

export function WorkTab() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold mb-4">Skills & Projects</h2>
      <p className="text-slate-400 mb-8">Click a skill to see where I've used it</p>

      <SkillsCloud onSkillClick={(skill) => {
        setSelectedSkill(skill)
        window.dispatchEvent(new CustomEvent('skillClick', { detail: skill }))
      }} />

      <ExperiencePanel skill={selectedSkill} onClose={() => setSelectedSkill(null)} />

      <h3 className="text-2xl font-bold mb-6 mt-12">Featured Projects</h3>
      <ProjectsGrid />
    </div>
  )
}

export function ConnectTab() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>

      {/* Availability Card */}
      <div
        className="glass rounded-2xl border border-slate-200/8 p-12 max-w-md mx-auto cursor-pointer hover:-translate-y-1 transition-all duration-300"
      >
        <div className="text-3xl font-bold mb-2 text-cyan-500">🟢 Open to Opportunities</div>
        <div className="text-slate-400">Click to see availability details</div>

        {/* Details shown when clicked - handled in component */}
        <div className="mt-6 pt-6 border-t border-slate-200/30 space-y-4">
          <div className="flex justify-between text-slate-400">
            <span>Preferred Contact</span>
            <strong className="text-slate-900">Email</strong>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Response Time</span>
            <strong className="text-slate-900">Usually within 24h</strong>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Timezone</span>
            <strong className="text-slate-900">CST (China Standard Time)</strong>
          </div>
        </div>
      </div>

      {/* Magnetic Buttons */}
      <div className="flex gap-4 mt-8 justify-center flex-wrap">
        <a
          className="glass px-8 py-4 rounded-2xl border border-slate-200/8 flex items-center gap-4 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-purple-500"
          href="mailto:huangshelly123@gmail.com"
          target="_blank"
        >
          <Mail className="w-6 h-6 text-purple-500" />
          <span>Email</span>
        </a>
        <a
          className="glass px-8 py-4 rounded-2xl border border-slate-200/8 flex items-center gap-4 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-pink-500"
          href="https://linkedin.com/in/shelly-deng"
          target="_blank"
        >
          <Linkedin className="w-6 h-6 text-pink-500" />
          <span>LinkedIn</span>
        </a>
        <a
          className="glass px-8 py-4 rounded-2xl border border-slate-200/8 flex items-center gap-4 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-cyan-500"
          href="https://github.com/shellydeng"
          target="_blank"
        >
          <Github className="w-6 h-6 text-cyan-500" />
          <span>GitHub</span>
        </a>
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
