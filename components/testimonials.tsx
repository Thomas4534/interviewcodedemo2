"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Quote, Sparkles, Star, Zap } from "lucide-react";

const testimonials = [
  {
    name: "Kayla P.",
    company: "Tesla",
    content: "A creative revolution — we finish projects twice as fast now.",
  },
  {
    name: "Andrew K.",
    company: "Samsung",
    content: "This AI feels human. It's like working with a digital partner.",
  },
  {
    name: "John J.",
    company: "Meta",
    content: "Every idea turns real in minutes. It's truly magical tech.",
  },
  {
    name: "Apple",
    company: "Google",
    content: "Seamless, fast, and smart — it powers our whole workflow.",
  },
  {
    name: "Miriam E.",
    company: "Google",
    content: "It's reliable, intuitive, and simply makes work enjoyable again.",
  },
  {
    name: "Eloise V.",
    company: "Microsoft",
    content: "Our team's productivity doubled. The results speak for themselves.",
  },
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ top: string; left: string; size: number; delay: number }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const randomParticles = Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5
    }));
    setParticles(randomParticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] text-yellow-200 py-32">
      {/* 🌟 Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/3 via-transparent to-amber-500/2" />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,128,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 blur-3xl rounded-full"
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
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/3 blur-3xl rounded-full"
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
      </div>

      {/* ✨ Enhanced Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute bg-yellow-300 rounded-full blur-[1px]"
              animate={{
                y: ["0%", "-100%", "0%"],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-2xl bg-yellow-400/5 border border-yellow-400/20 backdrop-blur-md"
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 text-sm font-semibold tracking-wider">TRUSTED BY INDUSTRY LEADERS</span>
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300 bg-clip-text text-transparent tracking-tight mb-6"
        >
          Voices of{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            Innovation
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 text-yellow-100/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
        >
          From visionaries to builders — see how leaders are shaping the
          future, one breakthrough at a time.
        </motion.p>
      </div>

      {/* Enhanced Testimonials Grid */}
      {mounted && (
        <div className="relative flex flex-wrap justify-center gap-8 px-8 min-h-[280px] max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((t, i) => (
              <motion.div
                key={`${t.name}-${currentIndex}`}
                initial={{ opacity: 0, y: 60, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, y: -60, scale: 0.9, rotateY: 15 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.2
                }}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group cursor-pointer w-80 md:w-96"
              >
                {/* Card Background */}
                <div className="relative bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#151515] border border-yellow-500/20 rounded-3xl p-8 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-yellow-400/40 hover:shadow-[0_0_50px_rgba(255,230,120,0.3)]">

                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,230,128,0.3),transparent_50%)]" />
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <motion.div
                      className="mb-6"
                      animate={{
                        scale: hoveredCard === i ? [1, 1.1, 1] : 1,
                        rotate: hoveredCard === i ? [0, 5, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Quote className="w-8 h-8 text-yellow-400/60" />
                    </motion.div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, starIndex) => (
                        <motion.div
                          key={starIndex}
                          animate={{
                            scale: hoveredCard === i ? [1, 1.2, 1] : 1,
                            rotate: hoveredCard === i ? [0, 10, 0] : 0,
                          }}
                          transition={{ delay: starIndex * 0.1 }}
                        >
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <motion.p
                      className="italic text-lg leading-relaxed bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300 bg-clip-text text-transparent mb-6 font-medium"
                      animate={{
                        y: hoveredCard === i ? -2 : 0,
                      }}
                    >
                      {t.content}
                    </motion.p>

                    {/* Author Info */}
                    <motion.div
                      className="flex items-center justify-between"
                      animate={{
                        x: hoveredCard === i ? 5 : 0,
                      }}
                    >
                      <div>
                        <div className="text-yellow-50 font-bold text-base">{t.name}</div>
                        <div className="text-sm text-yellow-300/70 flex items-center gap-2">
                          <Zap className="w-3 h-3" />
                          {t.company}
                        </div>
                      </div>

                      {/* Company Logo Placeholder */}
                      <motion.div
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black font-bold text-sm"
                        animate={{
                          scale: hoveredCard === i ? 1.1 : 1,
                          rotate: hoveredCard === i ? 5 : 0,
                        }}
                      >
                        {t.company.charAt(0)}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Enhanced Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-24 text-center relative z-10"
      >
        <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-yellow-400/5 border border-yellow-400/20 backdrop-blur-md">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          <span className="text-yellow-400/90 text-sm tracking-widest uppercase font-semibold">
            Real stories from engineers redefining innovation
          </span>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        </div>
      </motion.div>

      {/* 💼 Enhanced Company Logos Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-28 relative z-10"
      >
        <div className="text-center mb-12">
          <motion.p
            className="text-yellow-300/70 text-lg font-light tracking-wide"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            Trusted by industry leaders worldwide
          </motion.p>
        </div>

        <div className="flex justify-center items-center gap-12 md:gap-20 px-12 flex-wrap">
          {[
            { name: "Meta", src: "/images/meta.svg" },
            { name: "Spotify", src: "/images/spotify.svg" },
            { name: "Amazon", src: "/images/amazon.svg" },
            { name: "Google", src: "/images/google.svg" },
          ].map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="relative group"
            >
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Image
                src={company.src}
                alt={company.name}
                width={160}
                height={80}
                className="relative opacity-80 group-hover:opacity-100 transition-all duration-500 filter group-hover:brightness-125"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e0e0e] to-transparent pointer-events-none" />
    </section>
  );
}