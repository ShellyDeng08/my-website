import { Navigation } from '@/app/components/Navigation'
import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { ExperienceTimeline } from '@/app/components/ExperienceTimeline'
import { SkillsCloud } from '@/app/components/SkillsCloud'
import { ProjectsGrid } from '@/app/components/ProjectsGrid'
import { Testimonials } from '@/app/components/Testimonials'
import { Contact } from '@/app/components/Contact'
import { ThemeSwitcher } from '@/app/components/ThemeSwitcher'

export default function Home() {
  return (
    <div style={{ background: 'var(--bg-main)' }}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <SkillsCloud />
        <ProjectsGrid />
        <Testimonials />
        <Contact />
      </main>
      <footer
        className="py-8 px-6 md:px-12 flex justify-between items-center max-w-[1120px] mx-auto"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>&copy; 2025 Shelly Deng</p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Built with Next.js + React</p>
      </footer>
      <ThemeSwitcher />
    </div>
  )
}
