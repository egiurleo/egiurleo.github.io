import React from "react";
import Header from "../Header";
import "./styles.css";

function Container({ activePage, children }) {
  return (
    <div className="container">
      {/* <div className="sidebar"></div> */}
      <div className="content">
        <Header activePage={activePage} />
        <div className="children">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Container;
