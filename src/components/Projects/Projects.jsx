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
