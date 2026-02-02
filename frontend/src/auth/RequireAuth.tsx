import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import type { JSX } from "react";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/" />;

  return children;
}

export function RequireAdmin({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user?.is_admin) return <Navigate to="/app" />;

  return children;
}
