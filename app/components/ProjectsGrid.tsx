'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    name: 'SSR Architecture Optimization',
    description: 'Maintained and optimized custom server-side rendering (SSR) architecture, reducing app crash rates by 20% through memory usage improvements.',
    tech: ['Node.js', 'React', 'SSR'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Permission Management System',
    description: 'Designed and developed API, backend processing, and database schema adopted by 10+ business units to enhance security and efficiency.',
    tech: ['Python', 'Golang', 'MySQL'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Quality Monitoring Dashboard',
    description: 'Led system design for quality monitoring, reducing TikTok Live Wallet online incidents by 30% and improving platform reliability.',
    tech: ['Python', 'Golang', 'MySQL'],
    color: 'from-pink-500 to-purple-500'
  }
]

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="group"
        >
          <div className="glass rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden">
            {/* Gradient background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-500`} />

            <div className="relative">
              {/* Project name with gradient */}
              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent border border-current/20 px-3 py-1 rounded-lg text-xs font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action links */}
              <div className="flex gap-3">
                <button
                  className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  aria-label="View project details"
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </button>
                <button
                  className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  aria-label="View source code"
                >
                  <Github className="w-4 h-4" />
                  Code
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
