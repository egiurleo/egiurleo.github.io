import React from "react";
import Social from "../Social";
import Project from "./Project";
import data from "../data.json";
import "./styles.css";

function Projects() {
  return (
    <div className="projects-component">
      <div className="header">
        <a href="/">&#8610; home</a>
        <Social />
      </div>

      <div className="content-container">
        <h1>Projects and Talks</h1>

        {[2020, 2019, 2018, 2017].map((year) => {
          return (
            <div className="year-container" key={year}>
              <h2>{year}</h2>
              <div className="projects-container">
                {data
                  .filter((project) => project.year === year)
                  .map((project) => (
                    <Project project={project} key={project.title} />
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
