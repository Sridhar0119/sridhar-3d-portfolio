import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    role: 'Cloud-Native Application Deployment',
    type: 'Project / Work Experience',
    period: '2026',
    color: '#6080A0',
    bg: '#D5DCE8',
    bullets: [
      'Containerized microservices using Docker, pushing images to Docker Hub and AWS ECR.',
      'Provisioned AWS infrastructure (EC2, IAM, VPC) and deployed to EKS clusters with Terraform automation.',
      'Built multi-stage CI/CD pipelines using Jenkins with automated build, test, and deploy stages.',
      'Deployed full-stack apps on Kubernetes with StatefulSets, ConfigMaps, and Secrets.',
      'Monitored application health with AWS CloudWatch dashboards and automated alerts.',
    ],
    tech: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'CloudWatch'],
  },
]

function TimelineItem({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 pb-12 border-l-2 border-stone-200 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full border-2 border-white shadow-md"
        style={{ background: exp.color }} />

      <div className="ml-4">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <span className="font-mono text-xs px-3 py-1 rounded-full mb-3 inline-block"
              style={{ background: exp.bg, color: exp.color }}>
              {exp.type}
            </span>
            <h3 className="font-display text-xl font-bold text-ink mt-2">{exp.role}</h3>
          </div>
          <span className="font-mono text-sm" style={{ color: 'var(--slate)' }}>{exp.period}</span>
        </div>

        <ul className="space-y-2 mb-5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--slate)' }}>
              <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full font-medium"
              style={{ background: exp.bg, color: exp.color }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section className="py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px" style={{ background: 'var(--clay)' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--clay)' }}>Experience</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-ink"
          >
            Work & Projects
          </motion.h2>
        </div>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.role} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
