import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Cards from "./Cards";
import Graphs from "./Charts";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex  bg-[#3284ee] h-screen w-full overflow-hidden font-arone">
        <Sidebar></Sidebar>
        <div className="flex-1 overflow-auto px-10 bg-gray-100 my-2  rounded-md">
          {/* <Topbar></Topbar>
          <Cards></Cards>
          <Graphs></Graphs> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
