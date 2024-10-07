import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./hooks/auth";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { PrivateRoute } from "./routes/private-route";
import { Toaster } from "sonner"

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
    },
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AuthContextProvider>
                <RouterProvider router={router} />
            </AuthContextProvider>
        </ThemeProvider>
        <Toaster richColors/>
    </StrictMode>
);
