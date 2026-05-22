import { motion } from 'framer-motion'
import { Suspense } from 'react'
import Scene3D from './Scene3D'

const words = ['Full Stack Developer.', 'Cloud Engineer.', 'AI/ML Builder.', 'DevOps Enthusiast.']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--cream)' }}>
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Scene3D style={{ width: '100%', height: '100%' }} />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(250,248,244,0.9) 0%, rgba(250,248,244,0.4) 60%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--cream), transparent)' }} />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 w-full">
        <motion.div variants={container} initial="hidden" animate="show">

          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-clay" style={{ backgroundColor: 'var(--clay)' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--clay)' }}>
              Davangere, Karnataka · Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-ink mb-6"
          >
            Sridhar<br />
            <span style={{ color: 'var(--clay)' }}>Patil M</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl max-w-lg leading-relaxed mb-10"
            style={{ color: 'var(--slate)' }}
          >
            MCA student building scalable full-stack apps, cloud-native DevOps pipelines, and Python AI/ML systems — end to end.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full font-medium text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: 'var(--ink)' }}
            >
              View Projects
            </a>
            <a
              href="https://github.com/Sridhar0119"
              target="_blank" rel="noreferrer"
              className="px-7 py-3.5 rounded-full font-medium text-sm border transition-all duration-300 hover:scale-105"
              style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/sridhar-patil-m-74192a404"
              target="_blank" rel="noreferrer"
              className="px-7 py-3.5 rounded-full font-medium text-sm border transition-all duration-300 hover:scale-105"
              style={{ borderColor: 'var(--clay)', color: 'var(--clay)' }}
            >
              LinkedIn ↗
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item} className="flex flex-wrap gap-x-12 gap-y-6">
            {[
              { value: '4+', label: 'Projects Built' },
              { value: '92%', label: 'AI Model Accuracy' },
              { value: '8+', label: 'Cloud & DevOps Tools' },
              { value: '2', label: 'Certifications' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold" style={{ color: 'var(--ink)' }}>{stat.value}</p>
                <p className="text-sm mt-1" style={{ color: 'var(--slate)' }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--slate)' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--clay), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
