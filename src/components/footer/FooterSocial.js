import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const FooterSocial = () => {
  return (
    <div className="container footerSocial">
      <a
        href="https://www.linkedin.com/in/dugan-jo/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/dugan-jo/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="mailto:joseph.michael.dugan@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default FooterSocial;
