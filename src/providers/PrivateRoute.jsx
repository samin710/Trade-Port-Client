import React, { use } from "react";
import { Navigate, useLocation } from "react-router";

import { AuthContext } from "./AuthContext";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/signIn"}></Navigate>;
  }
};

export default PrivateRoute;
