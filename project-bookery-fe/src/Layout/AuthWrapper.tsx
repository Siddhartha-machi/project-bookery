import React from "react";

import { Navigate } from "react-router";

import { authWapperProps } from "../Types/layoutTypes";
import { useAppSelector } from "../Redux/hooks";
import PageNotFound from "./PageNotFound";
import { ROLES } from "../Global/Constants";

const AuthWrapper = (props: authWapperProps) => {
  const { adminView, Component } = props;
  const { role } = useAppSelector((store) => store.user.currentUser);

  if (!role) {
    return <Navigate to={"/signin"} />;
  }
  if (adminView) {
    if (role === ROLES.admin) {
      return <Component />;
    } else {
      return <PageNotFound />;
    }
  }
  return <Component />;
};

export default AuthWrapper;
