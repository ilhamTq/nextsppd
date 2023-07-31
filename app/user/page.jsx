import React from "react";
import { PrismaClient } from "@prisma/client";
import AddUser from "./addUser";

const prisma = new PrismaClient();

const getUser = async () => {
  const res = await prisma.user.findMany({
    select: {
      nama: true,
      email: true,
      telp: true,
      username: true,
    },
  });
  return res;
};

const User = async () => {
  const users = await getUser();

  return (
    <div className="bg-white rounded-lg mr-2 p-2 outline-purple-950 drop-shadow min-h-screen">
      <h3 className="text-3xl">User</h3>
      <div className="mb-2 ">
        <AddUser />
      </div>
      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                No
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Nama
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Email
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Telp
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Username
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user, index) => (
              <tr key={user.id} className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{index + 1}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.nama}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.email}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.telp}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.username}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
