'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'What I do', href: '#what-i-do' },
  { label: 'About', href: '#about' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4"
      style={{ willChange: 'transform' }}
    >
      <nav
        className="flex items-center justify-between gap-4 rounded-full border px-3 py-2"
        style={{
          background: scrolled
            ? 'rgba(34,34,34,0.98)'
            : 'rgba(34,34,34,0.85)',
          borderColor: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
          transition: prefersReducedMotion ? 'none' : 'background 0.3s ease',
        }}
      >
        {/* Logo mark */}
        <a
          href="#"
          className="flex items-center justify-center rounded-full bg-bg-elevated px-4 py-2 shrink-0"
          aria-label="Brian Bush — home"
        >
          <BBMonogram />
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 text-[15px] text-white/60 hover:text-white/90 transition-colors duration-200 rounded-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="shrink-0 rounded-full bg-amber px-5 py-2 text-[14px] font-semibold text-white hover:bg-amber-light transition-colors duration-200"
        >
          Let&apos;s talk →
        </a>
      </nav>
    </header>
  )
}

function BBMonogram() {
  return (
    <svg width="28" height="18" viewBox="0 0 28 18" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="11" height="18" rx="3" fill="#D4920A" opacity="0.9" />
      <rect x="13" y="0" width="11" height="18" rx="3" fill="#D4920A" opacity="0.6" />
      <rect x="2" y="5" width="7" height="2.5" rx="1.25" fill="#1a1a1a" />
      <rect x="2" y="10.5" width="7" height="2.5" rx="1.25" fill="#1a1a1a" />
      <rect x="15" y="5" width="7" height="2.5" rx="1.25" fill="#1a1a1a" />
      <rect x="15" y="10.5" width="7" height="2.5" rx="1.25" fill="#1a1a1a" />
    </svg>
  )
}
