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
import { Sparkles, Zap, Cpu, Brain, Users, Scale, Code, Shield, Clock, TrendingUp, Target, BarChart3, Rocket, Award } from "lucide-react";

function FloatingParticles() {
  const [particles, setParticles] = useState<
    { top: string; left: string; delay: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 6,
      size: 1 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-300/40 blur-[1px]"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: ["0%", "-100%"],
            opacity: [0, 0.7, 0],
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
      title: "Advanced Code Evaluation",
      desc: "AI-powered assessment engine that evaluates code quality, efficiency, and best practices in real-time.",
      img: Feature1,
      icon: Icon1,
      featureIcon: Code,
      metrics: "95% accuracy rate"
    },
    {
      number: "02",
      title: "Intelligent Performance Analytics",
      desc: "Comprehensive insights into coding patterns, skill progression, and technical competency metrics.",
      img: Feature2,
      icon: Icon2,
      featureIcon: BarChart3,
      metrics: "40+ metrics tracked"
    },
    {
      number: "03",
      title: "Real-Time Modifications",
      desc: "Real-time code collaboration with the agent with integrated abilities to make it look natural.",
      img: Feature3,
      icon: Icon3,
      featureIcon: Users,
      metrics: "Zero latency"
    },
    {
      number: "04",
      title: "Safe Security",
      desc: "There exists no reported case of failure using Interview Coder.",
      img: Feature4,
      icon: Icon4,
      featureIcon: Shield,
      metrics: "SOC 2 compliant"
    },
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] text-yellow-200"
>

      {/* Professional Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/2 via-transparent to-amber-500/1" />

        {/* Professional Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,128,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,128,0.08)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Subtle Light Accents */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/3 blur-2xl rounded-full"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-amber-500/2 blur-2xl rounded-full"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Subtle Light Beam */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[35vw] h-full bg-[linear-gradient(115deg,rgba(255,230,150,0.05)_0%,rgba(255,230,150,0)_70%)] blur-[100px] mix-blend-screen"
        />
      </div>

      {/* Background Visuals */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 opacity-20 blur-2xl"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image src={BlurredShapeGray} width={600} height={500} alt="" />
      </motion.div>

      <FloatingParticles />

      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 text-center mb-20 relative z-10">
        {/* Professional Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-yellow-400/10 border border-yellow-400/15 backdrop-blur-sm"
        >
          <Rocket className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 text-sm font-medium tracking-wide">ENTERPRISE FEATURES</span>
        </motion.div>

        {/* Professional Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Platform{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Engineered to Score High even in the Hardest Interviews
          </motion.p>
        </motion.div>

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center items-center gap-8 mt-12 flex-wrap"
        >
          {[
            { icon: Target, value: "93%", label: "Success Rate" },
            { icon: Users, value: "100K+", label: "Active Users" },
            { icon: Award, value: "95%", label: "Satisfaction" },
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

      {/* Professional Features Grid */}
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl px-6 relative z-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredFeature(i)}
            onHoverEnd={() => setHoveredFeature(null)}
            whileHover={{
              scale: 1.02,
            }}
            className="relative group"
          >
            {/* Professional Card */}
            <div className="relative bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/10 rounded-xl p-6 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-yellow-400/30 hover:shadow-[0_0_30px_rgba(255,230,120,0.1)] h-full">

              {/* Content Layout */}
              <div className="relative z-10 flex flex-col lg:flex-row items-start gap-6">
                {/* Image Block */}
                <motion.div
                  className="relative w-full lg:w-2/5 h-48 rounded-lg overflow-hidden"
                  animate={{
                    scale: hoveredFeature === i ? 1.03 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-lg bg-white/5">
                    <Image
                      src={f.img}
                      alt={f.title}
                      className="object-cover w-full h-full opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Icon Badge */}
                  <motion.div
                    className="absolute bottom-3 right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg border border-yellow-300/30"
                    animate={{
                      scale: hoveredFeature === i ? 1.1 : 1,
                    }}
                  >
                    <Image src={f.icon} alt="icon" width={24} height={24} />
                  </motion.div>

                  {/* Feature Icon */}
                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                    <f.featureIcon className="w-4 h-4 text-yellow-400" />
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="flex flex-col text-left w-full lg:w-3/5">
                  {/* Header with Number and Metric */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                        <span className="text-yellow-400 text-sm font-bold">
                          {f.number}
                        </span>
                      </div>
                      <div className="text-sm text-yellow-400 font-medium bg-yellow-400/10 px-2 py-1 rounded">
                        {f.metrics}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {f.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed font-light mb-4">
                    {f.desc}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-2 mt-2">
                    {[
                      "Real-time evaluation",
                      "Enterprise scalability",
                      "Advanced analytics"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-white/60 text-sm">
                        <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 text-center relative z-10"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">Ready to Take your Career to the Next Level??</span>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
            Start Free Trial
          </button>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
    </section>
  );
}