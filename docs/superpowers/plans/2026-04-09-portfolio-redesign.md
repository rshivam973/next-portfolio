# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Shivam's generic purple portfolio into a premium, anti-slop OLED dark portfolio using Taste Skill design principles — ghost text hero, floating glass nav, double-bezel project cards, scroll reveal animations.

**Architecture:** Single-page Next.js 14 app with 6 section components. Replace all styling in-place using existing Tailwind v3 + component CSS. Activate framer-motion (already installed) for scroll reveals and spring physics. Swap FontAwesome for Phosphor Icons. Replace react-slick carousel with static grid.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS v3, Framer Motion, Phosphor Icons, Geist font, EmailJS, react-scroll, react-toastify

**Design Skills Applied:**
- `redesign-existing-projects` — audit-fix priority order
- `design-taste-frontend` — DESIGN_VARIANCE:8, MOTION_INTENSITY:6, VISUAL_DENSITY:4
- `high-end-visual-design` — double-bezel, floating nav, haptic micro-aesthetics

---

## File Structure

```
src/
├── app/
│   ├── layout.js              — MODIFY: Geist font, metadata, semantic HTML
│   ├── page.js                — MODIFY: Remove Head/font links
│   ├── main.jsx               — MODIFY: Remove SocialCard, add Footer, update bg
│   └── globals.css            — REWRITE: OLED theme, CSS vars, noise overlay, base styles
├── components/
│   ├── Navbar/
│   │   └── Navbar.jsx         — REWRITE: Floating glass pill, hamburger morph
│   ├── Lander/
│   │   └── Lander.jsx         — REWRITE: Ghost text hero, offset content
│   ├── About/
│   │   └── About.jsx          — REWRITE: Editorial split, tech pills
│   ├── Projects/
│   │   └── Projects.jsx       — REWRITE: Double-bezel grid cards
│   ├── Contact/
│   │   └── Contact.jsx        — REWRITE: Dark form, glass inputs
│   └── Footer/
│       └── Footer.jsx         — CREATE: Minimal footer with social links
tailwind.config.js             — MODIFY: Custom colors, extended theme
package.json                   — MODIFY: Add/remove deps
```

**CSS files removed:** All `.css` companion files (Navbar.css, Lander.css, About.css, Projects.css, Contact.css, SocialCard.css) — styling moves to Tailwind classes inline.

---

### Task 1: Install dependencies and clean up package.json

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install new dependencies**

```bash
cd /Users/rapidinnovation/Downloads/next-portfolio-main
npm install @phosphor-icons/react geist
```

- [ ] **Step 2: Uninstall removed dependencies**

```bash
npm uninstall @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome react-slick slick-carousel styled-components @next/font next-images next-transpile-modules react-router-dom
```

- [ ] **Step 3: Verify build still works**

```bash
npm run build
```

Expected: Build may fail since components still import removed packages. That's fine — we'll fix them in subsequent tasks.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: swap deps — add Phosphor/Geist, remove FontAwesome/slick/styled-components"
```

---

### Task 2: Global theme — layout.js, globals.css, tailwind.config.js

**Files:**
- Modify: `src/app/layout.js`
- Rewrite: `src/app/globals.css`
- Modify: `tailwind.config.js`
- Modify: `src/app/page.js`

- [ ] **Step 1: Rewrite `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0e1011',
        surface: '#141517',
        'surface-light': '#1c1d1f',
        accent: '#34d399',
        'accent-dim': 'rgba(52,211,153,0.1)',
        border: 'rgba(255,255,255,0.06)',
        'border-light': 'rgba(255,255,255,0.08)',
        'text-primary': '#f4f4f5',
        'text-secondary': '#a1a1aa',
        'text-muted': '#71717a',
        'text-dim': '#52525b',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Rewrite `src/app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: #0e1011;
    color: #f4f4f5;
  }

  ::selection {
    background-color: rgba(52, 211, 153, 0.2);
    color: #f4f4f5;
  }
}

/* Noise overlay — fixed, non-interactive */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 50;
  pointer-events: none;
  opacity: 0.015;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

/* Focus ring */
*:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #34d399;
  color: #0e1011;
  padding: 8px 16px;
  z-index: 100;
  font-weight: 600;
  font-size: 14px;
  border-radius: 0 0 8px 0;
  transition: top 0.2s;
}
.skip-link:focus {
  top: 0;
}
```

- [ ] **Step 3: Rewrite `src/app/layout.js`**

```jsx
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const metadata = {
  title: "Shivam Rajput — Developer",
  description: "Full-stack developer building web and blockchain products. Portfolio showcasing React, Next.js, Solidity, and React Native projects.",
  openGraph: {
    title: "Shivam Rajput — Developer",
    description: "Full-stack developer building web and blockchain products.",
    type: "website",
    url: "https://shivam-codes.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-canvas text-text-primary">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Simplify `src/app/page.js`**

```jsx
import Main from "./main";

export default function Home() {
  return <Main />;
}
```

- [ ] **Step 5: Verify the dev server starts**

```bash
cd /Users/rapidinnovation/Downloads/next-portfolio-main && npm run dev
```

Expected: May show import errors from components still referencing old packages — that's expected and fixed in subsequent tasks.

- [ ] **Step 6: Commit**

```bash
git add src/app/layout.js src/app/page.js src/app/globals.css tailwind.config.js
git commit -m "feat: OLED dark theme with Geist font, noise overlay, custom Tailwind config"
```

---

### Task 3: Navbar — floating glass pill with hamburger morph

**Files:**
- Rewrite: `src/components/Navbar/Navbar.jsx`
- Delete: `src/components/Navbar/Navbar.css`

- [ ] **Step 1: Delete old CSS**

```bash
rm /Users/rapidinnovation/Downloads/next-portfolio-main/src/components/Navbar/Navbar.css
```

- [ ] **Step 2: Rewrite `src/components/Navbar/Navbar.jsx`**

```jsx
"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "about", to: "about" },
  { label: "work", to: "projects" },
  { label: "contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-5 px-4">
      {/* Desktop pill */}
      <div className="hidden md:flex items-center gap-8 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-full px-6 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <Link
          to="lander"
          smooth={true}
          duration={800}
          className="text-text-primary font-semibold text-sm tracking-tight cursor-pointer"
        >
          SR
        </Link>

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

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-canvas text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 ease-out-expo hover:scale-105 active:scale-[0.98]"
        >
          Resume
        </a>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden fixed top-5 right-5 z-50">
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
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar/
git commit -m "feat: floating glass pill navbar with hamburger morph overlay"
```

---

### Task 4: Hero — giant ghost text with offset content

**Files:**
- Rewrite: `src/components/Lander/Lander.jsx`
- Delete: `src/components/Lander/Lander.css`

- [ ] **Step 1: Delete old CSS**

```bash
rm /Users/rapidinnovation/Downloads/next-portfolio-main/src/components/Lander/Lander.css
```

- [ ] **Step 2: Rewrite `src/components/Lander/Lander.jsx`**

```jsx
"use client";
import React from "react";
import { Element } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ProfilePic from "../../../public/assets/images/Me.jpg";
import { ArrowDown } from "@phosphor-icons/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
};

const Lander = () => {
  const { scrollY } = useScroll();
  const ghostY = useTransform(scrollY, [0, 600], [0, -80]);
  const ghostOpacity = useTransform(scrollY, [0, 400], [0.03, 0]);

  return (
    <Element name="lander">
      <section
        id="main-content"
        className="relative min-h-[100dvh] w-full flex items-center overflow-hidden"
      >
        {/* Ghost text background */}
        <motion.div
          style={{ y: ghostY, opacity: ghostOpacity }}
          className="absolute top-[-2rem] left-[-0.5rem] select-none pointer-events-none"
        >
          <span className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-bold tracking-[-0.06em] leading-[0.85] text-white whitespace-nowrap block">
            SHIVAM
          </span>
          <span className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-bold tracking-[-0.06em] leading-[0.85] text-white whitespace-nowrap block">
            RAJPUT
          </span>
        </motion.div>

        {/* Main content — offset left on desktop */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:pl-[18vw] lg:pr-8 py-32">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 bg-accent-dim border border-accent/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-[11px] font-mono tracking-widest uppercase">
                Developer / Builder
              </span>
            </span>
          </motion.div>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[420px] mb-7"
          >
            I build web and blockchain products with obsessive attention to craft.
            Focused on interfaces that feel intentional.
          </motion.p>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 bg-text-primary text-canvas text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-500 ease-out-expo hover:scale-105 active:scale-[0.98]"
            >
              Selected work
              <span className="w-6 h-6 rounded-full bg-canvas/10 flex items-center justify-center transition-transform duration-500 ease-out-expo group-hover:translate-y-0.5">
                <ArrowDown size={12} weight="bold" />
              </span>
            </a>
            <span className="text-text-dim text-xs font-mono">scroll</span>
          </motion.div>
        </div>

        {/* Floating photo — double bezel */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2"
        >
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-1.5">
            <div className="relative w-[200px] h-[260px] xl:w-[240px] xl:h-[300px] rounded-[calc(1.5rem-6px)] overflow-hidden bg-surface-light">
              <Image
                src={ProfilePic}
                alt="Shivam Rajput — Full-stack developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Lander;
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Lander/
git commit -m "feat: ghost text hero with offset content and floating double-bezel photo"
```

---

### Task 5: About section — editorial split with tech pills

**Files:**
- Rewrite: `src/components/About/About.jsx`
- Delete: `src/components/About/About.css`

- [ ] **Step 1: Delete old CSS**

```bash
rm /Users/rapidinnovation/Downloads/next-portfolio-main/src/components/About/About.css
```

- [ ] **Step 2: Rewrite `src/components/About/About.jsx`**

```jsx
"use client";
import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const techStack = [
  "React", "Next.js", "React Native", "Solidity", "Node.js", "C++", "Blockchain", "Tailwind CSS",
];

const About = () => {
  return (
    <Element name="about">
      <section className="py-28 md:py-36">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 md:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left — bio */}
            <div>
              <motion.p
                variants={fadeUp}
                className="text-accent text-[11px] font-mono tracking-[0.15em] uppercase mb-4"
              >
                About
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-text-secondary text-base leading-[1.8] max-w-[50ch]"
              >
                I'm Shivam — a developer drawn to the intersection of web platforms
                and decentralized systems. I studied Computer Science (B.Tech) and
                spent most of that time building: web apps, mobile apps, DApps, and
                smart contracts. I care about clean interfaces and code that ships.
              </motion.p>
            </div>

            {/* Right — tech stack */}
            <div>
              <motion.p
                variants={fadeUp}
                className="text-accent text-[11px] font-mono tracking-[0.15em] uppercase mb-4"
              >
                Stack
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-3.5 py-1.5 text-text-secondary text-sm transition-colors duration-300 ease-out-expo hover:border-accent/30 hover:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default About;
```

- [ ] **Step 3: Commit**

```bash
git add src/components/About/
git commit -m "feat: editorial split about section with tech pills"
```

---

### Task 6: Projects section — double-bezel grid cards

**Files:**
- Rewrite: `src/components/Projects/Projects.jsx`
- Delete: `src/components/Projects/Projects.css`

- [ ] **Step 1: Delete old CSS**

```bash
rm /Users/rapidinnovation/Downloads/next-portfolio-main/src/components/Projects/Projects.css
```

- [ ] **Step 2: Rewrite `src/components/Projects/Projects.jsx`**

```jsx
"use client";
import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";

import secretshare from "public/assets/images/secretshare.png";
import ethshare from "public/assets/images/ethshare.jpg";
import facebookclone from "public/assets/images/facebookclone.png";
import weatherapp from "public/assets/images/weatherapp.jpg";

const projects = [
  {
    title: "Secret Share",
    description: "Anonymous messaging platform with real-time message delivery and shareable profile links.",
    tech: ["Next.js", "MongoDB", "Socket.io"],
    image: secretshare,
    live: "https://secret-share.vercel.app",
    github: "https://github.com/rshivam973/Secret-Share",
  },
  {
    title: "ETH Share",
    description: "Decentralized file sharing built on Ethereum. Upload, share, and manage files on-chain.",
    tech: ["Solidity", "React", "Ethers.js"],
    image: ethshare,
    live: "http://ethshare.netlify.app/",
    github: "https://github.com/rshivam973/ETHShare",
  },
  {
    title: "Facebook Clone",
    description: "Frontend replica of Facebook's interface with authentication flow and feed layout.",
    tech: ["React", "CSS", "Netlify"],
    image: facebookclone,
    live: "https://facebook0-new.netlify.app/",
    github: "https://github.com/rshivam973/facebook-phishing-frontend",
  },
  {
    title: "Weather App",
    description: "Cross-platform mobile weather app with location-based forecasts and clean UI.",
    tech: ["React Native", "Expo", "Weather API"],
    image: weatherapp,
    live: "https://github.com/rshivam973/react-native-weather-app",
    github: "https://github.com/rshivam973/react-native-weather-app",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const ProjectCard = ({ project }) => (
  <motion.div variants={fadeUp} className="group">
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-1.5 transition-all duration-500 ease-out-expo hover:border-accent/20 hover:shadow-[0_0_40px_rgba(52,211,153,0.04)]">
      <div className="bg-surface-light rounded-[calc(1.5rem-6px)] overflow-hidden">
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.description}`}
            fill
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
          {/* Overlay links */}
          <div className="absolute inset-0 bg-canvas/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-text-primary hover:bg-accent hover:text-canvas hover:border-accent transition-all duration-300"
            >
              <ArrowUpRight size={18} weight="bold" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-text-primary hover:bg-accent hover:text-canvas hover:border-accent transition-all duration-300"
            >
              <GithubLogo size={18} weight="bold" />
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="p-5 md:p-6">
          <h3 className="text-text-primary text-base font-semibold mb-2">
            {project.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] text-text-dim bg-white/[0.04] px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <Element name="projects">
      <section id="projects" className="py-28 md:py-36">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 md:px-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-accent text-[11px] font-mono tracking-[0.15em] uppercase mb-10"
          >
            Selected work
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Projects;
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Projects/
git commit -m "feat: double-bezel project cards grid with hover overlays"
```

---

### Task 7: Contact section — dark theme with glass inputs

**Files:**
- Rewrite: `src/components/Contact/Contact.jsx`
- Delete: `src/components/Contact/Contact.css`

- [ ] **Step 1: Delete old CSS**

```bash
rm /Users/rapidinnovation/Downloads/next-portfolio-main/src/components/Contact/Contact.css
```

- [ ] **Step 2: Rewrite `src/components/Contact/Contact.jsx`**

```jsx
"use client";
import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("All fields are required");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Enter a valid email address");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, API_KEY)
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully");
      })
      .catch(() => {
        toast.error("Failed to send. Try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const inputClasses =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-dim focus:border-accent/40 focus:outline-none transition-colors duration-300";

  return (
    <Element name="contact">
      <section className="py-28 md:py-36">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-xl mx-auto px-4 md:px-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-accent text-[11px] font-mono tracking-[0.15em] uppercase mb-3"
          >
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-text-primary text-3xl md:text-4xl font-bold tracking-tight mb-10"
          >
            Let's build something
          </motion.h2>

          <motion.form
            variants={fadeUp}
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div>
              <label htmlFor="name" className="block text-text-muted text-xs mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-text-muted text-xs mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-text-muted text-xs mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-text-primary text-canvas text-sm font-semibold py-3 rounded-full transition-all duration-300 ease-out-expo hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-canvas/30 border-t-canvas rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send message"
              )}
            </button>
          </motion.form>

          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            theme="dark"
            toastStyle={{ background: "#141517", border: "1px solid rgba(255,255,255,0.06)" }}
          />
        </motion.div>
      </section>
    </Element>
  );
};

export default Contact;
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Contact/
git commit -m "feat: dark-themed contact form with glass inputs and inline validation"
```

---

### Task 8: Footer component + update main.jsx

**Files:**
- Create: `src/components/Footer/Footer.jsx`
- Modify: `src/app/main.jsx`

- [ ] **Step 1: Create `src/components/Footer/Footer.jsx`**

```jsx
import React from "react";
import { GithubLogo, LinkedinLogo, InstagramLogo, EnvelopeSimple } from "@phosphor-icons/react";

const socialLinks = [
  { href: "https://github.com/rshivam973", label: "GitHub", icon: GithubLogo },
  { href: "https://www.linkedin.com/in/shivamrajput3339", label: "LinkedIn", icon: LinkedinLogo },
  { href: "https://www.instagram.com/shivamrajput3339", label: "Instagram", icon: InstagramLogo },
  { href: "mailto:rshivam973@gmail.com", label: "Email", icon: EnvelopeSimple },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-dim text-sm">
          {new Date().getFullYear()} Shivam Rajput
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-text-muted hover:text-accent transition-colors duration-300"
            >
              <link.icon size={20} weight="regular" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 2: Rewrite `src/app/main.jsx`**

```jsx
"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Lander from "@/components/Lander/Lander";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const Main = () => {
  return (
    <div className="relative w-full min-h-[100dvh] bg-canvas flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Lander />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer/ src/app/main.jsx
git commit -m "feat: minimal footer with social links, remove SocialCard sidebar"
```

---

### Task 9: Delete unused files and old CSS

**Files:**
- Delete: `src/components/SocialCard/SocialCard.jsx`
- Delete: `src/components/SocialCard/SocialCard.css`
- Delete: `src/components/Projects/ethshare.jpg` (duplicate — images live in public/)

- [ ] **Step 1: Remove SocialCard component and stale files**

```bash
rm -rf /Users/rapidinnovation/Downloads/next-portfolio-main/src/components/SocialCard
rm -f /Users/rapidinnovation/Downloads/next-portfolio-main/src/components/Projects/ethshare.jpg
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "chore: remove SocialCard sidebar and duplicate assets"
```

---

### Task 10: Build verification and fix any issues

**Files:** Any files with build errors

- [ ] **Step 1: Run the build**

```bash
cd /Users/rapidinnovation/Downloads/next-portfolio-main && npm run build
```

Expected: Clean build with no errors. If errors occur, fix the specific import or syntax issue and re-run.

- [ ] **Step 2: Run dev server and visually verify**

```bash
npm run dev
```

Check at `http://localhost:3000`:
- Floating glass nav visible and functional
- Ghost text hero renders with offset content
- About section shows editorial split
- Projects show 2-column grid with double-bezel cards
- Contact form matches dark theme
- Footer shows social links
- Mobile (375px): single column, hamburger menu works

- [ ] **Step 3: Commit any fixes**

```bash
git add -A
git commit -m "fix: resolve build issues from redesign"
```

---

### Task 11: Accessibility pass

**Files:** All components (minor additions)

- [ ] **Step 1: Verify semantic HTML structure**

Ensure the rendered HTML follows this structure:
- `<nav>` for navbar
- `<main>` wrapping all sections
- `<section>` for each content section
- `<footer>` for footer
- All images have descriptive `alt` text
- All form inputs have `<label>` with `htmlFor`
- All icon-only links have `aria-label`
- Skip-to-content link exists and works

All of these were implemented in previous tasks. Verify by tabbing through the page with keyboard.

- [ ] **Step 2: Commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: accessibility improvements"
```

---

## Verification Checklist

After all tasks are complete:

1. `npm run build` — passes with zero errors
2. `npm run dev` — site loads, all sections render
3. Desktop (1440px): floating nav, ghost text hero, 2-col projects, dark contact form, footer
4. Mobile (375px): hamburger menu, single column, no horizontal scroll
5. Keyboard: tab through all interactive elements, focus rings visible
6. All project links resolve (no `example.com`)
7. Contact form submits (requires .env with EmailJS keys)
8. No FontAwesome or slick-carousel imports remain in any file
9. No purple (#451952, #57375D) color references remain
10. Lighthouse accessibility score target: 90+
