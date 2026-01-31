'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { useReducedMotion } from '../hooks/useReducedMotion'

const experienceData = {
  'React': [
    { company: 'Blitz', role: 'Full-Stack Engineer', period: 'Apr 2024 – Present' },
    { company: 'Trip.com Group', role: 'Full-Stack Engineer', period: 'Jan 2018 – Apr 2021' }
  ],
  'React Native': [
    { company: 'TikTok', role: 'Software Engineer', period: 'Jun 2021 – Sep 2023' }
  ],
  'JavaScript': [
    { company: 'Blitz', role: 'Full-Stack Engineer', period: 'Apr 2024 – Present' },
    { company: 'TikTok', role: 'Software Engineer', period: 'Jun 2021 – Sep 2023' },
    { company: 'Trip.com Group', role: 'Full-Stack Engineer', period: 'Jan 2018 – Apr 2021' }
  ],
  'HTML/CSS': [
    { company: 'Blitz', role: 'Full-Stack Engineer', period: 'Apr 2024 – Present' },
    { company: 'Trip.com Group', role: 'Full-Stack Engineer', period: 'Jan 2018 – Apr 2021' }
  ],
  'Node.js': [
    { company: 'Blitz', role: 'Full-Stack Engineer', period: 'Apr 2024 – Present' },
    { company: 'Trip.com Group', role: 'Full-Stack Engineer', period: 'Jan 2018 – Apr 2021' }
  ],
  'Python': [
    { company: 'TikTok', role: 'Software Engineer', period: 'Jun 2021 – Sep 2023' }
  ],
  'Golang': [
    { company: 'TikTok', role: 'Software Engineer', period: 'Jun 2021 – Sep 2023' }
  ],
  'MySQL': [
    { company: 'TikTok', role: 'Software Engineer', period: 'Jun 2021 – Sep 2023' }
  ],
  'MongoDB': [
    { company: 'TikTok', role: 'Software Engineer', period: 'Jun 2021 – Sep 2023' }
  ],
  'GraphQL': [
    { company: 'TikTok', role: 'Software Engineer', period: 'Jun 2021 – Sep 2023' }
  ],
  'RESTful API': [
    { company: 'TikTok', role: 'Software Engineer', period: 'Jun 2021 – Sep 2023' }
  ],
  'SSR': [
    { company: 'Blitz', role: 'Full-Stack Engineer', period: 'Apr 2024 – Present' },
    { company: 'Trip.com Group', role: 'Full-Stack Engineer', period: 'Jan 2018 – Apr 2021' }
  ],
  'Jest': [
    { company: 'TikTok', role: 'Software Engineer', period: 'Jun 2021 – Sep 2023' }
  ],
  'Webpack': [
    { company: 'TikTok', role: 'Software Engineer', period: 'Jun 2021 – Sep 2023' }
  ],
  'Github CI': [
    { company: 'TikTok', role: 'Software Engineer', period: 'Jun 2021 – Sep 2023' }
  ]
}

export function ExperiencePanel({ skill, onClose }: { skill: string | null, onClose: () => void }) {
  const prefersReducedMotion = useReducedMotion()
  const data = experienceData[skill as keyof typeof experienceData]

  // Debug: Log what we're getting
  console.log('ExperiencePanel - skill:', skill)
  console.log('ExperiencePanel - data:', data)
  console.log('ExperiencePanel - data.length:', data?.length)

  // Note: Achievement data is static and trusted, so dangerouslySetInnerHTML is safe here

  return (
    <AnimatePresence>
      {skill && data && data.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.3, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-50 bg-black/95 backdrop-blur-xl border-t-2 border-cyan-500 p-6"
        >
          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>{skill} Experience</CardTitle>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:outline-none"
                aria-label="Close panel"
              >
                ×
              </button>
            </CardHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((exp, index) => (
                <div key={index} className="glass rounded-xl p-4">
                  <h4 className="font-semibold text-lg mb-1 text-white">{exp.company} • {exp.role}</h4>
                  <p className="text-slate-400">{exp.period}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
