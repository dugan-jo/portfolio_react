import React from "react";
import "./about.css";
import AboutMeButtons from "./AboutMeButtons";

const About = () => {
  return (
    <section id="aboutMe" className="container">
      <h2>ABOUT ME</h2>
      <h5>
        Full-stack web developer leveraging an architecture and design
        background to build a more intuitive and user centric experience on the
        web. Recently earned a certificate in full stack development from the
        University of Denver (DU) Coding Boot Camp. I have developed new skills
        in JavaScript, CSS, JQuery, React.js, and responsive web design. I am
        known as an innovative problem solver passionate about developing apps,
        with a focus on mobile-first design and development.
      </h5>
      <AboutMeButtons />
      {/* <Link to={"/about"} /> */}
    </section>
  );
};

export default About;
