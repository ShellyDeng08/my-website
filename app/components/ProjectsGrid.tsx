'use client'

import { ScrollReveal } from './ScrollReveal'

const projects = [
  {
    num: '01', accent: 1,
    name: 'SSR Architecture Optimization',
    description: 'Maintained and optimized custom server-side rendering architecture, tackling memory issues and crash rates at scale.',
    impact: '\u2193 20% uninstall rate',
    tech: ['Node.js', 'React', 'SSR'],
  },
  {
    num: '02', accent: 2,
    name: 'Permission Management System',
    description: 'End-to-end system design \u2014 API, backend processing, and database schema \u2014 adopted by 10+ business units.',
    impact: '10+ teams adopted',
    tech: ['Python', 'Golang', 'MySQL'],
  },
  {
    num: '03', accent: 3,
    name: 'Quality Monitoring Dashboard',
    description: 'System design for quality monitoring across TikTok Live Wallet, improving platform reliability and response time.',
    impact: '\u2193 30% incidents',
    tech: ['Python', 'Golang', 'MySQL'],
  },
  {
    num: '04', accent: 1,
    name: 'Hotel Platform Migration',
    description: 'Led a full tech stack migration from C# to Node.js + React, redesigning the architecture with SSR and BFF layers.',
    impact: '\u2191 50% faster pages',
    tech: ['Node.js', 'React', 'TypeScript'],
  },
]

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 md:py-28 px-6 md:px-12">
      <div className="max-w-[1120px] mx-auto">
        <ScrollReveal>
          <div className="text-xs font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: 'var(--accent-3)' }}>
            Projects
          </div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.2] tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--text-heading)' }}
          >
            Things I&apos;ve built.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="text-base max-w-[520px] leading-relaxed mb-12" style={{ color: 'var(--text-body)' }}>
            Highlights from my work across performance, architecture, and systems design.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i % 2}>
              <div
                className="p-8 rounded-2xl border relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 group"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                {/* Top accent bar on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `var(--accent-${project.accent})` }}
                />

                <div
                  className="text-[0.6875rem] font-semibold mb-4"
                  style={{ color: `var(--accent-${project.accent})` }}
                >
                  {project.num}
                </div>
                <h3
                  className="text-lg font-semibold mb-2.5"
                  style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--text-heading)' }}
                >
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-body)' }}>
                  {project.description}
                </p>
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold mb-4"
                  style={{
                    background: `var(--accent-${project.accent}-light)`,
                    color: `var(--accent-${project.accent})`,
                  }}
                >
                  {project.impact}
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[0.6875rem] font-medium"
                      style={{
                        background: `var(--accent-${project.accent}-light)`,
                        color: `var(--accent-${project.accent})`,
                      }}
                    >
                      {t}
                    </span>
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
