import { motion } from "framer-motion";

const orbs = [
  { size: 400, left: "-10%", top: "10%", color: "from-cyan-500 to-blue-500" },
  { size: 300, left: "70%", top: "40%", color: "from-purple-500 to-pink-500" },
  { size: 250, left: "30%", top: "70%", color: "from-blue-500 to-indigo-500" },
];

export default function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-r ${orb.color} opacity-20 blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            top: orb.top,
          }}
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
