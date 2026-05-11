'use client'

import { motion, useReducedMotion } from 'framer-motion'

const words = [
  { text: 'Brian', amber: true },
  { text: 'Bush', amber: true },
  { text: 'grows', amber: false },
  { text: 'people,', amber: false },
  { text: 'businesses,', amber: false },
  { text: 'and', amber: false },
  { text: 'ideas.', amber: false },
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08, delayChildren: 0.2 },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  }

  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      <HeroBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        <motion.p
          className="text-sm font-medium mb-8"
          style={{ color: 'var(--bb-faint)', letterSpacing: '0.1em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Norfolk · UK · Global Network
        </motion.p>

        <motion.h1
          className="hero-heading mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label="Brian Bush grows people, businesses, and ideas."
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.2em]"
              style={{ color: word.amber ? '#D4920A' : 'var(--bb-text)' }}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-base leading-relaxed mb-10 max-w-[520px]"
          style={{ color: 'var(--bb-muted)' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          Nearly 40 years of experience in coaching, business development,
          connection, and speaking. Everything built on one foundation: people.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.85 }}
        >
          <a
            href="#contact"
            className="rounded-full bg-amber px-7 py-3 text-[15px] font-semibold text-white hover:bg-amber-light transition-colors duration-200"
          >
            Let&apos;s talk →
          </a>
          <a
            href="#what-i-do"
            className="rounded-full border px-7 py-3 text-[15px] font-medium transition-colors duration-200"
            style={{
              color: 'var(--bb-text)',
              borderColor: 'var(--bb-border-ghost)',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--bb-pill-bg)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
          >
            See what I do
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function HeroBackground() {
  const rects = [
    { x: 420, y: -60, w: 580, h: 420, rx: 32, rotate: -8, opacity: 0.07 },
    { x: 520, y: 80, w: 560, h: 400, rx: 28, rotate: -3, opacity: 0.06 },
    { x: 350, y: 200, w: 620, h: 440, rx: 36, rotate: 4, opacity: 0.05 },
    { x: 600, y: 320, w: 500, h: 360, rx: 24, rotate: 10, opacity: 0.04 },
  ]

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 900"
    >
      {rects.map((r, i) => (
        <rect
          key={i}
          x={r.x}
          y={r.y}
          width={r.w}
          height={r.h}
          rx={r.rx}
          fill="none"
          stroke="var(--bb-text)"
          strokeWidth="1.5"
          opacity={r.opacity}
          transform={`rotate(${r.rotate}, ${r.x + r.w / 2}, ${r.y + r.h / 2})`}
        />
      ))}
    </svg>
  )
}
