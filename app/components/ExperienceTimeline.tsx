'use client'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    role: 'Frontend Development Engineer',
    company: 'TikTok User Growth Team',
    period: 'Mar 2025 – Present',
    achievements: [
      'Increased user engagement by <strong>25%</strong> with interactive features',
      'Improved page load time by <strong>40%</strong> through performance optimization',
      'Led cross-team collaboration for A/B testing framework'
    ],
    skills: ['React', 'TypeScript', 'Performance']
  },
  {
    role: 'Frontend Engineer',
    company: 'ByteDance',
    period: '2023 – 2025',
    achievements: [
      'Built enterprise-level web applications serving <strong>10M+ users</strong>',
      'Developed reusable component library reducing dev time by <strong>30%</strong>',
      'Implemented state management patterns for complex data flows'
    ],
    skills: ['Vue.js', 'Element Plus', 'Vite']
  },
  {
    role: 'Frontend Engineer Intern',
    company: '360 Digital Technology',
    period: '2022',
    achievements: [
      'Contributed to 3 production features in first 3 months',
      'Implemented responsive designs improving mobile UX'
    ],
    skills: ['JavaScript', 'Git']
  }
]

export function ExperienceTimeline({ highlightedSkill }: { highlightedSkill: string | null }) {
  return (
    <div className="timeline mt-20 pl-5">
      {experiences.map((exp, index) => {
        const isHighlighted = highlightedSkill ? exp.skills.includes(highlightedSkill) : true
        const isDimmed = highlightedSkill && !isHighlighted

        return (
          <div
            key={index}
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
              <ul className="text-slate-300 leading-relaxed list-disc list-inside space-y-2 mt-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-slate-300">
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
                    className="bg-purple-500/10 border border-purple-500/30 text-purple-500 px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer hover:bg-purple-500 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
