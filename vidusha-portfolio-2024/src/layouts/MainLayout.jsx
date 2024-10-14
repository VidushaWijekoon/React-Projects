import { Outlet } from "react-router-dom";
import Header from "../templates/header/Header";
import Footer from "../templates/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
