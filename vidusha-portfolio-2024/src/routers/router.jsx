import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/not-found/NotFound";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Resume from "../pages/resume/Resume";
import Projects from "../pages/projects/Projects";
import ContactUs from "../pages/contact-us/ContactUs";
import Services from "../pages/services/Services";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "resume",
                element: <Resume />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "contact-us",
                element: <ContactUs />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default routers;
