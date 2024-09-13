import { Routes, Route } from "react-router-dom-v5-compat";

import { Dashboard } from "../pages/Dashboard";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
           
        </Routes>
    );
}
