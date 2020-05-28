import React from "react";
import Email from "./Email";
import Github from "./Github";
import Twitter from "./Twitter";
import "./styles.css";

function Social() {
  return (
    <div className="social">
      <Twitter />
      <Github />
      <Email />
    </div>
  );
}

export default Social;
