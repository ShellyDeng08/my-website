'use client'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

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
  return (
    <section className="min-h-screen flex flex-col pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-8 bg-[#fafafa] overflow-y-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
        Work Experience
      </h2>
      <div className="timeline max-w-4xl mx-auto w-full pb-16">
      {experiences.map((exp, index) => {
        const isHighlighted = highlightedSkill ? exp.skills.includes(highlightedSkill) : true
        const isDimmed = highlightedSkill && !isHighlighted
        return (
        <div
          key={index}
          className={`timeline-item ${isHighlighted ? 'highlighted' : ''} ${isDimmed ? 'dimmed' : ''}`}
          data-skills={exp.skills.join(',')}
        >
          <Card className="bg-white/80 shadow-lg border border-slate-100">
            <CardHeader>
              <div className="flex-1">
                <CardTitle>{exp.role}</CardTitle>
                <div className="text-violet-600 font-medium text-base mt-1">{exp.company}</div>
              </div>
              <span className="bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                {exp.period}
              </span>
            </CardHeader>
            <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mt-4 text-sm sm:text-base">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-slate-600">
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
                  className="bg-violet-50 border border-violet-200 text-violet-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium cursor-pointer hover:bg-violet-600 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none"
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
    </section>
  )
}
