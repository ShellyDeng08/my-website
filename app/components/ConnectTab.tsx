'use client'

import { Mail, Linkedin, Github, CircleCheck } from 'lucide-react'
import { MagneticButton } from './MagneticButton'

export function ConnectTab() {

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>

      {/* Availability Card */}
      <div className="glass rounded-2xl border border-slate-200/8 p-12 max-w-md mx-auto cursor-pointer hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-center gap-3 text-3xl font-bold mb-2 text-cyan-500">
          <CircleCheck className="w-8 h-8" />
          Open to Opportunities
        </div>
        <div className="text-slate-400">Contact details above</div>
      </div>

      {/* Magnetic Buttons */}
      <div className="flex gap-4 mt-8 justify-center flex-wrap">
        <MagneticButton color="#8b5cf6" icon={<Mail className="w-6 h-6 text-purple-500" />} href="mailto:xldeng0808@gmail.com">
          Email
        </MagneticButton>
        <MagneticButton color="#ec4899" icon={<Linkedin className="w-6 h-6 text-pink-500" />} href="https://linkedin.com/in/shelly-deng">
          LinkedIn
        </MagneticButton>
        <MagneticButton color="#06b6d4" icon={<Github className="w-6 h-6 text-cyan-500" />} href="https://github.com/shellydeng">
          GitHub
        </MagneticButton>
      </div>
    </div>
  )
}
