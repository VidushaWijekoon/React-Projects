import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import ECommerce from "../pages/ECommerce/ECommerce";
import MobileAppDevelopment from "../pages/MobileAppDevelopment/MobileAppDevelopment";
import Pricing from "../pages/Pricing/Pricing";
import Services from "../pages/Services/Services";
import SoftwareDevelopment from "../pages/SoftwareDevelopment/SoftwareDevelopment";
import Team from "../pages/Team/Team";
import WebDevelopment from "../pages/WebDevelopment/WebDevelopment";
import About from "../pages/About/About";
import AIApplicationDevelopment from "../pages/AIApplicationDevelopment/AIApplicationDevelopment";
import NotFound from "../pages/NotFound/NotFound";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/ai-application-development",
        element: <AIApplicationDevelopment />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/e-commerce-development",
        element: <ECommerce />,
      },
      {
        path: "/mobile-app-development",
        element: <MobileAppDevelopment />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/software-development",
        element: <SoftwareDevelopment />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/web-development",
        element: <WebDevelopment />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
