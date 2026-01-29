'use client'

import { useState } from 'react'
import { SkillsCloud } from './SkillsCloud'
import { ExperiencePanel } from './ExperiencePanel'
import { ProjectsGrid } from './ProjectsGrid'

export function WorkTab() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold mb-4">Skills & Projects</h2>
      <p className="text-slate-400 mb-8">Click a skill to see where I've used it</p>

      <SkillsCloud onSkillClick={setSelectedSkill} />
      <ExperiencePanel skill={selectedSkill} onClose={() => setSelectedSkill(null)} />

      <h3 className="text-2xl font-bold mb-6 mt-12">Featured Projects</h3>
      <ProjectsGrid />
    </div>
  )
}
