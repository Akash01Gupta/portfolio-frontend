// src/components/Loader.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader({ onFinish }) {
  useEffect(() => {
    // auto finish in case resources are ready earlier
    const t = setTimeout(() => onFinish?.(), 2200);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="text-center"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-widest"
          style={{
            background: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          animate={{
            textShadow: [
              "0 0 10px #3b82f6",
              "0 0 20px #a855f7",
              "0 0 10px #3b82f6",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          SOFTWARW DEVELOPER
        </motion.h1>

        <motion.div
          className="mt-6 h-1 w-48 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full"
          animate={{ scaleX: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        />

        <p className="mt-4 text-gray-400 text-sm">Akash Gupta • Software Developer</p>
      </motion.div>
    </div>
  );
}
