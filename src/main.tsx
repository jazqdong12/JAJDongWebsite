import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./components/App.tsx";

function setVw() {
  let vw = document.documentElement.clientWidth / 100;
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

setVw();
window.addEventListener("resize", setVw);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
