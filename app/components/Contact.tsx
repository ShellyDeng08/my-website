'use client'

import { ScrollReveal } from './ScrollReveal'
import { Mail, Linkedin, Github } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-12 text-center">
      <div className="max-w-[1120px] mx-auto">
        <ScrollReveal>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7"
            style={{ background: 'var(--accent-3-light)', color: 'var(--accent-3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" style={{ animation: 'pulse-dot 2s infinite' }} />
            Available for opportunities
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.2] tracking-tight mb-4 mx-auto max-w-[600px]"
            style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--text-heading)' }}
          >
            Let&apos;s build something{' '}
            <span style={{ color: 'var(--accent-1)' }}>together.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="text-base max-w-[480px] leading-relaxed mb-10 mx-auto" style={{ color: 'var(--text-body)' }}>
            I&apos;m currently open to new opportunities. Whether you have a question or
            just want to say hello — I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="flex gap-3 justify-center flex-wrap">
            {[
              { href: 'mailto:xldeng0808@gmail.com', icon: Mail, label: 'xldeng0808@gmail.com', accent: 1 },
              { href: 'https://linkedin.com/in/xuelian-deng-21332b260/', icon: Linkedin, label: 'LinkedIn', accent: 2 },
              { href: 'https://github.com/ShellyDeng08', icon: Github, label: 'GitHub', accent: 3 },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 group"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-body)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `var(--accent-${link.accent})`
                  e.currentTarget.style.color = `var(--accent-${link.accent})`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-body)'
                }}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
