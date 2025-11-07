"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Lock, Mail, ArrowRight, Zap, Cpu, Sparkles } from "lucide-react";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Safe, TypeScript-compliant Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-[#0e0e0e] px-4 py-20 overflow-hidden">
      {/* Subtle Grid Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,120,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,120,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </motion.div>

      {/* Floating dots for star-like visuals */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          y: [0, -40, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-amber-400 rounded-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          y: [0, 30, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-yellow-300 rounded-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 0.9, 0.5],
          y: [0, -25, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-yellow-400 rounded-full"
            />
            <span className="text-yellow-400 text-sm font-medium tracking-wider">
              CODER 2.0
            </span>
            <Cpu className="w-3 h-3 text-yellow-400" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4 tracking-tight"
          >
            Access Your <br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg font-light"
          >
            Continue your journey with our{" "}
            <span className="text-yellow-400 font-medium">
              AI-powered interview platform
            </span>
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.form
          variants={cardVariants}
          onSubmit={handleSubmit}
          className="bg-gray-800/80 rounded-3xl border border-gray-700/50 backdrop-blur-xl shadow-2xl p-8 space-y-8 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Email Field */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="space-y-3"
          >
            <label className="block text-sm font-medium text-gray-300 tracking-wide">
              <Mail className="w-4 h-4 inline mr-2 text-yellow-400" />
              EMAIL ADDRESS
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="enter@your.email"
              className="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 font-mono tracking-wide"
            />
          </motion.div>

          {/* Password Field */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-300 tracking-wide">
                <Lock className="w-4 h-4 inline mr-2 text-yellow-400" />
                ACCESS CODE
              </label>
              <Link
                href="#"
                className="text-sm text-yellow-400/70 hover:text-yellow-300 transition-colors font-medium"
              >
                Recover Access
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••••••"
              className="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 font-mono tracking-wide"
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-black font-bold rounded-2xl hover:shadow-[0_0_40px_rgba(255,230,120,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
              />
            ) : (
              <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
            )}
            <span className="text-lg tracking-wide">
              {isLoading ? "AUTHENTICATING..." : "INITIATE SESSION"}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.form>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-10 text-gray-400 text-sm"
        >
          New to the platform?{" "}
          <Link
            href="#"
            className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors hover:underline"
          >
            Create Account
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-8 mt-12 text-gray-500 text-sm pb-16"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span>Enterprise Security</span>
          </div>
          <div className="w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span>100K+ Developers</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
