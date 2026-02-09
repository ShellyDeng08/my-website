'use client'

import { ScrollReveal } from './ScrollReveal'

const testimonials = [
  {
    name: 'Alex Chen',
    initials: 'AC',
    role: 'Engineering Manager',
    company: 'TikTok',
    accent: 1,
    quote: 'Shelly is one of the most driven engineers I\'ve had the pleasure of working with. Her ability to tackle complex technical challenges while maintaining a clear focus on user experience is exceptional.',
  },
  {
    name: 'Sarah Martinez',
    initials: 'SM',
    role: 'Tech Lead',
    company: 'Blitz',
    accent: 2,
    quote: 'Working with Shelly has been a great experience. She brings not just technical expertise but also excellent communication skills and a collaborative mindset that elevates the entire team.',
  },
  {
    name: 'David Park',
    initials: 'DP',
    role: 'Senior Developer',
    company: 'Trip.com',
    accent: 3,
    quote: 'Shelly played a key role in our successful tech stack migration. Her understanding of both frontend and backend technologies made her invaluable to our team\'s growth.',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-28 px-6 md:px-12" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-[1120px] mx-auto">
        <ScrollReveal>
          <div className="text-xs font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: 'var(--accent-1)' }}>
            Testimonials
          </div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.2] tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--text-heading)' }}
          >
            What people say.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="text-base max-w-[520px] leading-relaxed mb-12" style={{ color: 'var(--text-body)' }}>
            From colleagues and managers I&apos;ve worked with.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i}>
              <div
                className="p-8 rounded-2xl border transition-all duration-300"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="mb-6">
                  <span
                    className="text-[2.5rem] leading-none font-serif opacity-40"
                    style={{ color: `var(--accent-${t.accent})` }}
                  >
                    &ldquo;
                  </span>
                  <p className="text-[0.9375rem] leading-[1.8] italic mt-2" style={{ color: 'var(--text-body)' }}>
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold"
                    style={{
                      background: `var(--accent-${t.accent}-light)`,
                      color: `var(--accent-${t.accent})`,
                      fontFamily: 'var(--font-space-grotesk)',
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-heading)' }}>
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {t.role} &middot; {t.company}
                    </div>
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
