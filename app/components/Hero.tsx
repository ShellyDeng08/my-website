'use client'

import { ScrollReveal } from './ScrollReveal'
import { Mail, Github } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-12 pt-24 pb-20 max-w-[1120px] mx-auto">
      <div className="max-w-[720px]">
        <ScrollReveal>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7"
            style={{ background: 'var(--accent-3-light)', color: 'var(--accent-3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" style={{ animation: 'pulse-dot 2s infinite' }} />
            Open to Opportunities
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h1
            className="text-[clamp(2.75rem,5.5vw,4rem)] font-bold leading-[1.1] tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--text-heading)' }}
          >
            Software engineer<br />
            who builds for{' '}
            <span style={{ color: 'var(--accent-1)' }}>scale</span> &<br />
            <span style={{ color: 'var(--accent-2)' }}>impact.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="text-[1.0625rem] leading-[1.8] max-w-[520px] mb-9" style={{ color: 'var(--text-body)' }}>
            Full-stack engineer with 8+ years of experience building high-performance
            applications at TikTok, Trip.com, and Blitz — serving millions of users worldwide.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="flex gap-3 items-center mb-14">
            <a
              href="mailto:xldeng0808@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[0.9375rem] font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-text)',
              }}
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href="https://github.com/ShellyDeng08"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[0.9375rem] font-medium border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-body)',
              }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={4}>
          <div
            className="flex gap-8 sm:gap-12 pt-9 flex-wrap"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            {[
              { num: '8+', label: 'Years Exp', accent: 1 },
              { num: '3', label: 'Companies', accent: 2 },
              { num: '50%', label: 'Perf Gains', accent: 3 },
              { num: '10+', label: 'Teams Impacted', accent: 1 },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-[1.75rem] font-bold tracking-tight"
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    color: `var(--accent-${stat.accent})`,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  className="text-xs uppercase tracking-wider font-medium mt-1"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
