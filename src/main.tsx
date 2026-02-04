import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// DONT MOVE
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Importing CSS files
import "./styles/index.css";
import "./styles/navbar.css";
import "./styles/main-section.css";
import "./styles/footer.css";
import "./styles/projects.css";

//
import App from "./App.js";

//
//
// MIGHT BE PROBLEMATIC

let theme = localStorage.getItem("data-theme");
document.documentElement.setAttribute("data-theme", theme || "dark");
//
//
//

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
