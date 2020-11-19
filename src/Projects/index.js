import React from "react";
import Container from "../Container";
import Links from '../Links';
import data from "../data.json";
import "./styles.css";

function Projects() {
  return (
    <Container>
      <h2>Projects</h2>
      <div className="projects">
        {data.projects.map((project) => {
          return (
            <div className="project" key={project.title}>
              <img src={`/images/${project.image}`} alt={project.title} />
              <div className="project-text-container">
                  <h3>{project.title}</h3>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <Links links={project.links} />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Projects;
