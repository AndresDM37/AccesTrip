import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { DestinationProvider } from "./context/DestinationContext";

createRoot(document.getElementById("root")).render(
  <DestinationProvider>
    <App />
  </DestinationProvider>
);
