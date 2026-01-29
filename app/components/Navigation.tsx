'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Navigation({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tabs = [
    { id: 'journey', label: 'My Journey' },
    { id: 'work', label: 'My Work' },
    { id: 'connect', label: 'Connect' }
  ]

  return (
    <>
      {/* Desktop nav */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex gap-2 px-4 py-3 glass rounded-16 border border-slate-200/8">
        {tabs.map(tab => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'default' : 'ghost'}
            size="sm"
            className="text-slate-600"
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-5 right-4 z-50 p-2 glass rounded-12 border border-slate-200/8"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-20 left-1/2 -translate-x-1/2 glass rounded-16 border border-slate-200/8 p-2 flex flex-col gap-2 w-max">
            {tabs.map(tab => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'ghost'}
                size="sm"
                className="text-slate-600"
                onClick={() => {
                  onTabChange(tab.id)
                  setIsMobileMenuOpen(false)
                }}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
