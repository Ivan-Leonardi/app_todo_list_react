import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./hooks/auth";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { AuthRoutes } from "./routes/auth.routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthContextProvider>
        <AuthRoutes/>
      </AuthContextProvider>
    </ThemeProvider>
  </StrictMode>
);
