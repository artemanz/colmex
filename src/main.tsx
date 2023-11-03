import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/index.scss";
import "@fontsource/lato";
import "@fontsource-variable/lexend";

import { init as i18n } from "./lang/i18n";
import { BrowserRouter } from "react-router-dom";

i18n();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
