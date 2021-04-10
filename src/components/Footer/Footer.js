import React from "react";
import "../../styles/Footer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faMedium,
  faImdb
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icon-list">
        <a href="https://www.linkedin.com/in/foreman-alexander/" >
          {" "}
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
        </a>
        <a href="https://github.com/arf2k" >
          {" "}
          <FontAwesomeIcon
            icon={faGithubSquare}
            size="2x"
            className="icon"
          />{" "}
        </a>
        <a href="https://foreman-alexander.medium.com/" >
          {" "}
          <FontAwesomeIcon icon={faMedium} size="2x" className="icon" />{" "}
        </a>
        <a href="https://www.imdb.com/name/nm4876010/?ref_=nv_sr_srsg_0">
             <FontAwesomeIcon icon={faImdb} size="2x" className="icon"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
