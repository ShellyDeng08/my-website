'use client'

import { Hero } from './Hero'
import { About } from './About'
import { ExperienceTimeline } from './ExperienceTimeline'

export function JourneyTab({ highlightedSkill }: { highlightedSkill: string | null }) {
  return (
    <>
      <Hero />
      <About />
      <ExperienceTimeline highlightedSkill={highlightedSkill} />
    </>
  )
}
