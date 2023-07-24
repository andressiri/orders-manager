import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { OrdersContextProvider } from "./contexts";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import App from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <OrdersContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </OrdersContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
