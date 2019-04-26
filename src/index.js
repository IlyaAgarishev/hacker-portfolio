import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { MyContext } from "./context";
import { simpleDragAndDrop } from "./utils";

ReactDOM.render(
  <MyContext.Provider value={simpleDragAndDrop}>
    <App />
  </MyContext.Provider>,
  document.getElementById("root")
);
