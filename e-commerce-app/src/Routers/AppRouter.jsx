import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import UserProtected from "./UserProtected";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <UserProtected />,
        children: [
          {
            path: "user",
            element: <User />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
