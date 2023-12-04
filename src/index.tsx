import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Main from "./pages/Main";
import GlobalContextProvider from "./contexts/GlobalContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Main />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
