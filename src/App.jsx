import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  )
}

export default function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (

    <div
      style={{
        backgroundColor: darkMode ? '#000' : '#f5f5f5',
        color: darkMode ? '#fff' : '#111',
        transition: '0.4s ease',
        minHeight: '100vh'
      }}
    >

      <Router>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 9999,
            padding: '10px 18px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            background: darkMode ? '#00ffff' : '#111',
            color: darkMode ? '#000' : '#fff',
            fontWeight: 'bold'
          }}
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>

        <Header />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>

        <Footer />

      </Router>

    </div>
  )
}