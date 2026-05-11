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
      "We all have areas where we feel stuck, uncertain, or out of our depth. Sometimes we have been promoted without being properly prepared. Sometimes we are managing people or running a business without ever having been trained to do so. Sometimes we simply cannot see a way forward because we are too close to the problem. I have coached people through difficult personal circumstances, leadership challenges, lack of self-belief, major life changes, and environments that were holding them back. My approach is direct, human, and entirely focused on what the individual actually needs. Not a generic programme. Not a one-size-fits-all process.",
  },
  {
    Icon: TrendingUp,
    title: 'Commercial Strategy & Business Development',
    description:
      "I work with leadership teams and boards to get absolute clarity on what they offer, who they should be offering it to, and why those people should care. Strategy without execution is just a document. I help organisations develop a clear sense of purpose that both customers and employees can genuinely align with, and then I help deliver it. Through my network I can open doors to markets, sectors, companies, and individuals. If you have a target list of prospective customers, the chances are I already know some of them. That makes the introduction easy, natural, and built on existing trust.",
  },
  {
    Icon: Network,
    title: 'People Connection',
    description:
      "I have been connecting people for as long as I can remember, long before it had a professional label attached to it. I have a natural ability to recognise how two people should know one another and what becomes possible when they do. I connect individuals to opportunity. I connect businesses to one another. I connect charities to commercial partners. I connect sectors such as education to healthcare, where synergies exist but the right introduction has never been made. Sometimes there is a direct commercial application. Sometimes it is simply that two human beings will be better for knowing each other. Either way, I make the connection.",
  },
  {
    Icon: GraduationCap,
    title: 'Learning & Development',
    description:
      "Growth does not stop the moment we leave education, or at least it should not. Yet for many people, formal learning does stop, and with it the ability to adapt, evolve, and deal confidently with new situations. I deliver learning and development sessions across a wide range of organisations, covering both hard technical skills and the softer, more fluid skills that are often harder to measure but equally, if not more, important. My sessions are designed to be engaging, enjoyable, and built to actually stick. Different people learn at different speeds and in different ways, and it is my responsibility to meet them where they are.",
  },
  {
    Icon: LinkedinIcon,
    title: 'Social Connection',
    description:
      "LinkedIn is one of the most powerful professional platforms available, and most people are using it poorly. I have seen businesses misuse it entirely, salespeople pushing products nobody wants, and professionals who have a presence but zero engagement. I work with individuals, teams, and boards to help them understand the platform properly: how to build a credible presence, how to create content that resonates, and how to use LinkedIn strategically to attract the right buyers to their brand. With over 600 million users visible on the platform, your audience is there. The question is whether they can find you, and whether they like what they see when they do.",
  },
  {
    Icon: Mic,
    title: 'Speaking',
    description:
      "I am a confident, humorous, and engaging speaker who genuinely loves an audience, whether that is a small team meeting or a large conference. I have spoken and presented at events across the UK, hosted conferences, chaired sessions, and taken part in panel discussions. I work hard to make sure a room is motivated, involved, and walking away with something they did not have before they arrived. If you are looking for someone who will bring energy, substance, and a little bit of personality to your event, let's talk.",
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
