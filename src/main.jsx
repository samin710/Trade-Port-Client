import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Route.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./providers/AuthProvider.jsx";
import ThemeProvider from "./components/DarkModeContext/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {" "}
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right"></ToastContainer>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
