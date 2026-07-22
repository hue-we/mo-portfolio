import { motion } from 'framer-motion'
import { caseStudies } from '../data/caseStudies.js'

export default function CaseStudy({ slug }) {
  const study = caseStudies[slug]

  if (!study) {
    return (
      <div className="min-h-screen bg-ink flex flex-col items-center justify-center px-6 font-body text-bone">
        <p className="font-mono text-muted text-sm mb-4">404 — case study not found</p>
        <a href="/" className="font-mono text-xs uppercase tracking-widest text-gold border-b border-gold">
          Back home
        </a>
      </div>
    )
  }

  return (
    <div className="bg-ink min-h-screen px-6 md:px-10 py-16 md:py-24">
      <a
        href="/"
        className="font-mono text-xs uppercase tracking-widest text-muted hover:text-gold transition-colors focus-ring"
      >
        ← Back to work
      </a>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 max-w-3xl"
      >
        <p className="font-mono text-gold text-xs uppercase tracking-widest mb-4">{study.year}</p>
        <h1 className="font-display font-extrabold uppercase leading-[0.95] text-[10vw] md:text-5xl text-bone mb-6">
          {study.title}
        </h1>
        <p className="font-body text-muted text-lg leading-relaxed mb-8">{study.subtitle}</p>

        <div className="flex flex-wrap gap-3 mb-16">
          {study.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-xs uppercase tracking-wide border border-line rounded-full px-4 py-2 text-bone/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-14">
          {study.sections.map((s, i) => (
            <motion.section
              key={s.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h2 className="font-display font-bold uppercase text-xl md:text-2xl text-gold mb-4">
                {s.heading}
              </h2>
              {s.body.split('\n\n').map((para, j) => (
                <p key={j} className="font-body text-bone/90 leading-relaxed mb-4 whitespace-pre-line">
                  {para}
                </p>
              ))}
            </motion.section>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-line">
          <a
            href="/"
            className="font-mono text-xs uppercase tracking-widest text-gold border-b border-gold focus-ring"
          >
            ← Back to all work
          </a>
        </div>
      </motion.div>
    </div>
  )
}
