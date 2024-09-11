import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./src/layout/global.tsx";
import ROUTES from "./src/router/default.tsx";

const router = createBrowserRouter([
  { path: "/", element: <GlobalLayout />, children: ROUTES },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
