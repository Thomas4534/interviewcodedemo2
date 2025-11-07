"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { Rocket, Target, Award, Zap, Users, TrendingUp, Star, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const successStories = [
    {
      company: "Amazon",
      role: "$200K Software Engineer",
      image: "/images/success_1.png",
      metrics: "96% acceptance rate at Amazon",
      description: "From 0 coding interviews to 3 competing offers at Amazon. Mastered data structures and algorithms to ace the technical rounds.",
      icon: Target,
      color: "from-yellow-400 to-amber-400",
      features: [
        "Technical interview mastery",
        "Behavioral question prep",
        "Offer negotiation strategy"
      ]
    },
    {
      company: "Capital One",
      role: "Senior Developer",
      image: "/images/success_2.png",
      metrics: "85% acceptance rate at Capital",
      description: "Landed senior role with 40% salary increase in just 6 weeks. Focused on system design and leadership principles.",
      icon: Shield,
      color: "from-blue-400 to-cyan-400",
      features: [
        "System design preparation",
        "Leadership principles",
        "Case study interviews"
      ]
    },
    {
      company: "Citadel",
      role: "Quantitative Developer",
      image: "/images/success_3.png",
      metrics: "92% acceptance rate at Citadel",
      description: "Mastered algorithmic interviews for top-tier quant firm. Focused on high-performance computing and mathematical reasoning.",
      icon: TrendingUp,
      color: "from-purple-400 to-pink-400",
      features: [
        "Algorithm optimization",
        "Mathematical reasoning",
        "High-frequency trading concepts"
      ]
    },
    {
      company: "IBM",
      role: "Lead Software Engineer",
      image: "/images/success_4.png",
      metrics: "89% acceptance rate at IBM",
      description: "Transitioned from mid-level to lead engineer in 8 months. Developed strong architectural and team leadership skills.",
      icon: Users,
      color: "from-green-400 to-emerald-400",
      features: [
        "Architectural design",
        "Team leadership",
        "Project management"
      ]
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentStory = successStories[currentIndex];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] text-yellow-200 py-28 border-t border-yellow-400/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,128,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,128,0.08)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Light Accents */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-400/5 blur-2xl rounded-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-amber-500/4 blur-2xl rounded-full"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Light Beam */}
        <motion.div
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[35vw] h-full bg-[linear-gradient(115deg,rgba(255,230,150,0.06)_0%,rgba(255,230,150,0)_70%)] blur-[100px] mix-blend-screen"
        />

        {/* Floating Particles */}
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
      </div>

      {/* Background Shape */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-32 ml-20 -translate-x-1/2 opacity-20"
        aria-hidden="true"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={700}
          height={600}
          alt="Blurred shape"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-yellow-400/10 border border-yellow-400/15 backdrop-blur-sm"
          >
            <Rocket className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium tracking-wide">PROVEN SUCCESS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            From Zero to{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Hero
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Real developers, real interviews, real offers. See how our platform transforms university grads into engineers.
          </motion.p>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center gap-8 mt-12 flex-wrap"
          >
            {[
              { icon: Award, value: "94%", label: "Success Rate" },
              { icon: Zap, value: "3.2x", label: "Faster Hiring" },
              { icon: Star, value: "$150K", label: "Average Offer" },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                className="flex items-center gap-3 text-white/60"
                whileHover={{ scale: 1.05 }}
              >
                <metric.icon className="w-5 h-5 text-yellow-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-sm">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Rotating Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              {/* Large Image */}
              <motion.div
                className="relative w-full lg:w-1/2 h-96 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={currentStory.image}
                  alt={currentStory.company}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Company Badge */}
                <motion.div
                  className="absolute top-6 left-6 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-xl border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-white text-lg font-bold">{currentStory.company}</span>
                </motion.div>

                {/* Metrics Badge */}
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl shadow-lg">
                  <span className="text-black text-sm font-semibold">{currentStory.metrics}</span>
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                    <span className="text-yellow-400 text-lg font-bold">
                      {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <currentStory.icon className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-2xl font-bold text-white">{currentStory.role}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 text-lg leading-relaxed font-light">
                  {currentStory.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {currentStory.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span className="text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center lg:justify-start gap-2 mt-8">
                  {successStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-yellow-400 scale-125"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Ready to write your success story?</span>
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e0e0e] to-transparent pointer-events-none" />
    </section>
  );
}