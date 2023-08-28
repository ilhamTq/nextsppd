"use client";

import React, { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const { toggle } = useContext(MenuContext);
  return (
    <div className="bg-white flex justify-between items-center px-4 h-20 min-w-0 mb-4 drop-shadow pl-8 w-auto">
      <div className="flex justify-start">
        <Image src="/images/lpse-node.png" height="35" width="40" alt="logo" />
        <span className="pt-1 pl-2 text-2xl">SPPD LPSE</span>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div onClick={toggle} className="lg:hidden">
          <FaBars className="cursor-pointer" />
        </div>
        <div className="pr-5">User</div>
      </div>
    </div>
  );
};

export default Header;
