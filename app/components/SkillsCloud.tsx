'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const skills = [
  // Frontend
  { name: 'React', category: 'frontend', icon: '⚛️' },
  { name: 'React Native', category: 'frontend', icon: '📱' },
  { name: 'JavaScript', category: 'frontend', icon: '⚡' },
  { name: 'HTML/CSS', category: 'frontend', icon: '🎨' },
  // Backend
  { name: 'Node.js', category: 'backend', icon: '💚' },
  { name: 'Python', category: 'backend', icon: '🐍' },
  { name: 'Golang', category: 'backend', icon: '🐹' },
  // Databases
  { name: 'MySQL', category: 'database', icon: '🗄️' },
  { name: 'MongoDB', category: 'database', icon: '🍃' },
  // API
  { name: 'GraphQL', category: 'api', icon: '◈' },
  { name: 'RESTful API', category: 'api', icon: '🌐' },
  // Tools
  { name: 'Jest', category: 'tools', icon: '🧪' },
  { name: 'Webpack', category: 'tools', icon: '📦' },
  { name: 'Github CI', category: 'tools', icon: '🔄' }
]

const categoryConfig = {
  frontend: { label: 'Frontend', color: 'from-violet-600 to-pink-600', borderColor: 'border-violet-200', bgLight: 'bg-violet-50', bgHover: 'hover:bg-violet-600' },
  backend: { label: 'Backend', color: 'from-pink-600 to-rose-600', borderColor: 'border-pink-200', bgLight: 'bg-pink-50', bgHover: 'hover:bg-pink-600' },
  database: { label: 'Databases', color: 'from-amber-500 to-orange-500', borderColor: 'border-amber-200', bgLight: 'bg-amber-50', bgHover: 'hover:bg-amber-500' },
  api: { label: 'API', color: 'from-emerald-500 to-teal-500', borderColor: 'border-emerald-200', bgLight: 'bg-emerald-50', bgHover: 'hover:bg-emerald-500' },
  tools: { label: 'Tools', color: 'from-cyan-600 to-blue-600', borderColor: 'border-cyan-200', bgLight: 'bg-cyan-50', bgHover: 'hover:bg-cyan-600' }
}

const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>

export function SkillsCloud({ onSkillClick, selectedSkill }: { onSkillClick: (skill: string) => void; selectedSkill: string | null }) {
  const handleClick = (skill: string) => {
    console.log('SkillsCloud handleClick:', skill)
    onSkillClick(skill)
  }

  const handleKeyDown = (skill: string, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      console.log('SkillsCloud handleKeyDown:', skill)
      e.preventDefault()
      e.stopPropagation()
      onSkillClick(skill)
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto py-8 sm:py-10">
      {categories.map((category) => {
        const config = categoryConfig[category]
        const categorySkills = skills.filter(s => s.category === category)

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: categories.indexOf(category) * 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-600">{config.label}</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categorySkills.map((skill) => {
                const isSelected = selectedSkill === skill.name
                return (
                  <motion.button
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => handleClick(skill.name)}
                    onKeyDown={(e) => handleKeyDown(skill.name, e)}
                    className={cn(
                      'px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all relative',
                      'border border-slate-200 bg-white shadow-sm hover:shadow-md',
                      'focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-violet-500',
                      isSelected ? `${config.borderColor} shadow-lg ${config.bgHover} text-white bg-gradient-to-r ${categoryConfig[category].color}` : `border-slate-200 text-slate-600 hover:border-violet-300 ${config.bgLight}`
                    )}
                  >
                    <span className="mr-1.5 sm:mr-2">{skill.icon}</span>
                    {skill.name}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
