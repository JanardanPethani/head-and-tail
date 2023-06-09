import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  let token = localStorage.getItem("access-token");
  console.log(token);
  if (token === "" || token === null) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
