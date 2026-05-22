import CyberGrid from "./CyberGrid"
import animeCharacter from "../assets/anime-me.png"

export default function AnimeHero() {

  return (

    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">

      <CyberGrid />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-8">

        {/* LEFT SIDE */}

        <div>

          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-6">
            FULL STACK • CLOUD • DEVOPS
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">

            Hey,

            <span className="block text-cyan-400">
              I'm Sridhar.
            </span>

          </h1>

          <p className="mt-10 text-gray-400 text-lg leading-relaxed max-w-xl">

            Building scalable cloud-native systems,
            DevOps pipelines, and AI-powered applications
            with modern engineering practices.

          </p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <a
              href="https://github.com/Sridhar0119"
              target="_blank"
              className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl font-medium transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sridhar-patil-m-74192a404"
              target="_blank"
              className="border border-cyan-400/30 hover:border-cyan-400 px-8 py-4 rounded-xl transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex justify-center">

          <img
            src={animeCharacter}
            alt="Anime Sridhar"
            className="w-full max-w-lg drop-shadow-[0_0_80px_rgba(0,255,255,0.3)]"
          />

        </div>

      </div>

    </section>
  )
}