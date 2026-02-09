'use client'

import { useState, useEffect, useRef } from 'react'

const themes = [
  {
    id: 'warm',
    label: 'Warm',
    colors: ['#faf8f5', '#b45309', '#c2410c', '#4d7c5e'],
  },
  {
    id: 'cool',
    label: 'Cool',
    colors: ['#f0f4f8', '#2563eb', '#0891b2', '#7c3aed'],
  },
  {
    id: 'lavender',
    label: 'Lavender',
    colors: ['#f5f3ff', '#7c3aed', '#db2777', '#4f46e5'],
  },
  {
    id: 'dark',
    label: 'Dark',
    colors: ['#0f0f1a', '#818cf8', '#34d399', '#fbbf24'],
  },
]

function getStoredTheme(): string {
  if (typeof window === 'undefined') return 'warm'
  return localStorage.getItem('theme') || 'warm'
}

function ThemeSwitcherInner() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(getStoredTheme)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only sync the DOM attribute — no setState needed
    document.documentElement.setAttribute('data-theme', getStoredTheme())
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchTheme = (themeId: string) => {
    setCurrentTheme(themeId)
    document.documentElement.setAttribute('data-theme', themeId)
    localStorage.setItem('theme', themeId)
    setIsOpen(false)
  }

  const current = themes.find(t => t.id === currentTheme) || themes[0]

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-50">
      {/* Theme options panel */}
      {isOpen && (
        <div
          className="absolute bottom-16 right-0 p-3 rounded-2xl border shadow-xl min-w-[200px]"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          }}
        >
          <div
            className="text-xs font-semibold uppercase tracking-wider mb-3 px-2"
            style={{ color: 'var(--text-muted)' }}
          >
            Theme
          </div>
          <div className="flex flex-col gap-1">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => switchTheme(theme.id)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 w-full text-left"
                style={{
                  background: currentTheme === theme.id ? 'var(--accent-1-light)' : 'transparent',
                  color: currentTheme === theme.id ? 'var(--accent-1)' : 'var(--text-body)',
                }}
              >
                <div className="flex gap-1">
                  {theme.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{
                        background: color,
                        border: theme.id === 'dark' && i === 0
                          ? '1.5px solid rgba(255,255,255,0.2)'
                          : '1.5px solid rgba(0,0,0,0.08)',
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{theme.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full border shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-xl"
        style={{
          background: 'var(--bg-card)',
          borderColor: 'var(--border)',
        }}
        aria-label="Switch theme"
      >
        <div className="grid grid-cols-2 gap-0.5">
          {current.colors.slice(1).map((color, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: color }}
            />
          ))}
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: current.colors[0], border: '1px solid var(--border)' }}
          />
        </div>
      </button>
    </div>
  )
}

// Wrapper that only renders on client to avoid hydration mismatch
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null
  return <ThemeSwitcherInner />
}
