import React from "react";
import Dev from "./Dev";
import Email from "./Email";
import Github from "./Github";
import Twitter from "./Twitter";
import "./styles.css";

function Social({ size }) {
  return (
    <div className="social-container">
      <div className="social">
        <Email size={size} />
        <Github size={size} />
        <Twitter size={size} />
        <Dev />
      </div>
    </div>
  );
}

export default Social;
