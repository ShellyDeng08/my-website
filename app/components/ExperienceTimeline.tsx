'use client'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const experiences = [
  {
    role: 'Full-Stack Engineer',
    company: 'Blitz',
    period: 'Apr 2024 – Present',
    achievements: [
      'Maintained and optimized custom server-side rendering (SSR) architecture using Node.js + React',
      'Reduced app crash rates by diagnosing and resolving critical memory usage issues',
      'Achieved <strong>20%</strong> decrease in uninstall rates and enhanced user experience'
    ],
    skills: ['React', 'Node.js', 'SSR']
  },
  {
    role: 'Software Engineer',
    company: 'TikTok',
    period: 'Jun 2021 – Sep 2023',
    achievements: [
      'Designed and developed a permission management system (API design, backend processing, database schema)',
      'System adopted by <strong>10+ business units</strong> to enhance security and efficiency',
      'Led system design for quality monitoring, reducing online incidents by <strong>30%</strong>',
      'Managed team-wide code reviews, deployment processes, and system monitoring'
    ],
    skills: ['Python', 'Golang', 'MySQL']
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Trip.com Group',
    period: 'Jan 2018 – Apr 2021',
    achievements: [
      'Led migration of hotel site\'s tech stack from C# to Node.js + React',
      'Achieved <strong>30%</strong> boost in page speed',
      'Contributed to architecture design of new tech repository (SSR, BFF layer, component library)',
      'Achieved <strong>~50%</strong> performance improvement on hotel details page'
    ],
    skills: ['Node.js', 'React', 'SSR']
  }
]

export function ExperienceTimeline({ highlightedSkill }: { highlightedSkill: string | null }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section className="h-screen flex flex-col justify-center py-16 px-8 bg-[#0f0f1a] overflow-y-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Work Experience</h2>
      <div className="timeline max-w-4xl mx-auto w-full">
      {experiences.map((exp, index) => {
        const isHighlighted = highlightedSkill ? exp.skills.includes(highlightedSkill) : true
        const isDimmed = highlightedSkill && !isHighlighted

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isDimmed ? 0.3 : 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.3, delay: prefersReducedMotion ? 0 : index * 0.1 }}
            className={`timeline-item ${isHighlighted ? 'highlighted' : ''} ${isDimmed ? 'dimmed' : ''}`}
            data-skills={exp.skills.join(',')}
          >
            <Card>
              <CardHeader>
                <div className="flex-1">
                  <CardTitle>{exp.role}</CardTitle>
                  <div className="text-purple-500 font-medium text-base mt-1">{exp.company}</div>
                </div>
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {exp.period}
                </span>
              </CardHeader>
              <ul className="text-slate-400 leading-relaxed list-disc list-inside space-y-2 mt-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-slate-400">
                    <span dangerouslySetInnerHTML={{ __html: achievement }} />
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map(skill => (
                  <span
                    key={skill}
                    onClick={() => {
                      // Navigate to work tab and highlight skill
                      window.dispatchEvent(new CustomEvent('skillClick', { detail: skill }))
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        window.dispatchEvent(new CustomEvent('skillClick', { detail: skill }))
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className="bg-purple-500/10 border border-purple-500/30 text-purple-500 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-purple-500 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        )
      })}
      </div>
    </section>
  )
}
