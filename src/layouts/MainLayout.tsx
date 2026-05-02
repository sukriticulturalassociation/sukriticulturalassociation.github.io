import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar-top/Navbar";
import Footer from "../components/footer/Footer";
import "./MainLayout.css";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="router-outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
