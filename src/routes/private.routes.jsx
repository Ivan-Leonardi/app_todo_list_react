import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div>Carregando...</div>
    )
  }

  return user ? children : <Navigate to="/"/>;
}
