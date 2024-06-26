import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
