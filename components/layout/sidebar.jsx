"use client"
import { motion } from 'framer-motion';
import { MenuContext } from '@/context/MenuContext'
import React, { useContext } from "react";
import Link from "next/link";


import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { FaAngleUp } from "react-icons/fa";

const Sidebar = () => {
    const { open } = useContext(MenuContext);
  return (
    <div>
        <motion.aside className={`bg-white rounded-lg overflow-hidden transition-all duration-100 drop-shadow ${open ? "w-80 p-3 mr-5" : "w-0" } lg:w-80 lg:p-3 lg:mr-5`}>
          <ul>
            <li className="flex justify-start items-center hover:bg-slate-50 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome size={20} className="mr-2" />
              <Link href="/" className={"link"}>Dashboard</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <TbUsers size={20} className="mr-2" />
              <h3 href="/" className={"flex-1 link"}>
                Pegawai
              </h3>
              <FaAngleUp />
            </li>

            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineUser size={20} className="mr-2" />
              <Link href="/user" className={"link"}>User</Link>
            </li>
          </ul>
        </motion.aside>
    </div>
  )
}

export default Sidebar