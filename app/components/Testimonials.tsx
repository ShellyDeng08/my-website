'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Engineering Manager',
    company: 'TikTok',
    quote: 'Shelly is one of the most driven engineers I&apos;ve had the pleasure of working with. Her ability to tackle complex technical challenges while maintaining a clear focus on user experience is exceptional.'
  },
  {
    name: 'Sarah Martinez',
    role: 'Tech Lead',
    company: 'Blitz',
    quote: 'Working with Shelly has been a great experience. She brings not just technical expertise but also excellent communication skills and a collaborative mindset that elevates the entire team.'
  },
  {
    name: 'David Park',
    role: 'Senior Developer',
    company: 'Trip.com Group',
    quote: 'Shelly played a key role in our successful tech stack migration. Her understanding of both frontend and backend technologies made her invaluable to our team&apos;s growth.'
  }
]

export function Testimonials() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#fafafa]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
        What People Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass bg-white/80 shadow-lg border border-slate-200 rounded-2xl p-6 sm:p-8 hover-lift"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="text-sm sm:text-base">
                <div className="font-bold text-slate-800">
                  {testimonial.name}
                </div>
                <div className="text-slate-500">
                  {testimonial.role} @ {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
