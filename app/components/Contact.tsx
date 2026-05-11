'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

// Replace with your Formspree form ID from formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const inputStyle = {
  background: 'var(--bb-card)',
  borderColor: 'var(--bb-border-md)',
  color: 'var(--bb-text)',
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()
  const [status, setStatus] = useState<Status>('idle')

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease, delay },
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const form = e.currentTarget
      const data = new FormData(form)
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const baseInputClass =
    'w-full rounded-full border px-5 py-3 text-sm focus:outline-none transition-colors duration-200'
  const textareaClass =
    'w-full rounded-2xl border px-5 py-4 text-sm focus:outline-none transition-colors duration-200 resize-none'

  return (
    <section id="contact" className="py-32 max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
      <div className="max-w-xl mx-auto text-center">
        <motion.h2 className="section-heading mb-4" {...fadeUp(0)}>
          <span style={{ color: 'var(--bb-text)' }}>Ready to start a</span>
          <br />
          <span style={{ color: '#D4920A' }}>conversation?</span>
        </motion.h2>

        <motion.p
          className="text-base mb-12"
          style={{ color: 'var(--bb-muted)' }}
          {...fadeUp(0.1)}
        >
          I will tell you honestly whether I can help, and if I cannot, I will know someone who can.
        </motion.p>

        <motion.div {...fadeUp(0.2)}>
          {status === 'success' ? (
            <div
              className="rounded-2xl border p-10 text-center"
              style={{ background: 'var(--bb-card)', borderColor: 'var(--bb-border)' }}
            >
              <p className="text-lg font-medium mb-2" style={{ color: 'var(--bb-text)' }}>
                Message sent.
              </p>
              <p className="text-sm" style={{ color: 'var(--bb-muted)' }}>
                I&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="name" className="sr-only">Your name</label>
                <input
                  id="name" name="name" type="text" required
                  placeholder="Your name"
                  className={baseInputClass}
                  style={inputStyle}
                  disabled={status === 'submitting'}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your email</label>
                <input
                  id="email" name="email" type="email" required
                  placeholder="Your email"
                  className={baseInputClass}
                  style={inputStyle}
                  disabled={status === 'submitting'}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your message</label>
                <textarea
                  id="message" name="message" required rows={5}
                  placeholder="Your message"
                  className={textareaClass}
                  style={inputStyle}
                  disabled={status === 'submitting'}
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or reach out directly on LinkedIn.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-full bg-amber py-3 text-[15px] font-semibold text-white hover:bg-amber-light transition-colors duration-200 disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending...' : 'Send message →'}
              </button>
            </form>
          )}

          <div
            className="mt-10 pt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm"
            style={{ borderTop: '1px solid var(--bb-border)', color: 'var(--bb-dim)' }}
          >
            <a
              href="https://linkedin.com/in/bbushonline"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--bb-muted)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--bb-dim)')}
            >
              linkedin.com/in/bbushonline
            </a>
            <span className="hidden sm:block">·</span>
            <a
              href="https://x.com/bbushonline"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--bb-muted)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--bb-dim)')}
            >
              @bbushonline
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
