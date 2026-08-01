import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="content">
            <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
