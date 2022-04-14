import React from "react";
import "./about.css";
import AboutMeButtons from "./AboutMeButtons";
import SkillBar from "react-skillbars";

const About = () => {
  return (
    <>
      <section id="aboutMe" className="container">
        <h2>ABOUT ME</h2>
        <h5>
          Full-stack web developer leveraging an architecture and design
          background to build a more intuitive and user centric experience on
          the web. Recently earned a certificate in full stack development from
          the University of Denver (DU) Coding Boot Camp. I have developed new
          skills in JavaScript, CSS, JQuery, React.js, and responsive web
          design. I am known as an innovative problem solver passionate about
          developing apps, with a focus on mobile-first design and development.
        </h5>
      </section>
      <section className="educationContainer container">
        <h2>EDUCATION</h2>
        <h5>
          Full Stack Web Developer , University of Denver - Certificate
          <br />
          Jan 2022 — Apr 2022
          <br />
          <br />
          MArch, Architecture, Ecole Nationale d'Architecture Paris, France
          <br />
          Aug 2011 — May 2013
          <br />
          <br />
          BArch, Architecture, University of Houston Houston, Texas
          <br />
          Aug 2005 — May 2011
        </h5>
      </section>
      <section className="proficienciesContainer container">
        <h2>PROFICIENCIES</h2>

        <div className="skills-bar">
          <div className="skills html">HTML/CSS: 80%</div>
        </div>

        <div className="skills-bar">
          <div className="skills js">JavaScript: 60%</div>
        </div>

        <div className="skills-bar">
          <div className="skills handlebars">HandelBars: 65%</div>
        </div>

        <div className="skills-bar">
          <div className="skills mongodb">MongoDB: 55%</div>
        </div>

        <div className="skills-bar">
          <div className="skills react">React: 85%</div>
        </div>
      </section>
      <section>
        <AboutMeButtons />
      </section>
    </>
  );
};

export default About;
