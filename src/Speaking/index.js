import React from "react";
import Container from "../Container";
import Links from "../Links";
import data from "../data.json";
import "./styles.css";

function Speaking() {
  return (
    <Container>
      <h2>Speaking</h2>
      <div className="speaking">
        {data.speaking.map((talk) => (
          <div className="talk" key={talk.title}>
            <img src={`/images/${talk.image}`} alt={talk.title} />
            <div className="talk-container">
              <h3>{talk.title}</h3>
              <p>{talk.description}</p>
              <Links links={talk.links} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Speaking;
