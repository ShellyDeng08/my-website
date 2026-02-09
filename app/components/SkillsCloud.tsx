'use client'

import { ScrollReveal } from './ScrollReveal'

const categories = [
  { label: 'Frontend', accent: 1, skills: ['React', 'React Native', 'JavaScript / TypeScript', 'HTML / CSS'] },
  { label: 'Backend', accent: 2, skills: ['Node.js', 'Python', 'Golang'] },
  { label: 'Data & API', accent: 3, skills: ['MySQL', 'MongoDB', 'GraphQL', 'RESTful API'] },
  { label: 'Tools', accent: 1, skills: ['Jest', 'Webpack', 'GitHub CI/CD', 'Redis'] },
]

export function SkillsCloud() {
  return (
    <section id="skills" className="py-24 md:py-28 px-6 md:px-12" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-[1120px] mx-auto">
        <ScrollReveal>
          <div className="text-xs font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: 'var(--accent-2)' }}>
            Skills
          </div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.2] tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--text-heading)' }}
          >
            Technologies I work with.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="text-base max-w-[520px] leading-relaxed mb-12" style={{ color: 'var(--text-body)' }}>
            Core competencies across the stack, from UI to infrastructure.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i}>
              <div
                className="p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div
                  className="text-[0.75rem] font-semibold uppercase tracking-wider mb-4 pb-3.5"
                  style={{
                    color: `var(--accent-${cat.accent})`,
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {cat.label}
                </div>
                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: 'var(--text-heading)' }}>
                      <span
                        className="w-[7px] h-[7px] rounded-full flex-shrink-0"
                        style={{ background: `var(--accent-${cat.accent})` }}
                      />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
