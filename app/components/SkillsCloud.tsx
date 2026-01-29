'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const skills = [
  { name: 'React', category: 'frontend', size: 'large' },
  { name: 'Vue.js', category: 'frontend', size: 'large' },
  { name: 'Next.js', category: 'frontend', size: 'large' },
  { name: 'TypeScript', category: 'frontend', size: 'medium' },
  { name: 'JavaScript', category: 'frontend', size: 'medium' },
  { name: 'Tailwind CSS', category: 'frontend', size: 'medium' },
  { name: 'Node.js', category: 'backend', size: 'large' },
  { name: 'Express', category: 'backend', size: 'medium' },
  { name: 'Python', category: 'backend', size: 'medium' },
  { name: 'PostgreSQL', category: 'backend', size: 'small' },
  { name: 'MySQL', category: 'backend', size: 'small' },
  { name: 'Git', category: 'tools', size: 'medium' },
  { name: 'Vite', category: 'tools', size: 'medium' },
  { name: 'Webpack', category: 'tools', size: 'small' },
  { name: 'Docker', category: 'tools', size: 'small' },
  { name: 'Jest', category: 'tools', size: 'small' },
  { name: 'shadcn/ui', category: 'frontend', size: 'small' },
  { name: 'Element Plus', category: 'frontend', size: 'small' }
]

export function SkillsCloud({ onSkillClick }: { onSkillClick: (skill: string) => void }) {
  return (
    <div className="skills-cloud">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: skill.size === 'large' ? 1.2 : skill.size === 'medium' ? 1 : 0.85 }}
          transition={{
            duration: 0.5 + Math.random(),
            delay: index * 0.05
          }}
          className={cn(
            'absolute',
            'glass',
            'px-4 py-2 rounded-3xl',
            'text-sm font-medium cursor-pointer hover:scale-110',
            'border-slate-200/8',
            skill.category === 'frontend' && 'border-purple-500/30',
            skill.category === 'backend' && 'border-pink-500/30',
            skill.category === 'tools' && 'border-cyan-500/30'
          )}
          onClick={() => onSkillClick(skill.name)}
          animate={{
            x: Math.sin((Date.now() + index * 500) / 5000) * 20,
            y: Math.cos((Date.now() + index * 500) / 5000) * 15
          }}
          transition={{ duration: 15 + Math.random() * 15, repeat: Infinity, repeatType: 'reverse' }}
        >
          {skill.name}
        </motion.div>
      ))}
    </div>
  )
}
