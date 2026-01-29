'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { SkillsCloud } from './SkillsCloud'
import { ExperiencePanel } from './ExperiencePanel'
import { ProjectsGrid } from './ProjectsGrid'

const experienceData = {
  'React': [
    { company: 'TikTok', role: 'Frontend Dev', period: 'Mar 2025 – Present' },
    { company: 'ByteDance', role: 'Frontend Engineer', period: '2023 – 2025' }
  ],
  'Vue.js': [
    { company: 'ByteDance', role: 'Frontend Engineer', period: '2023 – 2025' }
  ],
  'TypeScript': [
    { company: 'TikTok', role: 'Frontend Dev', period: 'Mar 2025 – Present' }
  ],
  'Node.js': [
    { company: 'ByteDance', role: 'Backend Support', period: '2023 – 2025' }
  ],
  'Performance': [
    { company: 'TikTok', role: 'Optimization Lead', period: 'Mar 2025 – Present' }
  ]
}

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
