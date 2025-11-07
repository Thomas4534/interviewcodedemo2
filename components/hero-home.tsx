"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Play, ArrowRight, Code, Bot, Users, Cpu } from "lucide-react";

function HeroHome() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Generate star positions
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    left: Math.random() > 0.5 ? `${Math.random() * 20}%` : "auto",
    right: Math.random() <= 0.5 ? `${Math.random() * 20}%` : "auto",
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1.5,
    delay: Math.random() * 4,
  }));

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0e0e0e] text-white pb-[70px]">
      {/* Background lighting + stars */}
      <div className="absolute inset-0">
        {/* Soft lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[linear-gradient(115deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(245deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:120px_120px]" />

        {/* Glows */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-white/25 blur-3xl rounded-full"
          animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-white/20 blur-3xl rounded-full"
          animate={{ opacity: [0.1, 0.25, 0.1], scale: [1.2, 0.9, 1.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full shadow-[0_0_6px_rgba(255,255,200,0.3)]"
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.35,
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 text-center relative z-10 pt-44">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Code className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium uppercase tracking-wider">
              AI-Powered Platform
            </span>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            Interview{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Coder 2.0
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Land your dream tech job with our{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent font-medium">
              AI-powered cheating service
            </span>
            . Get the job you have always wanted.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-20"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-black bg-white rounded-xl shadow-lg hover:bg-gray-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer overflow-hidden"
            href="#"
          >
            <Download className="w-5 h-5" />
            <span>Download Now</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white border border-white/50 rounded-xl hover:bg-white hover:text-black backdrop-blur-sm bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 group overflow-hidden cursor-pointer"
            href="#"
          >
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-wrap justify-center gap-8 text-white/70 mb-40"
        >
          {[{ value: "10K+", label: "Active Users" },
            { value: "500+", label: "Interviews Simulated" },
            { value: "93%", label: "Success Rate" }].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
              <div className="text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature grid */}
        <div className="mt-70 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[{
              icon: <Bot className="w-6 h-6 text-white" />,
              title: "Full-Time Presence",
              desc: "Interview Coder accompanies you for the entirety of the interview, helping you answer questions at all time.",
            },
            {
              icon: <Users className="w-6 h-6 text-white" />,
              title: "Never Been Caught",
              desc: "No reported cases of failure was ever recorded in the history of Interview Coder.",
            },
            {
              icon: <Cpu className="w-6 h-6 text-white" />,
              title: "Intelligent Interpretation",
              desc: "Our AI analyzes what the Interviewer says in real time and gives you quick responses.",
            },
          ].map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
            >
              <div className="flex justify-center mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[740px] z-0 pointer-events-none overflow-hidden rounded-[80px] shadow-[0_0_100px_rgba(255,255,255,0.15)] border border-white/10"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/animation.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0e0e0e] to-transparent pointer-events-none" />
    </section>
  );
}

export default dynamic(() => Promise.resolve(HeroHome), { ssr: false });
