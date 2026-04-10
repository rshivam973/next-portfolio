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
      <section id="about" className="py-28 md:py-36" aria-labelledby="about-heading">
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
                <span id="about-heading">About</span>
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
                    className="bg-glass border border-glass-border rounded-lg px-3.5 py-1.5 text-text-secondary text-sm transition-colors duration-300 ease-out-expo hover:border-accent/30 hover:text-accent"
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
