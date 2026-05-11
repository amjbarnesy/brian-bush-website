'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import {
  Brain,
  TrendingUp,
  Network,
  GraduationCap,
  Mic,
  type LucideProps,
} from 'lucide-react'

type IconComponent = React.ComponentType<LucideProps> | ((props: { size: number }) => React.ReactElement)

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="2" y="9" width="4" height="12"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

const services: { Icon: IconComponent; title: string; description: string; id?: string }[] = [
  {
    Icon: Brain,
    title: 'Coaching',
    description:
      'Get out of your own way. For leaders, founders, and people navigating big change. Direct, human, built entirely around what you actually need — not a generic programme.',
  },
  {
    Icon: TrendingUp,
    title: 'Commercial strategy',
    description:
      'Clarity on what you offer, who needs it, and why they should care. Strategy that actually gets delivered, not just documented. Through my network I can open doors to markets and decision-makers.',
  },
  {
    Icon: Network,
    title: 'People connection',
    description:
      'A large global network built over decades. Warm introductions to the exact people your business needs to know. If you have a target list, the chances are I already know some of them.',
  },
  {
    Icon: GraduationCap,
    title: 'Learning & development',
    description:
      'Engaging sessions across hard technical skills and the softer skills that are harder to measure but equally important. Different people learn differently — I meet them where they are.',
  },
  {
    Icon: LinkedinIcon,
    title: 'LinkedIn & social',
    description:
      'Most people are using LinkedIn poorly. I help individuals, teams and boards build a credible presence and create content that attracts the right buyers. 600 million users — your audience is there.',
  },
  {
    Icon: Mic,
    title: 'Speaking',
    description:
      "Confident, humorous, and genuinely engaging. From team meetings to large conferences. People leave motivated, involved, and with something they didn't have before they arrived.",
    id: 'speaking',
  },
]

export default function WhatIDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
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
    <section id="what-i-do" className="py-32 max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
        className="mb-16"
      >
        <h2 className="section-heading text-white mb-4">What I do</h2>
        <p className="text-base" style={{ color: '#AAAAAA' }}>
          Every engagement is different. Here&apos;s where I typically work.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            id={service.id}
            variants={cardVariants}
            className="rounded-2xl border p-7 hover:border-white/15 transition-colors duration-300"
            style={{
              background: '#222222',
              borderColor: 'rgba(255,255,255,0.08)',
            }}
          >
            <div className="mb-4" style={{ color: '#D4920A' }}>
              <service.Icon size={20} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3
              className="font-semibold mb-2"
              style={{ fontSize: '17px', color: '#ffffff' }}
            >
              {service.title}
            </h3>
            <p
              className="leading-relaxed"
              style={{ fontSize: '14px', color: '#AAAAAA', lineHeight: '1.6' }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
