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
  const ghostOpacity = useTransform(scrollY, [0, 400], [1, 0]);

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
          <span
            className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-bold tracking-[-0.06em] leading-[0.85] text-text-primary whitespace-nowrap block"
            style={{ opacity: "var(--ghost-opacity)" }}
          >
            SHIVAM
          </span>
          <span
            className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-bold tracking-[-0.06em] leading-[0.85] text-text-primary whitespace-nowrap block"
            style={{ opacity: "var(--ghost-opacity)" }}
          >
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
            I'm a full-stack and AI developer who's worked mostly with AI products.
            Obsessive about craft, focused on interfaces that feel intentional.
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
          <div className="bg-glass border border-glass-border rounded-3xl p-1.5">
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
