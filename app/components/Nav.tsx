'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'What I do', href: '#what-i-do' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  function closeMenu() { setMenuOpen(false) }

  return (
    <>
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <nav
          className="flex items-center justify-between gap-4 rounded-full border px-3 py-2"
          style={{
            background: scrolled || menuOpen ? 'rgba(34,34,34,0.82)' : 'rgba(34,34,34,0.55)',
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
            onClick={closeMenu}
          >
            <BBMonogram />
          </a>

          {/* Desktop nav links */}
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

          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:block shrink-0 rounded-full bg-amber px-5 py-2 text-[14px] font-semibold text-white hover:bg-amber-light transition-colors duration-200"
            >
              Let&apos;s talk →
            </a>

            {/* Mobile: CTA + hamburger */}
            <a
              href="#contact"
              className="md:hidden shrink-0 rounded-full bg-amber px-4 py-2 text-[13px] font-semibold text-white hover:bg-amber-light transition-colors duration-200"
              onClick={closeMenu}
            >
              Let&apos;s talk
            </a>
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full hover:bg-white/5 transition-colors duration-200"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className="block w-4 h-px bg-white transition-all duration-300"
                style={{
                  transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-4 h-px bg-white mt-1.5 transition-all duration-300"
                style={{
                  transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
                  opacity: menuOpen ? 1 : 1,
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-24 left-4 right-4 z-40 rounded-2xl border overflow-hidden md:hidden"
            style={{
              background: 'rgba(34,34,34,0.82)',
              borderColor: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <ul className="py-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-6 py-4 text-[16px] text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-6 pt-4 pb-3">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block w-full text-center rounded-full bg-amber py-3 text-[15px] font-semibold text-white hover:bg-amber-light transition-colors duration-200"
                >
                  Let&apos;s talk →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
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
