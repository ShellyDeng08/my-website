'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const experienceData = {
  'React': [
    { company: 'TikTok', role: 'Frontend Dev', period: 'Mar 2025 – Present' },
    { company: 'ByteDance', role: 'Frontend Engineer', period: '2023 – 2025' }
  ],
  'Vue.js': [
    { company: 'ByteDance', role: 'Frontend Engineer', period: '2023 – 2025' }
  ],
  'TypeScript': [
    { company: 'TikTok', role: 'Frontend Dev', period: 'Mar 2025 – Present' }
  ],
  'Node.js': [
    { company: 'ByteDance', role: 'Backend Support', period: '2023 – 2025' }
  ],
  'Performance': [
    { company: 'TikTok', role: 'Optimization Lead', period: 'Mar 2025 – Present' }
  ]
}

export function ExperiencePanel({ skill, onClose }: { skill: string | null, onClose: () => void }) {
  const data = experienceData[skill as keyof typeof experienceData]

  return (
    <AnimatePresence>
      {skill && data && (
        <motion.div
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          exit={{ y: 400 }}
          className="fixed inset-x-0 bottom-0 z-50 bg-black/80 backdrop-blur-lg border-t border-cyan-500 p-6"
        >
          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>{skill} Experience</CardTitle>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                ×
              </button>
            </CardHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((exp, index) => (
                <div key={index} className="glass rounded-xl p-4">
                  <h4 className="font-semibold text-lg mb-1 text-slate-900">{exp.company} • {exp.role}</h4>
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
