"use client";

import MainLayout from "@/components/MainLayout";
import { useSession } from "next-auth/react";
const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div>
      <MainLayout>
        <div className="bg-white rounded-lg w-85 mr-2 p-2 outline-purple-950 drop-shadow">
          <h3 className="text-3xl">Dashboard</h3>
          <div className="pl-1 py-2">
            <h5>Hi {session?.user?.name}</h5>
            <p>Welcome to SPPD LPSE</p>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Dashboard;
