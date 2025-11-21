import { motion } from "framer-motion";

export default function SectionWrapper({ id, title, children }) {
  return (
    <section
      id={id}
      className="relative w-full py-16 sm:py-24 bg-black text-white overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-12"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
