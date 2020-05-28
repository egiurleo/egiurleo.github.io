import React from "react";
import Social from "./Social";
import "./App.css";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="social-container">
          <Social />
        </div>

        <div className="text-container">
          <div className="title-container">
            <h1>Emily Giurleo</h1>
            <div className="subtitle">Rubyist • Organizer • Cat lady</div>
          </div>

          <div className="about">
            I am a software engineer who currently works on the{" "}
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
            and looking at cats on the internet.
          </div>
        </div>

        <div className="link-container">
          <a href="/projects" className="projects">
            Check out my projects &#8611;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
