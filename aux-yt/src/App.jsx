import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contacts/Contact";
import ContactDetails from "./pages/Contacts/ContactDetails";
import User from "./pages/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/contact/details",
        element: <ContactDetails />,
    },
    {
        path: "/contact/:id",
        element: <User />,
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/about" element={<About />} />
        //         <Route path="/contact" element={<Contact />} />
        //         <Route path="/contact/details" element={<ContactDetails />} />
        //         <Route path="/contact/:id" element={<User />} />
        //     </Routes>
        // </BrowserRouter>
    );
};

export default App;
