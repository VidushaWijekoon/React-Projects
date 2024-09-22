import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Notfound from "../pages/Notfound/Notfound";
import Login from "../pages/Outerpages/Login/Login";
import Home from "../pages/Innerpages/Home/Home";
import Profile from "../pages/Innerpages/Profile/Profile";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
    {
        path: "*",
        element: <Notfound />,
    },
]);

export default routers;
