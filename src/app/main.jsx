"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Lander from "@/components/Lander/Lander";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
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
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
