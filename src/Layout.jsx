import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

const Layout = () => {
  return (
    <div className="font-poppins">
      <div>
        <Navbar />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
