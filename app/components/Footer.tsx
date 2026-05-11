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
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[14px] font-medium text-white">Brian Bush</span>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[12px] text-white/35 hover:text-white/65 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <span className="text-[12px] text-white/25">© 2026</span>
      </div>
    </footer>
  )
}
