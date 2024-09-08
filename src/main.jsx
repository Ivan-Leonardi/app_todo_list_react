import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./hooks/auth";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { AppRoutes } from "./routes/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </ThemeProvider>
  </StrictMode>
);
