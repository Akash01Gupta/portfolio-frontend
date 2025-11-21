import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import axios from "axios";

/* ------------------------ MAIN SECTION ------------------------ */
export default function GitHubProjectsAnimated() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const apiBase =
          import.meta.env.VITE_API_URL || "http://localhost:5000/api";
        const res = await axios.get(`${apiBase}/projects`);
        setProjects(res.data);
      } catch (err) {
        console.error("Project fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-24">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,120,255,0.15),transparent_70%)] blur-3xl" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesMini />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-extrabold mb-20 
                   bg-clip-text text-transparent 
                   bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
      >
        Featured Projects
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl mx-auto relative z-10">
        {projects.map((p, i) => (
          <TiltCard key={p._id} index={i}>
            <div
              className="rounded-3xl p-0 overflow-hidden bg-[#020617]/80 
                         backdrop-blur-xl border border-white/10 
                         shadow-[0_0_25px_rgba(59,130,246,0.15)]
                         hover:shadow-[0_0_55px_rgba(56,189,248,0.35)]
                         transition-all duration-500"
            >

              {/* PROJECT IMAGE */}
              {p.image && (
                <div className="relative h-44 w-full overflow-hidden group">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="object-cover w-full h-full 
                               transition-transform duration-700 
                               group-hover:scale-110 group-hover:brightness-110"
                  />

                  <div className="absolute inset-x-0 top-0 h-[2px] 
                                  bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
                </div>
              )}

              <div className="p-7">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text 
                               bg-gradient-to-r from-cyan-300 to-blue-400">
                  {p.title}
                </h3>

                <p className="mt-3 text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {p.description}
                </p>
              </div>

              {/* TAGS */}
              {p.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 px-7 pb-4 mt-2">
                  {p.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-700 to-blue-700 rounded-full text-white text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* ACTION BUTTONS */}
              <div className="flex gap-3 px-7 pb-6">
                {p.homepage && (
                  <a
                    href={p.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-sm text-center py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold transition-all"
                  >
                    Live Demo
                  </a>
                )}

                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-sm text-center py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold transition-all"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ 3D TILT CARD ------------------------ */
function TiltCard({ children, index }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-120, 120], [15, -15]);
  const rotateY = useTransform(x, [-120, 120], [-15, 15]);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

/* ------------------------ FLOATING PARTICLES ------------------------ */
function ParticlesMini() {
  const particles = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan-400/30 rounded-full blur-[2px]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3 + Math.random() * 0.5,
            scale: 0.4 + Math.random() * 0.9,
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 12 + Math.random() * 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
