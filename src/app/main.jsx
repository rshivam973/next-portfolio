"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Lander from "@/components/Lander/Lander";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import SocialCard from "@/components/SocialCard/SocialCard";
import React from "react";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "#451952",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Navbar />
      <SocialCard />
      <Lander />
      <About />
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Main;
