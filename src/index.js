import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import Home from "./Home";
import Projects from "./Projects";
import Speaking from "./Speaking";
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Route exact path={`/`} component={Home} />
    <Route exact path={`/projects`} component={Projects} />
    <Route exact path={`/speaking`} component={Speaking} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
