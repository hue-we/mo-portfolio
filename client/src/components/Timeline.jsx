import { motion } from 'framer-motion'

const entries = [
  { role: 'Freelance Web & Software Developer', org: 'Self-employed', period: '2024 — Today' },
  { role: 'Freelance Web Developer — Premier Attraction Events', org: 'Potchefstroom', period: 'Feb 2026 — Apr 2026' },
  { role: 'Full-Stack Developer Intern', org: 'Coveda Technologies', period: 'Dec 2025 — Jan 2026' },
  { role: 'GenAI Certificate', org: 'WeThinkCode_', period: '2025' },
  { role: 'Higher Certificate, Information Systems (Software Development)', org: 'Eduvos, Potchefstroom', period: 'Feb 2023 — Oct 2025' }
]

const stack = [
  'React', 'Node.js / Express', 'MongoDB', 'SQL Server / MySQL', 'Python',
  'C# / .NET', 'Java', 'Angular', 'HTML / CSS / JS'
]

export default function Timeline() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 border-t border-line">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold uppercase text-3xl md:text-4xl text-bone"
        >
          experience.log
        </motion.h2>

        <div>
          <div className="flex flex-col">
            {entries.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 py-5 border-b border-line"
              >
                <div>
                  <p className="font-body text-bone text-lg">{e.role}</p>
                  <p className="font-mono text-muted text-xs uppercase tracking-wide mt-1">{e.org}</p>
                </div>
                <p className="font-mono text-gold text-sm shrink-0">{e.period}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14">
            <p className="font-mono text-muted text-xs uppercase tracking-widest mb-4">stack --list</p>
            <div className="flex flex-wrap gap-3">
              {stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs uppercase tracking-wide border border-line rounded-full px-4 py-2 text-bone/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
