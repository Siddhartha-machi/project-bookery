import React from "react";

import { Box } from "@mui/material";
import { createBrowserRouter } from "react-router-dom";

import UnderProgress from "./UnderProgress";
import BooksList from "../Pages/BooksList/BooksList";
import { UsersList } from "../Pages/Users/UsersList";
import AuthWrapper from "../Layout/AuthWrapper";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AppLayout from "../Layout/AppLayout";
import PageNotFound from "../Layout/PageNotFound";
import UserAccount from "../Pages/Accounts/UserAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapper Component={AppLayout} />,
    errorElement: <Box>Something went wrong, please contact dev team</Box>,
    children: [
      {
        path: "/",
        element: <AuthWrapper Component={UnderProgress} />,
      },
      {
        path: "/overview",
        element: <AuthWrapper Component={UnderProgress} />,
      },
      {
        path: "/archive",
        element: <AuthWrapper Component={BooksList} />,
      },
      {
        path: "/clubs",
        element: <AuthWrapper Component={UnderProgress} />,
      },
      {
        path: "/account",
        element: <AuthWrapper Component={UserAccount} />,
      },

      {
        path: "/settings",
        element: <AuthWrapper Component={UnderProgress} />,
      },
      {
        path: "/users",
        element: <AuthWrapper Component={UsersList} adminView />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

export default router;
