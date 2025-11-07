"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, Sparkles, Zap, Crown, Rocket, Scale, Brain, Users, TrendingUp, Shield, Clock } from "lucide-react";

export default function Workflows() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<
    { top: string; left: string; delay: number; duration: number; size: number }[]
  >([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const randomParticles = Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 6,
      size: 1 + Math.random() * 2,
    }));
    setParticles(randomParticles);
  }, []);

  const competitors = [
  { name: "InterviewCoder", color: "text-yellow-300", highlight: true, icon: Crown },
  {
    name: "<span class='transition-all duration-[3000ms] blur-[3px] hover:blur-[0px] select-none'>CodeMaster AI</span>",
    color: "text-yellow-100/60",
    icon: Brain,
  },
  {
    name: "<span class='transition-all duration-[3000ms] blur-[3px] hover:blur-[0px] select-none'>PrepGenius</span>",
    color: "text-yellow-100/60",
    icon: Scale,
  },
  {
    name: "<span class='transition-all duration-[3000ms] blur-[3px] hover:blur-[0px] select-none'>AlgoPro</span>",
    color: "text-yellow-100/60",
    icon: Rocket,
  },
    ];



  const features = [
    "Adaptive Learning Paths",
    "AI-Powered Interview Simulation",
    "Real-Time Code Feedback",
    "Performance Analytics",
    "100% Undetectable",
  ];

  const results = [
    [true, true, true, true, true],
    [true, false, true, false, false],
    [false, false, true, false, false],
    [true, false, false, false, false],
  ];

  return (
    <section
      className="relative min-h-screen py-40 overflow-hidden bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] text-yellow-200"
    >
      {/* Enhanced Background with Intense White Lighting */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Intense White Lighting Effects */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/20 blur-3xl rounded-full"
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-88 h-88 bg-white/15 blur-3xl rounded-full"
          animate={{
            opacity: [0.12, 0.25, 0.12],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/12 blur-3xl rounded-full"
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [0.9, 1.3, 0.9],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Additional White Light Sources */}
        <motion.div
          className="absolute top-1/5 left-1/5 w-72 h-72 bg-white/18 blur-3xl rounded-full"
          animate={{
            opacity: [0.1, 0.22, 0.1],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-white/16 blur-3xl rounded-full"
          animate={{
            opacity: [0.09, 0.2, 0.09],
            scale: [1.05, 0.95, 1.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Enhanced Light Beams */}
        <motion.div
          animate={{
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[40vw] h-full bg-[linear-gradient(115deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_70%)] blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute right-0 top-0 w-[30vw] h-full bg-[linear-gradient(245deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_70%)] blur-[100px] mix-blend-screen"
        />

        {/* White Light Streaks */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/25 to-transparent"
          animate={{
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-white/18 to-transparent"
          animate={{
            opacity: [0, 0.25, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

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

        {/* Floating White Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/50 rounded-full blur-[0.5px]"
              animate={{
                y: ["0%", "-100%"],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 12 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-yellow-300/30 blur-[0.5px]"
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
              animate={{
                y: ["0%", "-100%"],
                opacity: [0, 0.6, 0],
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

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-yellow-400/10 border border-yellow-400/15 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium tracking-wide">ENTERPRISE WORKFLOWS</span>
          </motion.div>

          {/* Professional Heading */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-8xl md:text-7xl font-bold text-white mb-6">
              Optimized{" "}

              <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                 Performances
              </span>
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed font-light"
            >
              Substantially your chances of getting hired at your dream company
            </motion.p>
          </motion.div>

          {/* Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center items-center gap-8 mt-12 flex-wrap"
          >
            {[
              { icon: Clock, value: "100%", label: "Love the Free Trial" },
              { icon: Users, value: "99%", label: "User Satisfaction" },
              { icon: TrendingUp, value: "93%", label: "More Likely to get Hired" },
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
        </motion.div>

        {/* Professional Workflow Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Adaptive Learning Paths",
              desc: "Personalized learning journeys that adapt to individual skill levels and learning patterns.",
              icon: Brain,
              metrics: "Personalized Paths"
            },
            {
              title: "Real-time Evaluation",
              desc: "Instant code assessment with detailed feedback and improvement suggestions.",
              icon: Zap,
              metrics: "Instant Feedback"
            },
            {
              title: "Safe Environment",
              desc: "No user ever has been caught. Users report feeling very safe using Interview Coder in any test.",
              icon: Users,
              metrics: "Fast Responses"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* Professional Card */}
              <div className="relative bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/10 rounded-xl p-6 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-yellow-400/30 hover:shadow-[0_0_30px_rgba(255,230,120,0.1)] h-full">

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with Icon and Metric */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                      <item.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="text-sm text-yellow-400 font-medium bg-yellow-400/10 px-2 py-1 rounded">
                      {item.metrics}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed font-light mb-4">
                    {item.desc}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-2">
                    {[
                      "AI-powered personalization",
                      "Progress tracking",
                      "Performance insights"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-white/60 text-sm">
                        <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="inline-block min-w-full align-middle rounded-xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm overflow-hidden">
            <table className="min-w-full text-sm text-white/80">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-4 px-6 text-left text-white/70 text-xs uppercase tracking-wider font-semibold">
                    Platform Features
                  </th>
                  {competitors.map((c, i) => (
                    <th
                      key={i}
                      className={`py-4 px-6 text-center font-semibold ${
                        c.highlight
                          ? "text-yellow-300 bg-yellow-400/10 border-x border-white/10"
                          : c.color
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <c.icon className={`w-4 h-4 ${c.highlight ? "text-yellow-400" : "text-yellow-400/60"}`} />
                        <span dangerouslySetInnerHTML={{ __html: c.name }} />

                        {c.highlight && (
                          <Crown className="w-4 h-4 text-yellow-400 fill-yellow-400" />
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
                    className="border-t border-white/5 hover:bg-white/5 transition-colors duration-200 group"
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="py-4 px-6 text-left font-medium text-white/90 group-hover:text-white transition-colors">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-yellow-400/70" />
                        {feature}
                      </div>
                    </td>
                    {results.map((row, j) => (
                      <td key={j} className="py-4 px-6 text-center group-hover:bg-white/5 transition-colors">
                        <motion.div
                          animate={{
                            scale: hoveredRow === i ? 1.1 : 1,
                          }}
                        >
                          {row[i] ? (
                            <CheckCircle2
                              className={`inline-block ${
                                j === 0
                                  ? "text-yellow-400"
                                  : "text-yellow-200/60"
                              }`}
                              size={20}
                            />
                          ) : (
                            <XCircle
                              className="inline-block text-red-400/60"
                              size={20}
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

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Ready to boost your career ?</span>
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}

    </section>
  );
}