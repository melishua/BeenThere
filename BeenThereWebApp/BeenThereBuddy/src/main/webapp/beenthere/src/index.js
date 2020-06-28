import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ScrollContext } from "react-router-scroll-4";
import { BrowserRouter } from "react-router-dom";
import Mentor from "./pages/Mentor/index";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollContext>
        <App />
      </ScrollContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();