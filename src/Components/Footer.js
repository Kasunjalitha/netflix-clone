import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/kasun.jalitha.16/" target="_blank">
        <FontAwesomeIcon icon={faFacebook} className="social-media-icon" />
      </a>

      <a href="https://github.com/Kasunjalitha" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="social-media-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/kasun-jalitha-1836671a5/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} className="social-media-icon" />
      </a>
      <a href="#" target="_blank">
        <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
      </a>
    </div>
  );
}

export default Footer;
