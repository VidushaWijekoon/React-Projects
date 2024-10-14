import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routers/router";

createRoot(document.getElementById("vidusha-wijekoon-portfolio-2024")).render(
    <RouterProvider router={routers} />
);
