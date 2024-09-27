import React from "react";
import Header from "../pages/components/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;
