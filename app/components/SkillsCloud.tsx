'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '../hooks/useReducedMotion'

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
  frontend: { label: 'Frontend', color: 'from-purple-500 to-pink-500', borderColor: 'border-purple-500/30' },
  backend: { label: 'Backend', color: 'from-pink-500 to-rose-500', borderColor: 'border-pink-500/30' },
  database: { label: 'Databases', color: 'from-amber-500 to-orange-500', borderColor: 'border-amber-500/30' },
  api: { label: 'API', color: 'from-green-500 to-emerald-500', borderColor: 'border-green-500/30' },
  tools: { label: 'Tools', color: 'from-cyan-500 to-blue-500', borderColor: 'border-cyan-500/30' }
}

const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>

export function SkillsCloud({ onSkillClick, selectedSkill }: { onSkillClick: (skill: string) => void; selectedSkill: string | null }) {
  const prefersReducedMotion = useReducedMotion()

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
    <div className="w-full max-w-5xl mx-auto py-8">
      {categories.map((category) => {
        const config = categoryConfig[category]
        const categorySkills = skills.filter(s => s.category === category)

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: categories.indexOf(category) * 0.1 }}
            className="mb-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-slate-300">{config.label}</h3>
            <div className="flex flex-wrap gap-3">
              {categorySkills.map((skill, index) => {
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
                      'glass px-4 py-2.5 rounded-xl text-sm font-medium transition-all relative',
                      'border border-white/10',
                      'focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-offset-2',
                      isSelected ? `${config.borderColor} shadow-lg shadow-${category.replace('frontend', 'purple').replace('backend', 'pink').replace('database', 'amber').replace('api', 'green').replace('tools', 'cyan')}-500/20 bg-gradient-to-r ${categoryConfig[category].color} bg-clip-text text-transparent` : 'border-slate-200/10 text-slate-300 hover:border-white/30 hover:bg-white/5'
                    )}
                  >
                    <span className="mr-2">{skill.icon}</span>
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
