import { Outlet } from "react-router-dom";
import Footer from "../templates/Outerpage/Footer/Footer";

const GuestLayout = () => {
    return (
        <section>
            <Outlet />
            <Footer />
        </section>
    );
};

export default GuestLayout;
