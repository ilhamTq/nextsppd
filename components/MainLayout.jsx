"use client";
import React, { useContext } from "react";
import Header from "./Header";

import { MenuContext } from "@/context/MenuContext";
import Sidebar from "./layout/Sidebar";

const MainLayout = ({ children }) => {
  const { opens } = useContext(MenuContext);
  return (
    <div className="bg-slate-100 w-full min-h-screen">
      <div className="fixed w-full z-50">
      <Header />
      </div>
      <div className="flex justify-start items-start p-3 pt-24 pl-6">
        <Sidebar />
        <main className={`${!opens ? "flex-1 w-full" : "p-0 w-full"} lg:pl-[19rem] lg:w-full `}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
