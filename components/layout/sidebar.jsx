import React from "react";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

//React Icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { LuLayoutDashboard, LuFileSpreadsheet } from "react-icons/lu";
import { LiaIdCard, LiaMoneyCheckSolid } from "react-icons/lia";
import { BiSpreadsheet } from "react-icons/bi";
import { MdOutlineVerified } from "react-icons/md";
import { GoSignOut } from "react-icons/go";

const Sidebar = () => {
  const { opens } = useContext(MenuContext);
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const Menus = [
    {
      id: 1,
      title: "Home",
      icon: <AiOutlineHome size={18} className="mr-2" />,
      path: "/",
    },

    //Sub menu Pegawai
    {
      id: 2,
      title: "Pegawai",
      submenu: true,
      icon: <TbUsers size={18} className="mr-2" />,
      submenuItems: [
        {
          id: 3,
          title: "Data Pegawai",
          icon: <LiaIdCard size={18} className="mr-2" />,
          path: "/pegawai",
        },
        {
          id: 4,
          title: "Data Jabatan",
          icon: <LiaIdCard size={18} className="mr-2" />,
          path: "/jabatan",
        },
        {
          id: 5,
          title: "Data Golongan",
          path: "/golongan",
          icon: <LiaIdCard size={18} className="mr-2" />,
        },
      ],
    },

    {
      id: 6,
      title: "Pejabat Penanda Tangan SPT",
      icon: <MdOutlineVerified size={18} className="mr-2" />,
      path: "/pjspt",
    },
    {
      id: 7,
      title: "Pejabat Penanda Tangan SPPD",
      icon: <MdOutlineVerified size={18} className="mr-2" />,
      path: "/pjsppd",
    },
    {
      id: 8,
      title: "SPT",
      icon: <LuFileSpreadsheet size={18} className="mr-2" />,
      path: "/spt",
    },
    {
      id: 9,
      title: "SPPD",
      icon: <BiSpreadsheet size={18} className="mr-2" />,
      path: "/sppd",
    },
    {
      id: 10,
      title: "Kwitansi",
      icon: <LiaMoneyCheckSolid size={18} className="mr-2" />,
      path: "#",
    },
    {
      id: 11,
      title: "User",
      icon: <AiOutlineUser size={18} className="mr-2" />,
      path: "/user",
    },
    {
      id: 12,
      title: "Logout",
      icon: <GoSignOut size={18} className="mr-2" />,
      path: "#",
    },
  ];

  return (
    <div>
      <motion.aside
        className={`bg-white fixed rounded-lg overflow-auto transition-all duration-300 drop-shadow ${
          opens ? "w-72 p-3 z-50 mr-5 bg-white" : "w-0 p-0 m-0"
        } lg:w-72 lg:p-3 lg:mr-5`}
      >
        <ul>
          {Menus.map((menu) => (
            <>
              <li
                key={menu.id}
                className="transition-all duration-100 flex justify-start items-center hover:bg-slate-50 hover:text-blue-800 rounded-xl p-2 cursor-pointer"
              >
                <a
                  href={menu.path}
                  className={" flex justify-start items-center link "}
                >
                  {menu.icon ? (
                    menu.icon
                  ) : (
                    <AiOutlineHome size={20} className="mr-2" />
                  )}
                  {menu.title}
                </a>
                {menu.submenu && open && (
                  <FaAngleDown
                    className={`${submenuOpen && "rotate-180"}`}
                    onClick={() => setsubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={menu.id}
                      className="flex px-5 justify-start items-center hover:bg-slate-50 hover:text-blue-800 rounded-xl p-2 cursor-pointer"
                    >
                      <a
                        href={submenuItem.path}
                        className={" flex justify-start items-center link "}
                      >
                        {submenuItem.icon ? (
                          submenuItem.icon
                        ) : (
                          <LuLayoutDashboard size={20} className="mr-2" />
                        )}
                        {submenuItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </motion.aside>
    </div>
  );
};

export default Sidebar;
