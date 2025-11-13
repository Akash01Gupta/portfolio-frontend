import { motion } from "framer-motion";
import Card from "./ui/Card";

export default function GitHubProjectsAnimated() {
  const projects = [
    { name: "E-Commerce App", desc: "Full MERN stack e-commerce platform." },
    { name: "Job Portal", desc: "Complete job portal clone with authentication." },
    { name: "Portfolio", desc: "Animated personal portfolio website." },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-16"
      >
        Featured Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card>
              <h3 className="text-xl font-semibold text-cyan-300">{p.name}</h3>
              <p className="mt-2 text-gray-400">{p.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
