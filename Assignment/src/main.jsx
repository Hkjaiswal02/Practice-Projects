import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import store from "./redux/store"; // ✅ use imported store, no redeclaration
import "./index.css"; // add this near the top, after other imports

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
);
