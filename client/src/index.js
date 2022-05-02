import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/App.css";
import App from "./Trainings";
import { Welcome } from "./components/Wecome";


ReactDOM.render(
  <React.StrictMode>
      <Welcome></Welcome>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
