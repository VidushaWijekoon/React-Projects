import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routers/routers";

createRoot(document.getElementById("admin-dashboard")!).render(
    <StrictMode>
        <RouterProvider router={routers} />
    </StrictMode>
);
