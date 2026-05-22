import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import animeMe from '../assets/anime-me.png'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-80px'
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {

  return (

    <section
      id="about"
      className="py-32 relative overflow-hidden"
      style={{
        background: '#050816'
      }}
    >

      {/* Background Glow */}

      <div className="absolute inset-0 opacity-20">

        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: '#00ffff'
          }}
        />

        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: '#7c3aed'
          }}
        />

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT SIDE IMAGE */}

          <FadeIn delay={0}>

            <div className="relative max-w-md mx-auto lg:mx-0">

              {/* Main Card */}

              <div
                className="rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl backdrop-blur-xl"
                style={{
                  background: 'rgba(10,15,30,0.7)'
                }}
              >

                <img
                  src={animeMe}
                  alt="Anime Sridhar"
                  className="w-full object-cover"
                />

              </div>

              {/* Top Badge */}

              <div
                className="absolute -top-6 -left-6 rounded-2xl px-6 py-4 shadow-xl border border-cyan-500/20"
                style={{
                  background: 'rgba(0,0,0,0.85)',
                  color: '#00ffff'
                }}
              >

                <p className="font-bold text-xl">
                  Full Stack
                </p>

                <p className="text-xs mt-1 opacity-80">
                  + Cloud + AI
                </p>

              </div>

              {/* Bottom Card */}

              <div
                className="absolute -bottom-6 -right-6 rounded-2xl px-6 py-4 shadow-xl border border-cyan-500/20"
                style={{
                  background: 'rgba(0,0,0,0.85)'
                }}
              >

                <p className="font-bold text-2xl text-cyan-400">
                  MCA
                </p>

                <p className="text-sm mt-1 text-gray-300">
                  UBDT Davangere · 2026
                </p>

              </div>

            </div>

          </FadeIn>

          {/* RIGHT SIDE CONTENT */}

          <div>

            <FadeIn delay={0.1}>

              <div className="flex items-center gap-3 mb-6">

                <span
                  className="w-8 h-px"
                  style={{
                    background: '#00ffff'
                  }}
                />

                <span className="font-mono text-xs tracking-widest uppercase text-cyan-400">
                  About Me
                </span>

              </div>

            </FadeIn>

            <FadeIn delay={0.2}>

              <h2 className="text-4xl md:text-6xl font-black leading-tight text-white mb-6">

                Building systems
                <span className="block text-cyan-400">
                  that scale.
                </span>

              </h2>

            </FadeIn>

            <FadeIn delay={0.3}>

              <p className="text-base leading-relaxed mb-4 text-gray-300">

                I'm a motivated MCA student with hands-on experience across
                full-stack development, cloud infrastructure,
                DevOps automation, and AI-powered applications.

              </p>

              <p className="text-base leading-relaxed mb-8 text-gray-400">

                My work spans React.js and Node.js applications,
                Dockerized microservices, Kubernetes orchestration,
                CI/CD automation using Jenkins,
                Terraform infrastructure provisioning,
                and AI/ML solutions using Python.

              </p>

            </FadeIn>

            {/* INFO CARDS */}

            <FadeIn delay={0.4}>

              <div className="grid grid-cols-2 gap-4">

                {[
                  {
                    icon: '🎓',
                    title: 'Education',
                    sub: 'MCA · BCA · UBDT & BIET'
                  },

                  {
                    icon: '🌐',
                    title: 'Languages',
                    sub: 'Kannada · English · Hindi'
                  },

                  {
                    icon: '📍',
                    title: 'Location',
                    sub: 'Davangere, Karnataka'
                  },

                  {
                    icon: '📧',
                    title: 'Email',
                    sub: 'sridharpatilm6@gmail.com'
                  },

                ].map((item) => (

                  <div
                    key={item.title}
                    className="p-5 rounded-2xl border border-cyan-500/10 backdrop-blur-xl hover:border-cyan-400/40 transition duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.03)'
                    }}
                  >

                    <span className="text-2xl">
                      {item.icon}
                    </span>

                    <p className="font-semibold text-sm text-white mt-3">
                      {item.title}
                    </p>

                    <p className="text-xs mt-2 leading-relaxed text-gray-400">
                      {item.sub}
                    </p>

                  </div>

                ))}

              </div>

            </FadeIn>

          </div>

        </div>

      </div>

    </section>
  )
}