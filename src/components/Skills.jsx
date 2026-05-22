import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#E8D5C0',
    accent: '#C4956A',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#D5E8D5',
    accent: '#8FAF8F',
    skills: ['Node.js', 'Python', 'Java', 'C'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: '#E8E0D5',
    accent: '#A08060',
    skills: ['MySQL', 'SQL', 'DBMS'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: '#D5DCE8',
    accent: '#6080A0',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'CloudWatch'],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    color: '#E8D5E0',
    accent: '#A06080',
    skills: ['TensorFlow', 'OpenCV', 'ResNet', 'Face Recognition', 'Machine Learning'],
  },
  {
    category: 'Tools & OS',
    icon: '🛠️',
    color: '#E8E8D5',
    accent: '#808060',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux'],
  },
]

function SkillCard({ group, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="p-6 rounded-3xl border border-stone-100 bg-white hover:shadow-xl transition-all duration-400"
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
        style={{ background: group.color }}>
        {group.icon}
      </div>
      <p className="font-display font-semibold text-base text-ink mb-4">{group.category}</p>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium px-3 py-1.5 rounded-full border"
            style={{ color: group.accent, borderColor: group.color, background: `${group.color}60` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="skills" className="py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px" style={{ background: 'var(--clay)' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--clay)' }}>Tech Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-ink"
          >
            Skills & Technologies
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
