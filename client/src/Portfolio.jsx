import { useState } from 'react'
import Loader from './components/Loader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Timeline from './components/Timeline.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="bg-ink min-h-screen">
      <Loader onDone={() => setLoaded(true)} />
      {loaded && (
        <>
          <Nav />
          <Hero />
          <Timeline />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}
