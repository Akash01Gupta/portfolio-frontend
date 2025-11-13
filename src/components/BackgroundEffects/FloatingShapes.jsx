import { motion } from "framer-motion";

const shapes = [
  { size: 80, left: "10%", top: "30%", delay: 0 },
  { size: 100, left: "70%", top: "20%", delay: 2 },
  { size: 60, left: "40%", top: "70%", delay: 4 },
];

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/10 border border-cyan-400/20"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
