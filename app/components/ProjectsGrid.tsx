'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    name: 'AI Interview Assistant',
    description: 'Intelligent interview preparation platform with real-time feedback and personalized question generation powered by AI.',
    tech: ['React', 'Next.js', 'OpenAI API']
  },
  {
    name: 'SaaS Platform',
    description: 'Full-featured SaaS application with subscription management, analytics dashboard, and team collaboration tools.',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL']
  },
  {
    name: 'Performance Dashboard',
    description: 'Real-time monitoring dashboard for application performance with customizable alerts and beautiful visualizations.',
    tech: ['React', 'TypeScript', 'D3.js']
  }
]

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <Card className="hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-purple-500/20 hover:border-purple-500">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <p className="text-slate-400 mt-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map(tech => (
                <span
                  key={tech}
                  className="bg-purple-500/10 text-purple-500 px-3 py-1 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
