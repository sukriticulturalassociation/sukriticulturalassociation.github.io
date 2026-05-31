import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavbarV2 from "../components/navbar-v2/NavbarV2";
import "./MainLayout.css";

const MainLayout: React.FC = () => {
  return (
    <>
      <NavbarV2 />
      <div className="router-outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
