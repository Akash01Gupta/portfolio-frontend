import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 bg-black text-white overflow-hidden">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I’m <span className="text-blue-500">Akash Gupta</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          I’m a <span className="text-blue-400 font-semibold">Full Stack Developer</span> — building responsive web apps with MERN Stack & modern UI/UX.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/CVAkash.pdf"
            download
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-semibold transition duration-300"
          >
            <FaDownload /> Download Resume
          </a>
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-5 py-3 rounded-lg font-semibold transition duration-300"
          >
            View Projects <FaArrowRight />
          </a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 flex justify-center items-center relative mt-12 md:mt-0"
      >
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-700 to-purple-500 p-1 shadow-[0_0_30px_rgba(59,130,246,0.6)]">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <img
              src="/image.png"
              alt="Akash Gupta"
              className="w-2/3 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Floating tech icons */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-6 right-10 text-3xl sm:text-4xl text-blue-400"
        >
          <SiReact />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-10 right-20 text-3xl sm:text-4xl text-green-400"
        >
          <SiNodedotjs />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-20 left-10 text-3xl sm:text-4xl text-yellow-400"
        >
          <SiExpress />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-6 left-20 text-3xl sm:text-4xl text-green-500"
        >
          <SiMongodb />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
