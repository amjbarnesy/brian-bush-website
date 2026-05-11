'use client'

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'What I do', href: '#what-i-do' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer
      className="px-6 lg:px-12 py-6"
      style={{ borderTop: '1px solid var(--bb-border-footer)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[14px] font-medium" style={{ color: 'var(--bb-text)' }}>
          Brian Bush
        </span>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[12px] transition-colors duration-200"
                  style={{ color: 'var(--bb-faint)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--bb-muted)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--bb-faint)')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <span className="text-[12px]" style={{ color: 'var(--bb-faint)', opacity: 0.6 }}>
          © 2026
        </span>
      </div>
    </footer>
  )
}
