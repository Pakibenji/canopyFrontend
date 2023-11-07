import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  if (Object.keys(userInfo).length === 0) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
