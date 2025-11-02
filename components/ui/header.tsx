"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Header() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [responses, setResponses] = useState<{ id: number; text: string }[]>([]);
  const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const faqSuggestions = [
    "What are the most common coding interview questions?",
    "How do I explain time complexity?",
    "What is the difference between BFS and DFS?",
    "How can I optimize my dynamic programming solutions?",
    "How should I prepare for system design interviews?",
  ];

  const faqAnswers: Record<string, string> = {
    "What are the most common coding interview questions?":
      "You’ll often see arrays, strings, recursion, linked lists, and trees — LeetCode-style fundamentals.",
    "How do I explain time complexity?":
      "Focus on how input size affects runtime. Use Big O notation like O(1), O(n), O(log n), or O(n²).",
    "What is the difference between BFS and DFS?":
      "BFS explores level by level (queue), DFS dives deep first (stack or recursion).",
    "How can I optimize my dynamic programming solutions?":
      "Use memoization to cache results or tabulation to build bottom-up.",
    "How should I prepare for system design interviews?":
      "Study scalability concepts: load balancing, caching, databases, and microservices.",
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

            {/* Search bar */}
            <div className="relative flex-1 hidden md:flex items-center text-yellow-200">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask an interview question..."
                className="w-full bg-transparent border-none focus:outline-none focus:ring-0 placeholder-yellow-300/40 text-yellow-100 text-sm tracking-wide"
              />
              <AnimatePresence>
                {suggestions.length > 0 && (
                  <motion.ul
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute left-0 mt-8 w-full bg-black/80 border border-yellow-400/20 rounded-lg shadow-[0_0_20px_rgba(255,230,128,0.15)] z-50 backdrop-blur-md"
                  >
                    {suggestions.map((s, i) => (
                      <li
                        key={i}
                        onClick={() => handleSelect(s)}
                        className="px-4 py-2 text-sm text-yellow-100 hover:bg-yellow-400/10 cursor-pointer"
                      >
                        {s}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
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

      {/* Floating responses */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40">
        <AnimatePresence>
          {responses.map((r) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative text-yellow-100 text-sm px-6 py-3 rounded-full border border-yellow-400/30 shadow-[0_0_25px_rgba(255,230,128,0.15)] backdrop-blur-md bg-black/40"
            >
              <button
                onClick={() => handleDismiss(r.id)}
                className="absolute -top-1 -right-1 bg-yellow-400/20 hover:bg-yellow-400/40 text-yellow-200 rounded-full p-1 transition"
              >
                <X size={12} />
              </button>
              {r.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
