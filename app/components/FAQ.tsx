'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence, useReducedMotion } from 'framer-motion'

const faqs = [
  {
    question: 'Who do you typically work with?',
    answer:
      "Individuals and organisations of all sizes, from founders and sole traders to leadership teams and boards. The common thread is that they are serious about growth, open to challenge, and ready to commit to doing the work.",
  },
  {
    question: 'How does coaching with you actually work?',
    answer:
      "We start with a conversation, no charge and no agenda, to establish whether there is a genuine fit. If there is, we agree on what we are working towards, how often we meet, and how we will measure progress. My approach is direct and human. It is never a generic programme.",
  },
  {
    question: 'What does "people connection" mean in practice?',
    answer:
      "It means I look at who you need to know in order to grow and make warm introductions using my existing network. These are not cold emails. They are genuine referrals built on relationships that already exist. If you have a target list, the chances are I already know some of the people on it.",
  },
  {
    question: 'Can you help with LinkedIn even if I already have a following?',
    answer:
      "Yes, and in fact this is often where the biggest gains are. Having a following and using LinkedIn strategically are two very different things. I work with individuals and boards to build credibility and create content that genuinely resonates.",
  },
  {
    question: 'Do you work outside Norfolk?',
    answer:
      "Absolutely. My network and my work are both global. I am based in Norfolk and it is where I am happiest, but I work with clients and speak at events across the UK and internationally.",
  },
  {
    question: "How do I know if we're a good fit?",
    answer:
      "We have a conversation first. I won't take on work where I don't believe I can genuinely help, and I will tell you that honestly. If I can't help you directly, I will almost certainly know someone who can. That is the whole point.",
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

  return (
    <section id="faq" className="py-32 max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="mb-14"
      >
        <p className="section-label">FAQ</p>
        <p className="mt-3 text-base" style={{ color: 'var(--bb-muted)' }}>
          Every question has an answer.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl"
      >
        {faqs.map((faq, i) => (
          <FAQItem
            key={faq.question}
            faq={faq}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </motion.div>
    </section>
  )
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="py-6" style={{ borderTop: '1px solid var(--bb-border)' }}>
      <button
        className="w-full flex items-start justify-between gap-6 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className="text-[18px] font-medium leading-snug transition-colors"
          style={{ color: isOpen ? 'var(--bb-text)' : 'var(--bb-faq-q)' }}
        >
          {faq.question}
        </span>
        <span
          className="text-2xl font-light mt-0.5 shrink-0 transition-transform duration-300"
          style={{
            color: isOpen ? '#D4920A' : 'var(--bb-dim)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pt-4 text-base leading-relaxed" style={{ color: 'var(--bb-muted)' }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
