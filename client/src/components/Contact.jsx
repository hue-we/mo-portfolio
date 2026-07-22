import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-28 border-t border-line">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="font-display font-extrabold uppercase leading-[0.95] text-[11vw] md:text-[5vw] text-bone"
      >
        Let's build
        <br />
        something.
      </motion.h2>

      <div className="mt-12 flex flex-col md:flex-row gap-6 md:gap-12 font-mono text-sm uppercase tracking-widest">
        <a href="mailto:mabuzamongezi80@gmail.com" className="text-gold border-b border-gold w-fit focus-ring">
          mabuzamongezi80@gmail.com
        </a>
        <a href="https://instagram.com/huey.fisherman" target="_blank" rel="noreferrer" className="text-bone/80 hover:text-gold transition-colors w-fit focus-ring">
          Instagram
        </a>
        <a href="https://github.com/hue-we" target="_blank" rel="noreferrer" className="text-bone/80 hover:text-gold transition-colors w-fit focus-ring">
          GitHub
        </a>
      </div>
    </section>
  )
}
