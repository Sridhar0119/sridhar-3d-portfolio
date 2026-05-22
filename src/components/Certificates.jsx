import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const certs = [
  {
    title: 'Ansible Automation',
    issuer: 'DevOps & Infrastructure',
    emoji: '⚙️',
    color: 'from-red-50 to-orange-50 border-red-200',
    badge: 'bg-red-100 text-red-700',
    skills: ['Ansible', 'Automation', 'Configuration Management'],
  },
  {
    title: 'Python Programming',
    issuer: 'Programming Fundamentals',
    emoji: '🐍',
    color: 'from-blue-50 to-indigo-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    skills: ['Python', 'OOP', 'Data Structures'],
  },
]

export default function Certificates() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">Credentials</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink">Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className={`rounded-3xl border bg-gradient-to-br ${c.color} p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <span className="text-5xl">{c.emoji}</span>
              <h3 className="font-display text-xl font-bold text-ink mt-5">{c.title}</h3>
              <p className="text-sm text-stone mt-1">{c.issuer}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {c.skills.map((s, j) => (
                  <span key={j} className={`text-xs font-medium px-3 py-1 rounded-full ${c.badge}`}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
