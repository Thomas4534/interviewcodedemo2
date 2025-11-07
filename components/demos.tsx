"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Zap, Shield, Check } from "lucide-react";

const demoVideos = [
  { name: "Codility", logo: "/images/codility.svg" },
  { name: "Google Meet", logo: "/images/meet.svg" },
  { name: "Teams", logo: "/images/teams.svg" },
  { name: "Zoom", logo: "/images/zoom.svg" },
];

export default function Demos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    setMounted(true);
    const randomParticles = Array.from({ length: 14 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setParticles(randomParticles);
  }, []);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] text-yellow-200">
      {/* ✨ Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-60 blur-[1px]"
              animate={{ y: ["0%", "25%", "0%"], opacity: [0.4, 0.9, 0.4] }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              style={{ top: p.top, left: p.left }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* Feature badges */}
          <motion.div
            className="flex justify-center items-center gap-6 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {[{ icon: Sparkles, text: "AI-Powered" }, { icon: Zap, text: "Real-time" }, { icon: Shield, text: "Undetectable" }].map((item) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <item.icon className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white/80">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6"
          >
            Watch{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-[length:200%_200%] animate-gradient">
              Interview Coder
            </span>{" "}
            Fool Every Platform
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-yellow-100/90 max-w-3xl mx-auto leading-relaxed"
          >
            Experience our advanced AI seamlessly bypassing coding tests and live interview platforms with{" "}
            <span className="text-yellow-300 font-semibold">human-like precision</span> and{" "}
            <span className="text-yellow-200 font-semibold">flawless execution</span>.
          </motion.p>
        </motion.div>

        {/* Grid of logos */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {demoVideos.map((video, index) => (
            <motion.div
              key={video.name}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedVideo(video.name)}
              className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 via-white/2 to-transparent border border-white/10 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(255,230,120,0.25)] transition-all duration-500 backdrop-blur-sm"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 50% 0%, rgba(255,230,120,0.1), transparent 50%),
                  radial-gradient(circle at 100% 100%, rgba(255,230,120,0.05), transparent 50%)
                `,
              }}
            >
              <div className="relative z-10 aspect-video flex flex-col items-center justify-center text-white p-8">
                <motion.div
                  className="relative mb-4"
                  animate={{
                    scale: hoveredCard === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 group-hover:border-yellow-400/60 shadow-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  >
                    <Image
                      src={video.logo}
                      alt={`${video.name} logo`}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain filter brightness-110 group-hover:brightness-125 transition"
                    />
                  </motion.div>
                </motion.div>

                <motion.span
                  className="font-bold text-lg tracking-wide bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent mb-1"
                  animate={{
                    y: hoveredCard === index ? -2 : 0,
                  }}
                >
                  {video.name}
                </motion.span>

                <div className="flex items-center gap-1 text-green-400 mt-1">
                  <Check className="w-4 h-4" />
                  <span className="text-sm font-medium">Undetectable</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20"
        >
          <p className="text-yellow-200/80 text-lg mb-8">
            Ready to see it in action? Select any platform above.
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full mx-auto"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* 🧩 Modal without video */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/20 bg-gradient-to-br from-black to-gray-900/90 backdrop-blur-md text-center p-12"
            >
              <h3 className="text-3xl font-bold text-yellow-100 mb-4">{selectedVideo} Demo</h3>
              <p className="text-yellow-200/80 text-lg mb-8">
                This demo is currently unavailable.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedVideo(null)}
                className="px-6 py-3 rounded-xl bg-yellow-400/20 text-yellow-100 border border-yellow-400/50 hover:bg-yellow-400/30 transition"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
