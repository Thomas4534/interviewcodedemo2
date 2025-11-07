"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Twitter, Github, Linkedin, ArrowUp, Sparkles, Zap } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visible, setVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) setVisible(true);
  }, [isInView]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Case Studies", href: "#cases" },
      { name: "Updates", href: "#updates" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press", href: "#press" },
    ],
    resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Partners", href: "#partners" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] text-yellow-200 overflow-hidden border-t border-yellow-400/20"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,230,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,230,128,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,black,transparent)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-48 h-48 bg-yellow-400/8 blur-3xl rounded-full"
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-32 h-32 bg-amber-500/6 blur-2xl rounded-full"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300/40 rounded-full blur-[0.5px]"
            animate={{
              y: ["0%", "-100%"],
              x: ["0%", Math.sin(i) * 20 + "%"],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 50}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="images/logo.svg" alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Interview Coder
              </span>
            </div>
            <p className="text-yellow-100/70 text-sm leading-relaxed max-w-xs">
              Empowering developers worldwide to master coding interviews and land dream roles at top tech companies.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredLink(social.label)}
                  onHoverEnd={() => setHoveredLink(null)}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-yellow-100/70 group-hover:text-yellow-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(links).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-yellow-100/70 hover:text-yellow-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-400" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={visible ? { width: "100%" } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent my-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-4 text-sm text-yellow-100/60"
          >
            <div className="flex items-center gap-4">
              <span>© 2025 Interview Coder. All rights reserved.</span>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-4">
                <a href="#privacy" className="hover:text-yellow-400 transition-colors">Privacy</a>
                <a href="#terms" className="hover:text-yellow-400 transition-colors">Terms</a>
                <a href="#cookies" className="hover:text-yellow-400 transition-colors">Cookies</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span className="text-yellow-400 text-xs font-medium">
              TRUSTED BY 100,000+ DEVELOPERS
            </span>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300 group"
          >
            <ArrowUp className="w-4 h-4 text-yellow-100/70 group-hover:text-yellow-400 transition-colors" />
          </motion.button>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center mt-12 pt-8 border-t border-white/5"
        >
          <p className="text-yellow-100/60 text-sm italic max-w-2xl mx-auto leading-relaxed">
            "The future belongs to those who code it. At Interview Coder, we transform ambition into achievement, one line at a time."
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
