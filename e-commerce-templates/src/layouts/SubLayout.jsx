import { Outlet } from "react-router-dom";
import Header from "../components/Sub/Header/Header";
import Footer from "../components/Sub/Footer/Footer";

const SubLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SubLayout;
