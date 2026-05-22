import { useRef, Suspense } from 'react'
import { motion, useInView } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei'

const projects = [
  {
    number: '01',
    title: 'Cloud-Native App Deployment',
    tag: 'DevOps · AWS',
    tagColor: '#6080A0',
    tagBg: '#D5DCE8',
    desc: 'End-to-end DevOps pipeline containerizing microservices with Docker, provisioning AWS infrastructure (EC2, IAM, VPC, EKS) via Terraform, and building multi-stage CI/CD pipelines with Jenkins.',
    highlights: ['AWS EKS & ECR', 'Terraform IaC', 'Jenkins CI/CD', 'CloudWatch Monitoring'],
    tech: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'CloudWatch'],
    color: '#D5DCE8',
    accent: '#6080A0',
    featured: true,
  },
  {
    number: '02',
    title: 'AI Attendance System',
    tag: 'AI / ML',
    tagColor: '#A06080',
    tagBg: '#E8D5E0',
    desc: 'Automated attendance tracking using Python, OpenCV, and real-time face detection — achieving ~92% identity verification accuracy across 200+ student records with a normalized MySQL backend.',
    highlights: ['92% Accuracy', '200+ Records', 'Real-time Detection', 'MySQL Backend'],
    tech: ['Python', 'OpenCV', 'Face Recognition', 'MySQL'],
    color: '#E8D5E0',
    accent: '#A06080',
    featured: true,
  },
  {
    number: '03',
    title: 'Wheat Disease Detection',
    tag: 'Deep Learning',
    tagColor: '#8FAF8F',
    tagBg: '#D5E8D5',
    desc: 'ResNet-based deep learning model for crop disease classification trained on 5,000+ labelled images with iterative hyperparameter tuning, validated using confusion matrices and training curves.',
    highlights: ['ResNet Architecture', '5,000+ Images', 'High Accuracy', 'Domain-specific AI'],
    tech: ['Python', 'TensorFlow', 'ResNet', 'Machine Learning'],
    color: '#D5E8D5',
    accent: '#8FAF8F',
    featured: false,
  },
  {
    number: '04',
    title: 'Personal Portfolio Website',
    tag: 'Full Stack',
    tagColor: '#C4956A',
    tagBg: '#E8D5C0',
    desc: 'Responsive React.js portfolio with reusable components, dynamic routing, and hooks. Node.js RESTful API backend, deployed on Vercel with automated GitHub CI/CD pipeline.',
    highlights: ['React.js + Hooks', 'Node.js API', 'Vercel CI/CD', 'Cross-device Optimized'],
    tech: ['React.js', 'Node.js', 'JavaScript', 'HTML5', 'CSS3'],
    color: '#E8D5C0',
    accent: '#C4956A',
    featured: false,
  },
]

function MiniOrb({ color }) {
  const ref = useRef()
  useFrame((s) => {
    ref.current.rotation.y = s.clock.elapsedTime * 0.5
  })
  return (
    <Float speed={2} floatIntensity={2}>
      <Sphere ref={ref} args={[0.8, 32, 32]}>
        <MeshDistortMaterial color={color} distort={0.5} speed={2} metalness={0.3} roughness={0.1} transparent opacity={0.7} />
      </Sphere>
    </Float>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-3xl overflow-hidden border border-stone-100 bg-white hover:shadow-2xl transition-all duration-500 ${project.featured ? 'lg:col-span-1' : ''}`}
    >
      {/* 3D Orb mini scene */}
      <div className="h-52 relative overflow-hidden" style={{ background: project.color }}>
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[3, 3, 3]} intensity={1} color="#fff" />
          <pointLight position={[-3, -3, 0]} intensity={0.6} color={project.accent} />
          <MiniOrb color={project.accent} />
        </Canvas>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent 50%, white 100%)` }} />
        <div className="absolute top-4 left-4">
          <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-full"
            style={{ background: 'white', color: project.accent }}>
            {project.tag}
          </span>
        </div>
        <div className="absolute top-4 right-4 font-display font-bold text-5xl opacity-20"
          style={{ color: project.accent }}>
          {project.number}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="font-display text-xl font-bold text-ink mb-3">{project.title}</h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--slate)' }}>{project.desc}</p>

        <div className="grid grid-cols-2 gap-2 mb-5">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-2 text-xs" style={{ color: 'var(--slate)' }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accent }} />
              {h}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: project.tagBg, color: project.tagColor }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="projects" className="py-32" style={{ background: 'var(--mist)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px" style={{ background: 'var(--clay)' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--clay)' }}>Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-ink"
          >
            Projects
          </motion.h2>
        </div>

        <Suspense fallback={null}>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.number} project={project} index={i} />
            ))}
          </div>
        </Suspense>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Sridhar0119"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
          >
            View All on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
