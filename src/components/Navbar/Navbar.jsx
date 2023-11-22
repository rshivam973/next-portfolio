"use client";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import {News_Cycle} from '@next/font/google'

const NewsCycle = News_Cycle({
  subsets: ['latin'],
  weight: ['400','700']
});

const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Set the menu to open when the screen is wide enough
        setMenuOpen(true);
      } else {
        // Close the menu when the screen is small
        setMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen size
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <div className="" style={{zIndex:50}}>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FontAwesomeIcon icon={faXmark} size="2x" style={{position:'fixed',zIndex:50}} /> : <FontAwesomeIcon icon={faBars} size="2x" style={{position:'fixed',zIndex:50}} /> }
          

        </div>
        <div className={isMenuOpen ? "navbar-container" :"hidden"}>
        <div className="menu text-white NewsCycle"><Link to="lander" smooth={true} duration={1000}>HOME</Link></div>
        <div className="menu text-white"><Link to="about" smooth={true} duration={1000}>ABOUT</Link></div>
        <div className="menu text-white"><Link to="projects" smooth={true} duration={1000}>PROJECTS</Link></div>
        <div className="menu text-white"><Link to="contact" smooth={true} duration={1000}>CONTACT</Link></div>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
