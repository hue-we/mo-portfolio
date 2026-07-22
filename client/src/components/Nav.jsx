export default function Nav() {
  const links = [
    { label: 'about', href: '#about' },
    { label: 'work', href: '#work' },
    { label: 'contact', href: '#contact' }
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5 bg-ink/80 backdrop-blur-sm border-b border-line">
      <a href="#top" className="font-mono text-xs tracking-widest text-bone uppercase focus-ring">
        Mongezi Mabuza
      </a>
      <nav className="flex gap-6 font-mono text-xs tracking-widest uppercase">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="text-bone/80 hover:text-gold transition-colors focus-ring">
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
