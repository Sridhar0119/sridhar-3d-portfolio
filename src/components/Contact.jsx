import { useRef, Suspense } from 'react'
import { motion, useInView } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Torus, Sphere, MeshDistortMaterial } from '@react-three/drei'

function ContactScene() {
  const torusRef = useRef()
  const orbRef = useRef()
  useFrame((s) => {
    torusRef.current.rotation.x = s.clock.elapsedTime * 0.3
    torusRef.current.rotation.y = s.clock.elapsedTime * 0.2
    orbRef.current.rotation.y = s.clock.elapsedTime * 0.5
  })
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={1} color="#C4956A" />
      <pointLight position={[-3, -3, 0]} intensity={0.5} color="#8FAF8F" />
      <Float speed={1} floatIntensity={1.5}>
        <Torus ref={torusRef} args={[1.8, 0.12, 16, 100]}>
          <meshStandardMaterial color="#C4956A" metalness={0.8} roughness={0.1} transparent opacity={0.5} />
        </Torus>
      </Float>
      <Float speed={1.5} floatIntensity={2}>
        <Sphere ref={orbRef} args={[0.6, 32, 32]}>
          <MeshDistortMaterial color="#8FAF8F" distort={0.6} speed={2} metalness={0.3} roughness={0.1} transparent opacity={0.8} />
        </Sphere>
      </Float>
    </>
  )
}

const links = [
  { label: 'Email', sub: 'sridharpatilm6@gmail.com', href: 'mailto:sridharpatilm6@gmail.com', icon: '✉️', color: '#C4956A', bg: '#E8D5C0' },
  { label: 'LinkedIn', sub: 'sridhar-patil-m-74192a404', href: 'https://www.linkedin.com/in/sridhar-patil-m-74192a404', icon: '💼', color: '#6080A0', bg: '#D5DCE8' },
  { label: 'GitHub', sub: 'github.com/Sridhar0119', href: 'https://github.com/Sridhar0119', icon: '🐙', color: '#0F0F0F', bg: '#E8E8E8' },
  { label: 'Instagram', sub: '@sridhar.patil_19', href: 'https://www.instagram.com/sridhar.patil_19', icon: '📸', color: '#A06080', bg: '#E8D5E0' },
  { label: 'Phone', sub: '+91 7019144594', href: 'tel:+917019144594', icon: '📞', color: '#8FAF8F', bg: '#D5E8D5' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="contact" className="py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px" style={{ background: 'var(--clay)' }} />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--clay)' }}>Contact</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-ink mb-6"
            >
              Let's Build Something Together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base leading-relaxed mb-10" style={{ color: 'var(--slate)' }}
            >
              Open to full-stack, cloud, DevOps, and AI/ML opportunities. Whether it's a full-time role, internship, or freelance project — reach out and let's talk.
            </motion.p>

            <div className="space-y-3">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.07 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-stone-100 hover:border-stone-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: link.bg }}>
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-ink">{link.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--slate)' }}>{link.sub}</p>
                  </div>
                  <span className="ml-auto text-stone-300">→</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden border border-stone-200 shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #FAF8F4 0%, #F0EDE8 100%)' }}
          >
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
                <ContactScene />
              </Canvas>
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
