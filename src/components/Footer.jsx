import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-10 px-6" style={{ background: 'var(--mist)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <p className="font-display font-bold text-xl text-ink">
            SP<span style={{ color: 'var(--clay)' }}>.</span>
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--slate)' }}>Full Stack · Cloud · AI/ML</p>
        </div>

        <p className="text-sm" style={{ color: 'var(--slate)' }}>
          © 2026 Sridhar Patil M. Davangere, Karnataka.
        </p>

        <div className="flex gap-6 text-sm" style={{ color: 'var(--slate)' }}>
          <a href="mailto:sridharpatilm6@gmail.com" className="hover:text-ink transition-colors">Email</a>
          <a href="https://github.com/Sridhar0119" target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/sridhar-patil-m-74192a404" target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/sridhar.patil_19" target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
