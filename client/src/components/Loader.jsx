import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [visible, setVisible] = useState(true)
  const lines = [
    'resolving dependencies',
    'linking experience.log',
    'compiling projects/',
    'mounting portfolio'
  ]
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 1400
    const tick = setInterval(() => {
      const elapsed = Date.now() - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setPct(next)
      setLineIndex(Math.min(lines.length - 1, Math.floor((next / 100) * lines.length)))
      if (next >= 100) {
        clearInterval(tick)
        setTimeout(() => {
          setVisible(false)
          onDone?.()
        }, 300)
      }
    }, 30)
    return () => clearInterval(tick)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-ink flex flex-col items-center justify-center font-mono text-bone"
        >
          <div className="text-sm text-muted mb-4 tracking-wide">{lines[lineIndex]}_</div>
          <div className="text-6xl md:text-8xl font-display font-bold tracking-tight text-gold tabular-nums">
            {pct}%
          </div>
          <div className="w-48 h-px bg-line mt-6 overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-100"
              style={{ width: `${pct}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
