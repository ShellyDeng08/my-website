'use client'

import { ScrollReveal } from './ScrollReveal'

const experiences = [
  {
    role: 'Full-Stack Engineer',
    company: 'Blitz',
    location: 'Los Angeles',
    period: 'Apr 2024 — Present',
    accentIndex: 1,
    achievements: [
      'Maintained and optimized custom SSR architecture using Node.js + React',
      'Reduced app crash rates by diagnosing critical memory usage issues',
      'Achieved <strong>20% decrease</strong> in uninstall rates through UX improvements',
    ],
    skills: ['React', 'Node.js', 'SSR'],
  },
  {
    role: 'Software Engineer',
    company: 'TikTok',
    location: 'Singapore',
    period: 'Jun 2021 — Sep 2023',
    accentIndex: 2,
    achievements: [
      'Designed permission management system — API, backend, database schema',
      'System adopted by <strong>10+ business units</strong> for security and efficiency',
      'Led quality monitoring design, reducing incidents by <strong>30%</strong>',
      'Managed code reviews, deployment processes, and system monitoring',
    ],
    skills: ['Python', 'Golang', 'MySQL'],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Trip.com Group',
    location: 'Shanghai',
    period: 'Jan 2018 — Apr 2021',
    accentIndex: 3,
    achievements: [
      'Led migration of hotel site\'s tech stack from C# to Node.js + React',
      'Achieved <strong>30% boost</strong> in page speed and improved DX',
      'Contributed to architecture design — SSR, BFF layer, component library',
      'Achieved <strong>~50% performance improvement</strong> on hotel details page',
    ],
    skills: ['Node.js', 'React', 'SSR'],
  },
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 md:py-28 px-6 md:px-12">
      <div className="max-w-[1120px] mx-auto">
        <ScrollReveal>
          <div className="text-xs font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: 'var(--accent-1)' }}>
            Experience
          </div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.2] tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--text-heading)' }}
          >
            Where I&apos;ve worked.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="text-base max-w-[520px] leading-relaxed mb-12" style={{ color: 'var(--text-body)' }}>
            8+ years building products across travel, social, and tech — at scale.
          </p>
        </ScrollReveal>

        <div>
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.company}>
              <div
                className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-9"
                style={{
                  borderBottom: i < experiences.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div className="text-xs font-medium pt-1" style={{ color: 'var(--text-muted)' }}>
                  {exp.period}
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold mb-0.5"
                    style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--text-heading)' }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    className="text-sm font-medium mb-3.5"
                    style={{ color: `var(--accent-${exp.accentIndex})` }}
                  >
                    {exp.company} &middot; {exp.location}
                  </div>
                  <ul className="flex flex-col gap-2">
                    {exp.achievements.map((a, j) => (
                      <li
                        key={j}
                        className="text-sm leading-relaxed pl-5 relative"
                        style={{ color: 'var(--text-body)' }}
                      >
                        <span
                          className="absolute left-0 top-[9px] w-1 h-1 rounded-full"
                          style={{ background: `var(--accent-${exp.accentIndex})` }}
                        />
                        <span dangerouslySetInnerHTML={{ __html: a }} />
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-1.5 mt-3.5 flex-wrap">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[0.6875rem] font-medium"
                        style={{
                          background: `var(--accent-${exp.accentIndex}-light)`,
                          color: `var(--accent-${exp.accentIndex})`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
