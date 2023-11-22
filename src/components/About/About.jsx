import React from "react";
import { Element } from "react-scroll";
import "./About.css";
import Image from "next/image";
import ProfilePic from "../../../public/assets/images/Me.jpg";

const About = () => {
  return (
    <Element name="about">
    <div
      className="flex flex-row relative h-full items-center text-white"
      style={{ height: "100vh", position: "relative", margin: "0 10% 0 10%" }}
    >
      <div>
        <p className="text-4xl font-bold">About Me</p>
        <div className="about-container">
          <div className="para-div">
          <p className="mt-6 text-xl normal-text">
          Greetings, I'm Shivam. Since my early years in school, I harbored a
          deep fascination for the realm of Technology and Computers.
          Consequently, I made the decision to pursue a Bachelor's degree in
          Computer Science. Over the course of my academic journey, I've created
          numerous web and Android applications. Additionally, I possess
          knowledge in Blockchain Technology and have implemented various
          decentralized applications (DApps) and smart contracts.
        </p>
        <p className="text-xl mt-2 normal-text">
          Here are some technologies that I've been working with recently:
        </p>
        <div className="flex flex-row normal-text text-xl">
          <div className="flex-col mr-20">
            <p className="m-2">★ ReactJS</p>
            <p className="m-2">★ NextJS</p>
            <p className="m-2">★ Solidity</p>
          </div>
          <div className="flex-col">
            <p className="m-2">★ React Native</p>
            <p className="m-2">★ Blockchain</p>
            <p className="m-2">★ C++</p>
          </div>
        </div>
          </div>
          <div className="image-div">
            <Image src={ProfilePic} alt="image" height={500} width={400} className="profile-pic"/>
          </div>
        </div>
        
      </div>
    </div>
    </Element>
  );
};

export default About;
