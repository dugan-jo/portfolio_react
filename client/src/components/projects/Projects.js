import React from "react";
import "./projects.css";
import { BsGithub } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import ProjectsData from "./ProjectsData";

function Projects() {
  return (
    <section id="projects">
      <h2>RECENT WORK</h2>
      <h5>description of the projects or something!</h5>

      <div className="container projectsContainer">
        {ProjectsData.map(
          ({ id, image, title, description, github, website, programs }) => {
            return (
              <div className="card" key={id}>
                <h3>{title}</h3>
                <div className="image">
                  <img src={image} alt="Project one image"></img>
                </div>
                <h5>{description}</h5>
                <div className="portfolioLinks">
                  <a href={github} target="_blank" rel="noreferrer">
                    <BsGithub />
                  </a>
                  <a href={website} target="_blank" rel="noreferrer">
                    <RiComputerLine />
                  </a>
                </div>
                <div>
                  <ul>
                    <li>{programs}</li>
                  </ul>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Projects;
