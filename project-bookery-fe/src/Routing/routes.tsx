import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../Layout/AppLayout";
import UnderProgress from "./UnderProgress";
import BooksList from "../Pages/BooksList/BooksList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout Component={UnderProgress} />,
  },
  {
    path: "/overview",
    element: <AppLayout Component={UnderProgress} />,
  },
  {
    path: "/books-list",
    element: <AppLayout Component={BooksList} />,
  },
  {
    path: "/clubs",
    element: <AppLayout Component={UnderProgress} />,
  },
  {
    path: "/login",
    element: <AppLayout Component={UnderProgress} />,
  },
  {
    path: "/register",
    element: <AppLayout Component={UnderProgress} />,
  },
  {
    path: "/account",
    element: <AppLayout Component={UnderProgress} />,
  },

  {
    path: "/settings",
    element: <AppLayout Component={UnderProgress} />,
  },
  {
    path: "/users",
    element: <AppLayout Component={UnderProgress} />,
  },
]);

export default router;
