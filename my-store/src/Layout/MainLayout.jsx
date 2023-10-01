import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
