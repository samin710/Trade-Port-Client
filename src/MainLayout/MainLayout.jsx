import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-11/12 md:max-w-10/11 mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
