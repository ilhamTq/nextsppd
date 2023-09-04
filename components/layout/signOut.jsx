"use client";
import { signOut } from "next-auth/react";

export default function LogOut() {
    return (
        <div>
            <div className="transition-all duration-100 flex justify-start items-center hover:bg-slate-50 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
                <div className=" flex justify-start items-center link " onClick={signOut}>
                <AiOutlineHome size={20} className="mr-2" />
                <p>Logout</p>
                </div>
            </div>
        </div>
    )
}