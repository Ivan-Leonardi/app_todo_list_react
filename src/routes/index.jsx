import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { Dashboard } from "./dashboard.routes";

export function Routes() {
    return  (
        <BrowserRouter>
        <AuthRoutes />
        <Dashboard />
        </BrowserRouter>
    )
}