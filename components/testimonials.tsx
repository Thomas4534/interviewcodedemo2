"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Star,
  Target,
  Award,
  Rocket,
  Zap,
  Cpu,
  Brain,
  Shield,
} from "lucide-react";

const testimonials = [
  {
    name: "Sarah C.",
    role: "Junior Engineer",
    company: "Spotify",
    content:
      "Interview Coder put an end to my 6-months unemployment period.",
    metrics: "135k",
  },
  {
    name: "Marcus R.",
    role: "Engineering Intern",
    company: "Google",
    content:
      "Interview Coder has helped in so many assignments, interviews and tests, it's truly fantastic.",
    metrics: "113k",
  },
  {
    name: "Priya P.",
    role: "Full-Stack Developer",
    company: "Amazon",
    content:
      "The AI-powered real-time evaluation has helped me answer questions accurately without making it look apparent.",
    metrics: "125k",
  },
  {
    name: "James K.",
    role: "Senior Engineer",
    company: "Meta",
    content:
      "Interview Coder truly has changed my life. I got my dream job at Meta and can now enjoy a six-figures salary.",
    metrics: "178k",
  },
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<
    { top: string; left: string; size: number; delay: number }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const randomParticles = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
    setParticles(randomParticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(
      ...testimonials.slice(0, 3 - visibleTestimonials.length)
    );
  }

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] text-yellow-200">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/2 via-transparent to-amber-500/1" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,128,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,128,0.08)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>
      </div>

      {/* Subtle particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute bg-yellow-300/30 rounded-full blur-[0.5px]"
              animate={{
                y: ["0%", "-100%"],
                opacity: [0, 0.6, 0],
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
                height: p.size,
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-20 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg bg-yellow-400/10 border border-yellow-400/15 backdrop-blur-sm"
        >
          <Cpu className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 text-sm font-medium tracking-wide">
            The #1 Tool to Break into Your Favorite FAANG Company
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Proven Results at{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            Scale
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed font-light"
        >
          Join 100k+ Developers in Fighting Against Unrealistic Expectations from Recruiters Exploiting the Vulnerable Job Market
        </motion.p>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-8 mt-12 flex-wrap"
        >
          {[
            { icon: Shield, value: "100+", label: "Top Companies" },
            { icon: Brain, value: "100K+", label: "Developers" },
            { icon: Award, value: "93%", label: "Success Rate" },
          ].map((metric) => (
            <motion.div
              key={metric.label}
              className="flex items-center gap-3 text-white/60"
              whileHover={{ scale: 1.05 }}
            >
              <metric.icon className="w-5 h-5 text-yellow-400" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">
                  {metric.value}
                </div>
                <div className="text-sm">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials */}
      {mounted && (
        <div className="relative flex flex-wrap justify-center gap-6 px-6 min-h-[320px] max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((t, i) => (
              <motion.div
                key={`${t.name}-${currentIndex}`}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.15,
                }}
                className="relative group cursor-pointer w-full md:w-80 lg:w-96"
              >
                <div className="relative bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/10 rounded-xl p-6 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-yellow-400/30 hover:shadow-[0_0_30px_rgba(255,230,120,0.15)]">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
                    <span className="text-yellow-400 text-xs font-medium">
                      {t.metrics}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-4">
                      <Zap className="w-6 h-6 text-yellow-400/60" />
                    </div>
                    <p className="text-white/80 leading-relaxed mb-4 text-sm font-light">
                      {t.content}
                    </p>

                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-semibold text-sm">
                          {t.name}
                        </div>
                        <div className="text-white/60 text-xs">{t.role}</div>
                        <div className="text-yellow-400 text-xs font-medium flex items-center gap-1">
                          <Rocket className="w-3 h-3" />
                          {t.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Logos (75% width section) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 relative z-10"
      >
        <div className="text-center mb-12">
          <motion.p className="text-white/60 text-sm font-light tracking-wide uppercase">
            Fooled Recruiters at
          </motion.p>
        </div>

        <div className="flex justify-center items-center gap-16 px-6 flex-wrap max-w-[75%] mx-auto">
          {[
            { name: "Google", src: "/images/google.svg" },
            { name: "Meta", src: "/images/meta.svg" },
            { name: "Amazon", src: "/images/amazon.svg" },
            { name: "Spotify", src: "/images/spotify.svg" },
          ].map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative group w-40 md:w-56 lg:w-64 h-16 md:h-20 lg:h-24 opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={company.src}
                alt={company.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-20 text-center relative z-10"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">
              Ready to make the big change?
            </span>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
            Schedule Demo
          </button>
        </div>
      </motion.div>

      {/* Bottom gradient */}
    </section>
  );
}
