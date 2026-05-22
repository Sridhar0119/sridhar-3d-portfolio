import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const achievements = [
  {
    icon: '🥋',
    title: 'National Level Karate Player',
    desc: 'Represented at national competitions, demonstrating discipline and a high-performance mindset.',
    color: '#C4956A',
    bg: '#E8D5C0',
  },
  {
    icon: '🎖️',
    title: "NCC 'A' Certificate Holder",
    desc: 'Completed National Cadet Corps training — teamwork, structure, and integrity.',
    color: '#6080A0',
    bg: '#D5DCE8',
  },
  {
    icon: '👥',
    title: 'Joint Secretary — Student Association',
    desc: 'Led cross-functional teams and organized large-scale institutional events.',
    color: '#8FAF8F',
    bg: '#D5E8D5',
  },
  {
    icon: '📜',
    title: 'Ansible Certified',
    desc: 'Certified in Ansible automation for DevOps and infrastructure configuration management.',
    color: '#A06080',
    bg: '#E8D5E0',
  },
  {
    icon: '🐍',
    title: 'Python Certified',
    desc: 'Certified in Python programming — covering fundamentals through data science applications.',
    color: '#808060',
    bg: '#E8E8D5',
  },
  {
    icon: '🎓',
    title: 'MCA Graduate — May 2026',
    desc: 'Master of Computer Applications, UBDT College of Engineering, Davangere.',
    color: '#A08060',
    bg: '#E8E0D5',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section className="py-32" style={{ background: 'var(--mist)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px" style={{ background: 'var(--clay)' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--clay)' }}>Achievements</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-ink"
          >
            Beyond the Code
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="p-6 bg-white rounded-3xl border border-stone-100 hover:shadow-xl transition-all duration-400"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
                style={{ background: a.bg }}>
                {a.icon}
              </div>
              <h3 className="font-display font-semibold text-base text-ink mb-2">{a.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--slate)' }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
