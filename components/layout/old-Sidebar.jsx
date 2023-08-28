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
        <motion.aside className={`bg-white rounded-lg overflow-hidden transition-all duration-100 drop-shadow ${open ? "w-72 p-3 mr-5" : "w-0" } lg:w-72 lg:p-3 lg:mr-5`}>
          <ul>
            <li className="flex justify-start items-center hover:bg-slate-50 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
              <Link href="/" className={" flex justify-start items-center link "}>
              <AiOutlineHome size={20} className="mr-2" />
                Dashboard
              </Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
              <h3 href="/" className={"flex-1 flex justify-start items-center link "}>
              <TbUsers size={20} className="mr-2" />
                Pegawai
              </h3>
              <FaAngleUp />
            </li>

            <li className="hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
              
              <Link href="/user" className={" flex justify-start items-center link "}>
              <AiOutlineUser size={20} className="mr-2" />
              User</Link>
            </li>
          </ul>
        </motion.aside>
    </div>
  )
}

export default Sidebar