import React from "react";
import Project from "./Project";
import Social from "../Social";
import data from "../data.json";
import "./styles.css";

function NewHome() {
  return (
    <div className="new-home">
      <div className="sidebar"></div>
      <div className="content">
        <div className="social-menu">
          <Social />
        </div>
        <h1 className="title">
          Emily Giurleo<span className="cursor">_</span>
        </h1>
        <div className="about">
          <p>
            I'm a software engineer who currently works on the{" "}
            <a
              href="https://github.com/mongodb/mongo-ruby-driver"
              target="_blank"
              rel="noopener noreferrer"
            >
              MongoDB Ruby Driver
            </a>
            . In my spare time, you can find me organizing, writing code with{" "}
            <a
              href="https://ragtag.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ragtag
            </a>
            , and hanging out with my pets.
          </p>
        </div>

        <h2>Projects & Talks</h2>
        <div className="projects">
          {data.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewHome;
