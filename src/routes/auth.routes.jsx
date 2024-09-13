import { Routes, Route } from "react-router-dom-v5-compat";

import { Register } from "../pages/Register";
import { Login } from "../pages/Login"

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />            
        </Routes>
    );
}

