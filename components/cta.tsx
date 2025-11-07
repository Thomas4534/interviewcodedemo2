"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { Sparkles, Zap, Rocket, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";

export default function Cta() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] text-yellow-200 py-20 border-t border-yellow-400/10">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,128,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,128,0.08)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Professional Light Accents */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-400/5 blur-2xl rounded-full"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-amber-500/4 blur-2xl rounded-full"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Subtle Light Beams */}
        <motion.div
          animate={{
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[35vw] h-full bg-[linear-gradient(115deg,rgba(255,230,150,0.06)_0%,rgba(255,230,150,0)_70%)] blur-[100px] mix-blend-screen"
        />
      </div>

      {/* Background Accent Shape */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-32 ml-20 -translate-x-1/2 opacity-20"
        aria-hidden="true"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={700}
          height={600}
          alt="Blurred shape"
        />
      </motion.div>

      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300/30 rounded-full blur-[0.5px]"
            animate={{
              y: ["0%", "-100%"],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
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
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Professional Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-yellow-400/10 border border-yellow-400/15 backdrop-blur-sm"
        >
          <Rocket className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 text-sm font-medium tracking-wide">JOIN PROFESSIONAL DEVELOPERS</span>
        </motion.div>

        {/* Professional Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Gain an {" "}

            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Unfair Advantage
            </span>
          </h2>

          {/* Subtle Heading Accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 blur-xl scale-125 opacity-10 -z-10" />
        </motion.div>

        {/* Professional Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Join thousands of developers who have accelerated their careers with our
          <span className="text-yellow-400 font-medium"> professional coding interview platform</span>.
          Land your dream role at top tech companies.
        </motion.p>

        {/* Professional CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {/* Primary Button */}
          <motion.div
            onHoverStart={() => setHoveredButton("primary")}
            onHoverEnd={() => setHoveredButton(null)}
            className="relative"
          >
            <motion.a
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center gap-3 px-8 py-4
              text-base font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-400
              rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(255,230,120,0.3)]
              transition-all duration-300 group overflow-hidden cursor-pointer"
              href="#0"
            >
              {/* Button Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 pointer-events-none" />

              {/* Content */}
              <motion.div
                animate={{
                  scale: hoveredButton === "primary" ? 1.05 : 1,
                }}
              >
                <Rocket className="w-5 h-5" />
              </motion.div>
              <span>Start Free Trial</span>
              <motion.div
                animate={{
                  x: hoveredButton === "primary" ? 3 : 0,
                }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
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
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center gap-3 px-8 py-4
              text-base font-semibold text-yellow-200 border border-yellow-400/40
              rounded-lg hover:bg-yellow-400 hover:text-black
              backdrop-blur-sm bg-yellow-400/5 hover:shadow-[0_0_20px_rgba(255,230,120,0.2)]
              transition-all duration-300 group overflow-hidden cursor-pointer"
              href="#0"
            >
              {/* Button Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 pointer-events-none" />

              {/* Content */}
              <motion.div
                animate={{
                  scale: hoveredButton === "secondary" ? 1.05 : 1,
                }}
              >
                <Calendar className="w-5 h-5" />
              </motion.div>
              <span>Book Demo</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Professional Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-white/60"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <Zap key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>100,000+ Professional Developers</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span>94% Success Rate</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span>Top Tech Companies</span>
          </div>
        </motion.div>
      </div>

      {/* Professional Gradient Overlays */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-yellow-100/[0.02] via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0e0e0e] to-transparent pointer-events-none" />
    </section>
  );
}
