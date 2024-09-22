import Header from "../templates/Innerpage/Header/Header";
import Sidebar from "../templates/Innerpage/Sidebar/Sidebar";
import Footer from "../templates/Innerpage/Footer/Footer";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main">
                <Header />
                <main className="content">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default DashboardLayout;
