import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../Views/Dashboard";
import Survery from "../Views/Survery";
import Login from "../Views/Login";
import Signup from "../Views/Signup";
import GuestLayout from "../Components/GuestLayout";
import DefaultLayout from "../Components/DefaultLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/" />,
            },
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/survey",
                element: <Survery />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
]);

export default router;
