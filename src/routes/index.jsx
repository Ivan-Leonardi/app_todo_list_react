import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard"
import { Register } from "../pages/Register";
import { PrivateRoute } from "./private.routes";
import { Login } from "../pages/Login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
