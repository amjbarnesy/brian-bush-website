'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Relationships first',
    body: 'Everything starts with Know / Like / Trust. If we don\'t have a genuine relationship that covers all three, we won\'t be working together — because without that foundation, real understanding isn\'t possible.',
  },
  {
    number: '02',
    title: 'Honest about fit',
    body: 'I won\'t take work where I don\'t believe I can genuinely help. I\'ll tell you that honestly. If I can\'t help you directly, I will almost certainly know someone who can.',
  },
  {
    number: '03',
    title: 'Network as an asset',
    body: 'A large, active global network built over decades. Warm introductions to the exact right people — built on trust that already exists.',
  },
]

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export default function HowIWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="overview-detail" className="py-32 max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: orbital SVG */}
        <div className="flex justify-center">
          <OrbitalRings />
        </div>

        {/* Right: steps */}
        <div className="space-y-14">
          {steps.map((step, i) => (
            <StepItem key={step.number} step={step} delay={i * 0.15} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepItem({
  step,
  delay,
  isInView,
}: {
  step: (typeof steps)[0]
  delay: number
  isInView: boolean
}) {
  const ref = useRef(null)
  const stepInView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()
  const active = stepInView

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease, delay }}
    >
      <p
        className="text-xs font-medium mb-3 tracking-widest"
        style={{
          color: active ? '#D4920A' : 'rgba(255,255,255,0.3)',
          letterSpacing: '0.1em',
          fontSize: '12px',
          transition: 'color 0.4s ease',
        }}
      >
        {step.number}
      </p>
      <h3
        className="text-xl font-semibold mb-3"
        style={{ color: '#ffffff', letterSpacing: '-0.01em' }}
      >
        {step.title}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: '#AAAAAA' }}>
        {step.body}
      </p>
    </motion.div>
  )
}

function OrbitalRings() {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className="max-w-full"
    >
      {/* Outer ring */}
      <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" opacity="0.07" />
      {/* Middle ring */}
      <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="1" opacity="0.15" />
      {/* Inner ring — amber */}
      <circle cx="200" cy="200" r="60" stroke="#D4920A" strokeWidth="1.5" opacity="0.7" />
      {/* Centre dot */}
      <circle cx="200" cy="200" r="6" fill="#D4920A" opacity="0.8" />
      {/* Orbit nodes */}
      <circle cx="200" cy="20" r="4" fill="white" opacity="0.2" />
      <circle cx="380" cy="200" r="4" fill="white" opacity="0.2" />
      <circle cx="200" cy="380" r="4" fill="white" opacity="0.2" />
      <circle cx="20" cy="200" r="4" fill="white" opacity="0.2" />
      {/* Inner orbit nodes — amber */}
      <circle cx="200" cy="140" r="3" fill="#D4920A" opacity="0.5" />
      <circle cx="260" cy="200" r="3" fill="#D4920A" opacity="0.5" />
      <circle cx="200" cy="260" r="3" fill="#D4920A" opacity="0.5" />
      <circle cx="140" cy="200" r="3" fill="#D4920A" opacity="0.5" />
    </svg>
  )
}
