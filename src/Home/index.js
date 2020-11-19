import React from "react";
import Container from "../Container";
import data from "../data.json";
import "./styles.css";

function Home() {
  return (
    <div className="new-home">
      <Container>
        <div className="about">
          <p>
            Hey, there! My name is Emily, and I use{" "}
            <a href="https://www.mypronouns.org/she-her">she/her pronouns</a>.
          </p>

          <p>
            I am currently a software engineer at{" "}
            <a href="https://numero.ai">Numero</a>, where I help build financial products
            for political campaigns. I have previously worked at{" "}
            <a href="https://mongodb.com">MongoDB</a> and{" "}
            <a href="https://codecademy.com">Codecademy</a>. Before that, I got a degree in Computer Science from <a href="https://mit.edu">MIT</a>.
          </p>

          <p>
            I'm super passionate about Ruby and civic engagement. In my spare time, you can find me
            reading fantasy novels, writing code with <a href="https://ragtag.org">Ragtag</a>, or 
            hanging out with my pets.
          </p>

          <p>
            Feel free to get in touch with me on{" "}
            <a href="https://twitter.com/EmilyGiurleo">Twitter</a>,{" "}
            <a href="https://linkedin.com/in/egiurleo">LinkedIn</a>, or{" "}
            <a href="https://github.com/egiurleo">GitHub</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Home;
