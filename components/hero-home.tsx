"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import windowsLogo from "@/public/images/windows.svg";
import appleLogo from "@/public/images/apple.svg";
import { Sparkles, Zap, Download, Play, Star } from "lucide-react";

function HeroHome() {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<
    { top: string; left: string; delay: number; duration: number; size: number }[]
  >([]);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);

    // ✨ Enhanced Floating Particles
    const newParticles = Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 6,
      duration: 10 + Math.random() * 8,
      size: 1 + Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  if (!isClient) return null;

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden text-white py-32 md:py-44 space-y-24"
      style={{ backgroundColor: "#121212" }}
    >
      {/* 🌟 Enhanced Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Radial Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,215,100,0.15)_0%,rgba(18,18,18,0)_70%)] blur-3xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,230,150,0.1)_0deg,transparent_60deg,rgba(255,215,100,0.15)_120deg,transparent_180deg,rgba(255,230,150,0.1)_240deg,transparent_300deg)] rounded-full"
          />
        </motion.div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,128,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full"
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/8 blur-3xl rounded-full"
          animate={{
            y: [0, 80, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Enhanced Light Beams */}
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            rotate: [-3, 3, -3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[45vw] h-full bg-[linear-gradient(115deg,rgba(255,230,150,0.12)_0%,rgba(255,230,150,0)_80%)] blur-[140px] mix-blend-screen"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            rotate: [3, -3, 3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute right-0 top-0 w-[45vw] h-full bg-[linear-gradient(-115deg,rgba(255,230,150,0.12)_0%,rgba(255,230,150,0)_80%)] blur-[140px] mix-blend-screen"
        />
      </div>

      {/* 🧠 Enhanced Main Content */}
      <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-md"
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 text-sm font-semibold tracking-wider">TRUSTED BY 100,000+ DEVELOPERS</span>
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black tracking-tight mb-6"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "linear-gradient(135deg, #fef3c7 0%, #fde68a 25%, #fcd34d 50%, #fbbf24 75%, #f59e0b 100%)",
              backgroundSize: "400% 400%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 30px rgba(255, 230, 120, 0.3)"
            }}
          >
            Interview Coder
          </motion.h1>

          {/* Subtitle Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-400/15 to-orange-400/20 blur-3xl scale-150 opacity-30" />
        </motion.div>

        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
          className="mt-8 max-w-3xl mx-auto text-xl text-yellow-100/90 leading-relaxed md:leading-loose font-light"
        >
          Trusted by{" "}
          <span className="text-yellow-300 font-semibold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
            100,000+ developers
          </span>{" "}
          to land six-figure offers at top tech companies.
          <br />
          Master coding interviews faster with our intelligent,{" "}
          <span className="text-yellow-400 font-semibold">AI-powered prep suite</span>.
        </motion.p>

        {/* ✨ Enhanced Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="mt-16 flex flex-col sm:flex-row justify-center gap-6 items-center"
        >
          {/* 🚀 Windows Download Button */}
          <motion.div
            onHoverStart={() => setHoveredButton("windows")}
            onHoverEnd={() => setHoveredButton(null)}
            className="relative"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="relative inline-flex items-center justify-center gap-4 px-12 py-5
              text-lg font-bold text-black bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400
              rounded-2xl shadow-2xl hover:shadow-[0_0_60px_rgba(255,230,120,0.6)]
              transition-all duration-500 group overflow-hidden"
            >
              {/* Button Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Content */}
              <motion.div
                animate={{
                  scale: hoveredButton === "windows" ? 1.1 : 1,
                }}
              >
                <Image src={windowsLogo} alt="Windows Logo" width={28} height={28} />
              </motion.div>
              <span>Download for Windows</span>
              <motion.div
                animate={{
                  x: hoveredButton === "windows" ? 5 : 0,
                }}
              >
                <Download className="w-5 h-5" />
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-amber-400/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
            </motion.a>
          </motion.div>

          {/* 🍎 iOS Download Button */}
          <motion.div
            onHoverStart={() => setHoveredButton("ios")}
            onHoverEnd={() => setHoveredButton(null)}
            className="relative"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="relative inline-flex items-center justify-center gap-4 px-12 py-5
              text-lg font-bold text-yellow-200 border-2 border-yellow-400/70
              rounded-2xl hover:bg-yellow-400 hover:text-black
              backdrop-blur-md bg-yellow-400/5 hover:shadow-[0_0_40px_rgba(255,230,120,0.4)]
              transition-all duration-500 group overflow-hidden"
            >
              {/* Button Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Content */}
              <motion.div
                animate={{
                  scale: hoveredButton === "ios" ? 1.1 : 1,
                }}
              >
                <Image src={appleLogo} alt="Apple Logo" width={28} height={28} />
              </motion.div>
              <span>Download for iOS</span>
              <motion.div
                animate={{
                  x: hoveredButton === "ios" ? 5 : 0,
                }}
              >
                <Download className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Rating Stars */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex justify-center items-center gap-4"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </div>
          <span className="text-yellow-300/80 text-sm font-semibold">Rated 4.9/5 by developers</span>
        </motion.div>
      </div>

      {/* 🎥 Enhanced Demo Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        className="relative w-full max-w-6xl px-6 text-center z-10"
      >
        {/* Section Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-md mb-4">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">MEET THE FOUNDERS</span>
            <Zap className="w-4 h-4 text-yellow-400" />
          </div>
          <p className="text-yellow-200/90 text-xl font-light">
            A Few Words from Our CEO's <span className="text-yellow-300 font-semibold">Roy and Abdulla</span>
          </p>
        </motion.div>

        {/* Enhanced Video Container */}
        <motion.div
          className="relative rounded-[3rem] overflow-hidden shadow-2xl border-2 border-yellow-400/30 backdrop-blur-xl bg-black/40 group"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 100px rgba(255, 230, 120, 0.4)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Video */}
          <video
            className="w-full h-[75vh] object-cover rounded-[3rem]"
            autoPlay
            loop
            muted
            playsInline
            src="/videos/main.mp4"
          />

          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/40 via-transparent to-[#121212]/40 pointer-events-none" />

          {/* Play Button Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            whileHover={{ scale: 1.1 }}
          >
            <div className="p-6 rounded-2xl bg-black/50 backdrop-blur-md border border-yellow-400/30">
              <Play className="w-12 h-12 text-yellow-400 fill-yellow-400" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 🌌 Enhanced Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-300 blur-[1.5px]"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: ["0%", "-100%"],
              x: ["0%", Math.sin(i) * 20 + "%"],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
    </section>
  );
}

export default dynamic(() => Promise.resolve(HeroHome), { ssr: false });