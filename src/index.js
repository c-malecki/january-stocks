import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import { App } from "./containers/containers_index";
import { BrowserRouter } from "react-router-dom";
import { StockContextProvider } from "./context/provider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StockContextProvider>
        <App />
      </StockContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
