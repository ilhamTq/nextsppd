"use client";
import { motion } from "framer-motion";
import { MenuContext } from "@/context/MenuContext";
import React, { useContext, useState } from "react";
import Link from "next/link";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { FaAngleUp } from "react-icons/fa";

export default function SideBarItem() {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "sidebar-item open" : "sidebar-item"}>
      <div
        className="flex justify-start items-center hover:bg-slate-50 hover:text-blue-800 rounded-xl p-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 href="/" className={"flex-1 flex justify-start items-center link "}>
          <AiOutlineHome size={20} className="mr-2" />
          Hallo Kak
        </h3>
        <FaAngleUp />
      </div>
      <div className="pt-0 sidebar-content">Hello</div>
    </div>
  );
}
