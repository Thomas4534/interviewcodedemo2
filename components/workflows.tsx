"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, Sparkles, Zap, Crown, Rocket, Scale, Brain } from "lucide-react";

export default function Workflows() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<
    { top: string; left: string; delay: number; duration: number; size: number }[]
  >([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const randomParticles = Array.from({ length: 40 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 6,
      duration: 10 + Math.random() * 8,
      size: 1 + Math.random() * 3,
    }));
    setParticles(randomParticles);
  }, []);

  const competitors = [
    { name: "InterviewCoder", color: "text-yellow-300", highlight: true, icon: Crown },
    { name: "CodeMaster AI", color: "text-yellow-100/60", icon: Brain },
    { name: "PrepGenius", color: "text-yellow-100/60", icon: Scale },
    { name: "AlgoPro", color: "text-yellow-100/60", icon: Rocket },
  ];

  const features = [
    "Adaptive Learning Paths",
    "AI-Powered Interview Simulation",
    "Real-Time Code Feedback",
    "Performance Analytics",
    "Company-Specific Question Sets",
  ];

  const results = [
    [true, true, true, true, true],
    [true, false, true, false, false],
    [false, false, true, false, false],
    [true, false, false, false, false],
  ];

  return (
    <section
      className="relative py-32 md:py-44 text-yellow-200 overflow-hidden"
      style={{ backgroundColor: "#121212" }}
    >
      {/* 🌟 Enhanced Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Radial Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,215,100,0.12)_0%,rgba(18,18,18,0)_70%)] blur-3xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,230,150,0.15)_0deg,transparent_60deg,rgba(255,215,100,0.12)_120deg,transparent_180deg,rgba(255,230,150,0.15)_240deg,transparent_300deg)] rounded-full"
          />
        </motion.div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,128,0.15)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full"
          animate={{
            y: [0, -80, 0],
            x: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/8 blur-3xl rounded-full"
          animate={{
            y: [0, 100, 0],
            x: [0, -40, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Enhanced Light Beams */}
        <motion.div
          animate={{
            opacity: [0.2, 0.6, 0.2],
            rotate: [-4, 4, -4],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[45vw] h-full bg-[linear-gradient(115deg,rgba(255,230,150,0.15)_0%,rgba(255,230,150,0)_80%)] blur-[160px] mix-blend-screen"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.6, 0.2],
            rotate: [4, -4, 4],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute right-0 top-0 w-[45vw] h-full bg-[linear-gradient(-115deg,rgba(255,230,150,0.15)_0%,rgba(255,230,150,0)_80%)] blur-[160px] mix-blend-screen"
        />
      </div>

      {/* ✨ Enhanced Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-yellow-300 blur-[2px]"
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
              animate={{
                y: ["0%", "-150%"],
                x: ["0%", Math.sin(i) * 40 + "%"],
                opacity: [0, 0.9, 0],
                scale: [0, 1.2, 0],
                rotate: [0, 180, 360],
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
      )}

      {/* 📦 Enhanced Content Container */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-24"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-md"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold tracking-wider">ENTERPRISE-GRADE WORKFLOWS</span>
            <Zap className="w-5 h-5 text-yellow-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.h2
              className="text-6xl md:text-8xl font-black tracking-tight mb-6"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: "linear-gradient(135deg, #fef3c7 0%, #fde68a 25%, #fcd34d 50%, #fbbf24 75%, #f59e0b 100%)",
                backgroundSize: "400% 400%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "0 0 40px rgba(255, 230, 120, 0.4)"
              }}
            >
              Seamless
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Workflows
              </span>
            </motion.h2>

            {/* Heading Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/25 via-amber-400/20 to-orange-400/25 blur-3xl scale-150 opacity-20 -z-10" />
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 max-w-3xl mx-auto text-xl text-yellow-100/90 leading-relaxed md:leading-loose font-light"
          >
            Streamline your engineering pipeline with intelligent automation, effortless scaling, and adaptive systems built for modern teams.
          </motion.p>
        </motion.div>

        {/* 🌐 Enhanced Workflow Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Adaptive Systems",
              desc: "Workflows that evolve with your team — flexible, intelligent, and built to learn as you grow.",
              icon: Brain,
              color: "from-yellow-400 to-amber-400"
            },
            {
              title: "Instant Scaling",
              desc: "Deploy updates or entire architectures in seconds with dynamic infrastructure built for agility.",
              icon: Rocket,
              color: "from-amber-400 to-orange-400"
            },
            {
              title: "AI-Driven Automation",
              desc: "Leverage context-aware AI to handle the busywork, from testing to deployment and beyond.",
              icon: Zap,
              color: "from-orange-400 to-red-400"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.3, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#151515] border-2 border-yellow-500/20 rounded-3xl p-10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-yellow-400/50 hover:shadow-[0_0_60px_rgba(255,220,100,0.3)] h-full">

                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,230,128,0.4),transparent_50%)]" />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    animate={{
                      scale: hoveredCard === i ? [1, 1.2, 1] : 1,
                      rotate: hoveredCard === i ? [0, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-20 border border-yellow-400/30`}>
                      <item.icon className="w-8 h-8 text-yellow-400" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-2xl font-bold text-yellow-300 mb-4 tracking-wide"
                    animate={{
                      y: hoveredCard === i ? -2 : 0,
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-yellow-100/80 text-base leading-relaxed font-light"
                    animate={{
                      y: hoveredCard === i ? -1 : 0,
                    }}
                  >
                    {item.desc}
                  </motion.p>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🏆 Enhanced Comparison Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="inline-block min-w-full align-middle rounded-3xl bg-black/60 border-2 border-yellow-400/20 shadow-2xl backdrop-blur-xl overflow-hidden">
            <table className="min-w-full text-base text-yellow-100/90">
              <thead>
                <tr className="border-b-2 border-yellow-400/20 bg-yellow-400/5">
                  <th className="py-6 px-8 text-left text-yellow-300/80 text-sm uppercase tracking-widest font-semibold">
                    Feature
                  </th>
                  {competitors.map((c, i) => (
                    <th
                      key={i}
                      className={`py-6 px-8 text-center font-bold ${
                        c.highlight
                          ? "text-yellow-300 text-lg bg-yellow-400/10 border-x border-yellow-400/20"
                          : c.color + " text-sm"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <c.icon className={`w-5 h-5 ${c.highlight ? "text-yellow-400" : "text-yellow-400/60"}`} />
                        {c.name}
                        {c.highlight && (
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 1
                            }}
                          >
                            <Crown className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          </motion.div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr
                    key={i}
                    className="border-t border-yellow-400/10 hover:bg-yellow-400/10 transition-all duration-300 group"
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="py-5 px-8 text-left font-semibold text-yellow-100/90 group-hover:text-yellow-200 transition-colors">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{
                            scale: hoveredRow === i ? 1.1 : 1,
                          }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-yellow-400/70" />
                        </motion.div>
                        {feature}
                      </div>
                    </td>
                    {results.map((row, j) => (
                      <td key={j} className="py-5 px-8 text-center group-hover:bg-yellow-400/5 transition-colors">
                        <motion.div
                          animate={{
                            scale: hoveredRow === i ? 1.2 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {row[i] ? (
                            <CheckCircle2
                              className={`inline-block ${
                                j === 0
                                  ? "text-yellow-400 drop-shadow-[0_0_15px_rgba(255,230,128,0.8)]"
                                  : "text-yellow-200/60"
                              }`}
                              size={24}
                            />
                          ) : (
                            <XCircle
                              className="inline-block text-red-400/70 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]"
                              size={24}
                            />
                          )}
                        </motion.div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Enhanced Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-md">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400/90 text-sm tracking-widest uppercase font-semibold">
              Built for the Future. Crafted for Developers.
            </span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
    </section>
  );
}