import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import NewHome from "./NewHome";
import Projects from "./Projects";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router base="/">
   <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
      <Route exact path="/" component={NewHome} />
      <Route path="/projects" component={Projects} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
