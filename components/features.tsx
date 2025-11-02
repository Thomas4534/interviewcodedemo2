"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Feature1 from "@/public/images/feature-1.svg";
import Feature2 from "@/public/images/feature-2.svg";
import Feature3 from "@/public/images/feature-3.svg";
import Feature4 from "@/public/images/feature-4.svg";
import Icon1 from "@/public/images/icon-1.svg";
import Icon2 from "@/public/images/icon-2.svg";
import Icon3 from "@/public/images/icon-3.svg";
import Icon4 from "@/public/images/icon-4.svg";
import { Sparkles, Zap, Cpu, Brain, Users, Scale } from "lucide-react";

function FloatingParticles() {
  const [particles, setParticles] = useState<
    { top: string; left: string; delay: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 35 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 8,
      size: 1 + Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  return (
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
            y: ["0%", "-120%"],
            x: ["0%", Math.sin(i) * 30 + "%"],
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
  );
}

export default function Features() {
  const [mounted, setMounted] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const features = [
    {
      number: "01",
      title: "Modular Architecture",
      desc: "A flexible framework built to evolve as your vision expands — adaptive, reliable, limitless.",
      img: Feature1,
      icon: Icon1,
      featureIcon: Cpu,
      color: "from-yellow-400 to-amber-400"
    },
    {
      number: "02",
      title: "Predictive Insights",
      desc: "AI-enhanced visibility into your performance metrics and user behavior, instantly and intuitively.",
      img: Feature2,
      icon: Icon2,
      featureIcon: Brain,
      color: "from-amber-400 to-orange-400"
    },
    {
      number: "03",
      title: "Real-time Collaboration",
      desc: "Seamless team synchronization with live updates and zero friction — wherever you are.",
      img: Feature3,
      icon: Icon3,
      featureIcon: Users,
      color: "from-orange-400 to-red-400"
    },
    {
      number: "04",
      title: "Scalable Intelligence",
      desc: "From early prototypes to enterprise scale — deploy a platform that grows with your ambition.",
      img: Feature4,
      icon: Icon4,
      featureIcon: Scale,
      color: "from-red-400 to-pink-500"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#141414] via-[#1a1a1a] to-[#0f0f0f] text-yellow-100 py-32 md:py-44">
      {/* 🌟 Enhanced Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Radial Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,215,100,0.15)_0%,rgba(20,20,20,0)_70%)] blur-3xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,230,150,0.2)_0deg,transparent_60deg,rgba(255,215,100,0.15)_120deg,transparent_180deg,rgba(255,230,150,0.2)_240deg,transparent_300deg)] rounded-full"
          />
        </motion.div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,128,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,128,0.2)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/12 blur-3xl rounded-full"
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
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full"
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
            opacity: [0.2, 0.7, 0.2],
            rotate: [-4, 4, -4],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[45vw] h-full bg-[linear-gradient(115deg,rgba(255,230,150,0.18)_0%,rgba(255,230,150,0)_80%)] blur-[160px] mix-blend-screen"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.7, 0.2],
            rotate: [4, -4, 4],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute right-0 top-0 w-[45vw] h-full bg-[linear-gradient(-115deg,rgba(255,230,150,0.18)_0%,rgba(255,230,150,0)_80%)] blur-[160px] mix-blend-screen"
        />
      </div>

      {/* Enhanced Background Visuals */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 opacity-30 blur-3xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image src={BlurredShapeGray} width={760} height={668} alt="" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-0 right-1/2 -z-10 translate-x-[60%] opacity-35 blur-3xl"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Image src={BlurredShape} width={760} height={668} alt="" />
      </motion.div>

      <FloatingParticles />

      {/* Enhanced Header */}
      <div className="mx-auto max-w-6xl px-6 text-center mb-28 relative z-10">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-md"
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 text-sm font-semibold tracking-wider">CORE PLATFORM FEATURES</span>
          <Zap className="w-5 h-5 text-yellow-400" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative"
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
            The Core{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Systems
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl text-yellow-200/90 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Powering Our <span className="text-yellow-400 font-semibold">Platform</span> with Precision Engineering
          </motion.p>

          {/* Heading Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/25 via-amber-400/20 to-orange-400/25 blur-3xl scale-150 opacity-20 -z-10" />
        </motion.div>

        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 text-yellow-100/80 text-xl leading-relaxed max-w-3xl mx-auto font-light"
        >
          Every module is precision-engineered to amplify speed, insight, and collaboration.
        </motion.p>
      </div>

      {/* 🎯 Enhanced 2x2 Grid */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl px-6 relative z-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredFeature(i)}
            onHoverEnd={() => setHoveredFeature(null)}
            whileHover={{
              scale: 1.02,
              y: -5
            }}
            className="relative group cursor-pointer"
          >
            {/* Main Card Container */}
            <div className="relative bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#151515] border-2 border-yellow-400/20 rounded-3xl p-8 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-yellow-400/50 hover:shadow-[0_0_60px_rgba(255,220,100,0.3)] h-full">

              {/* Animated Border Glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${f.color} opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500`} />

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,230,128,0.4),transparent_50%)]" />
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Content Layout */}
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                {/* Enhanced Image Block */}
                <motion.div
                  className="relative w-full lg:w-3/5 h-72 rounded-2xl overflow-hidden shadow-2xl group/image"
                  animate={{
                    scale: hoveredFeature === i ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <Image
                      src={f.img}
                      alt={f.title}
                      className="object-cover w-full h-full opacity-95 transition-all duration-700 group-hover/image:scale-110"
                    />

                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
                  </div>

                  {/* Enhanced Icon Badge */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,230,128,0.5)] border-2 border-yellow-300/50"
                    animate={{
                      scale: hoveredFeature === i ? [1, 1.2, 1] : 1,
                      rotate: hoveredFeature === i ? [0, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image src={f.icon} alt="icon" width={32} height={32} className="filter drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-yellow-400/30 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>

                  {/* Floating Feature Icon */}
                  <motion.div
                    className="absolute top-4 left-4 p-3 rounded-2xl bg-black/50 backdrop-blur-md border border-yellow-400/30"
                    animate={{
                      y: hoveredFeature === i ? [0, -5, 0] : 0,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <f.featureIcon className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                </motion.div>

                {/* Enhanced Text Content */}
                <motion.div
                  className="flex flex-col text-left w-full lg:w-2/5"
                  animate={{
                    x: hoveredFeature === i ? 5 : 0,
                  }}
                >
                  {/* Number Badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 w-fit"
                    animate={{
                      scale: hoveredFeature === i ? 1.1 : 1,
                    }}
                  >
                    <span className="text-yellow-400 text-sm font-bold tracking-widest">
                      {f.number}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide"
                    animate={{
                      y: hoveredFeature === i ? -2 : 0,
                    }}
                  >
                    {f.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-yellow-100/80 text-lg leading-relaxed font-light"
                    animate={{
                      y: hoveredFeature === i ? -1 : 0,
                    }}
                  >
                    {f.desc}
                  </motion.p>
                </motion.div>
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

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none" />
    </section>
  );
}