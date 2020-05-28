import React from "react";
import Social from "../Social";
import Project from './Project';
import data from "../data.json";
import "./styles.css";

function Projects() {
  return (
    <div className="projects-component">
      <div className="header">
        <Social />
      </div>

      <div className='content-container'>
        <h1>Projects and Talks</h1>

        <div className="projects-container">
          {
            data.map(project => 
              <Project project={project} key={project.title}/>
            )
          }
        </div>
      </div>

      <div className="footer"><a href="/">&#8610; home</a></div>
    </div>
  );
}

export default Projects;
