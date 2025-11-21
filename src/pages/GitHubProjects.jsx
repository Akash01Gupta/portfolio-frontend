import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import api from "../services/api"; // <-- updated

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await api.get("/projects");
        setRepos(res.data || []);
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
    <section
      ref={containerRef}
      className="relative py-28 px-6 sm:px-12 lg:px-24 overflow-hidden text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-600/10 via-blue-800/5 to-transparent blur-3xl"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatedParticles />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl font-extrabold mb-20 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {repos.map((repo, i) => (
          <MagneticCard key={repo._id} index={i}>
            <div className="bg-[#020617]/90 rounded-3xl p-6 border border-white/10 shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-500 hover:shadow-[0_0_45px_rgba(56,189,248,0.25)] flex flex-col justify-between">

              {/* Image */}
              {repo.image && (
                <img
                  src={repo.image}
                  className="rounded-xl mb-5 w-full h-40 object-cover shadow-md"
                  alt={repo.title}
                />
              )}

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {repo.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {repo.description}
                </p>
              </div>

              {/* Tags */}
              {repo.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-700 to-blue-700 rounded-full text-white text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3">
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-sm text-center py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold transition-all"
                  >
                    Live Demo
                  </a>
                )}

                {repo.repo && (
                  <a
                    href={repo.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-sm text-center py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold transition-all"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </MagneticCard>
        ))}
      </div>
    </section>
  );
}

/* Magnetic Card */
function MagneticCard({ children, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx);
    y.set(dy);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      custom={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

/* Particles */
function AnimatedParticles() {
  const particles = Array.from({ length: 40 });
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
            scale: 0.6 + Math.random() * 0.8,
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            x: [Math.random() * 100, Math.random() * -100],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
