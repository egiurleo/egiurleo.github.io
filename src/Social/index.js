import React from "react";
import Dev from "./Dev";
import Email from "./Email";
import Github from "./Github";
import Twitter from "./Twitter";
import "./styles.css";

function Social() {
  return (
    <div className="social">
      <Email />
      <Github />
      <Twitter />
      <Dev />
    </div>
  );
}

export default Social;
