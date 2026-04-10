"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

const navLinks = [
  { label: "about", to: "about" },
  { label: "experience", to: "experience" },
  { label: "work", to: "projects" },
  { label: "contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-5 px-4">
      {/* Desktop pill */}
      <div className="hidden md:flex items-center gap-6 bg-glass backdrop-blur-xl border border-glass-border rounded-full px-6 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.15)]">
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={800}
              offset={-80}
              spy={true}
              activeClass="!text-accent"
              className="text-text-secondary text-sm cursor-pointer transition-colors duration-300 ease-out-expo hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="w-px h-4 bg-glass-border" />

        <ThemeToggle />

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume (PDF)"
          className="bg-accent text-canvas text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 ease-out-expo hover:scale-105 active:scale-[0.98]"
        >
          Resume
        </a>
      </div>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-5 right-5 z-50 flex items-center gap-3">
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-text-primary"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </motion.div>
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-canvas/90 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-text-primary text-3xl font-semibold tracking-tight cursor-pointer hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ delay: 0.24, type: "spring", stiffness: 100, damping: 20 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume (PDF)"
              className="bg-accent text-canvas text-sm font-semibold px-6 py-2.5 rounded-full mt-4"
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
