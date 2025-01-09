import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import LoginPage from "./Features/login/LoginPage";
import {
  loader as DashboardLoader,
} from "./Features/dashboard/DashboardLayout";
import ErrorPage from "./components/error-page";
import Movies from "./components/movies";
import { ThemeProvider } from "./Features/ThemeProvider/theme-provider.jsx";
import DashboardLayout from "./Features/dashboard/DashboardLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    errorElement: <ErrorPage />,
    element: <DashboardLayout />,
    loader: DashboardLoader,
    children: [
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "test",
        element: <h1>test</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
