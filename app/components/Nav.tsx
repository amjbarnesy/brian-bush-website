'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import BBLogo from './BBLogo'

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'What I do', href: '#what-i-do' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  function closeMenu() { setMenuOpen(false) }
  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <>
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <nav
          className="flex items-center justify-between gap-4 rounded-full border px-3 py-2"
          style={{
            background: scrolled || menuOpen ? 'var(--bb-nav-solid)' : 'var(--bb-nav)',
            borderColor: 'var(--bb-border)',
            backdropFilter: 'blur(12px)',
            transition: prefersReducedMotion ? 'none' : 'background 0.3s ease',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center justify-center rounded-full px-4 py-2 shrink-0"
            style={{ background: 'var(--bb-elevated)', color: 'var(--bb-text)' }}
            aria-label="Brian Bush, return to top"
            onClick={closeMenu}
          >
            <BBLogo height={24} />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 text-[15px] rounded-full transition-colors duration-200"
                  style={{ color: 'var(--bb-nav-link)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--bb-nav-link-hover)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--bb-nav-link)')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 hover:bg-white/5"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Light mode' : 'Dark mode'}
              >
                {isDark
                  ? <Sun size={16} style={{ color: 'var(--bb-toggle-icon)' }} strokeWidth={1.5} />
                  : <Moon size={16} style={{ color: 'var(--bb-toggle-icon)' }} strokeWidth={1.5} />
                }
              </button>
            )}

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:block shrink-0 rounded-full bg-amber px-5 py-2 text-[14px] font-semibold text-white hover:bg-amber-light transition-colors duration-200"
            >
              Let&apos;s talk →
            </a>

            {/* Mobile CTA + hamburger */}
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
                className="block w-4 h-px transition-all duration-300"
                style={{
                  background: 'var(--bb-text)',
                  transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-4 h-px mt-1.5 transition-all duration-300"
                style={{
                  background: 'var(--bb-text)',
                  transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile dropdown */}
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
              background: 'var(--bb-nav-solid)',
              borderColor: 'var(--bb-border)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <ul className="py-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-6 py-4 text-[16px] transition-colors duration-200"
                    style={{
                      color: 'var(--bb-nav-link)',
                      borderBottom: '1px solid var(--bb-border)',
                    }}
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

