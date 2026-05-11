'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Within minutes I felt incredibly comfortable. His wealth of knowledge and experiences have helped me become much more confident in my role.',
    attribution: 'Coaching client',
  },
  {
    quote:
      'He is a consummate joiner of dots, connecting people, organisations, and ideas. His network of businesses and business leaders is second to none.',
    attribution: 'Business connection client',
  },
  {
    quote:
      'Brian was the keynote speaker for our enterprise week and delivered a fantastic talk that had students talking about it for days after.',
    attribution: 'College event organiser',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.15 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
    },
  }

  return (
    <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
        className="mb-16"
      >
        <h2 className="section-heading text-white mb-4">What people say</h2>
        <p className="text-base" style={{ color: '#AAAAAA' }}>
          In their words, not mine.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {testimonials.map((t) => (
          <motion.figure
            key={t.attribution}
            variants={cardVariants}
            className="pl-6"
            style={{ borderLeft: '3px solid #D4920A' }}
          >
            <blockquote
              className="mb-4 leading-relaxed"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontStyle: 'italic',
                fontSize: '15px',
                color: '#ffffff',
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption
              className="text-[13px]"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              {t.attribution}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  )
}
