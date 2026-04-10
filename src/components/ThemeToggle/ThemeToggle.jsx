"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme, isAnimating } = useTheme();

  const handleClick = (e) => {
    if (isAnimating) return;
    const rect = e.currentTarget.getBoundingClientRect();
    toggleTheme(rect);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isAnimating}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative w-9 h-9 rounded-full bg-glass border border-glass-border flex items-center justify-center cursor-pointer transition-transform duration-200 ease-out-expo hover:scale-110 active:scale-95 disabled:pointer-events-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, duration: 0.3 }}
          >
            <Moon size={16} weight="bold" className="text-text-secondary" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, duration: 0.3 }}
          >
            <Sun size={16} weight="bold" className="text-text-secondary" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
