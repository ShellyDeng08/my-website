'use client'

export function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-[#fafafa] pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
        About Me
      </h2>
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="space-y-6 sm:space-y-8 text-left">
          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            I&apos;m a Software Engineer with 8+ years of experience in software development, including 3+ years in backend and full-stack development. Currently working as a Full-Stack Engineer at Blitz in Los Angeles.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-slate-700">
            Proficient in JavaScript, CSS, Node.js, and React, with hands-on experience designing and building scalable systems. Previously at TikTok (Singapore) and Trip.com Group (Shanghai), I&apos;ve led cross-team initiatives and contributed to large-scale applications serving millions of users.
          </p>
        </div>
      </div>
    </section>
  )
}
