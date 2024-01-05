import { createBrowserRouter } from "react-router-dom";

import UnderProgress from "./UnderProgress";
import BooksList from "../Pages/BooksList/BooksList";
import { UsersList } from "../Pages/Users/UsersList";
import AuthWrapper from "../Layout/AuthWrapper";

import Login from "../Pages/Auth/Login";
import { Box } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapper Component={UnderProgress} />,
  },
  {
    path: "overview",
    element: <AuthWrapper Component={UnderProgress} />,
  },
  {
    path: "books-list",
    element: <AuthWrapper Component={BooksList} />,
  },
  {
    path: "clubs",
    element: <AuthWrapper Component={UnderProgress} />,
  },

  {
    path: "register",
    element: <AuthWrapper Component={UnderProgress} />,
  },
  {
    path: "account",
    element: <AuthWrapper Component={UnderProgress} />,
  },

  {
    path: "settings",
    element: <AuthWrapper Component={UnderProgress} />,
  },
  {
    path: "users",
    element: <AuthWrapper Component={UsersList} AdminView />,
  },
  {
    path: "/gateway",
    element: <Box />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
]);

export default router;
