'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navigation } from '@/app/components/Navigation'
import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { ExperienceTimeline } from '@/app/components/ExperienceTimeline'
import { SkillsCloud } from '@/app/components/SkillsCloud'
import { ProjectsGrid } from '@/app/components/ProjectsGrid'
import { Testimonials } from '@/app/components/Testimonials'
import { Mail, Linkedin, Github, CircleCheck } from 'lucide-react'
import { MagneticButton } from './components/MagneticButton'

export default function Home() {
  const [activeTab, setActiveTab] = useState('hero')

  return (
    <div className="min-h-screen bg-[#fafafa] text-foreground">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="overflow-y-scroll h-screen">
        <AnimatePresence mode="wait" initial={false}>
          {activeTab === 'hero' && (
            <div key="hero">
              <Hero />
            </div>
          )}
          {activeTab === 'about' && (
            <div key="about">
              <About />
            </div>
          )}
          {activeTab === 'experience' && (
            <div key="experience">
              <ExperienceTimeline highlightedSkill={null} />
            </div>
          )}
          {activeTab === 'skills' && (
            <div key="skills">
              <section className="min-h-screen flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#fafafa]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Skills Cloud
                </h2>
                <SkillsCloud onSkillClick={() => {}} selectedSkill={null} />
              </section>
            </div>
          )}
          {activeTab === 'projects' && (
            <div key="projects">
              <section className="min-h-screen flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#fafafa]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Featured Projects
                </h2>
                <ProjectsGrid />
              </section>
            </div>
          )}
          {activeTab === 'testimonials' && (
            <div key="testimonials">
              <Testimonials />
            </div>
          )}
          {activeTab === 'connect' && (
            <div key="connect">
              <section className="min-h-screen flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#fafafa] text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Let&apos;s Connect
                </h2>

                {/* Availability Card - light theme */}
                <div className="glass bg-white/80 shadow-xl border border-slate-200 p-8 sm:p-12 max-w-md mx-auto cursor-pointer hover:-translate-y-1 transition-all duration-300 mb-6 sm:mb-8">
                  <div className="flex items-center justify-center gap-3 text-2xl sm:text-3xl font-bold mb-2 text-teal-600">
                    <CircleCheck className="w-7 h-7 sm:w-8 sm:h-8" />
                    Open to Opportunities
                  </div>
                  <div className="text-slate-500 text-sm sm:text-base">Contact details below</div>
                </div>

                {/* Magnetic Buttons - light theme */}
                <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center flex-wrap">
                  <MagneticButton color="#7c3aed" icon={<Mail className="w-6 h-6 text-violet-600" />} href="mailto:xldeng0808@gmail.com">
                    Email
                  </MagneticButton>
                  <MagneticButton color="#db2777" icon={<Linkedin className="w-6 h-6 text-pink-600" />} href="https://linkedin.com/in/shelly-deng">
                    LinkedIn
                  </MagneticButton>
                  <MagneticButton color="#0891b2" icon={<Github className="w-6 h-6 text-cyan-600" />} href="https://github.com/shellydeng">
                    GitHub
                  </MagneticButton>
                </div>

                {/* Footer info */}
                <p className="text-slate-400 text-sm mt-8">
                  © 2025 Shelly Deng. Built with Next.js 16 + React 19
                </p>
              </section>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
