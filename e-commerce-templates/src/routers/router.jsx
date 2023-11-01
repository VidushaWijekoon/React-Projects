import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainHomePage from "../pages/Main/Home/Home";
import SubLayout from "../layouts/SubLayout";
import SubHomePage from "../pages/Sub/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainHomePage />,
      },
    ],
  },
  {
    path: "/sub",
    element: <SubLayout />,
    children: [
      {
        index: true,
        element: <SubHomePage />,
      },
    ],
  },
]);

export default router;
