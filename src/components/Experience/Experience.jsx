"use client";
import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "RUH AI",
    url: null,
    period: "2025 — Present",
    description:
      "Building production-grade AI systems with LLMs, LangGraph, and VectorDBs. Developing microservices architecture with gRPC, analytics and monitoring systems, and end-to-end payment infrastructure using Stripe — subscriptions, one-time payments, recurring billing, organisational and individual usage limits and tracking.",
    tech: ["LangGraph", "VectorDB", "gRPC", "Microservices", "Stripe", "Next.js", "Node.js"],
  },
  {
    role: "Full Stack Developer",
    company: "Rapid Innovation",
    url: null,
    period: "2024 — 2025",
    description:
      "Built AI-powered products and developer tools. Worked across the stack with React, Next.js, Node.js, and integrated LLMs into production applications.",
    tech: ["Next.js", "React", "Node.js", "AI/LLM", "TypeScript"],
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

const ExperienceCard = ({ exp, isLast }) => (
  <motion.div variants={fadeUp} className="group relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
    {/* Timeline dot + line (desktop) */}
    <div className="hidden md:flex flex-col items-center absolute left-[180px] top-0 bottom-0 translate-x-[-50%]">
      <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 shrink-0 ring-4 ring-accent-dim" />
      {!isLast && <div className="w-px flex-1 bg-glass-border mt-1" />}
    </div>

    {/* Period */}
    <p className="text-text-dim text-xs font-mono tracking-wide pt-1 md:text-right md:pr-6">
      {exp.period}
    </p>

    {/* Content */}
    <div className="md:pl-6 pb-10">
      <div className="flex items-start gap-2 mb-1.5">
        <h3 className="text-text-primary text-base font-semibold">{exp.role}</h3>
      </div>
      <p className="text-text-muted text-sm mb-3">{exp.company}</p>
      <p className="text-text-secondary text-sm leading-[1.7] mb-4 max-w-[52ch]">
        {exp.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {exp.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] text-text-dim bg-glass border border-glass-border px-2.5 py-0.5 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <Element name="experience">
      <section id="experience" className="py-28 md:py-36" aria-labelledby="experience-heading">
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
            <span id="experience-heading">Experience</span>
          </motion.p>

          <div className="relative">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.company + exp.role}
                exp={exp}
                isLast={i === experiences.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Experience;
