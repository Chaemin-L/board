import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.tsx";
import "./global.css";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
