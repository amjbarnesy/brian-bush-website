'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const credentials = [
  'Ambassador, JDRF',
  'Business Ambassador, Norfolk Diabetes Trust',
  'Co-founder, Engaging Norfolk',
  'FA-licensed football coach since 2012',
]

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  const y = prefersReducedMotion ? 0 : 40
  const animate = isInView ? { opacity: 1, y: 0 } : {}

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Ambient warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(212,146,10,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          className="text-sm font-medium mb-6 tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', fontSize: '12px' }}
          initial={{ opacity: 0, y }}
          animate={animate}
          transition={{ duration: 0.7, ease, delay: 0 }}
        >
          About Brian
        </motion.p>

        <motion.h2
          className="section-heading text-white mb-10 max-w-2xl"
          initial={{ opacity: 0, y }}
          animate={animate}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          I don&apos;t sit in a box.
          <br />
          People don&apos;t either.
        </motion.h2>

        <div className="max-w-2xl space-y-6">
          <motion.p
            className="text-base leading-relaxed"
            style={{ color: '#AAAAAA' }}
            initial={{ opacity: 0, y }}
            animate={animate}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            My career has never followed a straight line, and that is entirely intentional. From
            selling ice cream at 16 to working at board level, every role and every sector has added
            to a deep understanding of what people need, what holds them back, and how to move them
            forward.
          </motion.p>

          <motion.p
            className="text-base leading-relaxed"
            style={{ color: '#AAAAAA' }}
            initial={{ opacity: 0, y }}
            animate={animate}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
          >
            I have developed a large and active global network over many years. Warm introductions,
            trusted referrals, and direct access to decision-makers. This is what separates a promising
            idea from a real opportunity.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap gap-3 mt-10"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={animate}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
        >
          {credentials.map((c) => (
            <span
              key={c}
              className="rounded-full border px-[18px] py-2 text-[13px]"
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderColor: 'rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
