import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Trainings";
import { Welcome } from "./components/Wecome";


ReactDOM.render(
  <React.StrictMode>
      <Welcome></Welcome>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
