import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { api } from '../lib/api.js'

const fallback = [
  {
    _id: 'fallback-0',
    title: 'This Portfolio',
    description: 'React, Node, and MongoDB — with a working admin panel behind it.',
    year: '2026',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '',
    slug: 'mo-portfolio-site'
  },
  {
    _id: 'fallback-1',
    title: 'Premier Attraction Events',
    description: 'Live client site for an events business.',
    year: '2024',
    tags: ['React', 'Netlify'],
    link: 'https://premierattractionevents.netlify.app'
  },
  {
    _id: 'fallback-2',
    title: 'Harvested Flavour — Hakunamatata',
    description: 'Speculative build for a Muldersdrift restaurant, booking backend included.',
    year: '2026',
    tags: ['Node', 'Express', 'SQLite'],
    link: '/case-study-harvested-flavour.pdf'
  },
  {
    _id: 'fallback-3',
    title: 'Cartridge & Console',
    description: 'Second-hand game marketplace — ASP.NET Core 8, React, MySQL, JWT auth.',
    year: '2026',
    tags: ['ASP.NET Core', 'React', 'MySQL', 'JWT'],
    link: '/case-study-cartridge-console.pdf'
  }
]

export default function Projects() {
  const [projects, setProjects] = useState(fallback)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    api.getProjects()
      .then((data) => {
        if (Array.isArray(data) && data.length) setProjects(data)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="work" className="px-6 md:px-10 py-28 border-t border-line">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-display font-bold uppercase text-3xl md:text-4xl text-bone">
          Selected Work
        </h2>
        <span className="font-mono text-xs text-muted uppercase tracking-widest">
          {loading ? 'fetching…' : error ? 'cached' : `${projects.length} entries`}
        </span>
      </div>

      <div className="flex flex-col">
        {projects.map((p, i) => (
          <motion.a
            key={p._id}
            href={p.slug ? `/work/${p.slug}` : p.link || undefined}
            target={!p.slug && p.link ? '_blank' : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-b border-line ${p.slug || p.link ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <span className="font-mono text-muted text-sm w-10 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-display font-bold text-xl md:text-2xl text-bone group-hover:text-gold transition-colors flex-1">
              {p.title}
              {p.slug && (
                <span className="ml-3 align-middle font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-gold transition-colors">
                  case study →
                </span>
              )}
            </span>
            <span className="font-body text-muted text-sm max-w-md">
              {p.description}
            </span>
            <span className="font-mono text-xs text-gold uppercase tracking-widest shrink-0">
              {p.year}
            </span>
          </motion.a>
        ))}
      </div>

      {!loading && projects === fallback && (
        <p className="mt-8 font-mono text-xs text-muted">
          Showing cached entries — admin-managed projects will appear here once the API is connected.
        </p>
      )}
    </section>
  )
}
