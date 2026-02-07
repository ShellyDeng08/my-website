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
          className="fixed inset-x-0 bottom-0 z-50 bg-slate-900/10 backdrop-blur-xl border-t-2 border-violet-500 p-4 sm:p-6"
        >
          <Card className="bg-white/95 shadow-2xl border border-slate-200">
            <CardHeader className="flex justify-between items-center pb-4 sm:pb-6">
              <CardTitle>{skill} Experience</CardTitle>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none flex items-center justify-center text-slate-600 hover:text-slate-800"
                aria-label="Close panel"
              >
                ×
              </button>
            </CardHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {data.map((exp, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-3 sm:p-4 border border-slate-100">
                  <h4 className="font-semibold text-sm sm:text-base sm:text-lg mb-1 text-slate-800">{exp.company} • {exp.role}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm">{exp.period}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
