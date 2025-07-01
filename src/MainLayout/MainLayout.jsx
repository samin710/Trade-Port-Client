import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-11/12 md:max-w-10/11 mx-auto  sticky bg-base-100 backdrop-blur-3xl top-0 z-50 ">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen max-w-11/12 md:max-w-10/11 mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
