import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ContactDetails from "./Pages/ContactDetails";
import User from "./Pages/User";
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/contact/details" element={<ContactDetails />} />
//         <Route path="/contact/:id" element={<User />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// New Method

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
  return <RouterProvider router={router} />;
};

export default App;
