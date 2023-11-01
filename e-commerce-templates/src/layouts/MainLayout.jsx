import { Outlet } from "react-router-dom";
import Header from "../components/Main/Header/Header";
import Footer from "../components/Main/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
