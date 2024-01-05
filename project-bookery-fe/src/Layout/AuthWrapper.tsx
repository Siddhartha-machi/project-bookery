import { Box } from "@mui/material";

import { authWapperProps } from "../Types/layoutTypes";
import { useAppSelector } from "../Redux/hooks";
import AppLayout from "./AppLayout";
import { Navigate } from "react-router";

const PageNotFound = () => {
  return <Box>Oops! page not found</Box>;
};
const AuthWrapper = (props: authWapperProps) => {
  const { AdminView, Component } = props;
  const { role } = useAppSelector((store) => store.user);

  if (!role) {
    return <Navigate to={"/signin"} />;
  }
  if (AdminView) {
    if (role === "admin") {
      return <AppLayout Component={Component} />;
    } else {
      return <AppLayout Component={PageNotFound} />;
    }
  }
  return <AppLayout Component={Component} />;
};

export default AuthWrapper;
