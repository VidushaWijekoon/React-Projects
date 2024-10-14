import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

createRoot(document.getElementById("root")!).render(<App />);
