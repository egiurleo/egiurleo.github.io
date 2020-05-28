import React from "react";

function Project({ project }) {
  return (
    <div className="project">
      <a href={project.link}>
        <img src={`/images/${project.image}`} alt={project.title} />
      </a>
      <div className="project-text-container">
        <a href={project.link}>
          <h3>{project.title}</h3>
        </a>
        <div className="description">{project.description}</div>
      </div>
    </div>
  );
}

export default Project;
