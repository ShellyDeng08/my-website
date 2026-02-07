"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navigation({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "connect", label: "Connect" },
  ];

  return (
    <>
      {/* Desktop nav - light theme */}
      <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex gap-2 px-6 py-3 rounded-2xl border border-slate-200 bg-white/90 shadow-xl shadow-slate-200/50 backdrop-blur-xl">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "ghost"}
            size="lg"
            className="text-slate-700 hover:text-violet-600 font-semibold text-sm sm:text-base px-4 sm:px-6 transition-colors"
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </nav>

      {/* Mobile menu button - light theme */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2.5 glass rounded-xl border border-slate-200 bg-white/90 shadow-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none transition-all"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile menu - light theme */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 glass rounded-2xl border border-slate-200 bg-white/95 shadow-2xl p-2 flex flex-col gap-1 w-max min-w-[200px] animate-in zoom-in-95 duration-200">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                className="text-slate-700 hover:text-violet-600 hover:bg-violet-50 font-medium justify-start"
                onClick={() => {
                  onTabChange(tab.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
