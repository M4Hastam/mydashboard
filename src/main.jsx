import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import LoginPage from "./Features/login/LoginPage";
import {
  loader as DashboardLoader,
} from "./Features/dashboard/DashboardLayout";
import ErrorPage from "./components/error-page";
import { ThemeProvider } from "./Features/ThemeProvider/theme-provider.jsx";
import DashboardLayout from "./Features/dashboard/DashboardLayout";
import Users from "./Users";
import TermsBlog from "./Features/TermsBlog/TermsBlog";
import PrivateChat from "./privatechat";


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
        path: "termsblog",
        element: <TermsBlog/>,
      },
      {
        path: "Users",
        element: <Users/>,
      },
      {
        path: "chat",
        element: <PrivateChat/>,
      },
      {
        path: "privatechat/:id",
        element: <PrivateChat/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
