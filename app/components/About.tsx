'use client'

import { ScrollReveal } from './ScrollReveal'

export function About() {
  const highlights = [
    { icon: '\u{1F5A5}', title: 'Full-Stack', desc: 'Frontend to backend, end-to-end ownership' },
    { icon: '\u26A1', title: 'Performance', desc: 'Obsessed with speed and optimization' },
    { icon: '\u{1F4D0}', title: 'Architecture', desc: 'SSR, BFF layers, scalable systems' },
    { icon: '\u{1F91D}', title: 'Leadership', desc: 'Cross-team initiatives and mentoring' },
  ]

  return (
    <section id="about" className="py-24 md:py-28 px-6 md:px-12" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        <div>
          <ScrollReveal>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: 'var(--accent-1)' }}>
              About
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2
              className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.2] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--text-heading)' }}
            >
              Building products<br />people rely on.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-[1.0625rem] leading-[1.8] mb-5" style={{ color: 'var(--text-body)' }}>
              I&apos;m a software engineer with a deep focus on building scalable,
              high-performance applications. My work spans the full stack — from
              crafting responsive user interfaces to designing robust backend systems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <p className="text-[1.0625rem] leading-[1.8]" style={{ color: 'var(--text-body)' }}>
              Previously at TikTok in Singapore and Trip.com Group in Shanghai,
              I&apos;ve led cross-team initiatives and contributed to large-scale applications
              serving millions of users. Currently building at Blitz in Los Angeles.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.title} delay={i}>
              <div
                className="p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
                  style={{ background: `var(--accent-${(i % 3) + 1}-light)` }}
                >
                  {h.icon}
                </div>
                <h4
                  className="text-[0.9375rem] font-semibold mb-1.5"
                  style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--text-heading)' }}
                >
                  {h.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {h.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
