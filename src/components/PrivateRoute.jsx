import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSupabaseAuth } from "../supabase";

const PrivateRoute = () => {
  const { user, loading } = useSupabaseAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
