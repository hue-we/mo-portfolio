import { motion } from 'framer-motion'

const entries = [
  { role: 'Freelance Web & Software Developer', org: 'Self-employed', period: '2024 — Today' },
  { role: 'Freelance Web Developer — Premier Attraction Events', org: 'Potchefstroom', period: 'Feb 2026 — Apr 2026' },
  { role: 'Full-Stack Developer Intern', org: 'Coveda Technologies', period: 'Dec 2025 — Jan 2026' },
  { role: 'GenAI Certificate', org: 'WeThinkCode_', period: '2025' },
  { role: 'Higher Certificate, Information Systems (Software Development)', org: 'Eduvos, Potchefstroom', period: 'Feb 2023 — Oct 2025' }
]

const stack = [
  { name: 'React', icon: 'react/react-original' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original' },
  { name: 'Express', icon: 'express/express-original', bg: true },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
  { name: 'MySQL', icon: 'mysql/mysql-original' },
  { name: 'SQL Server', icon: 'microsoftsqlserver/microsoftsqlserver-plain' },
  { name: 'Python', icon: 'python/python-original' },
  { name: 'C# / .NET', icon: 'csharp/csharp-original' },
  { name: 'Java', icon: 'java/java-original' },
  { name: 'Angular', icon: 'angularjs/angularjs-plain' },
  { name: 'HTML5', icon: 'html5/html5-original' },
  { name: 'CSS3', icon: 'css3/css3-original' },
  { name: 'JavaScript', icon: 'javascript/javascript-original' },
  { name: 'Git', icon: 'git/git-original' }
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
            <p className="font-mono text-muted text-xs uppercase tracking-widest mb-5">stack --list</p>
            <div className="flex flex-wrap gap-4">
              {stack.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="flex flex-col items-center gap-2 w-16"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-lg border border-line ${
                      s.bg ? 'bg-bone p-2' : 'bg-transparent'
                    }`}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${s.icon}.svg`}
                      alt={s.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-muted text-center leading-tight">
                    {s.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
