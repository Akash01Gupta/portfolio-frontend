import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import api from "../services/api"; // <-- NEW

const skills = [
  { icon: <FaReact size={32} className="text-sky-400" />, name: "React.js" },
  { icon: <SiExpress size={32} className="text-gray-300" />, name: "Express.js" },
  { icon: <FaNodeJs size={32} className="text-green-500" />, name: "Node.js" },
  { icon: <SiMongodb size={32} className="text-green-400" />, name: "MongoDB" },
  { icon: <FaDatabase size={32} className="text-yellow-400" />, name: "SQL" },
  { icon: <SiTailwindcss size={32} className="text-cyan-400" />, name: "Tailwind CSS" },
  { icon: <FaGithub size={32} className="text-gray-400" />, name: "GitHub" },
];

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const res = await api.get("/about");
        setAbout(res.data);
      } catch (err) {
        console.log("About load error", err);
      }
    };

    loadAbout();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6 py-16">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30 blur-3xl opacity-30"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto z-10 text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          About Me
        </h1>

        {/* Replace static text with backend data if available */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          {about?.bio1 || (
            <>
              👋 Hi, I’m <span className="text-cyan-400 font-semibold">Akash Gupta</span>,
              a passionate <span className="text-blue-400">Full Stack MERN Developer</span>.
            </>
          )}
        </p>

        <p className="text-gray-400 mb-8">
          {about?.bio2 || "I build modern web applications and love full-stack development."}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              {skill.icon}
              <span className="text-sm text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
