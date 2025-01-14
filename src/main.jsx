import * as React from "react";
import * as ReactDOM from "react-dom/client";
import axios from "axios";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/toaster";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import LoginPage from "./Features/login/LoginPage";
import ErrorPage from "./components/error-page";
import { ThemeProvider } from "./Features/ThemeProvider/theme-provider.jsx";
import DashboardLayout from "./Features/dashboard/DashboardLayout";
import Users from "./Users";
import TermsBlog from "./Features/TermsBlog/TermsBlog";
import PrivateChat from "./privatechat";

axios.defaults.withCredentials = true;

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
    children: [
      {
        path: "termsblog",
        element: <TermsBlog />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "chat",
        element: <PrivateChat />,
      },
      {
        path: "privatechat/:id",
        element: <PrivateChat />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </Provider>
);
