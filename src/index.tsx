import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Main from "./pages/Main";
import GlobalContextProvider from "./contexts/GlobalContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Main />
    </GlobalContextProvider>
  </React.StrictMode>
);
