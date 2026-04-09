import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import ethshare from "public/assets/images/ethshare.jpg";
import facebookclone from "public/assets/images/facebookclone.png";
import secretshare from "public/assets/images/secretshare.png";
import weatherapp from "public/assets/images/weatherapp.jpg";
import Image from "next/image";
import { Element } from "react-scroll";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const images = [
    {
      id: 1,
      url: secretshare,
      websiteLink: "https://example.com/project2",
      githubLink: "https://github.com/rshivam973/Secret-Share",
    },
    {
      id: 2,
      url: ethshare,
      websiteLink: "http://ethshare.netlify.app/",
      githubLink: "https://github.com/rshivam973/ETHShare",
    },
    {
      id: 3,
      url: facebookclone,
      websiteLink: "https://facebook0-new.netlify.app/",
      githubLink: "https://github.com/rshivam973/facebook-phishing-frontend",
    },
    {
      id: 4,
      url: weatherapp,
      websiteLink: "https://github.com/rshivam973/react-native-weather-app",
      githubLink: "https://github.com/rshivam973/react-native-weather-app",
    }
    // Add more image objects as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Element name="projects" className="projects-section">
      <div
        className="flex flex-col justify-center text-white projects-main-div"
      >
        <div>
          <p className="text-4xl font-bold">Projects</p>
          <p className="mt-4 normal-text text-xl">Check out some of the cool stuffs I made recently.</p>

          <div className="carousel" style={{ marginTop: "24px" }}>
            <Slider {...settings}>
              {images.map((image) => (
                <div key={image.id} className="slide-container">
                  <div className="image-container">
                    <a
                      href={image.websiteLink}
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={image.url}
                        width={1000}
                        height={600}
                        alt="project"
                        style={{ borderRadius: "20px" }}
                      />
                    </a>
                  </div>
                  <div className="github-icon-container">
                    <a
                      href={image.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faCode}
                        size="2x"
                        className="github-icon"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
