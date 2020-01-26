import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function contact(params) {
  return (
    <span>
      <br />
      Feel free to reach me at:
      <br />
      <br />
      <FontAwesomeIcon icon={faFacebookSquare} /> - <a href="https://www.facebook.com/yakovmeister">yakovmeister</a><br />
      <FontAwesomeIcon icon={faLinkedin} /> - <a href="https://www.linkedin.com/in/yakovmeister/">yakovmeister</a><br />
      <FontAwesomeIcon icon={faGithub} /> - <a href="https://github.com/yakovmeister">yakovmeister</a><br />
      <FontAwesomeIcon icon={faEnvelope} /> - <a href="mailto:so@tfwno.gf">so@tfwno.gf</a><br />
    </span>
  );
}

export const aliases = ["contact"];
