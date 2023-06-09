import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  let token = localStorage.getItem("access-token");
  if (token === "" || token === undefined) {
    return <Navigate to={"/auth"} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
