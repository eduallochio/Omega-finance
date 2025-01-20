import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CarteiraProvider } from "./context/CarteiraContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarteiraProvider>
      <App />
    </CarteiraProvider>
  </React.StrictMode>
);
