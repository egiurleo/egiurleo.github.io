import React from "react";
import Social from "../Social";
import data from "../data.json";
import "./styles.css";

function NewHome() {
  return (
    <div className="new-home">
      <div className="sidebar"></div>
      <div className="content">
        <h1 className="title">
          Emily Giurleo<span className="cursor">_</span>
        </h1>
        <div className="about">
          I'm a software engineer who currently works on the{" "}
          <a
            href="https://github.com/mongodb/mongo-ruby-driver"
            target="_blank"
            rel="noopener noreferrer"
          >
            MongoDB Ruby Driver
          </a>
          . In my spare time, you can find me organizing with{" "}
          <a
            href="https://persistbrooklyn.org"
            target="blank"
            rel="noopener noreferrer"
          >
            Persist Brooklyn
          </a>{" "}
          and hanging out with my pets.
        </div>
      </div>
    </div>
  );
}

export default NewHome;
