"use client";

import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-16 flex items-center justify-between backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
        style={{
          background: "var(--nav-bg)",
          borderBottom: scrolled ? "1px solid var(--nav-border)" : "1px solid transparent",
        }}
      >
        <a
          href="#"
          className="text-base font-bold"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            color: "var(--text-heading)",
          }}
        >
          Shelly Deng
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-100"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-heading)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: "var(--text-heading)" }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMobileOpen(false)}
          style={{ background: "rgba(0,0,0,0.2)", backdropFilter: "blur(4px)" }}
        >
          <div
            className="fixed top-16 left-4 right-4 rounded-2xl border p-2 flex flex-col gap-1 shadow-xl"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{ color: "var(--text-body)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
