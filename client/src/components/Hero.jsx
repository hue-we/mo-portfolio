import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="font-mono text-gold text-xs md:text-sm tracking-widest uppercase mb-6"
      >
        Johannesburg / Pretoria, South Africa
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-extrabold uppercase leading-[0.92] text-[13vw] md:text-[7.5vw] tracking-tight text-bone"
      >
        Software
        <br />
        Developer
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 max-w-xl font-body text-muted text-base md:text-lg leading-relaxed"
      >
        I build full-stack applications — React and Node on the front and
        back, SQL and NoSQL underneath. Two years freelancing, one internship,
        and a habit of shipping speculative builds before anyone asks for them.
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-10 flex gap-6 font-mono text-xs uppercase tracking-widest"
      >
        <a href="https://github.com/hue-we" target="_blank" rel="noreferrer" className="border-b border-gold text-bone hover:text-gold transition-colors focus-ring">
          GitHub
        </a>
        <a href="https://linkedin.com/in/mongezi-mabuza-7198172b0" target="_blank" rel="noreferrer" className="border-b border-gold text-bone hover:text-gold transition-colors focus-ring">
          LinkedIn
        </a>
      </motion.div>
    </section>
  )
}
