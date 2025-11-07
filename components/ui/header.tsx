"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Zap, Brain, Cpu } from "lucide-react";

export default function Header() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [responses, setResponses] = useState<{ id: number; text: string }[]>([]);
  const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const faqSuggestions = [
    "What is Interview Coder ?",
    "Can I get a free trial?",
    "How does Interview Coder works?",
    "Does Interview Coder work?"
  ];

  const faqAnswers: Record<string, string> = {

    "What is Interview Coder ?":

      "Interview Coder is a platform launched in 2022 that helps you cheat during your coding interviews.",

    "Can I get a free trial?":

      "Yes, Interview Coder offers a one month free trial.",

    "How does Interview Coder works?":

      "Interview Coder opens up a tab on your computer that answers the question of the interviewer in real-time.",

    "Does Interview Coder work?":

      "Yes developers have used Interview Coder to get over 50 000+ jobs.",
  };

  // Handle search suggestions
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const filtered = faqSuggestions.filter((q) =>
      q.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 3));
  }, [query]);

  const handleSelect = (text: string) => {
    setQuery("");
    setSuggestions([]);
    setResponses((prev) => [
      ...prev,
      { id: Date.now(), text: faqAnswers[text] || "No answer found." },
    ]);
  };

  const handleDismiss = (id: number) => {
    setResponses((prev) => prev.filter((r) => r.id !== id));
  };

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastScrollY ? "down" : "up");
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent border-none shadow-none">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex justify-center pointer-events-none">
          {/* Cinematic animated capsule */}
          <motion.div
            initial={{ y: 0, rotateX: 0, boxShadow: "0px 0px 15px rgba(255,230,128,0.15)" }}
            animate={{
              y: scrollDir === "down" ? -6 : 4,
              rotateX: scrollDir === "down" ? 5 : -3,
              boxShadow:
                scrollDir === "down"
                  ? "0px 10px 40px rgba(255,230,128,0.25)"
                  : "0px 2px 15px rgba(255,230,128,0.15)",
              transition: {
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            className={`flex h-16 items-center justify-between gap-6 rounded-2xl px-6 md:px-8 pointer-events-auto w-[95%] md:w-[80%]
              backdrop-blur-md border border-yellow-400/10
              bg-[radial-gradient(circle_at_top_left,rgba(255,230,128,0.15),rgba(0,0,0,0.6))]`}
          >
            {/* Branding */}
            <motion.div
              animate={{
                scale: scrollDir === "down" ? 1.05 : 0.98,
                filter:
                  scrollDir === "down"
                    ? "drop-shadow(0 0 12px rgba(255,230,128,0.4))"
                    : "drop-shadow(0 0 6px rgba(255,230,128,0.2))",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-yellow-400"
            >
              <Logo />
            </motion.div>

            {/* Search bar - naturally integrated */}
            <div className="relative flex-1 hidden md:flex items-center text-yellow-200">
              <div className="relative w-full">
                <div className="flex items-center gap-3">
                  <Search className="w-4 h-4 text-yellow-400/60" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask an interview question..."
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 placeholder-yellow-300/40 text-yellow-100 text-sm tracking-wide"
                  />
                </div>

                {/* Enhanced Suggestions Dropdown */}
                <AnimatePresence>
                  {suggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-2 w-full bg-gray-900/95 border border-yellow-400/20 rounded-xl shadow-2xl shadow-yellow-400/10 backdrop-blur-xl z-50 overflow-hidden"
                    >
                      {suggestions.map((s, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          onClick={() => handleSelect(s)}
                          whileHover={{
                            scale: 1.02,
                            backgroundColor: "rgba(255,230,128,0.1)",
                          }}
                          className="px-4 py-3 cursor-pointer border-b border-yellow-400/10 last:border-b-0 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors"
                            >
                              <Brain className="w-4 h-4" />
                            </motion.div>
                            <span className="flex-1 text-yellow-100 text-sm">{s}</span>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              className="text-yellow-400"
                            >
                              <Zap className="w-3 h-3" />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Auth links */}
            <ul className="flex items-center justify-end gap-3 flex-1">
              <li>
                <Link
                  href="/signin"
                  className="btn-sm relative bg-[linear-gradient(to_right,rgba(255,230,128,0.15),rgba(20,20,20,1))] py-[5px] text-yellow-100 hover:text-white hover:bg-[linear-gradient(to_right,rgba(255,230,128,0.25),rgba(40,40,40,1))] transition-all duration-300 rounded-lg"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm bg-[linear-gradient(to_top,rgba(255,230,128,0.5),rgba(255,255,200,0.2))] py-[5px] text-black font-semibold shadow-[0_0_10px_rgba(255,230,128,0.3)] hover:bg-[linear-gradient(to_top,rgba(255,230,128,0.7),rgba(255,255,200,0.3))] transition-all duration-300 rounded-lg"
                >
                  Register
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </header>

      {/* Enhanced Floating responses */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-40">
        <AnimatePresence mode="popLayout">
          {responses.map((r, index) => (
            <motion.div
              key={r.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                layout: { duration: 0.3 }
              }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="text-yellow-100 text-sm px-6 py-4 rounded-2xl border border-yellow-400/30 shadow-2xl backdrop-blur-xl bg-gray-900/95 max-w-md"
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-shrink-0 mt-0.5"
                  >
                    <Cpu className="w-4 h-4 text-yellow-400" />
                  </motion.div>
                  <span className="flex-1 leading-relaxed">{r.text}</span>
                </div>

                <motion.button
                  onClick={() => handleDismiss(r.id)}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,230,128,0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -top-2 -right-2 bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-200 rounded-full p-1.5 transition-all duration-200 backdrop-blur-sm border border-yellow-400/20"
                >
                  <X size={12} />
                </motion.button>
              </motion.div>

              {/* Connection line animation for multiple responses */}
              {index < responses.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 0.3 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="w-0.5 h-4 bg-yellow-400/30 mx-auto mt-1"
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}