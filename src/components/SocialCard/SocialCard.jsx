import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./SocialCard.css";

const SocialCard = () => {
  return (
    <div className="main-div">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div className="icons">
          <a href="mailto:rshivam973@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
          </a>
        </div>
        <div className="icons">
          <a href="https://www.instagram.com/shivamrajput3339" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
          </a>
        </div>
        <div className="icons">
          <a href="https://www.linkedin.com/in/shivamrajput3339" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
          </a>
        </div>
        <div className="icons">
          <a href="https://github.com/rshivam973" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
          </a>
        </div>
        <div
          style={{ backgroundColor: "white", width: "3px", height: "120px" }}
        />
      </div>
    </div>
  );
};

export default SocialCard;
