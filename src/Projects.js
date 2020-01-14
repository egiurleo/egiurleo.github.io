import React from 'react';
import data from './data';
import './App.css';

function Projects() {
  var renderProject = project => {
    return(
      <div className="project">
        <div className="project-title">
          <h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
            <span className="year">({project.year})</span>
          </h3>
        </div>
        <p className="description" dangerouslySetInnerHTML={{ __html: project.description}}></p>
      </div>
    )
  }

  return(
    <div className="projects">
      <h2>Projects</h2>

        {data.projects
          .map(project => (
            renderProject(project)
          )
        )}
    </div>
  );
}

export default Projects;
