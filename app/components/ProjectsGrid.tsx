'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    name: 'SSR Architecture Optimization',
    description: 'Maintained and optimized custom server-side rendering (SSR) architecture, reducing app crash rates by 20% through memory usage improvements.',
    tech: ['Node.js', 'React', 'SSR'],
    color: 'from-violet-600 to-pink-600'
  },
  {
    name: 'Permission Management System',
    description: 'Designed and developed API, backend processing, and database schema adopted by 10+ business units to enhance security and efficiency.',
    tech: ['Python', 'Golang', 'MySQL'],
    color: 'from-cyan-600 to-blue-600'
  },
  {
    name: 'Quality Monitoring Dashboard',
    description: 'Led system design for quality monitoring, reducing TikTok Live Wallet online incidents by 30% and improving platform reliability.',
    tech: ['Python', 'Golang', 'MySQL'],
    color: 'from-pink-600 to-violet-600'
  },
  {
    name: 'Hotel Site Migration',
    description: 'Led migration of hotel site&apos;s tech stack from C# to Node.js + React, achieving 30% boost in page speed and improving developer experience.',
    tech: ['Node.js', 'React', 'TypeScript'],
    color: 'from-amber-500 to-orange-500'
  },
  {
    name: 'New Tech Repository',
    description: 'Contributed to architecture design of new tech repository including SSR, BFF layer, and component library, achieving 50% performance improvement on hotel details page.',
    tech: ['React', 'Next.js', 'TypeScript'],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'Real-time Analytics',
    description: 'Built real-time analytics pipeline for monitoring application performance and user behavior, enabling data-driven decision making.',
    tech: ['Python', 'Redis', 'WebSocket'],
    color: 'from-rose-500 to-pink-600'
  }
]

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="group"
        >
          <div className="glass bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-violet-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10 relative overflow-hidden">
            {/* Gradient background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500`} />

            <div className="relative">
              {/* Project name with gradient */}
              <h3 className={`text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-slate-500 sm:text-slate-400 text-sm leading-relaxed mb-4 sm:mb-5">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent border border-current/20 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action links */}
              <div className="flex gap-3">
                <button
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-violet-600 transition-colors"
                  aria-label="View project details"
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </button>
                <button
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-violet-600 transition-colors"
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
