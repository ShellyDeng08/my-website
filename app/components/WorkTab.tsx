'use client'

import { useState } from 'react'
import { SkillsCloud } from './SkillsCloud'
import { ExperiencePanel } from './ExperiencePanel'
import { ProjectsGrid } from './ProjectsGrid'

export function WorkTab({ onSkillHighlight }: { onSkillHighlight: (skill: string | null) => void }) {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const handleSkillClick = (skill: string) => {
    // Toggle selection - if clicking the same skill, deselect it
    if (selectedSkill === skill) {
      setSelectedSkill(null)
      onSkillHighlight(null)
    } else {
      setSelectedSkill(skill)
      onSkillHighlight(skill)
    }
  }

  const handleClosePanel = () => {
    setSelectedSkill(null)
    onSkillHighlight(null)
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
        Skills & Projects
      </h2>
      <p className="text-slate-500 sm:text-base mb-6 sm:mb-8">Click a skill to see where I&apos;ve used it</p>

      <SkillsCloud onSkillClick={handleSkillClick} selectedSkill={selectedSkill} />
      <ExperiencePanel skill={selectedSkill} onClose={handleClosePanel} />

      <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 mt-12 sm:mt-16" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
        Featured Projects
      </h3>
      <ProjectsGrid />
    </div>
  )
}
