export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-line flex items-center justify-between font-mono text-xs text-muted uppercase tracking-widest">
      <span>&copy; {new Date().getFullYear()} Mongezi Mabuza</span>
      <a href="#top" className="hover:text-gold transition-colors focus-ring">Back to top</a>
    </footer>
  )
}
