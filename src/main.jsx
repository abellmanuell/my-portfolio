import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";

import MyBlog from "./pages/MyBlog";
import SoftwareDeveloper from "./pages/SoftwareDeveloper";
import FunnelBuilder from "./pages/FunnelBuilder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/software-developer",
    element: <SoftwareDeveloper />,
  },
  {
    path: "/funnel-builder",
    element: <FunnelBuilder />,
  },
  {
    path: "/blog",
    element: <MyBlog />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
