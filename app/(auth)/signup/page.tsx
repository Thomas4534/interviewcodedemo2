"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, Zap, Cpu, Sparkles, User, Building } from "lucide-react";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 py-8 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,120,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,120,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Floating Tech Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full"
        animate={{
          y: [0, -40, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-amber-400 rounded-full"
        animate={{
          y: [0, 30, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-yellow-300 rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Glow Effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-yellow-400 rounded-full"
            />
            <span className="text-yellow-400 text-sm font-medium tracking-wider">JOIN INTERVIEW CODER</span>
            <Cpu className="w-3 h-3 text-yellow-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-4 tracking-tight"
          >
            Start Your
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg font-light"
          >
            Join thousands of developers acing their technical interviews
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-gray-800/80 rounded-3xl border border-gray-700/50 backdrop-blur-xl shadow-2xl p-8 space-y-6 relative overflow-hidden"
        >
          {/* Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-3xl pointer-events-none" />

          {/* Name */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-3 group"
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 tracking-wide">
              <User className="w-4 h-4 inline mr-2 text-yellow-400" />
              FULL NAME <span className="text-red-400 ml-1">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 font-mono tracking-wide"
            />
          </motion.div>

          {/* Company */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-3 group"
          >
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 tracking-wide">
              <Building className="w-4 h-4 inline mr-2 text-yellow-400" />
              COMPANY NAME <span className="text-red-400 ml-1">*</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 font-mono tracking-wide"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-3 group"
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 tracking-wide">
              <Mail className="w-4 h-4 inline mr-2 text-yellow-400" />
              WORK EMAIL <span className="text-red-400 ml-1">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@company.com"
              className="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 font-mono tracking-wide"
            />
          </motion.div>

          {/* Password */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-3 group"
          >
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 tracking-wide">
              <Lock className="w-4 h-4 inline mr-2 text-yellow-400" />
              SECURE PASSWORD <span className="text-red-400 ml-1">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Minimum 10 characters"
              className="w-full px-4 py-4 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 font-mono tracking-wide"
            />
          </motion.div>

          {/* Register Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-black font-bold rounded-2xl hover:shadow-[0_0_40px_rgba(255,230,120,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
              />
            ) : (
              <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
            )}
            <span className="text-lg tracking-wide">
              {isLoading ? "CREATING ACCOUNT..." : "LAUNCH ACCOUNT"}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 text-gray-500 text-sm my-6"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            <span className="tracking-wider">OR CONTINUE WITH</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          </motion.div>

          {/* Google Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-gray-600 text-gray-300 font-medium rounded-2xl hover:bg-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 backdrop-blur-sm group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="font-semibold">Google</span>
          </motion.button>
        </motion.form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center mt-8 text-gray-400 text-sm"
        >
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors hover:underline"
          >
            Sign in
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center items-center gap-8 mt-12 text-gray-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span>94% Success Rate</span>
          </div>
          <div className="w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span>100K+ Developers</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}