import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "../Components/DefaultLayout";
import Dashboard from "../Views/Dashboard";
import Surveys from "../Views/Surveys";
import SurveyView from "../Views/SurveyView";
import Login from "../Views/Login";
import Signup from "../Views/Signup";
import SurveyPublicView from "../Views/SurveyPublicView";
import GuestLayout from "../Components/GuestLayout";


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
                path: "/surveys",
                element: <Surveys />,
            },
            {
                path: "/surveys/create",
                element: <SurveyView />,
            },
            {
                path: "/surveys/:id",
                element: <SurveyView />,
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
    {
        path: "/survey/public/:slug",
        element: <SurveyPublicView />,
    },
]);

export default router;
