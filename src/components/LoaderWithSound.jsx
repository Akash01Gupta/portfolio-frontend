// // src/components/LoaderWithSound.jsx
// import { useEffect, useState } from "react";
// import { Howl } from "howler";
// import { motion } from "framer-motion";

// const SOUND_SRC = "/sfx/ambient-loop.mp3"; // put audio in public/sfx/

// export default function LoaderWithSound({ onFinish }) {
//   const [muted, setMuted] = useState(() => {
//     try {
//       return localStorage.getItem("ambient_muted") === "true";
//     } catch { return true; }
//   });
//   const [player, setPlayer] = useState(null);
//   const [started, setStarted] = useState(false);

//   useEffect(() => {
//     // create Howl instance but don't autoplay — allows user gesture
//     const sound = new Howl({
//       src: [SOUND_SRC],
//       loop: true,
//       volume: 0.14, // low by default
//       html5: true,
//     });
//     setPlayer(sound);

//     // cleanup
//     return () => {
//       sound.stop();
//       sound.unload();
//     };
//   }, []);

//   useEffect(() => {
//     if (player) player.mute(muted);
//     try { localStorage.setItem("ambient_muted", muted ? "true" : "false"); } catch {}
//   }, [muted, player]);

//   // auto finish fallback (if user doesn't click)
//   useEffect(() => {
//     const t = setTimeout(() => onFinish?.(), 3000);
//     return () => clearTimeout(t);
//   }, [onFinish]);

//   const handleStart = () => {
//     // user gesture — start audio and loader animation
//     if (player && !started) {
//       try {
//         player.play();
//       } catch (err) {
//         // ignore
//       }
//       setStarted(true);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
//       <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
//         <div className="text-center px-6">
//           <motion.h1 className="text-4xl md:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
//             SOFTWARW DEVELOPER
//           </motion.h1>

//           <motion.div className="mx-auto w-48 h-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 mb-6"
//             animate={{ scaleX: [0.6, 1, 0.6] }}
//             transition={{ repeat: Infinity, duration: 1.8 }} />

//           <div className="flex gap-3 justify-center items-center">
//             <button
//               onMouseDown={handleStart}
//               onClick={handleStart}
//               className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium"
//             >
//               Start Experience
//             </button>

//             <button
//               onClick={() => setMuted((m) => !m)}
//               className="px-4 py-2 rounded-full border border-gray-600 text-gray-200"
//             >
//               {muted ? "Unmute" : "Mute"}
//             </button>
//           </div>

//           <p className="mt-4 text-sm text-gray-400">Click Start to enable ambient audio & continue</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
