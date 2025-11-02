"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { Sparkles, Zap, Rocket, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";

export default function Cta() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] text-white py-32 border-t border-yellow-400/10">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,128,0.1)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/8 blur-3xl rounded-full"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/6 blur-3xl rounded-full"
          animate={{
            y: [0, 50, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
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
            opacity: [0.2, 0.5, 0.2],
            rotate: [-2, 2, -2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[40vw] h-full bg-[linear-gradient(115deg,rgba(255,230,150,0.08)_0%,rgba(255,230,150,0)_70%)] blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            rotate: [2, -2, 2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-0 top-0 w-[40vw] h-full bg-[linear-gradient(-115deg,rgba(255,230,150,0.08)_0%,rgba(255,230,150,0)_70%)] blur-[120px] mix-blend-screen"
        />
      </div>

      {/* Enhanced Background Accent Shape */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-32 ml-20 -translate-x-1/2 opacity-30"
        aria-hidden="true"
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
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300/50 rounded-full blur-[1px]"
            animate={{
              y: ["0%", "-100%"],
              x: ["0%", Math.sin(i) * 30 + "%"],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* CTA Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-md"
        >
          <Rocket className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 text-sm font-semibold tracking-wider">JOIN THE REVOLUTION</span>
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </motion.div>

        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black tracking-tight"
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
            Join the Code
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Revolution
            </span>
          </motion.h2>

          {/* Heading Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-400/15 to-orange-400/20 blur-3xl scale-150 opacity-20 -z-10" />
        </motion.div>

        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-light"
        >
          Step into the future of development. Build smarter, faster, and bolder
          with{" "}
          <span className="text-yellow-400 font-semibold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent underline underline-offset-4 decoration-yellow-400/50">
            Interview Coder
          </span>.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          {/* Primary Button */}
          <motion.div
            onHoverStart={() => setHoveredButton("primary")}
            onHoverEnd={() => setHoveredButton(null)}
            className="relative"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center gap-4 px-14 py-5
              text-lg font-bold text-black bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400
              rounded-2xl shadow-2xl hover:shadow-[0_0_60px_rgba(255,230,120,0.6)]
              transition-all duration-500 group overflow-hidden cursor-pointer"
              href="#0"
            >
              {/* Button Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Content */}
              <motion.div
                animate={{
                  scale: hoveredButton === "primary" ? 1.1 : 1,
                }}
              >
                <Rocket className="w-6 h-6" />
              </motion.div>
              <span>Start Building</span>
              <motion.div
                animate={{
                  x: hoveredButton === "primary" ? 5 : 0,
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-amber-400/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
            </motion.a>
          </motion.div>

          {/* Secondary Button */}
          <motion.div
            onHoverStart={() => setHoveredButton("secondary")}
            onHoverEnd={() => setHoveredButton(null)}
            className="relative"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center gap-4 px-14 py-5
              text-lg font-bold text-yellow-200 border-2 border-yellow-400/70
              rounded-2xl hover:bg-yellow-400 hover:text-black
              backdrop-blur-md bg-yellow-400/5 hover:shadow-[0_0_40px_rgba(255,230,120,0.4)]
              transition-all duration-500 group overflow-hidden cursor-pointer"
              href="#0"
            >
              {/* Button Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Content */}
              <motion.div
                animate={{
                  scale: hoveredButton === "secondary" ? 1.1 : 1,
                }}
              >
                <Calendar className="w-6 h-6" />
              </motion.div>
              <span>Schedule Demo</span>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-amber-400/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Additional Trust Element */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex justify-center items-center gap-4"
        >
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                <Zap className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </div>
          <span className="text-yellow-300/70 text-sm font-medium">Join 100,000+ developers already revolutionizing their workflow</span>
        </motion.div>
      </div>

      {/* Enhanced Gradient Overlays */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-yellow-100/[0.03] via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-yellow-400/[0.02] via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none" />
    </section>
  );
}