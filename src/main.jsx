import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
// Supports weights 100-900
// import "@fontsource-variable/roboto";
import "@fontsource/poppins";

import MyBlog from "./pages/MyBlog";
import SoftwareDeveloper from "./pages/SoftwareDeveloper";
import FunnelBuilder from "./pages/FunnelBuilder";
import BuildingARobustSystemTakesTime from "./pages/blogs/BuildingARobustSystemTakesTime";
import HowIGotAFrontendDeveloperJobInTwoWeeks from "./pages/blogs/HowIGotAFrontendDeveloperJobInTwoWeeks";
import RebuildingPaauMarketApp from "./pages/blogs/RebuildingPaauMarketApp";
import DartJourney from "./pages/blogs/DartJourney";

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
  {
    path: "/blog/building-a-robust-system-takes-time",
    element: <BuildingARobustSystemTakesTime />,
  },
  {
    path: "/blog/how-i-got-a-frontend-developer-job-in-two-weeks",
    element: <HowIGotAFrontendDeveloperJobInTwoWeeks />,
  },
  {
    path: "/blog/rebuilding-paau-market-app",
    element: <RebuildingPaauMarketApp />,
  },
  {
    path: "/blog/dart-journey",
    element: <DartJourney />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
